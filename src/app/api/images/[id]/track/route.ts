export const runtime = "edge";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";

// 1x1 transparent GIF
const TRANSPARENT_GIF_BYTES = new Uint8Array([
  0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,
  0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x21, 0xf9, 0x04, 0x01, 0x00,
  0x00, 0x00, 0x00, 0x2c, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
  0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3b,
]);

const TRACKING_PIXEL_RESPONSE = new NextResponse(TRANSPARENT_GIF_BYTES, {
  status: 200,
  headers: {
    "Content-Type": "image/gif",
    // Must not be cached — every load must hit the server to record the open
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id: signatureId } = await params;

  // Return the pixel immediately — don't block the email client
  // Fire-and-forget the DB writes using waitUntil so they complete
  // after the response is sent
  const ctx = getRequestContext();
  const db = ctx.env.DB as D1Database;

  // Use waitUntil so the response is sent before DB writes finish
  ctx.ctx.waitUntil(recordOpen(db, signatureId, request));

  return TRACKING_PIXEL_RESPONSE;
}

async function recordOpen(
  db: D1Database,
  signatureId: string,
  request: NextRequest
): Promise<void> {
  try {
    const ip =
      request.headers.get("cf-connecting-ip") ??
      request.headers.get("x-forwarded-for") ??
      "unknown";
    const userAgent = request.headers.get("user-agent") ?? "";
    const referer = request.headers.get("referer") ?? "";
    const now = new Date().toISOString();

    // Insert open event into signature_tracking table
    await db
      .prepare(
        `INSERT INTO signature_tracking
           (signature_id, event_type, ip_address, user_agent, referer, created_at)
         VALUES (?, 'open', ?, ?, ?, ?)`
      )
      .bind(signatureId, ip, userAgent, referer, now)
      .run();

    // Update last_seen on the signature
    await db
      .prepare(
        "UPDATE signatures SET last_seen = ? WHERE id = ?"
      )
      .bind(now, signatureId)
      .run();
  } catch (error) {
    // Silently swallow errors — tracking should never break email display
    console.error("Tracking write error:", error);
  }
}
