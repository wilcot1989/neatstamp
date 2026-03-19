import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2563eb",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          position: "relative",
        }}
      >
        {/* Envelope */}
        <div
          style={{
            width: 110,
            height: 78,
            border: "8px solid white",
            borderRadius: 12,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "44px solid transparent",
              borderRight: "44px solid transparent",
              borderTop: "36px solid white",
              marginTop: -4,
            }}
          />
        </div>
        {/* Green checkmark */}
        <div
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 48,
            height: 48,
            background: "#10B981",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            color: "white",
            fontWeight: 800,
          }}
        >
          v
        </div>
      </div>
    ),
    { ...size }
  );
}
