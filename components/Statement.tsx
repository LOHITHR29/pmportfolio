"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// The feature-factory vs outcome-driven distinction is the through-line
// of the modern PM canon — Cagan, Torres, John Cutler all hammer it.
// The manifesto picks a side, then admits the cost of doing so.
const lines = [
  "there are two kinds of pms.",
  "ones who ship features.",
  "ones who move metrics.",
  "i'd rather be the second —",
  "even when the first",
  "looks busier.",
];

const tools = [
  "Figma",
  "Mixpanel",
  "Amplitude",
  "Linear",
  "SQL",
  "Notion",
  "GitHub",
  "Intercom",
  "OpenAI",
  "Hyperscale",
];

export default function Statement() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".statement-line").forEach((line) => {
        gsap.fromTo(
          line,
          { color: "rgba(255,255,255,0.25)" },
          {
            color: "rgba(255,255,255,1)",
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "260vh", backgroundColor: "#504FED" }}
    >
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="flex-1 flex items-center px-6 lg:px-10">
          <div className="mx-auto w-full max-w-[1400px]">
            <h2
              className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] max-w-[20ch]"
              style={{ fontSize: "clamp(36px, 5vw, 80px)" }}
            >
              {lines.map((l, i) => (
                <span key={i} className="statement-line block">
                  {l}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* Tool ticker — infinite horizontal marquee */}
        <div className="relative pb-12 lg:pb-16 overflow-hidden">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/55 px-6 lg:px-10 mb-4 mx-auto max-w-[1400px]">
            (tools I reach for)
          </p>
          <div className="relative w-full overflow-hidden">
            <div className="marquee-track flex w-max gap-12 lg:gap-16 px-6 lg:px-10">
              {[...tools, ...tools].map((t, i) => (
                <span
                  key={i}
                  className="font-display lowercase font-bold text-white/90 whitespace-nowrap"
                  style={{ fontSize: "clamp(28px, 3.5vw, 56px)" }}
                >
                  {t} <span className="text-white/30">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
