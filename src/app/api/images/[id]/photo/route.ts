export const runtime = "edge";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";

// 1x1 transparent GIF as fallback placeholder
const TRANSPARENT_GIF_BYTES = new Uint8Array([
  0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,
  0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x21, 0xf9, 0x04, 0x01, 0x00,
  0x00, 0x00, 0x00, 0x2c, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
  0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3b,
]);

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { env } = getRequestContext();
    const bucket = env.IMAGES as R2Bucket;

    const { id: signatureId } = await params;

    if (!signatureId) {
      return new NextResponse(TRANSPARENT_GIF_BYTES, {
        status: 200,
        headers: {
          "Content-Type": "image/gif",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    // Attempt to fetch from R2
    const r2Key = `photos/${signatureId}.jpg`;
    const object = await bucket.get(r2Key);

    if (!object) {
      // Return 1x1 transparent GIF as placeholder
      return new NextResponse(TRANSPARENT_GIF_BYTES, {
        status: 200,
        headers: {
          "Content-Type": "image/gif",
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    // Determine content type from stored metadata or default to jpeg
    const contentType =
      object.httpMetadata?.contentType ?? "image/jpeg";

    const imageBytes = await object.arrayBuffer();

    return new NextResponse(imageBytes, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
        "Content-Length": imageBytes.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error("Image serve error:", error);

    // Always return a valid image response, even on error
    return new NextResponse(TRANSPARENT_GIF_BYTES, {
      status: 200,
      headers: {
        "Content-Type": "image/gif",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }
}
