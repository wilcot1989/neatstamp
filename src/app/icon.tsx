import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
          position: "relative",
        }}
      >
        {/* Envelope shape */}
        <div
          style={{
            width: 20,
            height: 14,
            border: "2px solid white",
            borderRadius: 2,
            position: "relative",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "7px solid white",
              marginTop: -1,
            }}
          />
        </div>
        {/* Green checkmark dot */}
        <div
          style={{
            position: "absolute",
            top: 3,
            right: 3,
            width: 10,
            height: 10,
            background: "#10B981",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 7,
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
