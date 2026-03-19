import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // Generate a simple token (in production, store in D1 with expiry)
  const token = crypto.randomUUID();

  // Store token temporarily (TODO: use D1 database)
  // For now, we'll use a simple approach — the token IS the verification

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://neatstamp.pages.dev";
  const verifyUrl = `${appUrl}/api/auth/magic-link?token=${token}&email=${encodeURIComponent(email)}`;

  // Send email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "NeatStamp <onboarding@resend.dev>",
        to: email,
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
              If you didn't request this email, you can safely ignore it.<br/>
              This link will expire in 15 minutes.
            </p>
          </div>
        `,
      }),
    });

    const resBody = await res.json();

    if (!res.ok) {
      console.error("Resend error:", JSON.stringify(resBody));
      return NextResponse.json({
        error: "Failed to send email",
        detail: resBody?.message || resBody?.name || "Unknown error"
      }, { status: 500 });
    }

    return NextResponse.json({ sent: true, id: resBody.id });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({
      error: "Failed to send email",
      detail: String(err)
    }, { status: 500 });
  }
}

// GET = verify magic link token
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const email = url.searchParams.get("email");

  if (!token || !email) {
    return NextResponse.redirect(new URL("/login?error=InvalidToken", request.url));
  }

  // TODO: Validate token against D1 database
  // For now, redirect to login with a success message
  // In production: verify token, create session, redirect to dashboard

  return NextResponse.redirect(new URL("/login?verified=true", request.url));
}
