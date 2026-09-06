import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import { capabilities, site } from "@/data/portfolio";

export default function Home() {
  const featured = caseStudies.filter((study) => study.featured);

  return (
    <>
      <section className="hero shell">
        <div className="hero-kicker">
          <span>Product manager</span>
          <span>Rice University MEM</span>
        </div>
        <h1>
          I turn complex AI systems into <em>clear product decisions.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I am Lohith Regalla, a product manager with a computer science foundation.
            I work across discovery, analytics, delivery, and go-to-market strategy.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/case-studies">
              View selected work
            </Link>
            <Link className="button secondary" href={site.resume} download>
              Download resume
            </Link>
          </div>
        </div>
      </section>

      <section className="proof-bar" aria-label="Selected evidence">
        <div className="shell proof-grid">
          <div>
            <strong>1,500+</strong>
            <span>User conversations analyzed</span>
          </div>
          <div>
            <strong>v1.2.0</strong>
            <span>Open-source AI protocol shipped</span>
          </div>
          <div>
            <strong>Rice MEM</strong>
            <span>Engineering and management</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Selected product work.</h2>
          </div>
          <p>
            Shipped product work, operating experience, and independent concepts are
            labeled clearly so you can judge each project on the right terms.
          </p>
        </div>
        <div className="case-grid">
          {featured.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <Link className="text-link section-link" href="/case-studies">
          See all case studies <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="section surface-section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">How I work</p>
            <h2>Product discovery through delivery.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <article key={capability.title}>
                <span className="index">0{index + 1}</span>
                <h3>{capability.title}</h3>
                <p>{capability.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section shell">
        <p className="eyebrow">Current focus</p>
        <h2>AI products that help people complete real work.</h2>
        <p>
          I am pursuing product management, product strategy, program management,
          and technology consulting opportunities in the United States.
        </p>
        <div className="button-row">
          <Link className="button primary" href="/work">
            Review experience
          </Link>
          <a className="button secondary" href={`mailto:${site.email}`}>
            Contact me
          </a>
        </div>
      </section>
    </>
  );
}
