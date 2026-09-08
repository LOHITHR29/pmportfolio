export type CaseStudy = {
  slug: string;
  num: string;
  title: string;
  company: string;
  eyebrow: string;
  year: string;
  status: "Shipped work" | "Product experience" | "Independent concept";
  summary: string;
  scope: string;
  document: string;
  presentation?: {
    pageCount: number;
    slideBasePath: string;
  };
  accent: string;
  proof: { value: string; label: string }[];
  sections: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "universal-intelligence",
    num: "01",
    title: "Universal Intelligence",
    company: "Internal product platform",
    eyebrow: "Product systems",
    year: "2026",
    status: "Product experience",
    summary:
      "Helped build a single internal repository that connects product context, current work, planned work, and the goals that guide feature delivery.",
    scope: "Product context, requirements architecture, development workflows, documentation, and onboarding",
    document: "/case-studies/universal-intelligence.pdf",
    accent: "from-[#504FED] via-[#6E5CF5] to-[#843DFF]",
    proof: [
      { value: "1", label: "shared product repository" },
      { value: "now + next", label: "current and planned work connected" },
      { value: "onboarding", label: "context for new teammates" },
    ],
    sections: [
      {
        title: "the problem",
        paragraphs: [
          "As a product grows, its goals, current behavior, planned work, and delivery decisions can become scattered across tools and conversations. That makes it harder to build each feature with the right context and slows down people joining the team.",
          "The product question was how to create one reliable place that explains what exists, what comes next, and how each feature should support the wider product goal.",
        ],
      },
      {
        title: "what I led",
        bullets: [
          "Helped build and organize a single repository around the product's current capabilities, planned work, goals, and delivery context.",
          "Connected requirements and feature context so development decisions can be checked against the intended user and product outcome while work is in progress.",
          "Documented product behavior, decisions, and open questions in a form that gives new teammates a practical starting point instead of relying on informal handoffs.",
          "Kept the structure useful for both daily feature development and longer-term planning as the product evolves.",
        ],
      },
      {
        title: "product decisions",
        bullets: [
          "Prioritized one discoverable source of product context over another disconnected set of documents.",
          "Mapped current behavior, future work, and goals together so a feature can be evaluated in context rather than in isolation.",
          "Treated onboarding as a product requirement: new teammates should be able to understand what the team is building and why.",
          "Kept product and development context close enough to delivery that it can inform decisions as requirements change.",
        ],
      },
      {
        title: "current limits",
        paragraphs: [
          "The repository only stays useful when its goals, decisions, and delivery context are maintained as the product changes. The next improvement is to make those updates part of the normal feature workflow and validate whether new teammates can find the context they need without a separate handoff.",
        ],
      },
    ],
  },
  {
    slug: "ve-ai-experiences",
    num: "02",
    title: "Improving AI assistant outcomes",
    company: "Ve",
    eyebrow: "Product experience",
    year: "2025 – Present",
    status: "Product experience",
    summary:
      "Used conversation evidence, product analytics, and customer feedback to improve assistant behavior and prioritize product work.",
    scope: "Discovery, analytics, PRDs, prioritization, experimentation, and GTM collaboration",
    document: "/case-studies/ve-ai-experiences.pdf",
    accent: "from-[#2BA9DC] via-[#504FED] to-[#843DFF]",
    proof: [
      { value: "1,500+", label: "conversations analyzed" },
      { value: "50+", label: "ad variants supported" },
      { value: "AI", label: "assistant and growth workflows" },
    ],
    sections: [
      {
        title: "the opportunity",
        paragraphs: [
          "AI assistant quality appears in the conversations that succeed, stall, or fall back. The team needed a clearer way to turn those signals into decisions across assistant behavior, onboarding, and proactive experiences.",
        ],
      },
      {
        title: "my approach",
        bullets: [
          "Reviewed 1,500+ conversations and grouped failure patterns, unmet intent, and points where context broke down.",
          "Combined qualitative findings with Mixpanel analysis and support feedback to shape priorities, PRDs, and sprint planning.",
          "Worked with product and engineering partners on context-aware behavior, fallback reduction, onboarding, and proactive experiences.",
          "Supported AI workflows that generated 50+ ad creative variants plus paid search and content experiments.",
        ],
      },
      {
        title: "what changed",
        paragraphs: [
          "The work contributed to better successful-user outcomes and lower fallback behavior. No exact percentage is stated because the available evidence does not provide a reliable baseline or attribution model.",
        ],
      },
      {
        title: "what I learned",
        paragraphs: [
          "Conversation analysis becomes useful when it changes a backlog, an experiment, or a product rule. Connecting a pattern to an owner and a decision is what turns research activity into product work.",
        ],
      },
    ],
  },
  {
    slug: "netflix-india-growth",
    num: "03",
    title: "Netflix India trusted discovery",
    company: "Netflix India",
    eyebrow: "Independent case study",
    year: "2024",
    status: "Independent concept",
    summary:
      "A focused concept for helping new members find a relevant first title through recommendations they understand and trust.",
    scope: "Research synthesis, journey decisions, concept prioritization, MVP definition, and validation planning",
    document: "/case-studies/netflix-india-growth.pdf",
    presentation: {
      pageCount: 13,
      slideBasePath: "/case-studies/netflix/pages",
    },
    accent: "from-[#E50914] via-[#B0060F] to-[#3A0205]",
    proof: [
      { value: "4", label: "concepts compared" },
      { value: "1", label: "focused MVP" },
      { value: "0", label: "production claims" },
    ],
    sections: [
      {
        title: "the decision",
        paragraphs: [
          "Test Community Picks: a lightweight discovery surface that explains why a title is relevant through familiar community context. Keep pricing outside this recommendation because the available research supports a discovery-and-trust problem, not a pricing intervention.",
        ],
      },
      {
        title: "evidence and synthesis",
        bullets: [
          "Separated observations from constructed personas, directional assumptions, and outcomes that have not been measured.",
          "Compressed the original onboarding journey into the decisions that matter for this concept: join, choose, start, and return.",
          "Compared four concepts with a transparent weighted score based on problem fit, learning value, feasibility, and risk.",
          "Documented that participant count, recruitment, interview dates, and theme frequency were not retained in the source material, so the findings are directional and cannot be generalized.",
        ],
      },
      {
        title: "mvp and validation",
        paragraphs: [
          "Start with curated community collections, a short relevance explanation, and a direct play or save action—without a social graph, messaging, creator tools, or a broader home redesign. Validate whether exposure improves qualified title starts, first-session completion, and seven-day return behavior, with hides and early exits as guardrails.",
        ],
      },
      {
        title: "limits",
        paragraphs: [
          "This independent study is a product hypothesis and measurement plan, not shipped Netflix work. The 2 million × $4 × 12 example equals a $96 million theoretical annual ceiling; it is not a subscriber forecast and is not evidence for the recommendation.",
        ],
      },
    ],
  },
  {
    slug: "spotify-discovery",
    num: "04",
    title: "Spotify discovery for regional listeners",
    company: "Spotify",
    eyebrow: "Independent case study",
    year: "2026",
    status: "Independent concept",
    summary:
      "A concept study on helping regional listeners find a relevant next track with less searching and fewer dead ends.",
    scope: "User interviews, behavior mapping, MVP definition, prioritization, and business modeling",
    document: "/case-studies/spotify-discovery.pdf",
    presentation: {
      pageCount: 12,
      slideBasePath: "/case-studies/spotify/pages",
    },
    accent: "from-[#1ED760] via-[#1DB954] to-[#0F4D24]",
    proof: [
      { value: "12", label: "user interviews" },
      { value: "4", label: "concepts compared" },
      { value: "1", label: "focused MVP" },
    ],
    sections: [
      {
        title: "the decision",
        paragraphs: [
          "Start with a regional Today shelf that gives listeners a fast path to current, locally relevant music. Defer mood, social, and free-tier policy concepts until the shelf demonstrates that it can improve discovery behavior.",
        ],
      },
      {
        title: "evidence and synthesis",
        bullets: [
          "Interviewed 12 listeners about discovery habits, skipped recommendations, and moments when they leave the app or repeat familiar music.",
          "Distinguished participant observations from constructed personas, illustrative scenarios, assumptions, and unmeasured outcomes.",
          "Recorded that recruitment, interview dates, and theme frequency are unavailable in the source material, limiting how broadly the findings can be applied.",
          "Compared four concepts with a weighted 1–5 decision score; the ranking is directional and does not claim measured RICE inputs.",
        ],
      },
      {
        title: "mvp and validation",
        paragraphs: [
          "The first release contains one regional shelf, lightweight language controls, and play/save actions. Test shelf engagement, qualified starts, listening depth, and seven-day return behavior, while monitoring skips and hides as guardrails.",
        ],
      },
      {
        title: "assumptions and economics",
        paragraphs: [
          "The original 7 million × 8% × INR 49 × 12 ÷ INR 84 calculation equals approximately $3.92 million, not $28 million. The deck also distinguishes an eight-percentage-point conversion increase from an 8% relative lift. Both are illustrative scenarios—not a Spotify baseline, forecast, or observed result.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
