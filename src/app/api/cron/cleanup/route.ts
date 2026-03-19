import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// Cleanup endpoint — call daily via external cron (e.g. cron-job.org)
// URL: https://neatstamp.com/api/cron/cleanup?secret=xxx
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");

  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    // 1. Delete expired magic tokens (older than 1 hour)
    const tokenResult = await db
      .prepare("DELETE FROM magic_tokens WHERE expires_at < datetime('now', '-1 hour')")
      .run();

    // 2. Delete used magic tokens (older than 24 hours)
    const usedResult = await db
      .prepare("DELETE FROM magic_tokens WHERE used = 1 AND created_at < datetime('now', '-1 day')")
      .run();

    // 3. Delete old audit logs (older than 90 days)
    const auditResult = await db
      .prepare("DELETE FROM audit_log WHERE created_at < datetime('now', '-90 days')")
      .run();

    // 4. Delete old tracking events (older than 90 days)
    const trackingResult = await db
      .prepare("DELETE FROM signature_tracking WHERE created_at < datetime('now', '-90 days')")
      .run();

    // 5. Mark expired free signatures
    // Free users: if last_seen is older than 90 days (or never seen), mark for expiry
    const expiredSigs = await db.prepare(`
      UPDATE signatures SET is_active = 0
      WHERE user_id IN (SELECT id FROM users WHERE plan = 'free')
      AND is_active = 1
      AND (last_seen IS NULL AND created_at < datetime('now', '-90 days'))
      OR (last_seen IS NOT NULL AND last_seen < datetime('now', '-90 days'))
    `).run();

    // 6. Delete R2 images for expired signatures
    // Get list of expired signature image keys
    const expiredImages = await db.prepare(`
      SELECT image_key, id FROM signatures
      WHERE is_active = 0 AND image_key IS NOT NULL
      AND updated_at < datetime('now', '-7 days')
    `).all<{ image_key: string; id: string }>();

    let imagesDeleted = 0;
    if (expiredImages.results.length > 0 && env.IMAGES) {
      for (const img of expiredImages.results) {
        try {
          await env.IMAGES.delete(img.image_key);
          await db.prepare("UPDATE signatures SET image_key = NULL WHERE id = ?")
            .bind(img.id).run();
          imagesDeleted++;
        } catch {
          // Continue on individual image delete failure
        }
      }
    }

    return NextResponse.json({
      success: true,
      cleaned: {
        expired_tokens: tokenResult.meta.changes,
        used_tokens: usedResult.meta.changes,
        old_audit_logs: auditResult.meta.changes,
        old_tracking: trackingResult.meta.changes,
        expired_signatures: expiredSigs.meta.changes,
        deleted_images: imagesDeleted,
      },
    });
  } catch (err) {
    console.error("Cleanup error:", err);
    return NextResponse.json({ error: "Cleanup failed" }, { status: 500 });
  }
}
