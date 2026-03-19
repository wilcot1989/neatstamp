import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// Save a free user's signature data to D1 (no auth required)
// This is called when a free user clicks "Copy" so the render endpoint can find the data
export async function POST(request: NextRequest) {
  const body = await request.json() as Record<string, unknown>;
  const sigId = body.id as string;
  const data = body.data as Record<string, unknown>;
  const template = body.template as string;

  if (!sigId || !data || !template) {
    return NextResponse.json({ error: "id, data, and template required" }, { status: 400 });
  }

  // Validate signature ID format (UUID)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(sigId)) {
    return NextResponse.json({ error: "Invalid signature ID" }, { status: 400 });
  }

  const dataStr = JSON.stringify(data);
  if (dataStr.length > 10000) {
    return NextResponse.json({ error: "Data too large" }, { status: 400 });
  }

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    // Calculate expiry (90 days from now)
    const expiresAt = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString();

    // Upsert — insert or update if exists
    const existing = await db.prepare("SELECT id FROM signatures WHERE id = ?").bind(sigId).first();

    if (existing) {
      await db.prepare(
        "UPDATE signatures SET data = ?, template = ?, expires_at = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?"
      ).bind(dataStr, template, expiresAt, sigId).run();
    } else {
      await db.prepare(
        "INSERT INTO signatures (id, user_id, name, template, data, is_active, expires_at) VALUES (?, 'free', 'Free Signature', ?, ?, 1, ?)"
      ).bind(sigId, template, dataStr, expiresAt).run();
    }

    return NextResponse.json({ success: true, expiresAt });
  } catch (err) {
    console.error("Free signature save error:", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
