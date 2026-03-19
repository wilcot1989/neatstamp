export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

// Inline SVG badge — no file dependency, no R2 needed
const BADGE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="20" role="img" aria-label="Made with NeatStamp">
  <title>Made with NeatStamp</title>
  <rect width="120" height="20" rx="3" fill="#e8e8e8"/>
  <rect x="1" y="1" width="118" height="18" rx="2" fill="#f5f5f5"/>
  <text
    x="60"
    y="14"
    font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="10"
    fill="#6b6b6b"
    text-anchor="middle"
    dominant-baseline="auto"
  >Made with NeatStamp</text>
</svg>`;

const BADGE_BYTES = new TextEncoder().encode(BADGE_SVG);

export async function GET(_request: NextRequest): Promise<NextResponse> {
  return new NextResponse(BADGE_BYTES, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      // Cache for 7 days — badge content rarely changes
      "Cache-Control": "public, max-age=604800, immutable",
      "Content-Length": BADGE_BYTES.byteLength.toString(),
    },
  });
}
