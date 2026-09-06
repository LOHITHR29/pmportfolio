"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "3+", label: "Years" },
  { value: "3", label: "Companies" },
  { value: "3", label: "Industries" },
];

export default function WorkHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(".work-hero-summary", { opacity: 0, y: 60 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=80%",
          pin: true,
          scrub: 0.6,
        },
      });

      tl.to(
        ".work-hero-title",
        {
          scale: 0.34,
          y: () => -(window.innerHeight * 0.34),
          ease: "none",
        },
        0,
      );

      tl.to(
        ".work-hero-summary",
        { opacity: 1, y: 0, ease: "none" },
        0.4,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "100vh" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Centred wrapper so GSAP can scale/translate the inner H1 cleanly */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6 lg:px-10">
          <h1
            className="work-hero-title font-display text-[56px] sm:text-[92px] lg:text-[132px] xl:text-[160px] leading-[1.02] tracking-[-0.02em] text-[color:var(--olive)] text-center max-w-[14ch] mx-auto"
            style={{
              willChange: "transform",
              transformOrigin: "center center",
            }}
          >
            Where I&apos;ve <em className="italic">worked.</em>
          </h1>
        </div>

        {/* Summary block — sits below the small title once it settles */}
        <div
          className="work-hero-summary absolute top-[36%] inset-x-0 px-6 lg:px-10"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="mx-auto max-w-[900px] text-center flex flex-col items-center gap-10 lg:gap-12">
            <p className="text-[15px] lg:text-[17px] leading-[1.65] text-[color:var(--olive-light)] max-w-[58ch]">
              Five years across product, engineering, and growth — AI features,
              mobile R&amp;D, and a couple of small experiments along the way.
            </p>

            <div className="grid grid-cols-3 gap-8 lg:gap-16 max-w-[600px] w-full">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <p className="font-display text-[44px] lg:text-[64px] leading-none text-[color:var(--olive)]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11px] lg:text-[12px] tracking-[0.22em] uppercase text-[color:var(--olive-light)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
