"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lines = [
  "good product work",
  "connects the whole path:",
  "a clear problem.",
  "a deliberate decision.",
  "a useful release.",
  "evidence for what comes next.",
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
    const fills = gsap.utils.toArray<HTMLElement>(".statement-line-fill");

    if (reduce) {
      gsap.set(fills, { clipPath: "inset(0 0% 0 0)", opacity: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(fills, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0.45,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      fills.forEach((fill, index) => {
        timeline.to(
          fill,
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 1,
            ease: "none",
          },
          index * 0.72,
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
                <span
                  key={i}
                  className="statement-line relative block w-fit max-w-full"
                  aria-label={l}
                >
                  <span
                    aria-hidden="true"
                    className="block text-white/20"
                  >
                    {l}
                  </span>
                  <span
                    aria-hidden="true"
                    className="statement-line-fill pointer-events-none absolute inset-0 block text-white"
                    style={{
                      clipPath: "inset(0 100% 0 0)",
                    }}
                  >
                    {l}
                  </span>
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* Tool ticker — infinite horizontal marquee */}
        <div className="relative pb-12 lg:pb-16 overflow-hidden">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/90 px-6 lg:px-10 mb-4 mx-auto max-w-[1400px]">
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
