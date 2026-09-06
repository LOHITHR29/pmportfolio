"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // Pinned ScrollTriggers inject pin-spacers that grow the document AFTER
    // Lenis has computed its scrollable bounds. Refresh Lenis + ScrollTrigger
    // a few times once layout has settled so scroll reaches the real bottom.
    const refreshAll = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    const t1 = window.setTimeout(refreshAll, 200);
    const t2 = window.setTimeout(refreshAll, 800);
    const t3 = window.setTimeout(refreshAll, 2000);

    // If anything below the fold changes height (fonts loading, lazy images,
    // pinned timelines registering), recompute scroll bounds.
    const ro = new ResizeObserver(refreshAll);
    ro.observe(document.body);

    const onResize = () => refreshAll();
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
