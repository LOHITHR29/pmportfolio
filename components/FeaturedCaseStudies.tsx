import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

const featuredSlugs = ["netflix-india-growth", "spotify-discovery"];

export default function FeaturedCaseStudies() {
  const featuredStudies = featuredSlugs
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter((study): study is NonNullable<typeof study> => Boolean(study));

  return (
    <section
      aria-labelledby="featured-case-studies-title"
      className="relative w-full bg-[color:var(--surface-muted)] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-end gap-7 lg:mb-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="section-kicker">(selected case studies)</p>
            <h2
              id="featured-case-studies-title"
              className="section-title max-w-[15ch]"
            >
              <span>/</span>decisions carried through.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <p className="max-w-[42ch] text-[14px] leading-[1.6] text-[color:var(--text-muted)] lg:text-[16px]">
              Two independent studies rebuilt around evidence boundaries, one
              focused product decision, and a matching validation plan.
            </p>
            <Link
              href="/case-studies"
              className="old-secondary-button mt-5"
            >
              view all case studies <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {featuredStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} headingLevel="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
