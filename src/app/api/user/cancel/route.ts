import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { cancelUserSubscription } from "@/lib/lemonsqueezy";

export const runtime = "edge";

export async function POST() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const user = await db
      .prepare("SELECT id, plan, lemon_subscription_id FROM users WHERE email = ?")
      .bind(session.user.email)
      .first<{ id: string; plan: string; lemon_subscription_id: string | null }>();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (user.plan === "free") {
      return NextResponse.json({ error: "No active subscription" }, { status: 400 });
    }

    if (!user.lemon_subscription_id) {
      return NextResponse.json({ error: "No subscription ID found" }, { status: 400 });
    }

    // Cancel via LemonSqueezy API — this cancels at end of billing period
    await cancelUserSubscription(user.lemon_subscription_id);

    return NextResponse.json({ success: true, message: "Subscription cancelled. Pro features remain active until end of billing period." });
  } catch (err) {
    console.error("Cancel subscription error:", err);
    return NextResponse.json({ error: "Failed to cancel subscription" }, { status: 500 });
  }
}
