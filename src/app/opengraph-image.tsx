import { ImageResponse } from "next/og";

export const alt = "Would You Rather — the iOS party game of impossible choices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#253A82",
        }}
      >
        <div
          style={{
            width: 16,
            height: "100%",
            backgroundColor: "#88A2FF",
          }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                backgroundColor: "#FFB2F7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#253A82",
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              VS
            </div>
            <div
              style={{
                color: "#E3FC87",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: -0.5,
              }}
            >
              Would You Rather
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div
              style={{
                color: "#C0E0FF",
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: -1.5,
              }}
            >
              The iOS party game of impossible choices
            </div>
            <div
              style={{
                marginTop: 24,
                color: "#C0E0FF",
                fontSize: 26,
              }}
            >
              1,500+ questions · 11 categories · Free · No account
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div
              style={{
                color: "#AB9DFF",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              By Lulo
            </div>
            <div
              style={{
                backgroundColor: "#E3FC87",
                color: "#253A82",
                fontSize: 18,
                fontWeight: 800,
                padding: "10px 18px",
                borderRadius: 999,
              }}
            >
              Play on iOS
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
