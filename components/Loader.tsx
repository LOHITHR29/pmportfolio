"use client";

import { useEffect, useState } from "react";

const hellos = [
  "Hello",
  "Hola",
  "Bonjour",
  "नमस्ते",
  "你好",
  "こんにちは",
  "안녕",
  "Ciao",
  "Hej",
  "Olá",
  "నమస్తే",
  "Salam",
  "Hallo",
  "Привет",
];

const DURATION = 3000;
const HELLO_INTERVAL = 130;

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [helloIdx, setHelloIdx] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 700 : DURATION;
    const start = performance.now();

    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setProgress(Math.floor(eased * 100));
      setHelloIdx(Math.floor(elapsed / HELLO_INTERVAL) % hellos.length);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setHidden(true), 220);
        setTimeout(() => setRemoved(true), 1000);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden={hidden}
      role="status"
      style={{
        background:
          "linear-gradient(145deg, #ffffff 0%, #f0f0f0 25%, #e8e8ff 55%, #c8c6fb 100%)",
      }}
      className={`fixed inset-0 z-[200] grid place-items-center transition-opacity duration-700 ease-out ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Cycling greeting */}
        <p
          key={helloIdx}
          className="font-display italic loader-fade-up leading-none"
          style={{
            color: "#1a1a1a",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 500,
          }}
        >
          {hellos[helloIdx]}
        </p>

        {/* Big counter */}
        <p
          className="font-display leading-none tabular-nums"
          style={{
            color: "#1a1a1a",
            fontSize: "clamp(72px, 10vw, 144px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
          }}
        >
          {progress}%
        </p>

        {/* Progress bar */}
        <div
          className="rounded-full overflow-hidden"
          style={{
            width: "min(220px, 60vw)",
            height: "2px",
            background: "rgba(17, 17, 17, 0.12)",
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "#ff5b1f",
              transition: "width 200ms ease-out",
            }}
          />
        </div>

        <p
          className="text-[11px] uppercase font-medium"
          style={{ color: "#6b6b66", letterSpacing: "0.18em" }}
        >
          lohith/regalla — loading
        </p>
      </div>
    </div>
  );
}
