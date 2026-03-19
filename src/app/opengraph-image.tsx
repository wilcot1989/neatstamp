import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2563eb",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              background: "white",
              width: 96,
              height: 96,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563eb",
              fontWeight: 800,
              borderRadius: 16,
            }}
          >
            NS
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            NeatStamp
          </div>
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#93c5fd",
            fontWeight: 400,
            letterSpacing: "-0.5px",
          }}
        >
          Professional email signatures. Actually free.
        </div>
      </div>
    ),
    { ...size }
  );
}
