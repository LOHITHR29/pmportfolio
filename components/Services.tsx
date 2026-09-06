type Skill = {
  n: string;
  title: string;
  desc: string;
};

const skills: Skill[] = [
  {
    n: "01",
    title: "ai feature delivery",
    desc: "Taking AI capabilities from research to a feature people actually use — onboarding flows, defaults, error states, and the boring translation work that turns model output into something a user can act on without training.",
  },
  {
    n: "02",
    title: "onboarding & activation",
    desc: "Most AI products bleed users in the first 90 seconds. I build instrumented funnels, design contextual prompts that meet users at the moment of confusion, and ship the smallest changes that move the curve.",
  },
  {
    n: "03",
    title: "growth analytics & instrumentation",
    desc: "Funnel events, cohort views, behaviour dashboards. Turning opinion-driven roadmaps into experiment-driven ones — so the team argues about evidence, not features.",
  },
  {
    n: "04",
    title: "cross-functional execution",
    desc: "Sitting on the seam between PM, design, and engineering — keeping decisions documented, tradeoffs visible, and the end goal close enough that everyone steers toward it. PRDs that survive the sprint.",
  },
  {
    n: "05",
    title: "ai feature evaluation",
    desc: "Eval datasets, golden sets, hallucination handling, prompt iteration, capability vs. UX trade-offs. Making sure 'it works on the demo' becomes 'it works in production'.",
  },
];

export default function Services() {
  return (
    <section
      id="skills"
      className="relative w-full bg-white"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-7">
            <p
              className="text-[11px] uppercase font-medium text-[color:var(--text-muted)] mb-4"
              style={{ letterSpacing: "0.14em" }}
            >
              (skills)
            </p>
            <h2
              className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-strong)]"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              <span className="text-[color:var(--text-subtle)]">/</span>what i
              do.
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] lg:text-[17px] leading-[1.6] text-[color:var(--text-muted)] max-w-[44ch]">
            Five things I&rsquo;ve been building competence in — and what I think
            anyone shipping AI features at a real company should keep close at
            hand.
          </p>
        </div>

        <div className="flex flex-col">
          {skills.map((s, i) => (
            <article
              key={s.n}
              className={`grid grid-cols-12 gap-x-4 lg:gap-x-10 py-10 lg:py-14 ${
                i === 0
                  ? "border-t border-[color:rgba(0,0,0,0.08)]"
                  : ""
              } border-b border-[color:rgba(0,0,0,0.08)]`}
            >
              {/* Gradient number */}
              <div className="col-span-2 lg:col-span-2 flex items-start">
                <span
                  className="gradient-number font-display lowercase font-bold leading-[0.9] tracking-[-0.04em] select-none"
                  style={{ fontSize: "clamp(56px, 8vw, 128px)" }}
                  aria-hidden
                >
                  {s.n}
                </span>
              </div>

              {/* Slash + title + desc */}
              <div className="col-span-10 lg:col-span-10 flex flex-col lg:flex-row gap-4 lg:gap-12">
                <div className="lg:w-[44%] flex items-start gap-2">
                  <span
                    aria-hidden
                    className="font-display lowercase font-bold text-[color:var(--text-subtle)] leading-none"
                    style={{ fontSize: "clamp(24px, 3.5vw, 48px)" }}
                  >
                    /
                  </span>
                  <h3
                    className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-strong)]"
                    style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="lg:w-[56%] text-[15px] lg:text-[17px] leading-[1.6] text-[color:rgba(17,17,17,0.7)] max-w-[58ch]">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
