"use client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { label: "/work", href: "/work" },
  { label: "/about", href: "/about" },
  { label: "/contact", href: "/contact" },
];

export default function FullscreenMenu({ open, onClose }: Props) {
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    if (open) document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      style={{ backgroundColor: "#504FED" }}
      className={`fixed inset-0 z-[150] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full w-full flex flex-col">
        <div className="flex items-center justify-between px-6 lg:px-10 h-[64px] text-white">
          <span className="text-[14px] lowercase font-medium">
            lohith<span className="opacity-60">/regalla</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-[14px] lowercase font-medium tracking-[0.04em] inline-flex items-center gap-2"
          >
            close
            <span aria-hidden className="inline-block w-4 h-4 relative">
              <span className="absolute inset-0 m-auto h-px w-full bg-white rotate-45" />
              <span className="absolute inset-0 m-auto h-px w-full bg-white -rotate-45" />
            </span>
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 lg:px-10">
          <nav className="flex flex-col gap-2 lg:gap-3">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={onClose}
                className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] text-white"
                style={{
                  fontSize: "clamp(48px, 5.5vw, 80px)",
                  opacity: 0,
                  animation: open
                    ? `fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) ${0.08 + i * 0.06}s forwards`
                    : "none",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:lohithregalla123@gmail.com"
            onClick={onClose}
            className="mt-12 lg:mt-16 inline-flex items-center gap-2 text-white text-[16px] lg:text-[18px] lowercase link-underline before:bg-white self-start"
            style={{
              opacity: 0,
              animation: open
                ? "fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) 0.32s forwards"
                : "none",
            }}
          >
            let&rsquo;s connect <span aria-hidden>→</span>
          </a>
        </div>

        <div className="px-6 lg:px-10 py-6 flex flex-wrap justify-between gap-3 text-white/70 text-[12px] lowercase tracking-[0.04em]">
          <p>© {new Date().getFullYear()} lohith regalla</p>
          <p>hyderabad, india</p>
        </div>
      </div>
    </div>
  );
}
