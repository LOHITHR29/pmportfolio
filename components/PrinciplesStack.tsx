type Principle = {
  n: string;
  title: string;
  desc: string;
};

const principles: Principle[] = [
  {
    n: "01",
    title: "discover before deciding",
    desc: "Most product mistakes happen before a single line of code. I lead discovery with user interviews, jobs-to-be-done framing, and competitive teardowns — so the team builds against a real problem, not a vague hunch. The cheapest pivot is the one you make before the sprint starts.",
  },
  {
    n: "02",
    title: "define the metric before the feature",
    desc: "A roadmap without a north star is a wishlist. I align the team on the one number that has to move — activation, D7 retention, conversion, NPS — and write success criteria into the PRD itself. Features get cut, scoped, or doubled-down on the same axis.",
  },
  {
    n: "03",
    title: "design for the second session",
    desc: "Launch-day delight is cheap; D2 return is the real test. I scope onboarding around the user's first 'aha' and design retention loops that earn the next visit, not push for it. Every screen answers a single question — why would they open this tomorrow?",
  },
  {
    n: "04",
    title: "ship the smallest thing that moves the metric",
    desc: "I'd rather ship a one-line copy change in week one than a reimagined experience in quarter two. Small instrumented bets compound. Big bets without evidence are just expensive opinions. Pick the smallest unit of work that can move the curve, instrument it, ship it, decide what's next.",
  },
  {
    n: "05",
    title: "iterate from evidence, not opinion",
    desc: "Most teams ship and move on. I treat launch as the start, not the finish — funnel readouts, cohort views, qualitative diaries, and a post-launch review baked into every sprint. Roadmaps stop being argument-driven and start being evidence-driven.",
  },
];

export default function PrinciplesStack() {
  return (
    <section
      id="practice"
      className="relative w-full bg-white"
      style={{ paddingTop: "80px", paddingBottom: "120px" }}
    >
      {/* Section heading — centered horizontally on the page */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mb-16 lg:mb-24 text-center">
        <p
          className="text-[11px] uppercase font-medium mb-4"
          style={{ color: "#6b6b66", letterSpacing: "0.14em" }}
        >
          (practice)
        </p>
        <h2
          className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] mx-auto"
          style={{ color: "#1a1a1a", fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          <span style={{ color: "rgba(17,17,17,0.4)" }}>/</span>my product
          practice.
        </h2>
        <p
          className="mt-6 text-[15px] lg:text-[17px] leading-[1.6] mx-auto max-w-[60ch]"
          style={{ color: "rgba(17,17,17,0.62)" }}
        >
          Five principles that shape how I scope, ship, and measure product
          work — from discovery through delivery. Scroll — each one stacks on
          top of the last.
        </p>
      </div>

      {/* Sticky-stacked principles. Each card has bg-white so when the next
          one slides up it cleanly paints over the previous. The trailing
          spacer lives INSIDE the same container so the 5th card holds its
          sticky position the same way the previous four do. */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {principles.map((p, i) => (
          <div
            key={p.n}
            className="sticky bg-white"
            style={{
              top: "96px",
              marginTop: i === 0 ? 0 : "48px",
              zIndex: 10 + i,
            }}
          >
            <article
              className="bg-white flex flex-col justify-center"
              style={{
                paddingTop: "64px",
                paddingBottom: "64px",
                minHeight: "calc(100vh - 96px)",
              }}
            >
              {/* Centered content column — number + title in one row, then
                  description, all anchored to the middle of the section. */}
              <div className="mx-auto max-w-[1100px] text-center">
                <div className="flex items-baseline justify-center gap-4 lg:gap-8 flex-wrap">
                  <span
                    className="font-display lowercase font-bold leading-[0.85] tracking-[-0.04em] gradient-number select-none"
                    style={{ fontSize: "clamp(56px, 8vw, 128px)" }}
                    aria-hidden
                  >
                    {p.n}
                  </span>
                  <h3
                    className="font-display lowercase font-bold leading-[0.95] tracking-[-0.03em]"
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(28px, 4.2vw, 64px)",
                    }}
                  >
                    <span style={{ color: "rgba(17,17,17,0.35)" }}>/</span>
                    {p.title}
                  </h3>
                </div>

                <p
                  className="mt-8 mx-auto text-[15px] lg:text-[17px] leading-[1.6] max-w-[60ch]"
                  style={{ color: "rgba(17,17,17,0.62)" }}
                >
                  {p.desc}
                </p>
              </div>
            </article>
          </div>
        ))}

      </div>
    </section>
  );
}
