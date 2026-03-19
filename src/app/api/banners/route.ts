export const runtime = "edge";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";

const PRO_PLANS = ["pro", "team"];

interface BannerRow {
  id: string;
  user_id: string;
  name: string;
  image_url: string;
  link_url: string;
  starts_at: string | null;
  ends_at: string | null;
  created_at: string;
  updated_at: string;
}

// ---------------------------------------------------------------------------
// Shared auth + plan guard
// ---------------------------------------------------------------------------
async function authenticate(
  request: NextRequest,
  db: D1Database
): Promise<{ userId: string } | NextResponse> {
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

  const user = await db
    .prepare("SELECT plan FROM users WHERE id = ?")
    .bind(sessionRow.user_id)
    .first<{ plan: string }>();

  if (!user || !PRO_PLANS.includes(user.plan)) {
    return NextResponse.json(
      { error: "Banner campaigns require a Pro or Team plan" },
      { status: 403 }
    );
  }

  return { userId: sessionRow.user_id };
}

// ---------------------------------------------------------------------------
// GET — list user's banner campaigns
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const auth = await authenticate(request, db);
    if (auth instanceof NextResponse) return auth;

    const { userId } = auth;

    const result = await db
      .prepare(
        `SELECT id, name, image_url, link_url, starts_at, ends_at, created_at, updated_at
         FROM banner_campaigns
         WHERE user_id = ?
         ORDER BY created_at DESC`
      )
      .bind(userId)
      .all<BannerRow>();

    return NextResponse.json({ banners: result.results }, { status: 200 });
  } catch (error) {
    console.error("Banners GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// POST — create a new banner campaign
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const auth = await authenticate(request, db);
    if (auth instanceof NextResponse) return auth;

    const { userId } = auth;

    let body: {
      name?: string;
      image_url?: string;
      link_url?: string;
      starts_at?: string | null;
      ends_at?: string | null;
    };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { name, image_url, link_url, starts_at = null, ends_at = null } = body;

    if (!name || !image_url || !link_url) {
      return NextResponse.json(
        { error: "Missing required fields: name, image_url, link_url" },
        { status: 400 }
      );
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    await db
      .prepare(
        `INSERT INTO banner_campaigns
           (id, user_id, name, image_url, link_url, starts_at, ends_at, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(id, userId, name, image_url, link_url, starts_at, ends_at, now, now)
      .run();

    const created = await db
      .prepare("SELECT * FROM banner_campaigns WHERE id = ?")
      .bind(id)
      .first<BannerRow>();

    return NextResponse.json({ banner: created }, { status: 201 });
  } catch (error) {
    console.error("Banners POST error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// PUT — update an existing banner campaign
// ---------------------------------------------------------------------------
export async function PUT(request: NextRequest): Promise<NextResponse> {
  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const auth = await authenticate(request, db);
    if (auth instanceof NextResponse) return auth;

    const { userId } = auth;

    let body: {
      id?: string;
      name?: string;
      image_url?: string;
      link_url?: string;
      starts_at?: string | null;
      ends_at?: string | null;
    };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { id, name, image_url, link_url, starts_at, ends_at } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Missing required field: id" },
        { status: 400 }
      );
    }

    // Confirm ownership
    const existing = await db
      .prepare(
        "SELECT id FROM banner_campaigns WHERE id = ? AND user_id = ?"
      )
      .bind(id, userId)
      .first<{ id: string }>();

    if (!existing) {
      return NextResponse.json(
        { error: "Banner not found or access denied" },
        { status: 404 }
      );
    }

    const now = new Date().toISOString();

    // Build a dynamic SET clause using only the fields that were provided
    const updates: string[] = ["updated_at = ?"];
    const values: unknown[] = [now];

    if (name !== undefined) {
      updates.push("name = ?");
      values.push(name);
    }
    if (image_url !== undefined) {
      updates.push("image_url = ?");
      values.push(image_url);
    }
    if (link_url !== undefined) {
      updates.push("link_url = ?");
      values.push(link_url);
    }
    if (starts_at !== undefined) {
      updates.push("starts_at = ?");
      values.push(starts_at);
    }
    if (ends_at !== undefined) {
      updates.push("ends_at = ?");
      values.push(ends_at);
    }

    values.push(id, userId);

    await db
      .prepare(
        `UPDATE banner_campaigns SET ${updates.join(", ")} WHERE id = ? AND user_id = ?`
      )
      .bind(...values)
      .run();

    const updated = await db
      .prepare("SELECT * FROM banner_campaigns WHERE id = ?")
      .bind(id)
      .first<BannerRow>();

    return NextResponse.json({ banner: updated }, { status: 200 });
  } catch (error) {
    console.error("Banners PUT error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// DELETE — remove a banner campaign
// ---------------------------------------------------------------------------
export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const auth = await authenticate(request, db);
    if (auth instanceof NextResponse) return auth;

    const { userId } = auth;

    let body: { id?: string };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Missing required field: id" },
        { status: 400 }
      );
    }

    const result = await db
      .prepare(
        "DELETE FROM banner_campaigns WHERE id = ? AND user_id = ?"
      )
      .bind(id, userId)
      .run();

    if (result.meta.changes === 0) {
      return NextResponse.json(
        { error: "Banner not found or access denied" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Banners DELETE error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
