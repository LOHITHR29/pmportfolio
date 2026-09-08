"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type CaseStudyPresentationProps = {
  title: string;
  company: string;
  caseStudyHref: string;
  pdfHref: string;
  pageCount: number;
  slideBasePath: string;
};

export default function CaseStudyPresentation({
  title,
  company,
  caseStudyHref,
  pdfHref,
  pageCount,
  slideBasePath,
}: CaseStudyPresentationProps) {
  const [page, setPage] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef<HTMLElement>(null);

  const goTo = useCallback(
    (nextPage: number) => {
      setPage(Math.max(1, Math.min(pageCount, nextPage)));
    },
    [pageCount],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        setPage((current) => Math.min(pageCount, current + 1));
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        setPage((current) => Math.max(1, current - 1));
      }
      if (event.key === "Home") goTo(1);
      if (event.key === "End") goTo(pageCount);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, pageCount]);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await viewerRef.current?.requestFullscreen();
  };

  const slideNumber = String(page).padStart(2, "0");
  const slideSrc = `${slideBasePath}/page-${slideNumber}.png`;

  return (
    <main
      id="main-content"
      ref={viewerRef}
      className="presentation-viewer relative z-10 flex min-h-dvh w-full flex-col overflow-hidden bg-[#0a0a0a] text-white"
    >
      <header className="flex min-h-[72px] shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            href={caseStudyHref}
            aria-label={`Back to ${title}`}
            className="presentation-control shrink-0"
          >
            <span aria-hidden>←</span>
          </Link>
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
              {company} · full case study
            </p>
            <h1 className="mt-1 truncate text-[13px] font-semibold sm:text-[15px]">{title}</h1>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={pdfHref}
            download
            className="presentation-text-control hidden sm:inline-flex"
          >
            download PDF <span aria-hidden>↓</span>
          </a>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="presentation-text-control"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            <span className="hidden sm:inline">{isFullscreen ? "exit full screen" : "full screen"}</span>
            <span aria-hidden>{isFullscreen ? "↙" : "↗"}</span>
          </button>
        </div>
      </header>

      <section
        className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-4 sm:px-6"
        aria-label="Presentation slide"
      >
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          disabled={page === 1}
          className="presentation-side-control left-2 sm:left-5"
          aria-label="Previous slide"
        >
          <span aria-hidden>←</span>
        </button>

        <div className="presentation-stage relative overflow-hidden bg-black shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <Image
            key={slideSrc}
            src={slideSrc}
            alt={`${company} case study, slide ${page} of ${pageCount}`}
            fill
            priority={page === 1}
            unoptimized
            sizes="(max-width: 768px) 100vw, 1500px"
            className="object-contain"
          />
        </div>

        <button
          type="button"
          onClick={() => goTo(page + 1)}
          disabled={page === pageCount}
          className="presentation-side-control right-2 sm:right-5"
          aria-label="Next slide"
        >
          <span aria-hidden>→</span>
        </button>
      </section>

      <footer className="flex min-h-[68px] shrink-0 items-center justify-between gap-4 border-t border-white/10 px-4 sm:px-6 lg:px-8">
        <a href={pdfHref} download className="text-[11px] text-white/55 sm:hidden">
          download PDF ↓
        </a>
        <p className="hidden text-[11px] text-white/40 sm:block">Use arrow keys to navigate</p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="presentation-control"
            aria-label="Previous slide"
          >
            <span aria-hidden>←</span>
          </button>
          <p className="min-w-[70px] text-center text-[11px] font-semibold tabular-nums text-white/65" aria-live="polite">
            {slideNumber} / {String(pageCount).padStart(2, "0")}
          </p>
          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount}
            className="presentation-control"
            aria-label="Next slide"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </footer>
    </main>
  );
}
