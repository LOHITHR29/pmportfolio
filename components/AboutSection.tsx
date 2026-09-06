type Leadership = {
  title: string;
  role: string;
  date: string;
  bullets: string[];
};

const leadership: Leadership[] = [
  {
    title: "Expedite — No-Code Club",
    role: "Co-Founder",
    date: "Sep 2022",
    bullets: [
      "Founded Expedite, a student-run club focused on technology, innovation, and no-code development tools.",
      "Organised workshops, hackathons, and weekend sessions that put practical no-code skills in the hands of 500+ students.",
      "Built a foundation strong enough that the club continues to thrive — still the most active tech club on campus after my tenure ended.",
    ],
  },
  {
    title: "KL University CodeFest",
    role: "Hackathon Organiser",
    date: "Oct 2023",
    bullets: [
      "Organised a 24-hour coding marathon with 200+ participants, 40+ mentors, and 6 judges — end-to-end logistics, scoring, and ops.",
      "Coordinated mentor and judge involvement across the event, and ran the operational rhythm that kept teams unblocked through the night.",
      "Designed the team-collaboration flow and judging rubric so the event felt fair, transparent, and finishable for first-time hackers.",
    ],
  },
];

type CaseStudy = {
  num: string;
  company: string;
  role: string;
  year: string;
  summary: string;
  tags: string[];
  surface: string;
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    num: "01",
    company: "Netflix India",
    role: "Independent product case study",
    year: "2024",
    summary:
      "Sizing an underserved segment, mapping their onboarding journey, and prioritising what to ship next so a stalled growth curve can move again.",
    tags: ["growth", "RICE", "segmentation"],
    surface: "from-[#E50914] via-[#B0060F] to-[#3A0205]",
    href: "https://drive.google.com/file/d/1hYQZuLYdAJ93T-Gw4OKU400QdHF3dMEG/view?usp=drive_link",
  },
  {
    num: "02",
    company: "Spotify",
    role: "Independent product case study",
    year: "2026",
    summary:
      "Pinpointing the silent churn moment in the discovery flow — segmenting cohorts by tap-through behaviour and prioritising the smallest interventions to keep listeners on the next track.",
    tags: ["discovery", "retention", "RICE"],
    surface: "from-[#1ED760] via-[#1DB954] to-[#0F4D24]",
    href: "https://drive.google.com/file/d/1pSqXvEH6_3Mm3eBO-IgKLKIYh3vci4YS/view?usp=sharing",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f7f7f5 60%, #f0f0f0 100%)",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        {/* Bio */}
        <p
          className="text-[11px] uppercase font-medium mb-6"
          style={{ color: "#6b6b66", letterSpacing: "0.18em" }}
        >
          (about lohith)
        </p>
        <h2
          className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] max-w-[24ch]"
          style={{ color: "#1a1a1a", fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          <span style={{ color: "rgba(17,17,17,0.4)" }}>/</span>the bio,
          plainly stated.
        </h2>

        <div
          className="mt-10 lg:mt-12 max-w-[68ch] flex flex-col gap-5 text-[16px] lg:text-[18px] leading-[1.6]"
          style={{ color: "rgba(17,17,17,0.78)" }}
        >
          <p>
            Computer-science background that became a product career. The
            engineering fingerprints still show up in how I scope features,
            write specs, and partner with engineering teams.
          </p>
          <p>
            Outside the day job, I read about LLM evaluation more than
            I&rsquo;d like to admit, run, and chip away at small builds on
            weekends.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:lohithregalla123@gmail.com"
            style={{ backgroundColor: "#504FED" }}
            className="inline-flex items-center gap-2 rounded-full text-white px-5 py-2.5 text-[14px] lowercase hover:opacity-90 transition-opacity"
          >
            let&rsquo;s connect <span aria-hidden>→</span>
          </a>
          <a
            href="https://linkedin.com/in/lohithregalla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] text-[color:var(--text-strong)] px-5 py-2.5 text-[14px] lowercase hover:bg-[color:var(--text-strong)] hover:text-white transition-colors"
          >
            linkedin <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Leadership / extracurriculars */}
        <div className="mt-24 lg:mt-28">
          <p
            className="text-[11px] uppercase font-medium mb-6"
            style={{ color: "#6b6b66", letterSpacing: "0.18em" }}
          >
            (leadership & extracurriculars)
          </p>
          <h3
            className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] mb-4"
            style={{ color: "#1a1a1a", fontSize: "clamp(28px, 3.4vw, 44px)" }}
          >
            <span style={{ color: "rgba(17,17,17,0.4)" }}>/</span>built things
            outside the day job too.
          </h3>
          <p
            className="text-[15px] lg:text-[17px] leading-[1.6] max-w-[60ch] mb-10"
            style={{ color: "rgba(17,17,17,0.62)" }}
          >
            Communities and events I co-founded, organised, or kept running
            on the side — usually because nobody else would.
          </p>

          <div
            className="flex flex-col"
            style={{ borderTop: "1px solid rgba(17,17,17,0.12)" }}
          >
            {leadership.map((l) => (
              <article
                key={l.title}
                className="py-8 lg:py-10"
                style={{ borderBottom: "1px solid rgba(17,17,17,0.12)" }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4
                    className="font-bold leading-[1.25] text-[17px] lg:text-[20px]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {l.title}
                  </h4>
                  <p
                    className="text-[12px] lg:text-[13px] uppercase"
                    style={{
                      color: "rgba(17,17,17,0.55)",
                      letterSpacing: "0.14em",
                    }}
                  >
                    {l.date}
                  </p>
                </div>
                <p
                  className="text-[13px] lg:text-[14px] mb-5"
                  style={{
                    color: "#504FED",
                    letterSpacing: "0.02em",
                  }}
                >
                  {l.role}
                </p>
                <ul className="flex flex-col gap-3 max-w-[78ch]">
                  {l.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[14px] lg:text-[15px] leading-[1.6]"
                      style={{ color: "rgba(17,17,17,0.72)" }}
                    >
                      <span
                        aria-hidden
                        className="shrink-0 inline-block mt-[10px]"
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(17,17,17,0.35)",
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Case studies — 2 cards, each a click-through to its Drive link */}
        <div className="mt-24 lg:mt-28">
          <p
            className="text-[11px] uppercase font-medium mb-6"
            style={{ color: "#6b6b66", letterSpacing: "0.18em" }}
          >
            (case studies)
          </p>
          <h3
            className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] mb-4"
            style={{ color: "#1a1a1a", fontSize: "clamp(28px, 3.4vw, 44px)" }}
          >
            <span style={{ color: "rgba(17,17,17,0.4)" }}>/</span>independent
            case studies.
          </h3>
          <p
            className="text-[15px] lg:text-[17px] leading-[1.6] max-w-[60ch] mb-10"
            style={{ color: "rgba(17,17,17,0.62)" }}
          >
            Self-initiated product teardowns. Click any card to open the
            full PDF on Google Drive.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((c) => (
              <a
                key={c.num}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${c.company} case study`}
                className="group block bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(17,17,17,0.12)]"
                style={{ border: "1px solid rgba(17,17,17,0.08)" }}
              >
                {/* Visual */}
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${c.surface}`}
                >
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white">
                    <span
                      className="font-display lowercase font-bold leading-none"
                      style={{ fontSize: "48px" }}
                    >
                      {c.num}
                    </span>
                    <span
                      className="text-[11px] uppercase opacity-90"
                      style={{ letterSpacing: "0.16em" }}
                    >
                      {c.year}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <p
                      className="text-[11px] uppercase text-white/85"
                      style={{ letterSpacing: "0.14em" }}
                    >
                      {c.role}
                    </p>
                    <span
                      aria-hidden
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      ↗
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 lg:p-7">
                  <h4
                    className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em]"
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(22px, 2.4vw, 32px)",
                    }}
                  >
                    <span style={{ color: "rgba(17,17,17,0.4)" }}>/</span>
                    {c.company.toLowerCase()}
                  </h4>
                  <p
                    className="mt-3 text-[14px] lg:text-[15px] leading-[1.55] max-w-[44ch]"
                    style={{ color: "rgba(17,17,17,0.62)" }}
                  >
                    {c.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] lowercase rounded-full px-2.5 py-0.5"
                        style={{
                          border: "1px solid rgba(17,17,17,0.16)",
                          color: "rgba(17,17,17,0.62)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
