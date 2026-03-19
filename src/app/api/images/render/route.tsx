import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// Render a signature as a PNG image (for free users)
// GET /api/images/render?id=[signature_id]
// Returns a PNG image of the full signature with "Made with NeatStamp" badge
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const sigId = url.searchParams.get("id");

  if (!sigId) {
    return new NextResponse("Missing signature ID", { status: 400 });
  }

  // Load signature data from D1
  let sigData: {
    fullName: string;
    jobTitle: string;
    company: string;
    email: string;
    phone: string;
    website: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    pronouns: string;
    primaryColor: string;
    template: string;
    image_key: string | null;
  } | null = null;

  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;

    const sig = await db.prepare(
      "SELECT data, template, image_key FROM signatures WHERE id = ? AND is_active = 1"
    ).bind(sigId).first<{ data: string; template: string; image_key: string | null }>();

    if (sig) {
      const parsed = JSON.parse(sig.data);
      sigData = { ...parsed, template: sig.template, image_key: sig.image_key };
    }

    // Track the view
    db.prepare(
      "INSERT INTO signature_tracking (id, signature_id, event, ip) VALUES (?, ?, 'render_view', ?)"
    ).bind(crypto.randomUUID(), sigId, request.headers.get("cf-connecting-ip") || "unknown").run().catch(() => {});

    db.prepare(
      "UPDATE signatures SET last_seen = CURRENT_TIMESTAMP WHERE id = ?"
    ).bind(sigId).run().catch(() => {});
  } catch (err) {
    console.error("Render DB error:", err);
  }

  // Default data if signature not found
  const d = sigData || {
    fullName: "Your Name",
    jobTitle: "Your Title",
    company: "Company",
    email: "email@example.com",
    phone: "",
    website: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    pronouns: "",
    primaryColor: "#2563eb",
    template: "minimal",
    image_key: null,
  };

  const color = d.primaryColor || "#2563eb";

  // Render as image using ImageResponse (Satori)
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "24px 28px",
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "white",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Main signature content */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
          {/* Photo placeholder */}
          {d.image_key && (
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                backgroundColor: "#e2e8f0",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 700,
                color: "#94a3b8",
              }}
            >
              {d.fullName.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()}
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Name */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a1a" }}>
                {d.fullName}
              </span>
              {d.pronouns && (
                <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                  ({d.pronouns})
                </span>
              )}
            </div>

            {/* Title + Company */}
            {(d.jobTitle || d.company) && (
              <span style={{ fontSize: "13px", color: "#555555", marginTop: "2px" }}>
                {d.jobTitle}{d.jobTitle && d.company ? " at " : ""}{d.company}
              </span>
            )}

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: color,
                marginTop: "8px",
                marginBottom: "8px",
              }}
            />

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", fontSize: "12px", color: "#555555", gap: "2px" }}>
              {d.email && (
                <span style={{ color }}>
                  {d.email}
                </span>
              )}
              {d.phone && (
                <span>{d.phone}</span>
              )}
              {d.website && (
                <span style={{ color }}>
                  {d.website.replace(/^https?:\/\//, "")}
                </span>
              )}
            </div>

            {/* Social links */}
            {(d.linkedin || d.twitter || d.instagram) && (
              <div style={{ display: "flex", gap: "12px", marginTop: "8px", fontSize: "12px" }}>
                {d.linkedin && <span style={{ color }}>LinkedIn</span>}
                {d.twitter && <span style={{ color }}>X (Twitter)</span>}
                {d.instagram && <span style={{ color }}>Instagram</span>}
              </div>
            )}
          </div>
        </div>

        {/* Made with NeatStamp badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "12px",
            paddingTop: "8px",
          }}
        >
          <span style={{ fontSize: "10px", color: "#94a3b8" }}>
            Made with NeatStamp
          </span>
        </div>
      </div>
    ),
    {
      width: 500,
      height: 220,
    }
  );
}
