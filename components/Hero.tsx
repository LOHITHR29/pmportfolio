"use client";

import { useEffect, useRef, useState } from "react";

const words = ["ai", "product", "growth", "systems"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceRef.current) return;

    let outTimer: number;
    const cycle = window.setInterval(() => {
      setPhase("out");
      outTimer = window.setTimeout(() => {
        setIdx((i) => (i + 1) % words.length);
        setPhase("in");
      }, 220);
    }, 3000);

    return () => {
      window.clearInterval(cycle);
      window.clearTimeout(outTimer);
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #ffffff 0%, #f0f0f0 25%, #e8e8ff 55%, #c8c6fb 100%)",
      }}
    >
      {/* Central blurred orb */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "min(900px, 90vw)",
          height: "min(900px, 90vw)",
          background:
            "radial-gradient(circle, rgba(80,79,237,0.22) 0%, rgba(80,79,237,0.07) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative h-screen flex flex-col">
        {/* Top spacer (nav handles its own positioning) */}
        <div className="flex-1" />

        {/* Bottom-left brand mark with rotating word */}
        <div className="px-6 lg:px-10 pb-20 lg:pb-24">
          <div className="mx-auto max-w-[1400px]">
            <h1
              className="font-display lowercase font-bold leading-[0.95] tracking-[-0.04em] text-[color:var(--dark)]"
              style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
            >
              <span
                className="fade-up inline-block"
                style={{ animationDelay: "80ms" }}
              >
                lohith
              </span>
              <span
                className="fade-up inline-block text-[color:var(--text-subtle)]"
                style={{ animationDelay: "220ms" }}
              >
                /
              </span>
              <span
                className="fade-up inline-block relative align-baseline overflow-hidden text-[color:var(--primary)]"
                style={{ animationDelay: "360ms" }}
              >
                <span
                  key={`${idx}-${phase}`}
                  className={`inline-block ${phase === "in" ? "word-enter" : "word-exit"}`}
                >
                  {words[idx]}
                </span>
              </span>
            </h1>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="px-6 lg:px-10 pb-8 lg:pb-10 fade-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="mx-auto max-w-[1400px] flex items-end justify-between">
            <div className="flex items-center gap-3 text-[color:var(--dark)]">
              <span
                aria-hidden
                className="relative block h-px w-10 overflow-hidden"
              >
                <span className="scroll-line" />
              </span>
              <span
                className="font-medium text-[11px] uppercase"
                style={{ letterSpacing: "0.14em" }}
              >
                Scroll
              </span>
            </div>

            <p
              className="text-[11px] uppercase font-medium text-[color:var(--text-muted)]"
              style={{ letterSpacing: "0.14em" }}
            >
              Product manager · Hyderabad, IN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
