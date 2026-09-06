import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

type CasePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: CasePageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <article className={`case-detail case-${study.accent}`}>
        <header className="case-hero shell">
          <Link className="back-link" href="/case-studies">
            ← All case studies
          </Link>
          <p className="eyebrow">{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="case-summary">{study.summary}</p>
          <dl className="case-meta">
            <div>
              <dt>Status</dt>
              <dd>{study.status}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{study.scope}</dd>
            </div>
          </dl>
        </header>

        <section className="case-proof shell" aria-label="Case study evidence">
          {study.proof.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <div className="case-sections shell">
          {study.sections.map((section, index) => (
            <section key={section.title}>
              <div className="case-section-heading">
                <span>0{index + 1}</span>
                <h2>{section.title}</h2>
              </div>
              <div className="case-section-copy">
                {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {study.links && (
          <section className="case-links shell">
            <h2>Source links</h2>
            <div className="button-row">
              {study.links.map((link) => (
                <a className="button secondary" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>
        )}
      </article>
      <section className="next-case shell">
        <p className="eyebrow">Continue</p>
        <h2>Review the full set of product decisions.</h2>
        <Link className="text-link" href="/case-studies">
          Browse all case studies <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
