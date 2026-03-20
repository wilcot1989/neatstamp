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

    // Try to fetch plan + expires_at + subscription ID
    // Falls back gracefully if columns don't exist yet
    let plan = "free";
    let expiresAt: string | null = null;
    let hasSubscription = false;

    try {
      const user = await db
        .prepare("SELECT plan, plan_expires_at, lemon_subscription_id FROM users WHERE email = ?")
        .bind(session.user.email)
        .first<{ plan: string; plan_expires_at: string | null; lemon_subscription_id: string | null }>();

      if (user) {
        plan = user.plan || "free";
        expiresAt = user.plan_expires_at || null;
        hasSubscription = !!user.lemon_subscription_id;

        // If plan_expires_at is in the past, downgrade to free
        if (plan === "pro" && expiresAt && new Date(expiresAt) < new Date()) {
          plan = "free";
          expiresAt = null;
          // Update DB
          await db.prepare(
            "UPDATE users SET plan = 'free', plan_expires_at = NULL, lemon_subscription_id = NULL WHERE email = ?"
          ).bind(session.user.email).run();
        }
      }
    } catch {
      // Columns may not exist yet — try simpler query
      const user = await db
        .prepare("SELECT plan FROM users WHERE email = ?")
        .bind(session.user.email)
        .first<{ plan: string }>();
      if (user) plan = user.plan || "free";
    }

    return NextResponse.json({
      plan,
      expires_at: expiresAt,
      has_subscription: hasSubscription,
    });
  } catch (err) {
    console.error("DB error fetching plan:", err);
    return NextResponse.json({ plan: "free" });
  }
}
