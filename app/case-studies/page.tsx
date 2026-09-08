import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Product case studies covering AI platforms, assistant quality, trusted discovery, and regional music discovery.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="relative z-10 flex-1">
        <PageHero
          eyebrow="case studies"
          title="decisions in context."
          description="Each case explains the problem, my role, the evidence behind the decision, and the limits of what I can claim."
        />
        <section className="relative w-full bg-[color:var(--surface-muted)] py-20 lg:py-28">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
