"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Orb = {
  label: string;
  colors: string[];
  angle: number;
};

const orbs: Orb[] = [
  {
    label: "Onboarding & adoption",
    colors: ["#C9B1FF", "#B8C5FF", "#A8D8EA"],
    angle: 0,
  },
  {
    label: "Growth & metrics",
    colors: ["#90E0A8", "#A8E6CF", "#B8E0D2"],
    angle: 120,
  },
  {
    label: "Product strategy",
    colors: ["#FFB5A7", "#F4A261", "#E87A4F"],
    angle: 240,
  },
];

const RING_R_RATIO = 0.4;
const ORBIT_DURATION = 90; // seconds

export default function SkillsOrbit() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".orbit-ring",
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" },
      );
      tl.fromTo(
        ".orbit-center",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        "-=0.5",
      );
      tl.fromTo(
        ".orbit-orb-shape",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.4)",
          stagger: 0.2,
        },
        "-=0.3",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="practice"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <p
              className="text-[11px] uppercase font-medium mb-4"
              style={{ color: "#6b6b66", letterSpacing: "0.14em" }}
            >
              (practice)
            </p>
            <h2
              className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ color: "#1a1a1a", fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              <span style={{ color: "rgba(17,17,17,0.4)" }}>/</span>my product
              practice.
            </h2>
          </div>
          <p
            className="lg:col-span-5 text-[15px] lg:text-[17px] leading-[1.6] max-w-[44ch]"
            style={{ color: "rgba(17,17,17,0.62)" }}
          >
            Three areas where I focus my product work — orbiting around one
            theme: making AI features feel inevitable instead of impressive.
          </p>
        </div>

        <div
          className="relative mx-auto"
          style={{
            width: "min(680px, 92vw)",
            height: "min(680px, 92vw)",
          }}
        >
          {/* Ring */}
          <svg
            aria-hidden
            className="absolute inset-0 m-auto pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%" }}
          >
            <circle
              className="orbit-ring"
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(80, 79, 237, 0.22)"
              strokeWidth="0.3"
              pathLength={1000}
              strokeDasharray={1000}
            />
          </svg>

          {/* Center */}
          <div className="orbit-center absolute inset-0 grid place-items-center z-10 pointer-events-none">
            <div className="flex flex-col items-center gap-3">
              <p
                className="font-display lowercase font-bold leading-[1.05] text-center tracking-[-0.02em]"
                style={{
                  color: "#1a1a1a",
                  fontSize: "clamp(20px, 2.4vw, 30px)",
                }}
              >
                <span style={{ color: "rgba(17,17,17,0.4)" }}>/</span>my product
                <br />
                practice.
              </p>
              <span
                className="rounded-full mt-1"
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#504FED",
                }}
              />
            </div>
          </div>

          {/* Revolving orb container */}
          <div
            className="absolute inset-0"
            style={{
              animation: `orbit-spin ${ORBIT_DURATION}s linear infinite`,
              willChange: "transform",
            }}
          >
            {orbs.map((o) => (
              <div
                key={o.label}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "min(200px, 30vw)",
                  height: "min(200px, 30vw)",
                  transform: `translate(-50%, -50%) rotate(${o.angle}deg) translateY(calc(-1 * ${RING_R_RATIO} * min(680px, 92vw)))`,
                  willChange: "transform",
                }}
              >
                {/* Counter-spin so labels stay upright */}
                <div
                  className="relative w-full h-full"
                  style={{
                    animation: `orbit-spin ${ORBIT_DURATION}s linear infinite reverse`,
                    willChange: "transform",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ transform: `rotate(${-o.angle}deg)` }}
                  >
                    <div className="orbit-orb-shape absolute inset-0">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `radial-gradient(circle at 35% 35%, ${o.colors[0]} 0%, ${o.colors[1]} 45%, ${o.colors[2]} 100%)`,
                          filter: "blur(24px)",
                          opacity: 0.85,
                        }}
                      />
                      <div className="absolute inset-0 grid place-items-center">
                        <span
                          className="font-display italic text-center px-4 leading-[1.15] max-w-[80%]"
                          style={{
                            color: "white",
                            fontSize: "clamp(14px, 1.4vw, 18px)",
                            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                          }}
                        >
                          {o.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
