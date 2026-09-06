"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Plate = {
  n: string;
  title: string;
  desc: string;
  plateA: string;
  plateB: string;
  wedgeA: string;
  wedgeB: string;
  glow: string;
  finalSweep: number; // Cutout sector size
  cutoutFrom: number; // Angle (deg) where the cutout starts; 0 = top, 90 = right, 180 = bottom, 270 = left
  offsetX: number; // Horizontal offset (px) so cutouts peek out from behind plates above
};

const plates: Plate[] = [
  {
    // Top: pink/coral LEFT, lavender RIGHT, orange wedge
    n: "01",
    title: "Discover",
    desc: "Understand the actual problem behind a request — talk to users, read the support tickets, sit with engineers.",
    plateA: "#F4A6A0",
    plateB: "#D9B7E5",
    wedgeA: "#F4A261",
    wedgeB: "#C9B1FF",
    glow: "rgba(244, 166, 160, 0.45)",
    finalSweep: 60,
    cutoutFrom: 60,
    offsetX: 0,
  },
  {
    // Second: lavender LEFT, mint RIGHT, deep-green wedge
    n: "02",
    title: "Frame",
    desc: "Turn raw insight into priorities, scope, and a clear bet — what we're doing, what we're not, and why.",
    plateA: "#C9B1FF",
    plateB: "#A8D5BA",
    wedgeA: "#3F9D6E",
    wedgeB: "#A8E6CF",
    glow: "rgba(184, 218, 200, 0.45)",
    finalSweep: 56,
    cutoutFrom: 220,
    offsetX: -10,
  },
  {
    // Third: olive LEFT, gold RIGHT, orange wedge
    n: "03",
    title: "Build",
    desc: "Spec it tight, partner with design and engineering, ship in slices instead of one big reveal.",
    plateA: "#90C080",
    plateB: "#D4B843",
    wedgeA: "#E0823A",
    wedgeB: "#90E0A8",
    glow: "rgba(184, 188, 96, 0.42)",
    finalSweep: 64,
    cutoutFrom: 60,
    offsetX: 10,
  },
  {
    // Bottom: sky blue LEFT, lilac RIGHT, blue wedge
    n: "04",
    title: "Measure",
    desc: "Watch behaviour, not just dashboards. Decide what stays, what changes, what gets cut.",
    plateA: "#A8C4E0",
    plateB: "#C9B1FF",
    wedgeA: "#5C7AFF",
    wedgeB: "#B8A8E5",
    glow: "rgba(168, 196, 224, 0.45)",
    finalSweep: 54,
    cutoutFrom: 240,
    offsetX: -8,
  },
];

