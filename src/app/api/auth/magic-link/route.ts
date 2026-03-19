import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { logAudit } from "@/lib/audit";

export const runtime = "edge";

// POST = send magic link email
export async function POST(request: NextRequest) {
  const body = await request.json() as { email?: string };
  const email = body.email;
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase().trim();

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  let token: string;
  let db: D1Database;
  try {
    const { env } = getRequestContext();
    db = env.DB as D1Database;

    // Rate limit: max 5 per email per hour
    const recentTokens = await db.prepare(
      "SELECT COUNT(*) as cnt FROM magic_tokens WHERE email = ? AND created_at > datetime('now', '-1 hour')"
    ).bind(normalizedEmail).first<{ cnt: number }>();

    if (recentTokens && recentTokens.cnt >= 5) {
      await logAudit(db, "magic_link_rate_limited", { email: normalizedEmail, ip });
      return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
    }

    const id = crypto.randomUUID();
    token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();

    await db.prepare(
      "INSERT INTO magic_tokens (id, email, token, expires_at) VALUES (?, ?, ?, ?)"
    ).bind(id, normalizedEmail, token, expiresAt).run();
  } catch (err) {
    console.error("D1 error:", err);
    return NextResponse.json({ error: "Service temporarily unavailable" }, { status: 503 });
  }

  // Build the verify URL — always point to the app domain for auth
  const baseUrl = "https://neatstamp.com";
  const verifyUrl = `${baseUrl}/api/auth/magic-link?token=${token}&email=${encodeURIComponent(normalizedEmail)}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "NeatStamp <noreply@neatstamp.com>",
        to: normalizedEmail,
        subject: "Sign in to NeatStamp",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 32px;">
              <h1 style="font-size: 24px; color: #0f172a; margin: 0;">NeatStamp</h1>
              <p style="color: #64748b; font-size: 14px; margin-top: 8px;">Sign in to your account</p>
            </div>
            <p style="color: #334155; font-size: 16px; line-height: 1.6;">
              Click the button below to sign in. This link expires in 15 minutes.
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="${verifyUrl}" style="display: inline-block; background: #2563eb; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">
                Sign in to NeatStamp
              </a>
            </div>
            <p style="color: #94a3b8; font-size: 12px; line-height: 1.5;">
              If you didn't request this email, you can safely ignore it.
            </p>
          </div>
        `,
      }),
    });

    const resBody = await res.json() as Record<string, unknown>;

    if (!res.ok) {
      console.error("Resend error:", JSON.stringify(resBody));
      await logAudit(db, "magic_link_failed", { email: normalizedEmail, ip, detail: "Resend API error" });
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    await logAudit(db, "magic_link_sent", { email: normalizedEmail, ip });
    return NextResponse.json({ sent: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

// GET = redirect to verify page which triggers client-side signIn
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const email = url.searchParams.get("email");

  if (!token || !email) {
    return NextResponse.redirect(new URL("/login?error=InvalidToken", request.url));
  }

  // Redirect to the app subdomain verify page
  const verifyUrl = new URL("https://app.neatstamp.com/auth/verify");
  verifyUrl.searchParams.set("token", token);
  verifyUrl.searchParams.set("email", email);
  return NextResponse.redirect(verifyUrl.toString());
}
