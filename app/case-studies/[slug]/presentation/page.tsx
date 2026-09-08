import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPresentation from "@/components/CaseStudyPresentation";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

type PresentationPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies
    .filter((study) => study.presentation)
    .map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PresentationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study?.presentation) return {};

  return {
    title: `${study.title} — Full case study`,
    description: `View the complete ${study.company} case-study presentation by Lohith Regalla.`,
    alternates: { canonical: `/case-studies/${study.slug}/presentation` },
  };
}

export default async function PresentationPage({ params }: PresentationPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study?.presentation) notFound();

  return (
    <CaseStudyPresentation
      title={study.title}
      company={study.company}
      caseStudyHref={`/case-studies/${study.slug}`}
      pdfHref={study.document}
      pageCount={study.presentation.pageCount}
      slideBasePath={study.presentation.slideBasePath}
    />
  );
}
