import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { caseStudies, type CaseStudy, type Priority } from "@/data/case-studies";

// Internal case studies have all deep-dive fields populated. External ones
// (which redirect to a Drive PDF etc.) only have the teaser fields.
type InternalCaseStudy = CaseStudy & {
  context: NonNullable<CaseStudy["context"]>;
  segment: NonNullable<CaseStudy["segment"]>;
  research: NonNullable<CaseStudy["research"]>;
  insights: NonNullable<CaseStudy["insights"]>;
  persona: NonNullable<CaseStudy["persona"]>;
  journey: NonNullable<CaseStudy["journey"]>;
  trueProblem: NonNullable<CaseStudy["trueProblem"]>;
  solutions: NonNullable<CaseStudy["solutions"]>;
  chosenRationale: NonNullable<CaseStudy["chosenRationale"]>;
  userStories: NonNullable<CaseStudy["userStories"]>;
  metrics: NonNullable<CaseStudy["metrics"]>;
};

function isInternal(c: CaseStudy): c is InternalCaseStudy {
  return (
    !c.external &&
    !!c.context &&
    !!c.segment &&
    !!c.research &&
    !!c.insights &&
    !!c.persona &&
    !!c.journey &&
    !!c.trueProblem &&
    !!c.solutions &&
    !!c.chosenRationale &&
    !!c.userStories &&
    !!c.metrics
  );
}

