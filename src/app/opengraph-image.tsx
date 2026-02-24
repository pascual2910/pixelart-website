import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pixel Art Converter - Turn images into pixel art";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0d0f",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo: 4 pixel squares matching Logo.tsx */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 8,
                backgroundColor: "#6366f1",
              }}
            />
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 8,
                backgroundColor: "#6366f1",
              }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 8,
                backgroundColor: "#6366f1",
              }}
            />
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 8,
                backgroundColor: "#6366f1",
                opacity: 0.6,
              }}
            />
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#f0f0f2",
            marginBottom: "12px",
          }}
        >
          Pixel Art Converter
        </div>
        <div style={{ fontSize: 28, color: "#a0a0a8" }}>
          Turn images into pixel art
        </div>
      </div>
    ),
    { ...size },
  );
}
