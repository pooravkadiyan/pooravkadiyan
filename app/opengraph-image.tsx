import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0A0A0F",
          color: "#F0F0F0",
          padding: 72,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 400px at 20% 30%, rgba(0,212,255,0.12), transparent 60%), radial-gradient(520px 360px at 78% 70%, rgba(201,168,76,0.10), transparent 60%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 18, zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                style={{
                  fontSize: 28,
                  letterSpacing: "0.07em",
                  fontWeight: 700,
                }}
              >
                POORAV KADIYAN
              </div>
              <div
                style={{
                  fontSize: 16,
                  letterSpacing: "0.15em",
                  fontWeight: 300,
                  color: "#00D4FF",
                }}
              >
                INTELLIGENCE ARCHITECT
              </div>
            </div>
          </div>

          <div style={{ marginTop: 22, maxWidth: 860 }}>
            <div
              style={{
                fontSize: 56,
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              Intelligence systems that upgrade decisions in days.
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 22,
                lineHeight: 1.45,
                color: "#9090A8",
              }}
            >
              Data → models → deployed workflows. Built for mid-market India and global teams.
            </div>
          </div>

          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              color: "#00D4FF",
              letterSpacing: "0.12em",
              fontSize: 14,
              textTransform: "uppercase",
            }}
          >
            <span style={{ background: "#003D4D", border: "1px solid #00D4FF", padding: "8px 12px" }}>
              Systems
            </span>
            <span style={{ background: "#16161F", border: "1px solid #1E1E2E", padding: "8px 12px", color: "#9090A8" }}>
              Execution
            </span>
            <span style={{ background: "#16161F", border: "1px solid #1E1E2E", padding: "8px 12px", color: "#9090A8" }}>
              India depth
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

