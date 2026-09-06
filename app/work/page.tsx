import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { experiences } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Product experience across AI assistants, university application journeys, growth experiments, and voice platforms.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Product work grounded in customer evidence."
        description="I have worked across AI product experiences, education technology, growth experiments, and voice platforms. The consistent thread is turning user behavior into a clear next decision."
      />

      <section className="section shell experience-list" aria-label="Work experience">
        {experiences.map((experience, index) => (
          <article className="experience" key={experience.company}>
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-meta">
              <h2>{experience.company}</h2>
              <p>{experience.role}</p>
              <span>{experience.period}</span>
              <span>{experience.location}</span>
            </div>
            <div className="experience-detail">
              <p className="experience-summary">{experience.summary}</p>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="feature-band">
        <div className="shell feature-band-grid">
          <div>
            <p className="eyebrow light">Selected project</p>
            <h2>Universal Intelligence</h2>
          </div>
          <div>
            <p>
              I led product direction for an open-source protocol that standardizes how
              models, tools, and agents work across runtimes. Version 1.2.0 is published
              to both PyPI and npm.
            </p>
            <Link className="text-link light-link" href="/case-studies/universal-intelligence">
              Read the full project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
