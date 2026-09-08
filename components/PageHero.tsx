type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  maxWidth?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  maxWidth = "max-w-[18ch]",
}: PageHeroProps) {
  return (
    <section className="page-hero relative w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-40 sm:pt-36 lg:pt-44 pb-20 lg:pb-28">
        <p
          className="text-[11px] uppercase font-medium text-[color:var(--text-muted)] mb-6"
          style={{ letterSpacing: "0.14em" }}
        >
          ({eyebrow})
        </p>
        <h1
          className={`font-display lowercase font-bold leading-[0.98] tracking-[-0.04em] text-[color:var(--text-strong)] ${maxWidth}`}
          style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
        >
          <span className="text-[color:var(--text-subtle)]">/</span>
          {title}
        </h1>
        <p className="mt-8 max-w-[58ch] text-[15px] lg:text-[18px] leading-[1.6] text-[color:var(--text-muted)]">
          {description}
        </p>
      </div>
    </section>
  );
}
