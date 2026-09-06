"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(".about-hero-bio", { opacity: 0, y: 60 });

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
        ".about-hero-title",
        {
          scale: 0.34,
          y: () => -(window.innerHeight * 0.34),
          ease: "none",
        },
        0,
      );

      tl.to(
        ".about-hero-bio",
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
            className="about-hero-title font-display text-[56px] sm:text-[92px] lg:text-[132px] xl:text-[160px] leading-[1.02] tracking-[-0.02em] text-[color:var(--olive)] text-center max-w-[16ch] mx-auto"
            style={{
              willChange: "transform",
              transformOrigin: "center center",
            }}
          >
            The story behind <em className="italic">the work.</em>
          </h1>
        </div>

        {/* Bio block — positioned in the lower portion of the viewport */}
        <div
          className="about-hero-bio absolute top-[36%] inset-x-0 px-6 lg:px-10"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="mx-auto max-w-[720px] flex flex-col gap-4 lg:gap-5">
            <h2 className="font-display text-[26px] lg:text-[36px] leading-[1.1] text-[color:var(--olive)]">
              Hey, I&apos;m Lohith.
            </h2>
            <p className="text-[14px] lg:text-[16px] leading-[1.65] text-[color:var(--olive-light)]">
              Product manager working on AI-powered features at Ve in
              Hyderabad. Before that, growth and onboarding work at Ambito,
              and mobile R&amp;D at Samsung. My day-to-day sits at the seam
              between PM, design, and engineering — framing problems,
              shipping in slices, and watching behaviour close enough to
              know whether the slice was right.
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[1.65] text-[color:var(--olive)] font-medium">
              Curious by default, collaborative by choice.
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[1.65] text-[color:var(--olive-light)]">
              Based in Hyderabad, India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
