import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
      <Nav />
      <main id="main-content" className="relative z-10 flex-1">
        <section className="page-hero relative w-full overflow-hidden">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 pt-40 sm:pt-36 lg:pt-44 pb-16 lg:pb-24">
            <Link
              className="link-underline inline-block text-[12px] text-[color:var(--text-muted)] mb-12"
              href="/case-studies"
            >
              ← all case studies
            </Link>
            <p className="section-kicker">({study.eyebrow})</p>
            <h1
              className="font-display lowercase font-bold leading-[0.98] tracking-[-0.04em] text-[color:var(--text-strong)] max-w-[18ch]"
              style={{ fontSize: "clamp(48px, 8vw, 112px)" }}
            >
              <span className="text-[color:var(--text-subtle)]">/</span>
              {study.title}
            </h1>
            <p className="mt-8 max-w-[60ch] text-[15px] lg:text-[18px] leading-[1.65] text-[color:var(--text-muted)]">
              {study.summary}
            </p>
            <dl className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 pt-6 border-t border-[color:rgba(17,17,17,0.12)]">
              <div className="md:col-span-3">
                <dt className="section-label">status</dt>
                <dd className="text-[14px] text-[color:rgba(17,17,17,0.78)]">{study.status}</dd>
              </div>
              <div className="md:col-span-6">
                <dt className="section-label">scope</dt>
                <dd className="text-[14px] text-[color:rgba(17,17,17,0.78)]">{study.scope}</dd>
              </div>
              <div className="md:col-span-3 md:text-right">
                <dt className="section-label">year</dt>
                <dd className="text-[14px] text-[color:rgba(17,17,17,0.78)]">{study.year}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="relative w-full bg-[color:var(--primary)] text-white">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-3">
            {study.proof.map((item) => (
              <div
                key={item.label}
                className="py-8 sm:px-6 sm:first:pl-0 border-b sm:border-b-0 sm:border-r last:border-0 border-white/20"
              >
                <p className="font-display font-bold text-[30px] lg:text-[40px] leading-none">
                  {item.value}
                </p>
                <p className="mt-2 text-[12px] lg:text-[13px] text-white/90 lowercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div>
          {study.sections.map((section, index) => (
            <section
              key={section.title}
              className={`case-study-section ${
                index % 2 === 0 ? "bg-white" : "bg-[color:var(--surface-muted)]"
              }`}
            >
              <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <header className="min-w-0 lg:col-span-5 lg:pr-4">
                  <p className="section-kicker">(0{index + 1})</p>
                  <h2 className="section-subtitle text-balance">
                    <span>/</span>{section.title}.
                  </h2>
                </header>
                <div className="case-study-copy min-w-0 lg:col-span-7 lg:pt-[42px] max-w-[66ch] text-[15px] lg:text-[17px] leading-[1.7] text-[color:rgba(17,17,17,0.72)]">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mb-5 last:mb-0">{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="flex flex-col gap-4">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="list-dot" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        {(study.document || study.links) && (
          <section
            className={`case-study-resources bg-white border-t border-[color:rgba(17,17,17,0.1)] ${
              study.links ? "" : "case-study-resources-document-only"
            }`}
          >
            <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-16 lg:py-20">
              <p className="section-kicker">(resources)</p>
              <div className="flex flex-wrap gap-3">
                {study.presentation && (
                  <Link
                    href={`/case-studies/${study.slug}/presentation`}
                    className="old-primary-button"
                  >
                    view full case study <span aria-hidden>↗</span>
                  </Link>
                )}
                <a
                  href={study.document}
                  download
                  className={`case-study-document-link ${
                    study.presentation ? "old-secondary-button" : "old-primary-button"
                  }`}
                >
                  download PDF <span aria-hidden>↓</span>
                </a>
                {study.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="old-secondary-button"
                  >
                    {link.label} <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="print-hide bg-[color:var(--surface-muted)]">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-16 lg:py-20">
            <Link className="old-primary-button" href="/case-studies">
              view all case studies <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
