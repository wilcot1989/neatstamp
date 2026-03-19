export const runtime = "edge";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2MB

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { env } = getRequestContext();
    const db = env.DB as D1Database;
    const bucket = env.IMAGES as R2Bucket;

    // Auth check via session cookie
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

    // Parse multipart form data
    const formData = await request.formData();
    const file = formData.get("image") as File | null;
    const signatureId = formData.get("signature_id") as string | null;

    if (!file || !signatureId) {
      return NextResponse.json(
        { error: "Missing required fields: image and signature_id" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: jpg, png, gif, webp" },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_SIZE_BYTES) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 2MB" },
        { status: 400 }
      );
    }

    // Verify the signature belongs to the authenticated user
    const signature = await db
      .prepare(
        "SELECT id FROM signatures WHERE id = ? AND user_id = ?"
      )
      .bind(signatureId, userId)
      .first<{ id: string }>();

    if (!signature) {
      return NextResponse.json(
        { error: "Signature not found or access denied" },
        { status: 404 }
      );
    }

    // Read file bytes
    const arrayBuffer = await file.arrayBuffer();

    // Store in R2 with key: photos/[signature_id].jpg
    const r2Key = `photos/${signatureId}.jpg`;

    await bucket.put(r2Key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
        cacheControl: "public, max-age=86400",
      },
      customMetadata: {
        user_id: userId,
        original_filename: file.name,
        original_type: file.type,
        uploaded_at: new Date().toISOString(),
      },
    });

    // Save image_key in signatures table
    await db
      .prepare(
        "UPDATE signatures SET image_key = ?, updated_at = datetime('now') WHERE id = ? AND user_id = ?"
      )
      .bind(r2Key, signatureId, userId)
      .run();

    // Return the public URL
    const publicUrl = `https://neatstamp.com/api/images/${signatureId}/photo`;

    return NextResponse.json(
      {
        success: true,
        url: publicUrl,
        image_key: r2Key,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Image upload error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
