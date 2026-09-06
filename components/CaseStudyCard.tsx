import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyCard({
  study,
  headingLevel = "h3",
}: {
  study: CaseStudy;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article className={`case-card case-${study.accent}`}>
      <div className="case-card-top">
        <span>{study.status}</span>
        <span aria-hidden="true">Details</span>
      </div>
      <div className="case-card-body">
        <p className="eyebrow">{study.eyebrow}</p>
        <Heading>{study.title}</Heading>
        <p>{study.summary}</p>
      </div>
      <div className="case-card-proof" aria-label="Evidence">
        {study.proof.slice(0, 2).map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <Link className="text-link" href={`/case-studies/${study.slug}`}>
        Read case study <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
