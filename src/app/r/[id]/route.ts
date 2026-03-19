import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// Click tracking redirect
// URLs in Pro signatures can use neatstamp.com/r/[id] to track clicks
// Redirects to the actual URL and records the click
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.redirect("https://neatstamp.com");
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    // Look up the redirect URL
    // Could be a signature link or a banner campaign link
    const link = await db.prepare(
      "SELECT link_url, signature_id FROM banner_campaigns WHERE id = ? AND is_active = 1"
    ).bind(id).first<{ link_url: string; signature_id: string }>();

    if (link) {
      // Record click (non-blocking)
      db.prepare(
        "UPDATE banner_campaigns SET clicks = clicks + 1 WHERE id = ?"
      ).bind(id).run().catch(() => {});

      // Record in tracking table
      const ip = request.headers.get("cf-connecting-ip") || "unknown";
      db.prepare(
        "INSERT INTO signature_tracking (id, signature_id, event, ip) VALUES (?, ?, 'banner_click', ?)"
      ).bind(crypto.randomUUID(), link.signature_id || id, ip).run().catch(() => {});

      return NextResponse.redirect(link.link_url);
    }

    // Fallback: redirect to homepage
    return NextResponse.redirect("https://neatstamp.com");
  } catch {
    return NextResponse.redirect("https://neatstamp.com");
  }
}
