import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createProCheckout } from "@/lib/lemonsqueezy";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session?.user?.email || !session?.user?.id) {
    return NextResponse.json(
      { error: "You must be signed in to upgrade" },
      { status: 401 }
    );
  }

  // Check if LemonSqueezy is configured
  if (!process.env.LEMONSQUEEZY_API_KEY || !process.env.LEMONSQUEEZY_STORE_ID) {
    return NextResponse.json(
      { error: "Pro subscriptions are not available yet. We're setting up payments — check back soon!" },
      { status: 503 }
    );
  }

  const body = await request.json() as Record<string, unknown>;
  const variant = body.variant === "yearly" ? "yearly" : "monthly";

  try {
    const checkoutUrl = await createProCheckout(
      session.user.email,
      session.user.id,
      variant as "monthly" | "yearly"
    );

    if (!checkoutUrl) {
      return NextResponse.json(
        { error: "Could not create checkout session. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Something went wrong creating your checkout. Please try again later." },
      { status: 500 }
    );
  }
}
