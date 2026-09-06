export default function VerticalGrid() {
  return (
    <div
      aria-hidden
      className="hidden lg:block fixed inset-0 z-0 pointer-events-none"
    >
      <div className="mx-auto max-w-[1400px] h-full px-10 grid grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="border-l border-[color:var(--olive-faint)] last:border-r"
          />
        ))}
      </div>
    </div>
  );
}
