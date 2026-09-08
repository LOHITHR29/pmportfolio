import Image from "next/image";
import { site } from "@/data/site";

type Role = {
  id: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string;
  logoBg: string;
  brand: string;
  logo: { src: string; alt: string; widthRatio: number };
  story: string[];
  metrics: { value: string; label: string }[];
  skills: string[];
};

const roles: Role[] = [
  {
    id: "ve",
    role: "Product Manager — AI Products",
    company: "Ve, the Intent Company",
    dates: "Aug 2025 – Present",
    location: site.location,
    description:
      "Product work across AI assistant experiences, product analytics, customer feedback, and growth workflows.",
    logoBg: "#e8f5fc",
    brand: "#176F8F",
    logo: { src: "/logos/ve.png", alt: "Ve", widthRatio: 1.85 },
    story: [
      "Analyzed 1,500+ user conversations to identify failure patterns, improve context-aware assistant behavior, and turn support signals into product priorities.",
      "Worked across onboarding, proactive product experiences, PRDs, sprint planning, experimentation, and Mixpanel analysis to improve successful user outcomes and reduce fallback behavior.",
      "Supported AI marketing workflows that produced 50+ ad creative variants and helped run paid search and content experiments, including tests that improved click-through rate.",
    ],
    metrics: [
      { value: "1,500+", label: "user conversations analyzed" },
      { value: "50+", label: "ad creative variants supported" },
      { value: "signal → sprint", label: "research translated into priorities" },
    ],
    skills: [
      "AI product management",
      "Conversation analysis",
      "Mixpanel",
      "PRDs",
      "Prioritization",
      "Sprint planning",
      "Experimentation",
      "GTM",
    ],
  },
  {
    id: "ambitio",
    role: "Associate Product Manager",
    company: "Ambitio",
    dates: "Sep 2023 – Aug 2025",
    location: "Bengaluru, India",
    description:
      "Joined as a Product Intern and earned a promotion to Associate Product Manager after nine months.",
    logoBg: "#fdecec",
    brand: "#E40510",
    logo: { src: "/logos/ambito.png", alt: "Ambitio", widthRatio: 1 },
    story: [
      "Redesigned steps in the university application journey and introduced clearer progress tracking, contributing to an approximately 9% improvement in application-step completion.",
      "Led sprint planning, backlog refinement, user research, and coordination across product, engineering, and operations.",
      "Iterated on application workflows during a period when completion and engagement improved by approximately 15%.",
    ],
    metrics: [
      { value: "~15%", label: "completion and engagement improvement" },
      { value: "~9%", label: "application-step completion improvement" },
      { value: "9 months", label: "from intern to APM promotion" },
    ],
    skills: [
      "User research",
      "Journey design",
      "Agile delivery",
      "Backlog refinement",
      "Stakeholder alignment",
      "Feature iteration",
    ],
  },
  {
    id: "samsung",
    role: "Product Intern",
    company: "Samsung R&D",
    dates: "Internship",
    location: "Bengaluru, India",
    description:
      "Supported release quality for Samsung Bixby and learned how platform teams make product decisions under reliability constraints.",
    logoBg: "#eaecf6",
    brand: "#1428A0",
    logo: { src: "/logos/samsung.png", alt: "Samsung", widthRatio: 5 },
    story: [
      "Helped test voice intents across builds, document issues, and support release-readiness discussions with product and engineering partners.",
      "Translated regression findings into clear product feedback for the Bixby voice experience.",
    ],
    metrics: [
      { value: "Bixby", label: "voice platform experience" },
      { value: "Release QA", label: "regression and readiness work" },
      { value: "Cross-team", label: "product and engineering feedback" },
    ],
    skills: [
      "Voice platforms",
      "Regression testing",
      "Release readiness",
      "Issue triage",
      "Cross-functional work",
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

        <div className="mt-10 lg:mt-12 flex flex-col border-t border-[color:rgba(17,17,17,0.1)]">
          {roles.map((role) => (
            <article
              key={role.id}
              className="py-12 lg:py-16 border-b border-[color:rgba(17,17,17,0.1)]"
            >
              <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-10">
                <div
                  className="inline-flex shrink-0 items-center justify-center rounded-xl px-[14px] h-14 min-w-14"
                  style={{ backgroundColor: role.logoBg }}
                >
                  <Image
                    src={role.logo.src}
                    alt={role.logo.alt}
                    width={Math.round(32 * role.logo.widthRatio)}
                    height={32}
                    style={{ width: "auto", height: "32px", objectFit: "contain" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold leading-[1.3] text-[15px] lg:text-[17px]">
                    {role.role}
                  </h3>
                  <p className="mt-1 text-[13px] lg:text-[14px] leading-[1.5] text-[color:rgba(17,17,17,0.65)]">
                    <span>{role.company}</span>
                    <span className="mx-2" aria-hidden>·</span>
                    <span>{role.dates}</span>
                    <span className="mx-2 hidden sm:inline" aria-hidden>·</span>
                    <span className="hidden sm:inline">{role.location}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-start-2 lg:col-span-11">
                  <p className="text-[15px] lg:text-[17px] leading-[1.6] mb-8 text-[color:rgba(17,17,17,0.78)]">
                    {role.description}
                  </p>
                  <ul className="flex flex-col gap-4 mb-10 max-w-[72ch]">
                    {role.story.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[14px] lg:text-[16px] leading-[1.65] text-[color:rgba(17,17,17,0.7)]"
                      >
                        <span className="list-dot" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="section-label">evidence</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
                    {role.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl p-4 lg:p-5 bg-[#f7f7f5] border border-[color:rgba(17,17,17,0.06)]"
                      >
                        <p
                          className="font-bold leading-[1.05] tracking-[-0.02em]"
                          style={{ color: role.brand, fontSize: "clamp(20px, 2.2vw, 28px)" }}
                        >
                          {metric.value}
                        </p>
                        <p className="mt-2 text-[13px] lg:text-[14px] leading-[1.45] text-[color:rgba(17,17,17,0.7)]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="section-label">stack &amp; focus</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center text-[12px] lg:text-[13px] lowercase rounded-full px-3 py-1 border border-[color:rgba(17,17,17,0.14)] text-[color:rgba(17,17,17,0.78)] tracking-[0.02em]"
                      >
                        {skill}
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
