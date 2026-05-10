"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-[100] bg-transparent">
      {/* Whole bar fades + lifts away on scroll — brand mark and links go
          together, leaving the page completely uncluttered while reading. */}
      <div
        className={`mx-auto max-w-[1400px] px-6 lg:px-10 py-5 lg:py-6 flex items-start justify-between gap-4 transition-all duration-300 ease-out ${
          scrolled
            ? "opacity-0 -translate-y-2 pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <Link
          href="/"
          aria-label="Home"
          className="font-bold text-[16px] lg:text-[18px] lowercase tracking-[-0.01em] text-[#504FED] leading-tight"
        >
          lohith<span className="opacity-60">/regalla</span>
        </Link>

        <nav
          aria-label="Primary"
          className="flex flex-col items-end gap-1 text-[14px] text-[#1a1a1a]"
        >
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link key={l.href} href={l.href} className="link-underline">
                {active && <span aria-hidden>• </span>}
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
