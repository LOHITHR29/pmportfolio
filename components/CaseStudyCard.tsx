import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({
  study,
  headingLevel = "h2",
}: {
  study: CaseStudy;
  headingLevel?: "h2" | "h3" | "h4";
}) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      aria-label={`Read ${study.title} case study`}
      className="group block bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(17,17,17,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--primary)]"
      style={{ border: "1px solid rgba(17,17,17,0.08)" }}
    >
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${study.accent}`}>
        <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white">
          <span
            className="font-display lowercase font-bold leading-none"
            style={{ fontSize: "48px" }}
          >
            {study.num}
          </span>
          <span
            className="text-[11px] uppercase opacity-90"
            style={{ letterSpacing: "0.16em" }}
          >
            {study.year}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
          <p
            className="text-[11px] uppercase text-white/85"
            style={{ letterSpacing: "0.14em" }}
          >
            {study.status}
          </p>
          <span
            aria-hidden
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </div>
      </div>
      <div className="p-6 lg:p-7">
        <Heading
          className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em]"
          style={{ color: "#1a1a1a", fontSize: "clamp(22px, 2.4vw, 32px)" }}
        >
          <span style={{ color: "rgba(17,17,17,0.4)" }}>/</span>
          {study.title.toLowerCase()}
        </Heading>
        <p
          className="mt-3 text-[14px] lg:text-[15px] leading-[1.55] max-w-[44ch]"
          style={{ color: "rgba(17,17,17,0.62)" }}
        >
          {study.summary}
        </p>
        <p
          className="mt-4 text-[11px] uppercase"
          style={{ color: "#504FED", letterSpacing: "0.12em" }}
        >
          {study.company}
        </p>
      </div>
    </Link>
  );
}
