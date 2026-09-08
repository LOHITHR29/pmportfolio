import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import { education, site } from "@/data/site";

const leadership = [
  {
    title: "Expedite — No-Code Club",
    role: "Co-Founder",
    date: "Sep 2022",
    bullets: [
      "Founded a student-run club focused on technology, innovation, and no-code development tools.",
      "Organised workshops, hackathons, and practical sessions that reached 500+ students.",
    ],
  },
  {
    title: "KL University CodeFest",
    role: "Hackathon Organiser",
    date: "Oct 2023",
    bullets: [
      "Helped organise a 24-hour coding marathon for 200+ participants with 40+ mentors and six judges.",
      "Coordinated event operations, the judging rubric, and the support flow for participating teams.",
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f7f7f5 60%, #f0f0f0 100%)",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <p className="section-kicker">(about lohith)</p>
        <h2 className="section-title max-w-[24ch]">
          <span>/</span>the bio, plainly stated.
        </h2>

        <div className="mt-10 lg:mt-12 max-w-[68ch] flex flex-col gap-5 text-[16px] lg:text-[18px] leading-[1.6] text-[color:rgba(17,17,17,0.78)]">
          <p>
            I started in computer science and moved into product by working on
            customer journeys, analytics, and delivery with engineering teams.
            The technical foundation still shapes how I scope features and reason
            about system constraints.
          </p>
          <p>
            I am currently pursuing a Master of Engineering Management &amp;
            Leadership at Rice University. Based in {site.location}, I am focused
            on AI product management, product strategy, growth, and technology
            consulting.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="old-primary-button"
          >
            let&rsquo;s connect <span aria-hidden>→</span>
          </a>
          <a
            href={site.resume}
            className="old-secondary-button"
          >
            request resume <span aria-hidden>→</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="old-secondary-button"
          >
            linkedin <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="mt-24 lg:mt-28">
          <p className="section-kicker">(education)</p>
          <h3 className="section-subtitle">
            <span>/</span>engineering and management.
          </h3>
          <div className="mt-10 border-t border-[color:rgba(17,17,17,0.12)]">
            {education.map((item) => (
              <article
                key={item.school}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-7 lg:py-9 border-b border-[color:rgba(17,17,17,0.12)]"
              >
                <h4 className="md:col-span-4 font-bold text-[17px] lg:text-[20px]">
                  {item.school}
                </h4>
                <p className="md:col-span-5 text-[14px] lg:text-[16px] leading-[1.55] text-[color:rgba(17,17,17,0.72)]">
                  {item.degree}
                </p>
                <p className="md:col-span-3 md:text-right text-[12px] lg:text-[13px] uppercase text-[color:rgba(17,17,17,0.55)] tracking-[0.12em]">
                  {item.dates}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 lg:mt-28">
          <p className="section-kicker">(leadership &amp; extracurriculars)</p>
          <h3 className="section-subtitle">
            <span>/</span>built things outside the day job too.
          </h3>
          <p className="section-description">
            Communities and events I co-founded or helped run while studying.
          </p>

          <div className="border-t border-[color:rgba(17,17,17,0.12)]">
            {leadership.map((item) => (
              <article
                key={item.title}
                className="py-8 lg:py-10 border-b border-[color:rgba(17,17,17,0.12)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="font-bold leading-[1.25] text-[17px] lg:text-[20px]">
                    {item.title}
                  </h4>
                  <p className="text-[12px] lg:text-[13px] uppercase text-[color:rgba(17,17,17,0.55)] tracking-[0.14em]">
                    {item.date}
                  </p>
                </div>
                <p className="text-[13px] lg:text-[14px] mb-5 text-[color:var(--primary)]">
                  {item.role}
                </p>
                <ul className="flex flex-col gap-3 max-w-[78ch]">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-[14px] lg:text-[15px] leading-[1.6] text-[color:rgba(17,17,17,0.72)]"
                    >
                      <span className="list-dot" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 lg:mt-28">
          <p className="section-kicker">(case studies)</p>
          <h3 className="section-subtitle">
            <span>/</span>product decisions in context.
          </h3>
          <p className="section-description">
            Shipped work, operating experience, and independent concepts are
            labeled clearly. Each case includes the evidence and its limits.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} headingLevel="h4" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
