import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Product case studies covering AI platforms, assistant quality, growth strategy, and music discovery.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case studies"
        title="How I made each product decision."
        description="Each case explains the problem, my role, the decision process, and what the evidence can support. Shipped work and independent concepts are labeled separately."
      />
      <section className="section shell">
        <div className="case-grid all-cases">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} headingLevel="h2" />
          ))}
        </div>
      </section>
    </>
  );
}
