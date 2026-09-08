import { ImageResponse } from "next/og";

export const alt = "Lohith Regalla — Product manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 58,
        background: "linear-gradient(145deg, #ffffff 0%, #f0f0f0 25%, #e8e8ff 55%, #c8c6fb 100%)",
        color: "#111111",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", color: "#504FED", fontSize: 26, fontWeight: 700 }}>
        lohith/regalla
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -5 }}>
          lohith/<span style={{ color: "#504FED" }}>product</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(17,17,17,0.62)", letterSpacing: 2 }}>
          PRODUCT MANAGER · HOUSTON, TX
        </div>
      </div>
    </div>,
    size,
  );
}
