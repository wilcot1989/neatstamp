import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// LemonSqueezy webhook handler
// Processes subscription events: created, updated, cancelled, payment_failed
export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET!;

  // Verify webhook signature
  const signature = request.headers.get("x-signature");
  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 401 });
  }

  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(rawBody).digest("hex");

  if (digest !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  const eventName = payload.meta.event_name;
  const customData = payload.meta.custom_data;
  const userId = customData?.user_id;

  if (!userId) {
    return NextResponse.json({ error: "No user_id in custom data" }, { status: 400 });
  }

  const subscriptionData = payload.data.attributes;

  switch (eventName) {
    case "subscription_created":
      // User subscribed to Pro
      // TODO: Update user plan in D1 database
      console.log(`[Webhook] Subscription created for user ${userId}`, {
        subscriptionId: payload.data.id,
        status: subscriptionData.status,
        variantId: subscriptionData.variant_id,
        currentPeriodEnd: subscriptionData.renews_at,
      });
      break;

    case "subscription_updated":
      // Plan changed or renewed
      console.log(`[Webhook] Subscription updated for user ${userId}`, {
        subscriptionId: payload.data.id,
        status: subscriptionData.status,
      });
      break;

    case "subscription_cancelled":
      // User cancelled — still active until period end
      console.log(`[Webhook] Subscription cancelled for user ${userId}`, {
        subscriptionId: payload.data.id,
        endsAt: subscriptionData.ends_at,
      });
      break;

    case "subscription_payment_failed":
      // Payment failed
      console.log(`[Webhook] Payment failed for user ${userId}`, {
        subscriptionId: payload.data.id,
      });
      break;

    case "order_created":
      // One-time purchase (lifetime deal)
      console.log(`[Webhook] Order created for user ${userId}`, {
        orderId: payload.data.id,
        total: subscriptionData.total_formatted,
      });
      break;

    default:
      console.log(`[Webhook] Unhandled event: ${eventName}`);
  }

  return NextResponse.json({ received: true });
}
