import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// POST — sync directory data (from Google Workspace or Azure AD)
// The external script sends user data, we update/create team member records
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
      source?: string; // "google" | "azure" | "csv"
      users?: Array<{
        email: string;
        name: string;
        title?: string;
        department?: string;
        phone?: string;
      }>;
    };

    if (!body.users || !Array.isArray(body.users)) {
      return NextResponse.json({ error: "users array required" }, { status: 400 });
    }

    // Get the team for this admin
    let team: { id: string } | null = null;
    try {
      team = await db
        .prepare("SELECT id FROM teams WHERE owner_id = ? LIMIT 1")
        .bind(user.id)
        .first<{ id: string }>();
    } catch {
      // teams table might not exist
    }

    if (!team) {
      // Create a default team
      const teamId = crypto.randomUUID();
      try {
        await db.prepare(
          "INSERT INTO teams (id, name, owner_id) VALUES (?, ?, ?)"
        ).bind(teamId, "My Team", user.id).run();
        team = { id: teamId };
      } catch {
        return NextResponse.json({ error: "Could not create team" }, { status: 500 });
      }
    }

    let synced = 0;
    let created = 0;

    for (const dirUser of body.users) {
      if (!dirUser.email) continue;

      // Check if user exists
      const existing = await db
        .prepare("SELECT id FROM users WHERE email = ?")
        .bind(dirUser.email)
        .first<{ id: string }>();

      if (existing) {
        // Update name if provided
        if (dirUser.name) {
          await db.prepare("UPDATE users SET name = ? WHERE id = ?")
            .bind(dirUser.name, existing.id).run();
        }
        synced++;
      } else {
        // Create new user
        const newId = crypto.randomUUID();
        await db.prepare(
          "INSERT INTO users (id, email, name, plan) VALUES (?, ?, ?, 'free')"
        ).bind(newId, dirUser.email, dirUser.name || "").run();

        // Add to team
        try {
          await db.prepare(
            "INSERT INTO team_members (id, team_id, user_id, role) VALUES (?, ?, ?, 'member')"
          ).bind(crypto.randomUUID(), team.id, newId).run();
        } catch {
          // team_members table might not exist
        }

        created++;
      }
    }

    return NextResponse.json({
      success: true,
      source: body.source ?? "unknown",
      synced,
      created,
      total: body.users.length,
    });
  } catch (err) {
    console.error("Directory sync error:", err);
    return NextResponse.json({ error: "Sync failed" }, { status: 500 });
  }
}
