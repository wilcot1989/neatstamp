import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// POST — receive deployment report from Google Workspace / Microsoft 365 scripts
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const user = await db
      .prepare("SELECT id, plan FROM users WHERE email = ?")
      .bind(session.user.email)
      .first<{ id: string; plan: string }>();

    if (!user || user.plan !== "team") {
      return NextResponse.json({ error: "Team plan required" }, { status: 403 });
    }

    const body = await request.json() as {
      totalUsers?: number;
      success?: number;
      failed?: number;
      platform?: string;
      timestamp?: string;
    };

    // Log the deployment
    try {
      await db.prepare(
        "INSERT INTO audit_log (id, user_id, email, action, detail, created_at) VALUES (?, ?, ?, ?, ?, datetime('now'))"
      ).bind(
        crypto.randomUUID(),
        user.id,
        session.user.email,
        "team_deployment",
        JSON.stringify({
          totalUsers: body.totalUsers ?? 0,
          success: body.success ?? 0,
          failed: body.failed ?? 0,
          platform: body.platform ?? "unknown",
        })
      ).run();
    } catch {
      // audit_log table might not exist yet — non-critical
    }

    return NextResponse.json({
      received: true,
      message: `Deployment report logged: ${body.success ?? 0} success, ${body.failed ?? 0} failed`,
    });
  } catch (err) {
    console.error("Deployment report error:", err);
    return NextResponse.json({ error: "Failed to process report" }, { status: 500 });
  }
}