export default function ProcessScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Bottom-up: 04 Measure enters first, 01 Discover last
      const order = [3, 2, 1, 0];

      // Hide everything BEFORE the timeline runs so the section starts empty.
      // Without this, plates render visible by default and the entrance is invisible.
      gsap.set("[id^='plate-']", {
        opacity: 0,
        y: 220,
        rotateX: 55,
        scale: 0.9,
      });
      gsap.set(".plate-shell", { "--sweep": "0deg" });
      gsap.set("[id^='label-']", { opacity: 0, x: 28 });
      gsap.set(".process-eyebrow", { opacity: 0 });
      gsap.set(".process-title", { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.6,
        },
      });

      tl.to(".process-eyebrow", { opacity: 1, duration: 0.3 }, 0);
      tl.to(".process-title", { opacity: 1, y: 0, duration: 0.5 }, 0);

      // Each plate owns its own clear scroll segment.
      const PLATE_DURATION = 0.55;
      const GAP_BETWEEN = 0.2;
      const FIRST_AT = 0.35;

      order.forEach((idx, rank) => {
        const sel = `#plate-${idx}`;
        const labelSel = `#label-${idx}`;
        const startAt = FIRST_AT + rank * (PLATE_DURATION + GAP_BETWEEN);

        // Plate flies in from below + rotates from a tilt
        tl.to(
          sel,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: PLATE_DURATION,
            ease: "power3.out",
          },
          startAt,
        );

        // Pie-slice cutout grows 0 → finalSweep, in sync with the plate
        tl.to(
          `${sel} .plate-shell`,
          {
            "--sweep": `${plates[idx].finalSweep}deg`,
            duration: PLATE_DURATION,
            ease: "power1.out",
          },
          startAt,
        );

        // Label highlights to full opacity as its plate lands
        tl.to(
          labelSel,
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          startAt + 0.2,
        );

        // No fade-down — once a label is in, it stays at full opacity.
      });

      // Hold the full stack visible until the section unpins
      tl.to({}, { duration: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[color:var(--cream)] overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="h-full flex flex-col items-center px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px] w-full pt-20 lg:pt-24 text-center">
          <p className="process-eyebrow text-[12px] tracking-[0.2em] uppercase text-[color:var(--olive-light)] mb-4">
            How a feature gets built
          </p>
          <h2 className="process-title font-display text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] tracking-[-0.015em] text-[color:var(--olive)] max-w-[18ch] mx-auto">
            From a vague request to a shipped feature — one continuous loop.
          </h2>
        </div>

        <div className="flex-1 w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-16 items-center">
          {/* LEFT: stacked pie-slice plates */}
          <div
            className="lg:col-span-7 relative flex justify-center order-2 lg:order-1"
            style={{ height: "230px", perspective: "900px" }}
          >
            <div className="relative w-full max-w-[460px] h-full">
              {plates.map((p, i) => (
                <div
                  key={p.n}
                  id={`plate-${i}`}
                  className="absolute left-1/2"
                  style={{
                    top: `${i * 42}px`,
                    transform: `translateX(calc(-50% + ${p.offsetX}px))`,
                    zIndex: 10 - i,
                    willChange: "transform, opacity",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className="relative"
                    style={{
                      width: "min(420px, 80vw)",
                      height: "84px",
                    }}
                  >
                    {/* Soft outer glow — sits behind, slightly larger, blurred */}
                    <div
                      aria-hidden
                      className="absolute"
                      style={{
                        inset: "-16px",
                        borderRadius: "50%",
                        background: p.glow,
                        filter: "blur(22px)",
                      }}
                    />

                    {/* Inner two-tone wedge — visible only through the plate's cutout */}
                    <div
                      className="absolute inset-0"
                      style={{
                        borderRadius: "50%",
                        background: `conic-gradient(from ${p.cutoutFrom}deg at 50% 50%, ${p.wedgeA} 0deg, ${p.wedgeB} ${p.finalSweep}deg, transparent ${p.finalSweep}deg)`,
                      }}
                    />

                    {/* Outer translucent plate with growing pie-slice cutout */}
                    <div
                      className="plate-shell absolute inset-0"
                      style={
                        {
                          borderRadius: "50%",
                          background: `linear-gradient(105deg, ${p.plateA} 0%, ${p.plateB} 100%)`,
                          opacity: 0.88,
                          boxShadow:
                            "inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.06)",
                          maskImage: `conic-gradient(from ${p.cutoutFrom}deg at 50% 50%, transparent 0deg, transparent var(--sweep, 0deg), black var(--sweep, 0deg), black 360deg)`,
                          WebkitMaskImage: `conic-gradient(from ${p.cutoutFrom}deg at 50% 50%, transparent 0deg, transparent var(--sweep, 0deg), black var(--sweep, 0deg), black 360deg)`,
                          ["--sweep" as never]: "0deg",
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: labels — flex column with natural spacing so descriptions
              have room to breathe without colliding with the next label. */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-5 order-1 lg:order-2">
            {plates.map((p, i) => (
              <div
                key={p.n}
                id={`label-${i}`}
                className="flex items-start gap-4"
                style={{ willChange: "transform, opacity" }}
              >
                <span className="font-display text-[18px] lg:text-[22px] text-[color:var(--olive-light)] leading-none w-8 shrink-0 pt-[4px]">
                  {p.n}
                </span>
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="font-display text-[20px] lg:text-[24px] leading-tight text-[color:var(--olive)]">
                    {p.title}
                  </p>
                  <p className="text-[12px] lg:text-[13px] leading-[1.45] text-[color:var(--olive-light)] max-w-[38ch]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
