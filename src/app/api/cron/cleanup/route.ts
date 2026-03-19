import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// Cleanup endpoint — call periodically to remove expired tokens and old audit logs
// Protect with a secret key in the query string
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");

  // Simple auth — must match env var
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    // Delete expired magic tokens (older than 1 hour)
    const tokenResult = await db
      .prepare("DELETE FROM magic_tokens WHERE expires_at < datetime('now', '-1 hour')")
      .run();

    // Delete used magic tokens (older than 24 hours)
    const usedResult = await db
      .prepare("DELETE FROM magic_tokens WHERE used = 1 AND created_at < datetime('now', '-1 day')")
      .run();

    // Delete old audit logs (older than 90 days)
    const auditResult = await db
      .prepare("DELETE FROM audit_log WHERE created_at < datetime('now', '-90 days')")
      .run();

    return NextResponse.json({
      success: true,
      cleaned: {
        expired_tokens: tokenResult.meta.changes,
        used_tokens: usedResult.meta.changes,
        old_audit_logs: auditResult.meta.changes,
      },
    });
  } catch (err) {
    console.error("Cleanup error:", err);
    return NextResponse.json({ error: "Cleanup failed" }, { status: 500 });
  }
}
