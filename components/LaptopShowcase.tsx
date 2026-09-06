"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LaptopShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Entrance: fade + lift + scale
      gsap.fromTo(
        laptopRef.current,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Continuous parallax while in view
      gsap.to(laptopRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Inner screen parallax — moves slightly slower than frame
      gsap.fromTo(
        screenRef.current,
        { y: 20 },
        {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[color:var(--cream-light)]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24 lg:py-32">
        <p className="text-center text-[14px] tracking-[0.2em] uppercase text-[color:var(--olive-light)] mb-10">
          A peek at the work
        </p>
        <div
          ref={laptopRef}
          className="mx-auto w-full max-w-[900px] aspect-[16/10] relative"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-x-0 top-0 bottom-[8%] rounded-[18px] bg-[color:var(--olive-dark)] p-3 lg:p-4">
              <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                <div ref={screenRef} className="absolute inset-0">
                  <ScreenContent />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-[-3%] bottom-0 h-[6%] rounded-b-full bg-[color:var(--olive-dark)] shadow-[0_18px_30px_rgba(58,74,30,0.2)]" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-[18%] h-[2%] rounded-b-full bg-[color:var(--olive)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenContent() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#FFF7EE] via-[#F5F4EC] to-[#E8EEDB]">
      <div
        className="absolute -top-10 -left-10 w-[260px] h-[260px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #E87A4F, #F4A261, #FFB5A7)",
          filter: "blur(40px)",
          opacity: 0.65,
        }}
      />
      <div
        className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #C9B1FF, #B8C5FF, #A8D8EA)",
          filter: "blur(48px)",
          opacity: 0.55,
        }}
      />

      <div className="relative h-full p-5 lg:p-8 flex flex-col">
        <div className="flex items-center justify-between text-[10px] lg:text-[12px] text-[color:var(--olive)]">
          <span className="font-display font-bold">lohith. regalla</span>
          <div className="flex gap-4">
            <span>Home</span>
            <span>Work</span>
            <span>About</span>
          </div>
        </div>

        <div className="mt-8 lg:mt-10 max-w-[60%]">
          <p className="font-display text-[18px] lg:text-[28px] leading-[1.1] text-[color:var(--olive)]">
            Onboarding that turns a first session into a second one.
          </p>
        </div>

        <div className="mt-auto grid grid-cols-3 gap-3 lg:gap-4">
          {["Ve", "Ambito", "Samsung"].map((c) => (
            <div
              key={c}
              className="aspect-[4/3] rounded-lg bg-white/70 backdrop-blur-sm border border-[color:var(--olive-mute)] grid place-items-center text-[11px] lg:text-[13px] font-medium text-[color:var(--olive)]"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
