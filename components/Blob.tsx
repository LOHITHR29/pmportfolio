type Props = {
  className?: string;
  size?: number;
  blur?: number;
  colors?: string[];
  drift?: "a" | "b" | "c" | "none";
  pulse?: boolean;
  opacity?: number;
};

export default function Blob({
  className = "",
  size = 400,
  blur = 70,
  colors = ["#E87A4F", "#F4A261", "#FFB5A7"],
  drift = "a",
  pulse = false,
  opacity = 0.85,
}: Props) {
  const stops = colors.join(", ");
  const driftClass =
    drift === "none"
      ? ""
      : drift === "b"
        ? "blob-b"
        : drift === "c"
          ? "blob-c"
          : "blob-a";
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none ${driftClass} ${className}`}
      style={{ width: size, height: size, opacity }}
    >
      <div
        className={`w-full h-full rounded-full ${pulse ? "pulse-soft" : ""}`}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${stops})`,
          filter: `blur(${blur}px)`,
        }}
      />
    </div>
  );
}
