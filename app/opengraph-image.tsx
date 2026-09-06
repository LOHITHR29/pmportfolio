import { ImageResponse } from "next/og";

export const alt = "Lohith Regalla, Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#f3f0e9",
        color: "#12233f",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: 2 }}>LOHITH REGALLA</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, maxWidth: 950 }}>
          Product manager building clear AI products.
        </div>
        <div style={{ display: "flex", color: "#c85d35", fontSize: 30 }}>
          Rice University MEM · Product strategy · AI
        </div>
      </div>
    </div>,
    size,
  );
}