export function generateStaticParams() {
  // Only pre-render internal case study pages. External entries redirect
  // and don't need a static build.
  return caseStudies.filter(isInternal).map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  if (c.external) redirect(c.external);
  if (!isInternal(c)) notFound();

  return (
    <>
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero c={c} />
        <Context c={c} />
        <Segment c={c} />
        <Research c={c} />
        <Insights c={c} />
        <Persona c={c} />
        <Journey c={c} />
        <TrueProblem c={c} />
        <Solutions c={c} />
        <UserStories c={c} />
        <Metrics c={c} />
        <NextCaseStudy current={c} />
      </main>
      <Footer />
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Sections
// ────────────────────────────────────────────────────────────────────────────

function Hero({ c }: { c: InternalCaseStudy }) {
  return (
    <section className="relative w-full pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span
            aria-hidden
            className={`inline-block w-3 h-3 rounded-full bg-gradient-to-br ${c.accent}`}
          />
          <span className="text-[12px] tracking-[0.2em] uppercase text-[color:var(--olive-light)]">
            {c.num} · {c.company}
          </span>
        </div>
        <h1 className="font-display text-[36px] sm:text-[52px] lg:text-[72px] xl:text-[80px] leading-[1.05] tracking-[-0.02em] text-[color:var(--olive)] max-w-[22ch]">
          {c.problemLine}
        </h1>
        <p className="mt-8 max-w-[58ch] text-[16px] lg:text-[18px] leading-[1.6] text-[color:var(--olive-light)]">
          {c.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
          <span>{c.title}</span>
          <span>{c.role}</span>
          <span>{c.dates}</span>
        </div>
      </div>
    </section>
  );
}

function Context({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="Context" title={c.context.title}>
      <div className="flex flex-col gap-4 max-w-[64ch]">
        {c.context.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[15px] lg:text-[17px] leading-[1.7] text-[color:var(--olive-light)]"
          >
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}

function Segment({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="Segment" title={c.segment.label}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 max-w-[900px]">
        {c.segment.fields.map((f) => (
          <div key={f.label} className="flex flex-col gap-1">
            <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
              {f.label}
            </p>
            <p className="font-display text-[18px] lg:text-[22px] leading-tight text-[color:var(--olive)]">
              {f.value}
            </p>
          </div>
        ))}
      </div>
      {c.segment.note && (
        <p className="mt-8 max-w-[64ch] text-[14px] lg:text-[15px] leading-[1.65] text-[color:var(--olive-light)] italic">
          {c.segment.note}
        </p>
      )}
    </Section>
  );
}

function Research({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="Research" title="How I learned the problem" muted>
      <p className="text-[15px] lg:text-[17px] leading-[1.7] text-[color:var(--olive-light)] max-w-[64ch]">
        {c.research.approach}
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <Subblock label="1:1 questions">
          <ul className="flex flex-col gap-2">
            {c.research.questions.map((q, i) => (
              <li
                key={i}
                className="flex gap-3 text-[14px] lg:text-[15px] leading-[1.6] text-[color:var(--olive)]"
              >
                <span className="text-[color:var(--olive-light)] shrink-0">
                  {i + 1}.
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </Subblock>

        <Subblock label="Going-in hypotheses">
          <ul className="flex flex-col gap-2">
            {c.research.hypotheses.map((h, i) => (
              <li
                key={i}
                className="flex gap-3 text-[14px] lg:text-[15px] leading-[1.6] text-[color:var(--olive)]"
              >
                <span
                  className="mt-[0.55em] w-[6px] h-[6px] rounded-full bg-[color:var(--olive-light)] shrink-0"
                  aria-hidden
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Subblock>
      </div>
    </Section>
  );
}

function Insights({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="Insights" title="What I found">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <InsightColumn title="Behaviour" items={c.insights.behaviour} />
        <InsightColumn title="Pain points" items={c.insights.painPoints} />
        <InsightColumn title="Expectations" items={c.insights.expectations} />
      </div>
    </Section>
  );
}

function InsightColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)] mb-4">
        {title}
      </p>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-[14px] lg:text-[15px] leading-[1.6] text-[color:var(--olive)]"
          >
            <span
              className="mt-[0.55em] w-[5px] h-[5px] rounded-full bg-[color:var(--olive-light)] shrink-0"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Persona({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="Persona" title="Who we built for" muted>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-4">
          <div
            className={`relative w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-gradient-to-br ${c.accent} grid place-items-center`}
          >
            <span className="font-display italic text-white/95 text-[80px] lg:text-[100px] leading-none">
              {c.persona.name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-5">
          <h3 className="font-display text-[24px] lg:text-[32px] leading-tight text-[color:var(--olive)]">
            {c.persona.name}
          </h3>
          <p className="text-[12px] tracking-[0.14em] uppercase text-[color:var(--olive-light)]">
            {c.persona.role}
          </p>
          <p className="text-[15px] lg:text-[17px] leading-[1.7] text-[color:var(--olive-light)] max-w-[60ch]">
            {c.persona.description}
          </p>
          <blockquote className="relative pl-6 border-l-2 border-[color:var(--olive-mute)] max-w-[56ch]">
            <p className="font-display italic text-[18px] lg:text-[22px] leading-[1.45] text-[color:var(--olive)]">
              “{c.persona.quote}”
            </p>
          </blockquote>
        </div>
      </div>
    </Section>
  );
}

function Journey({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="Journey" title={c.journey.title}>
      <p className="text-[14px] lg:text-[15px] italic text-[color:var(--olive-light)] max-w-[60ch] mb-10">
        {c.journey.scenario}
      </p>
      <div className="flex flex-col gap-8">
        {c.journey.steps.map((s) => (
          <article
            key={s.n}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-6 border-t border-[color:var(--olive-mute)]"
          >
            <p className="lg:col-span-2 font-display text-[18px] lg:text-[22px] text-[color:var(--olive-light)] leading-tight">
              {s.n}
            </p>
            <JourneyCell label="Doing">{s.doing}</JourneyCell>
            <JourneyCell label="Thinking" italic>
              {s.thinking}
            </JourneyCell>
            <JourneyCell label="Saying" italic>
              “{s.saying}”
            </JourneyCell>
          </article>
        ))}
      </div>
    </Section>
  );
}

function JourneyCell({
  label,
  children,
  italic = false,
}: {
  label: string;
  children: React.ReactNode;
  italic?: boolean;
}) {
  return (
    <div className="lg:col-span-3 flex flex-col gap-2">
      <p className="text-[11px] tracking-[0.18em] uppercase text-[color:var(--olive-light)]">
        {label}
      </p>
      <p
        className={`text-[14px] lg:text-[15px] leading-[1.55] text-[color:var(--olive)] ${
          italic ? "italic" : ""
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function TrueProblem({ c }: { c: InternalCaseStudy }) {
  const tp = c.trueProblem;
  return (
    <Section eyebrow="The real problem" title="What's actually going on" muted>
      <blockquote className="relative pl-6 border-l-2 border-[color:var(--olive)] max-w-[64ch] mb-12">
        <p className="font-display italic text-[20px] lg:text-[26px] leading-[1.4] text-[color:var(--olive)]">
          {tp.statement}
        </p>
      </blockquote>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-[1000px]">
        <ProblemBlock label="Why this is the real problem">{tp.why}</ProblemBlock>
        <ProblemBlock label="Who's facing it">{tp.whoFaces}</ProblemBlock>
        <ProblemBlock label="Why solve it now">{tp.whyNow}</ProblemBlock>
        <ProblemBlock label="Value for users">{tp.valueForUsers}</ProblemBlock>
        <ProblemBlock label="Value for the business" full>
          {tp.valueForBusiness}
        </ProblemBlock>
      </div>
    </Section>
  );
}

function ProblemBlock({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-2 ${full ? "lg:col-span-2" : ""}`}>
      <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
        {label}
      </p>
      <p className="text-[14px] lg:text-[16px] leading-[1.65] text-[color:var(--olive)]">
        {children}
      </p>
    </div>
  );
}

function Solutions({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="Solutions" title="What I considered, and what I picked">
      <div className="overflow-x-auto -mx-6 lg:mx-0">
        <table className="w-full min-w-[760px] text-[13px] lg:text-[14px]">
          <thead>
            <tr className="border-b border-[color:var(--olive-mute)] text-[11px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
              <th className="text-left py-3 px-3 lg:px-4">Solution</th>
              <th className="py-3 px-3">Reach</th>
              <th className="py-3 px-3">Impact</th>
              <th className="py-3 px-3">Confidence</th>
              <th className="py-3 px-3">Effort</th>
              <th className="py-3 px-3">Rank</th>
            </tr>
          </thead>
          <tbody>
            {c.solutions.map((s) => (
              <tr
                key={s.name}
                className={`border-b border-[color:var(--olive-mute)] ${
                  s.rank === 1
                    ? "bg-[color:var(--cream-light)]"
                    : ""
                }`}
              >
                <td className="py-4 px-3 lg:px-4 align-top">
                  <p className="font-display text-[16px] lg:text-[18px] text-[color:var(--olive)] leading-tight">
                    {s.name}
                    {s.rank === 1 && (
                      <span className="ml-2 inline-block text-[10px] tracking-[0.16em] uppercase text-[color:var(--accent)] align-middle border border-[color:var(--accent)] rounded-full px-2 py-0.5">
                        Chosen
                      </span>
                    )}
                  </p>
                  <ul className="mt-2 flex flex-col gap-1">
                    {s.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-[12px] lg:text-[13px] leading-[1.5] text-[color:var(--olive-light)]"
                      >
                        — {b}
                      </li>
                    ))}
                  </ul>
                </td>
                <RICECell value={s.reach} />
                <RICECell value={s.impact} />
                <RICECell value={s.confidence} />
                <RICECell value={s.effort} invert />
                <td className="py-4 px-3 text-center align-top font-display text-[20px] text-[color:var(--olive)]">
                  {s.rank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-10 max-w-[64ch] text-[14px] lg:text-[16px] leading-[1.7] text-[color:var(--olive-light)] italic">
        <span className="not-italic font-medium text-[color:var(--olive)]">
          Why this one:
        </span>{" "}
        {c.chosenRationale}
      </p>
    </Section>
  );
}

function RICECell({
  value,
  invert = false,
}: {
  value: Priority;
  invert?: boolean;
}) {
  // For Effort, "L" is good (less effort) — invert the colour treatment.
  const goodIsHigh = !invert;
  const tone =
    (goodIsHigh && value === "H") || (!goodIsHigh && value === "L")
      ? "good"
      : (goodIsHigh && value === "L") || (!goodIsHigh && value === "H")
        ? "bad"
        : "mid";
  const styles =
    tone === "good"
      ? "bg-[#e6efd7] text-[#3a4a1e]"
      : tone === "bad"
        ? "bg-[#f7d9d2] text-[#7a2a00]"
        : "bg-[#f0e8d0] text-[#6b5a1e]";
  return (
    <td className="py-4 px-3 text-center align-top">
      <span
        className={`inline-flex w-7 h-7 rounded-full items-center justify-center text-[12px] font-medium ${styles}`}
      >
        {value}
      </span>
    </td>
  );
}

function UserStories({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="User stories" title="What I shipped, in user voice" muted>
      <div className="flex flex-col gap-10">
        {c.userStories.map((g) => (
          <div key={g.audience}>
            <p className="font-display italic text-[18px] lg:text-[22px] text-[color:var(--olive)] mb-4">
              {g.audience}
            </p>
            <ul className="flex flex-col gap-2">
              {g.stories.map((s, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[14px] lg:text-[15px] leading-[1.65] text-[color:var(--olive)] max-w-[68ch]"
                >
                  <span
                    className="mt-[0.55em] w-[6px] h-[6px] rounded-full bg-[color:var(--olive-light)] shrink-0"
                    aria-hidden
                  />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Metrics({ c }: { c: InternalCaseStudy }) {
  return (
    <Section eyebrow="Metrics" title="How we knew it was working">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)] mb-3">
            North-star metric
          </p>
          <p className="font-display italic text-[20px] lg:text-[26px] leading-[1.35] text-[color:var(--olive)]">
            {c.metrics.nsm}
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <MetricColumn label="Primary signals" items={c.metrics.primary} />
          <MetricColumn label="Retention" items={c.metrics.retention} />
          <MetricColumn label="Business" items={c.metrics.business} />
        </div>
      </div>
    </Section>
  );
}

function MetricColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.16em] uppercase text-[color:var(--olive-light)] mb-3">
        {label}
      </p>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[13px] lg:text-[14px] leading-[1.55] text-[color:var(--olive)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NextCaseStudy({ current }: { current: CaseStudy }) {
  const idx = caseStudies.findIndex((c) => c.slug === current.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  return (
    <section className="relative w-full bg-[color:var(--cream-light)] mt-8 lg:mt-16">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-16 lg:py-20">
        <Link
          href={`/work/${next.slug}`}
          className="group block max-w-[800px]"
        >
          <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)] mb-3">
            Next case study
          </p>
          <div className="flex items-center gap-4">
            <span
              aria-hidden
              className={`inline-block w-3 h-3 rounded-full bg-gradient-to-br ${next.accent} shrink-0`}
            />
            <span className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
              {next.num} · {next.company}
            </span>
          </div>
          <h2 className="mt-4 font-display text-[28px] lg:text-[44px] leading-[1.05] tracking-[-0.015em] text-[color:var(--olive)] group-hover:translate-x-1 transition-transform">
            {next.problemLine} →
          </h2>
        </Link>
        <Link
          href="/work"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[color:var(--olive)] px-5 py-2.5 text-[14px] text-[color:var(--olive)] hover:bg-[color:var(--olive)] hover:text-[color:var(--cream)] transition-colors"
        >
          ← Back to all work
        </Link>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Section + Subblock helpers (consistent eyebrow/title block per section)
// ────────────────────────────────────────────────────────────────────────────

function Section({
  eyebrow,
  title,
  children,
  muted = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section
      className={`relative w-full ${
        muted ? "bg-[color:var(--cream-light)]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <header className="lg:col-span-3">
            <p className="text-[12px] tracking-[0.2em] uppercase text-[color:var(--olive-light)] mb-3">
              {eyebrow}
            </p>
            <h2 className="font-display text-[24px] lg:text-[32px] leading-[1.1] tracking-[-0.015em] text-[color:var(--olive)]">
              {title}
            </h2>
          </header>
          <div className="lg:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Subblock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[12px] tracking-[0.16em] uppercase text-[color:var(--olive-light)]">
        {label}
      </p>
      {children}
    </div>
  );
}
