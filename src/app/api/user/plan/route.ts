import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const user = await db
      .prepare("SELECT plan, plan_expires_at FROM users WHERE email = ?")
      .bind(session.user.email)
      .first<{ plan: string; plan_expires_at: string | null }>();

    if (!user) {
      return NextResponse.json({ plan: "free" });
    }

    return NextResponse.json({
      plan: user.plan || "free",
      expires_at: user.plan_expires_at ?? undefined,
    });
  } catch (err) {
    console.error("DB error fetching plan:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
