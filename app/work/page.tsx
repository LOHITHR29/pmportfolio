import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import WorkExperience from "@/components/WorkExperience";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product experience across AI assistants, university application journeys, growth experiments, and voice platforms.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const project = caseStudies[0];

  return (
    <>
      <Nav />
      <main id="main-content" className="relative z-10 flex-1">
        <PageHero
          eyebrow="work"
          title={<>built.<br />shipped. measured.</>}
          description="Product work across AI experiences, growth, education technology, and voice platforms. The details below separate direct evidence from broader team outcomes."
        />
        <WorkExperience />
        <section className="relative w-full bg-[color:var(--surface-muted)] py-20 lg:py-28">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
            <p className="section-kicker">(selected project)</p>
            <h2 className="section-title max-w-[18ch]">
              <span>/</span>open-source product work.
            </h2>
            <p className="section-description">
              Universal Intelligence extends the same product practice into protocol
              design, ecosystem strategy, documentation, and packaging.
            </p>
            <div className="max-w-[540px]">
              <CaseStudyCard study={project} headingLevel="h3" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
