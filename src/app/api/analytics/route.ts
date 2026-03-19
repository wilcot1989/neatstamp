export const runtime = "edge";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";

const PRO_PLANS = ["pro", "team"];

interface TrackingRow {
  signature_id: string;
  name: string;
  last_seen: string | null;
  opens_7d: number;
  opens_30d: number;
}

interface ClickRow {
  signature_id: string;
  url: string;
  count: number;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    // Auth check
    const sessionToken = request.cookies.get("session")?.value;
    if (!sessionToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const sessionRow = await db
      .prepare(
        "SELECT user_id FROM sessions WHERE token = ? AND expires_at > datetime('now')"
      )
      .bind(sessionToken)
      .first<{ user_id: string }>();

    if (!sessionRow) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = sessionRow.user_id;

    // Plan check — must be Pro or Team
    const user = await db
      .prepare("SELECT plan FROM users WHERE id = ?")
      .bind(userId)
      .first<{ plan: string }>();

    if (!user || !PRO_PLANS.includes(user.plan)) {
      return NextResponse.json(
        { error: "Analytics requires a Pro or Team plan" },
        { status: 403 }
      );
    }

    // Fetch open counts for the user's signatures (7d and 30d windows)
    const openRows = await db
      .prepare(
        `SELECT
           s.id              AS signature_id,
           s.name            AS name,
           s.last_seen       AS last_seen,
           COUNT(CASE WHEN t.created_at >= datetime('now', '-7 days')  THEN 1 END) AS opens_7d,
           COUNT(CASE WHEN t.created_at >= datetime('now', '-30 days') THEN 1 END) AS opens_30d
         FROM signatures s
         LEFT JOIN signature_tracking t
           ON t.signature_id = s.id
           AND t.event_type = 'open'
           AND t.created_at >= datetime('now', '-30 days')
         WHERE s.user_id = ?
         GROUP BY s.id, s.name, s.last_seen`
      )
      .bind(userId)
      .all<TrackingRow>();

    // Fetch click aggregates for the same signatures (last 30 days)
    const clickRows = await db
      .prepare(
        `SELECT
           t.signature_id AS signature_id,
           t.url          AS url,
           COUNT(*)       AS count
         FROM signature_tracking t
         INNER JOIN signatures s ON s.id = t.signature_id
         WHERE s.user_id = ?
           AND t.event_type = 'click'
           AND t.created_at >= datetime('now', '-30 days')
         GROUP BY t.signature_id, t.url
         ORDER BY count DESC`
      )
      .bind(userId)
      .all<ClickRow>();

    // Group clicks by signature_id for easy lookup
    const clicksBySignature = new Map<
      string,
      Array<{ url: string; count: number }>
    >();
    for (const row of clickRows.results) {
      const existing = clicksBySignature.get(row.signature_id) ?? [];
      existing.push({ url: row.url, count: row.count });
      clicksBySignature.set(row.signature_id, existing);
    }

    // Build response payload
    const signatures = openRows.results.map((row) => ({
      id: row.signature_id,
      name: row.name,
      opens_7d: row.opens_7d,
      opens_30d: row.opens_30d,
      last_seen: row.last_seen,
      clicks: clicksBySignature.get(row.signature_id) ?? [],
    }));

    return NextResponse.json({ signatures }, { status: 200 });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
