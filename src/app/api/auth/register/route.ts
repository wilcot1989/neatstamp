import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { hashPassword } from "@/lib/password";
import { logAudit } from "@/lib/audit";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const body = await request.json() as { email?: string; password?: string; name?: string };
  const ip = request.headers.get("cf-connecting-ip") || "unknown";

  const email = body.email?.toLowerCase().trim();
  const password = body.password;
  const name = body.name?.trim();

  // Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Valid email address required" }, { status: 400 });
  }

  if (!password || password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
  }

  if (password.length > 128) {
    return NextResponse.json({ error: "Password too long" }, { status: 400 });
  }

  if (name && name.length > 100) {
    return NextResponse.json({ error: "Name too long" }, { status: 400 });
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    // Check if email already exists
    const existing = await db.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
    if (existing) {
      return NextResponse.json({ error: "An account with this email already exists. Try signing in instead." }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const userId = crypto.randomUUID();
    await db.prepare(
      "INSERT INTO users (id, email, name, password_hash) VALUES (?, ?, ?, ?)"
    ).bind(userId, email, name || null, hashedPassword).run();

    await logAudit(db, "login_magic_link", { userId, email, ip, detail: "registered via email+password" });

    return NextResponse.json({ success: true, userId });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Registration failed. Please try again." }, { status: 500 });
  }
}
