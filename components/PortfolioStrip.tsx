"use client";

import { useRef, useState } from "react";

type Project = {
  num: string;
  company: string;
  role: string;
  year: string;
  summary: string;
  tags: string[];
  surface: string; // gradient classes for the card visual
  href?: string; // external (e.g. case study PDF)
  internal?: string; // internal route
};

const projects: Project[] = [
  {
    num: "01",
    company: "Netflix India",
    role: "Independent product case study",
    year: "2024",
    summary:
      "Sizing an underserved segment, mapping their onboarding journey, and prioritising what to ship next so a stalled growth curve can move again.",
    tags: ["case study", "growth", "RICE"],
    surface: "from-[#E50914] via-[#B0060F] to-[#3A0205]",
    href: "https://drive.google.com/file/d/1hYQZuLYdAJ93T-Gw4OKU400QdHF3dMEG/view?usp=drive_link",
  },
  {
    num: "02",
    company: "Ve",
    role: "Associate Product Manager",
    year: "2025—",
    summary:
      "AI-powered onboarding and adoption work. Translating model output into something users can act on, then closing the loop with behaviour analytics.",
    tags: ["AI", "onboarding", "activation"],
    surface: "from-[#FFB5A7] via-[#F4A261] to-[#E87A4F]",
    internal: "/work",
  },
  {
    num: "03",
    company: "Ambito",
    role: "Associate Product Manager",
    year: "2024—25",
    summary:
      "Funnel instrumentation that surfaced two specific drop-offs and the smallest fixes that moved each. AI-driven profile and shortlisting tools.",
    tags: ["growth", "AI", "edtech"],
    surface: "from-[#A8D8EA] via-[#C9B1FF] to-[#B8C5FF]",
    internal: "/work",
  },
  {
    num: "04",
    company: "Samsung · Bixby",
    role: "Product Intern",
    year: "2023",
    summary:
      "Voice-platform release stability. Automated regression coverage, log-analysis workflows, API-level testing — the QA that decides ship or no-ship.",
    tags: ["voice", "QA", "platform"],
    surface: "from-[#FCD5CE] via-[#FFB5A7] to-[#FEC5BB]",
    internal: "/work",
  },
  {
    num: "05",
    company: "Expedite",
    role: "Co-founder · KL University",
    year: "2024",
    summary:
      "Co-founded a no-code/low-code club at KL University. Mendix workshops, idea-to-install pairing sessions, and recurring weekend rhythm.",
    tags: ["community", "no-code"],
    surface: "from-[#90E0A8] via-[#A8E6CF] to-[#B8E0D2]",
    internal: "/about",
  },
  {
    num: "06",
    company: "DR Detection (paper)",
    role: "Undergraduate research",
    year: "2023",
    summary:
      "A diabetic-retinopathy detection model on retinal fundus images, hitting 95% accuracy with a VGG backbone. Aimed at early-screening clinics.",
    tags: ["research", "medical AI"],
    surface: "from-[#C9B1FF] via-[#B8C5FF] to-[#A8D8EA]",
    internal: "/about",
  },
];

export default function PortfolioStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  // Drag-to-scroll
  const drag = useRef({ down: false, startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    if (!trackRef.current) return;
    drag.current.down = true;
    drag.current.startX = e.clientX;
    drag.current.startScroll = trackRef.current.scrollLeft;
    trackRef.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down || !trackRef.current) return;
    trackRef.current.scrollLeft =
      drag.current.startScroll - (e.clientX - drag.current.startX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    drag.current.down = false;
    trackRef.current?.releasePointerCapture(e.pointerId);
    updatePage();
  };

  const updatePage = () => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.scrollWidth / projects.length;
    const idx = Math.round(trackRef.current.scrollLeft / cardWidth);
    setPage(Math.min(Math.max(idx + 1, 1), projects.length));
  };

  return (
    <section
      id="work"
      className="relative w-full bg-white"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
          <h2
            className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-strong)] max-w-[16ch]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
          >
            <span className="text-[color:var(--text-subtle)]">/</span>work that
            <br />
            left a mark.
          </h2>
          <p className="font-display tabular-nums text-[16px] lg:text-[20px] text-[color:var(--text-muted)]">
            {String(page).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onScroll={updatePage}
        className="overflow-x-auto cursor-grab active:cursor-grabbing select-none scrollbar-hide"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        <div
          className="flex gap-5 lg:gap-6 px-6 lg:px-12"
          style={{ width: "max-content" }}
        >
          {projects.map((p) => {
            const Card = (
              <article
                className="group relative bg-[color:var(--surface-muted)] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  width: "min(420px, 75vw)",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Visual */}
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${p.surface}`}
                >
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between text-white">
                    <span
                      className="font-display lowercase font-bold leading-none"
                      style={{ fontSize: "44px" }}
                    >
                      {p.num}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.16em] opacity-80">
                      {p.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/80">
                      {p.role}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 lg:p-7">
                  <h3
                    className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-strong)]"
                    style={{ fontSize: "clamp(22px, 2.4vw, 32px)" }}
                  >
                    <span className="text-[color:var(--text-subtle)]">/</span>
                    {p.company.toLowerCase()}
                  </h3>
                  <p className="mt-3 text-[14px] lg:text-[15px] leading-[1.55] text-[color:rgba(17,17,17,0.62)] max-w-[42ch]">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] lowercase tracking-[0.06em] text-[color:var(--text-muted)] border border-[color:var(--border-strong)] rounded-full px-2.5 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );

            return p.href ? (
              <a
                key={p.num}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              >
                {Card}
              </a>
            ) : (
              <a
                key={p.num}
                href={p.internal ?? "/work"}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              >
                {Card}
              </a>
            );
          })}
        </div>
      </div>

      <p className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-8 text-[12px] lowercase tracking-[0.14em] text-[color:var(--text-muted)]">
        ← drag to browse
      </p>
    </section>
  );
}
