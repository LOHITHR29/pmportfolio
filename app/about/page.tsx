import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { capabilities, education, leadership, site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Lohith Regalla, a Rice University MEM student and product manager with a computer science foundation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A technical foundation shaped my product career."
        description="I studied computer science, moved into product by working directly on customer journeys and delivery, and now study Engineering Management at Rice University."
      />

      <section className="section shell about-grid">
        <div className="about-story">
          <p className="eyebrow">My path</p>
          <h2>I like the point where customer behavior meets system constraints.</h2>
        </div>
        <div className="long-copy">
          <p>
            My technical background helps me ask better questions about feasibility,
            data, and failure modes. Product experience taught me that the right build
            still depends on the problem, the user, and the evidence behind a priority.
          </p>
          <p>
            At Ve, I work with conversation data, analytics, feedback, and growth
            experiments around AI products. At Ambitio, I worked on student application
            journeys and cross-functional delivery. I also led Universal Intelligence,
            an open-source protocol published to Python and JavaScript ecosystems.
          </p>
          <p>
            I am interested in AI product management, product strategy, product
            marketing, go-to-market work, program management, and technology consulting.
          </p>
          <Link className="text-link" href={site.resume} download>
            Download resume <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>

      <section className="section surface-section">
        <div className="shell two-column-section">
          <div>
            <p className="eyebrow">Education</p>
            <h2>Learning across engineering and management.</h2>
          </div>
          <div className="stack-list">
            {education.map((item) => (
              <article key={item.school}>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Skills I use in the work.</h2>
        </div>
        <div className="capability-grid bordered">
          {capabilities.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell two-column-section leadership-section">
        <div>
          <p className="eyebrow">Leadership</p>
          <h2>Communities I helped build.</h2>
        </div>
        <div className="stack-list">
          {leadership.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.role}</p>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
