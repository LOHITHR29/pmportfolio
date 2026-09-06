"use client";

import { useEffect, useRef, useState } from "react";

// A simple line-art face whose pupils track scroll progress.
// Pupils move slightly within the eye-whites as the user scrolls the page.
export default function ScrollFace() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const update = () => {
      const max = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      // Pupils drift down as you scroll past, and slightly right
      const y = (progress - 0.5) * 4; // -2 → +2
      const x = progress * 1.4;
      setEyeOffset({ x, y });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={wrapRef} className="w-full h-full grid place-items-center">
      <svg
        viewBox="0 0 100 100"
        width="70%"
        height="70%"
        aria-hidden
      >
        {/* Head */}
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="#FFE9D6"
          stroke="#3a4a1e"
          strokeWidth="1.4"
        />

        {/* Eye whites */}
        <circle
          cx="40"
          cy="46"
          r="6.5"
          fill="white"
          stroke="#3a4a1e"
          strokeWidth="0.9"
        />
        <circle
          cx="60"
          cy="46"
          r="6.5"
          fill="white"
          stroke="#3a4a1e"
          strokeWidth="0.9"
        />

        {/* Pupils — move with scroll */}
        <circle
          cx={40 + eyeOffset.x}
          cy={46 + eyeOffset.y}
          r="2.6"
          fill="#1f2a0f"
        />
        <circle
          cx={60 + eyeOffset.x}
          cy={46 + eyeOffset.y}
          r="2.6"
          fill="#1f2a0f"
        />

        {/* Eyebrows */}
        <path
          d="M 33 38 Q 40 35 47 38"
          fill="none"
          stroke="#3a4a1e"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 53 38 Q 60 35 67 38"
          fill="none"
          stroke="#3a4a1e"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Nose */}
        <path
          d="M 50 50 Q 49 56 51 60"
          fill="none"
          stroke="#3a4a1e"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* Smile */}
        <path
          d="M 41 67 Q 50 72 59 67"
          fill="none"
          stroke="#3a4a1e"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Hair */}
        <path
          d="M 22 44 Q 25 22 50 18 Q 75 22 78 44 Q 70 30 50 30 Q 30 30 22 44 Z"
          fill="#1f2a0f"
        />
      </svg>
    </div>
  );
}
