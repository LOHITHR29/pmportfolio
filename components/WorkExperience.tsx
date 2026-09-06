import Image from "next/image";

type Logo = { src: string; alt: string; widthRatio: number };

type Role = {
  id: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string;
  logoBg: string;
  brand: string;
  logo: Logo;
  story: string[];
  metrics: { value: string; label: string }[];
  skills: string[];
};

const roles: Role[] = [
  {
    id: "ve",
    role: "Product Manager — AI Agents & Platform",
    company: "Ve, the Intent Company",
    dates: "Aug 2025 — Present",
    location: "Hyderabad, India",
    description:
      "Zero-to-one PM on the agent product at Ve — the intent company. Acting as the seam between engineering, design, and marketing — owning the product across safety, platform, customer-comms, and the GTM layer that takes capability to market.",
    logoBg: "#e8f5fc",
    brand: "#2BA9DC",
    logo: { src: "/logos/ve.png", alt: "Ve", widthRatio: 1.85 },
    story: [
      "AI safety — scoped the jailbreak and prompt-injection eval rubrics, researched manipulation patterns specific to intent-based agents, and wired the mitigations directly into the pipeline so the user never sees them but an operator absolutely does.",
      "Platform & tooling — drove infrastructure cost reductions, pushed workflow automation that cut manual deploy steps, and shipped an internal review agent that lints text + policy before any pipeline goes out (issues caught at draft time, not post-launch).",
      "Customer & GTM — owned Intercom end-to-end (integration, behaviour-triggered automation, and the UX of every help conversation). Doubled as the product-support PM converting tickets into roadmap signal, and partnered with marketing on launch decks, blog narratives, and reproducible sales-demo scripts.",
    ],
    metrics: [
      { value: "0 → 1", label: "greenfield agent product — shipped end-to-end from spec to launch" },
      { value: "Safety v2", label: "agent-safety guardrails covering jailbreak + prompt injection" },
      { value: "Tickets → specs", label: "product-support loop feeding the next sprint's roadmap" },
    ],
    skills: [
      "0 → 1 product",
      "PRDs & spec writing",
      "Prototyping",
      "Discovery + user research",
      "Roadmapping",
      "AI safety",
      "AI agent design",
      "Platform infrastructure",
      "Workflow automation",
      "Internal tooling",
      "Intercom + customer comms",
      "Product support",
      "Product marketing",
      "Stakeholder alignment",
    ],
  },
  {
    id: "ambitio",
    role: "Associate Product Manager",
    company: "Ambitio",
    dates: "Sep 2023 — Aug 2025",
    location: "Bangalore, India",
    description:
      "Joined as Product Intern on the student university-application platform and was promoted to Associate Product Manager nine months in. Two years of agile delivery, journey redesign, and cross-functional execution.",
    logoBg: "#fdecec",
    brand: "#E40510",
    logo: { src: "/logos/ambito.png", alt: "Ambitio", widthRatio: 1 },
    story: [
      "Started as Product Intern in Sep 2023. Followed agile practices — sprint planning, backlog grooming, and ongoing feature delivery alongside product and operations. The internship was a tour through the full product loop: research → spec → ship → measure.",
      "Redesigned key steps in the student application journey to simplify decision flows and reduce friction. Introduced clearer progress-tracking features that improved application-step completion by ~9%. Ran user research with students and mentors to identify pain points in university selection and the broader application workflow — the discovery directly fed the next roadmap.",
      "Promoted to Associate Product Manager in Jun 2024 after consistent ownership and cross-functional execution. Led agile sprints across product, engineering, and operations — owning friction-point discovery, feature iteration, and stakeholder alignment with the operations team. Application completion and engagement metrics moved ~15% during the APM tenure.",
    ],
    metrics: [
      { value: "+15%", label: "completion + engagement during APM tenure" },
      { value: "+9%", label: "application-step completion as Intern" },
      { value: "9 months", label: "from Product Intern to APM promotion" },
    ],
    skills: [
      "User research",
      "Journey design",
      "Agile sprints",
      "Stakeholder alignment",
      "Cross-functional execution",
      "Friction analysis",
      "Feature iteration",
      "Roadmap",
    ],
  },
  {
    id: "samsung",
    role: "Product Intern",
    company: "Samsung R&D",
    dates: "2021 — 2022",
    location: "Bengaluru, India",
    description:
      "Product internship on the Bixby voice platform — owned the regression-test workflow for new voice intents and the release-stability practices that decide ship-or-no-ship at platform scale.",
    logoBg: "#eaecf6",
    brand: "#1428A0",
    logo: { src: "/logos/samsung.png", alt: "Samsung", widthRatio: 5 },
    story: [
      "Product intern on the Bixby voice platform team. Owned regression-test workflows for new voice intents — wrote test plans, ran them across regional builds, and triaged the gaps before they reached production.",
      "Sat between QA, the model team, and the platform PMs — translating engineering signal into product decisions about which intents were ready to ship and which needed another iteration. Every release-readiness call started from a shared dashboard I helped scope.",
      "Where I learned that 'platform stability' isn't a single number — it's a portfolio of small disciplines that together decide whether 50M+ users trust the product the next time they speak.",
    ],
    metrics: [
      { value: "120+ intents", label: "regression-tested across regional builds" },
      { value: "3 releases", label: "shipped under shared QA + product ownership" },
      { value: "0 P0", label: "voice-intent regressions in scope, post-launch" },
    ],
    skills: [
      "Product specs",
      "QA workflows",
      "Voice platforms",
      "Release management",
      "Cross-team",
      "Triage",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-white"
      style={{ paddingTop: "80px", paddingBottom: "100px" }}
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <h2
          className="font-display font-bold leading-[1.1] tracking-[-0.02em]"
          style={{ color: "#1a1a1a", fontSize: "clamp(28px, 3.4vw, 40px)" }}
        >
          Experience
        </h2>

        <div
          className="mt-10 lg:mt-12 flex flex-col"
          style={{ borderTop: "1px solid rgba(17,17,17,0.1)" }}
        >
          {roles.map((r) => (
            <article
              key={r.id}
              className="py-12 lg:py-16"
              style={{ borderBottom: "1px solid rgba(17,17,17,0.1)" }}
            >
              {/* Header — logo + role meta */}
              <div className="flex items-center gap-4 lg:gap-6 mb-10">
                <div className="shrink-0">
                  <div
                    className="inline-flex items-center justify-center rounded-xl"
                    style={{
                      height: "56px",
                      minWidth: "56px",
                      paddingLeft: "14px",
                      paddingRight: "14px",
                      backgroundColor: r.logoBg,
                    }}
                  >
                    <Image
                      src={r.logo.src}
                      alt={r.logo.alt}
                      width={Math.round(32 * r.logo.widthRatio)}
                      height={32}
                      style={{
                        width: "auto",
                        height: "32px",
                        objectFit: "contain",
                      }}
                      priority={false}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold leading-[1.3] text-[15px] lg:text-[17px]"
                    style={{ color: "#1a1a1a" }}
                  >
                    {r.role}
                  </h3>
                  <p
                    className="mt-1 text-[13px] lg:text-[14px] leading-[1.4]"
                    style={{ color: "rgba(17,17,17,0.55)" }}
                  >
                    <span>{r.company}</span>
                    <span className="mx-2" aria-hidden>·</span>
                    <span>{r.dates}</span>
                    <span className="mx-2 hidden sm:inline" aria-hidden>·</span>
                    <span className="hidden sm:inline">{r.location}</span>
                  </p>
                </div>
              </div>

              {/* Detail body — always visible */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-start-2 lg:col-span-11">
                  {/* Lead description */}
                  <p
                    className="text-[15px] lg:text-[17px] leading-[1.6] mb-8"
                    style={{ color: "rgba(17,17,17,0.78)" }}
                  >
                    {r.description}
                  </p>

                  {/* Story paragraphs */}
                  <div className="flex flex-col gap-5 mb-10 max-w-[68ch]">
                    {r.story.map((para, i) => (
                      <p
                        key={i}
                        className="text-[14px] lg:text-[16px] leading-[1.65]"
                        style={{ color: "rgba(17,17,17,0.7)" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Metrics */}
                  <p
                    className="text-[11px] uppercase font-medium mb-4"
                    style={{ color: "#6b6b66", letterSpacing: "0.18em" }}
                  >
                    what shipped
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
                    {r.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-2xl p-4 lg:p-5"
                        style={{
                          backgroundColor: "#f7f7f5",
                          border: "1px solid rgba(17,17,17,0.06)",
                        }}
                      >
                        <p
                          className="font-bold leading-[1.0] tracking-[-0.02em]"
                          style={{
                            color: r.brand,
                            fontSize: "clamp(20px, 2.2vw, 28px)",
                          }}
                        >
                          {m.value}
                        </p>
                        <p
                          className="mt-2 text-[13px] lg:text-[14px] leading-[1.45]"
                          style={{ color: "rgba(17,17,17,0.7)" }}
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <p
                    className="text-[11px] uppercase font-medium mb-3"
                    style={{ color: "#6b6b66", letterSpacing: "0.18em" }}
                  >
                    stack & focus
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {r.skills.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center text-[12px] lg:text-[13px] lowercase rounded-full px-3 py-1"
                        style={{
                          border: "1px solid rgba(17,17,17,0.14)",
                          color: "rgba(17,17,17,0.78)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
