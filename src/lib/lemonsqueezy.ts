import {
  lemonSqueezySetup,
  createCheckout,
  getSubscription,
  cancelSubscription,
} from "@lemonsqueezy/lemonsqueezy.js";

export function initLemonSqueezy() {
  lemonSqueezySetup({
    apiKey: process.env.LEMONSQUEEZY_API_KEY!,
    onError: (error) => {
      console.error("LemonSqueezy error:", error);
    },
  });
}

export async function createProCheckout(
  userEmail: string,
  userId: string,
  variant: "monthly" | "yearly"
) {
  initLemonSqueezy();

  const storeId = process.env.LEMONSQUEEZY_STORE_ID!;
  const variantId =
    variant === "monthly"
      ? process.env.LEMONSQUEEZY_PRO_MONTHLY_VARIANT_ID!
      : process.env.LEMONSQUEEZY_PRO_YEARLY_VARIANT_ID!;

  const checkout = await createCheckout(storeId, variantId, {
    checkoutData: {
      email: userEmail,
      custom: {
        user_id: userId,
      },
    },
    productOptions: {
      redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?upgraded=true`,
    },
  });

  return checkout.data?.data.attributes.url;
}

export async function getSubscriptionDetails(subscriptionId: string) {
  initLemonSqueezy();
  const sub = await getSubscription(subscriptionId);
  return sub.data?.data;
}

export async function cancelUserSubscription(subscriptionId: string) {
  initLemonSqueezy();
  const result = await cancelSubscription(subscriptionId);
  return result.data?.data;
}
