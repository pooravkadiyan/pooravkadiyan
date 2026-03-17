import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            border: "1px solid rgba(240,240,240,0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#F0F0F0",
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "0.08em",
          }}
        >
          PK
        </div>
      </div>
    ),
    { ...size },
  );
}

