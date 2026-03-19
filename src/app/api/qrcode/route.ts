import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

// Generate a QR code as SVG
// Uses a simple QR code generation algorithm (no external dependencies)
export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Check Pro plan
  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;
    const user = await db.prepare("SELECT plan FROM users WHERE email = ?")
      .bind(session.user.email).first<{ plan: string }>();

    if (!user || user.plan === "free") {
      return NextResponse.json({ error: "QR codes are a Pro feature. Upgrade for $5/month." }, { status: 403 });
    }
  } catch {
    // Continue even if DB check fails
  }

  const body = await request.json() as { url?: string; size?: number };
  const url = body.url;
  const size = Math.min(body.size || 150, 400);

  if (!url) {
    return NextResponse.json({ error: "URL required" }, { status: 400 });
  }

  // Generate QR code using Google Charts API (simple, no deps)
  const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${encodeURIComponent(url)}&choe=UTF-8&chld=M|2`;

  try {
    const qrResponse = await fetch(qrUrl);
    if (!qrResponse.ok) {
      return NextResponse.json({ error: "Failed to generate QR code" }, { status: 500 });
    }

    const imageData = await qrResponse.arrayBuffer();

    return new NextResponse(imageData, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to generate QR code" }, { status: 500 });
  }
}

// GET: generate QR code directly with query params (for embedding in signatures)
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const data = url.searchParams.get("data");
  const size = Math.min(parseInt(url.searchParams.get("size") || "150"), 400);

  if (!data) {
    return NextResponse.json({ error: "data parameter required" }, { status: 400 });
  }

  const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${encodeURIComponent(data)}&choe=UTF-8&chld=M|2`;

  try {
    const qrResponse = await fetch(qrUrl);
    if (!qrResponse.ok) {
      return new NextResponse("QR generation failed", { status: 500 });
    }

    const imageData = await qrResponse.arrayBuffer();

    return new NextResponse(imageData, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new NextResponse("QR generation failed", { status: 500 });
  }
}
