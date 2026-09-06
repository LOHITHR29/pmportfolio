export type CaseSection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  scope: string;
  status: "Shipped work" | "Product experience" | "Independent concept";
  accent: "blue" | "orange" | "green" | "red";
  featured: boolean;
  proof: { value: string; label: string }[];
  sections: CaseSection[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "universal-intelligence",
    eyebrow: "Open-source product leadership",
    title: "Universal Intelligence",
    summary:
      "A framework-less protocol that gives models, tools, and agents one consistent contract across cloud, desktop, and browser environments.",
    scope: "Product direction, protocol design, packaging, documentation, and ecosystem strategy",
    status: "Shipped work",
    accent: "blue",
    featured: true,
    proof: [
      { value: "v1.2.0", label: "Published release" },
      { value: "2", label: "Package ecosystems" },
      { value: "300+", label: "Cataloged models" },
    ],
    sections: [
      {
        title: "The problem",
        body: [
          "AI applications often bind product logic to one provider, runtime, or framework. Moving between a cloud model, a local model, and a browser model then requires different code and different operational assumptions.",
          "The product question was how to make that choice portable without hiding the capabilities teams still need to control.",
        ],
      },
      {
        title: "What I led",
        bullets: [
          "Defined Model, Tool, and Agent as the core product primitives and documented their contracts, compatibility rules, and runtime requirements.",
          "Shaped a catalog spanning 29 local models and 305 remote entries, with automatic selection for device, quantization, and inference engine.",
          "Planned parity across Python, JavaScript, cloud, desktop, and browser use cases, including integrations with MCP, A2A, OpenRouter, and Hugging Face.",
          "Published version 1.2.0 to PyPI and npm with examples designed to reduce the time from installation to a working model or agent.",
        ],
      },
      {
        title: "Product decisions",
        bullets: [
          "Kept the protocol framework-less so teams could adopt the contract without replacing their stack.",
          "Made model selection declarative, which lets developers express requirements before choosing a provider or runtime.",
          "Treated Python and JavaScript parity as a product requirement rather than separate community efforts.",
          "Included free-tier model options to reduce the cost of evaluation and early prototyping.",
        ],
      },
      {
        title: "Current limits",
        body: [
          "The catalog is declarative and does not yet prove every model and runtime combination through automated tests. Streaming is also not fully wired across all paths. These are the next reliability gaps to close before the protocol can support broader production use.",
        ],
      },
    ],
    links: [
      { label: "View repository", href: "https://github.com/spacehendrix/universal-intelligence" },
      { label: "PyPI package", href: "https://pypi.org/project/universal-intelligence/" },
      { label: "npm package", href: "https://www.npmjs.com/package/universalintelligence" },
    ],
  },
  {
    slug: "ve-ai-experiences",
    eyebrow: "Product experience",
    title: "Improving AI assistant outcomes at Ve",
    summary:
      "Used conversation evidence, product analytics, and customer feedback to improve assistant behavior and prioritize product work.",
    scope: "Discovery, analytics, PRDs, prioritization, experimentation, and GTM collaboration",
    status: "Product experience",
    accent: "orange",
    featured: true,
    proof: [
      { value: "1,500+", label: "Conversations analyzed" },
      { value: "50+", label: "Ad variants supported" },
      { value: "AI", label: "Assistant and growth workflows" },
    ],
    sections: [
      {
        title: "The opportunity",
        body: [
          "AI assistant quality is visible in the conversations that succeed, stall, or fall back. The team needed a clearer way to turn those signals into product decisions across assistant behavior, onboarding, and proactive experiences.",
        ],
      },
      {
        title: "My approach",
        bullets: [
          "Reviewed 1,500+ conversations and grouped failure patterns, unmet intent, and points where context broke down.",
          "Combined qualitative findings with Mixpanel analysis and support feedback to shape priorities, PRDs, and sprint planning.",
          "Worked with product and engineering partners on context-aware behavior, fallback reduction, onboarding, and proactive experiences.",
          "Supported GTM and growth experiments, including AI workflows that generated 50+ ad creative variants and paid search tests that improved click-through rate.",
        ],
      },
      {
        title: "What changed",
        body: [
          "The work contributed to better successful-user outcomes and lower fallback behavior. The portfolio does not assign an exact percentage because the available source material does not provide a reliable baseline or attribution model.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "Conversation analysis becomes useful when it changes a backlog, an experiment, or a product rule. Reviewing transcripts alone is research activity. Connecting patterns to an owner and a decision is product work.",
        ],
      },
    ],
  },
  {
    slug: "netflix-india-growth",
    eyebrow: "Independent product case study",
    title: "Netflix India growth strategy",
    summary:
      "A concept study on reaching underserved entertainment users through stronger discovery, community relevance, and a focused adoption path.",
    scope: "Segmentation, user journey, concept prioritization, and measurement plan",
    status: "Independent concept",
    accent: "red",
    featured: true,
    proof: [
      { value: "India", label: "Market focus" },
      { value: "RICE", label: "Prioritization method" },
      { value: "Concept", label: "No production results claimed" },
    ],
    sections: [
      {
        title: "Question",
        body: [
          "How might Netflix improve adoption among Indian users who find the service expensive, struggle to discover locally relevant titles, or rely on recommendations from people they trust?",
        ],
      },
      {
        title: "Approach",
        bullets: [
          "Defined a target segment and mapped the path from awareness to first-week value.",
          "Separated price, discovery, and trust barriers so each could be evaluated independently.",
          "Used a RICE model to compare ideas and prioritize a community recommendation concept.",
          "Defined adoption, recommendation engagement, and retention measures that match the selected concept.",
        ],
      },
      {
        title: "Recommendation",
        body: [
          "Test a lightweight recommendation layer that helps users find titles through trusted people and relevant communities. Start with a narrow cohort and measure whether recommendations lead to starts, completed viewing, and return sessions.",
        ],
      },
      {
        title: "Limits",
        body: [
          "This is an independent concept and was not produced for Netflix. It presents a hypothesis and measurement plan, not shipped results. Revenue scenarios should be treated as directional assumptions and kept separate from product outcome metrics.",
        ],
      },
    ],
    links: [
      {
        label: "View original deck",
        href: "https://drive.google.com/file/d/1hYQZuLYdAJ93T-Gw4OKU400QdHF3dMEG/view?usp=drive_link",
      },
    ],
  },
  {
    slug: "spotify-discovery",
    eyebrow: "Independent product case study",
    title: "Spotify discovery for regional listeners",
    summary:
      "A concept study on helping regional listeners find a relevant next track with less searching and fewer dead ends.",
    scope: "User interviews, behavior mapping, MVP definition, prioritization, and business modeling",
    status: "Independent concept",
    accent: "green",
    featured: false,
    proof: [
      { value: "12", label: "User interviews" },
      { value: "1", label: "Focused MVP" },
      { value: "$3.9M", label: "Directional annual scenario" },
    ],
    sections: [
      {
        title: "Question",
        body: [
          "How might Spotify reduce the work regional listeners do between finishing one track and finding another that fits the same language, mood, or moment?",
        ],
      },
      {
        title: "Research",
        bullets: [
          "Interviewed 12 listeners about discovery habits, skipped recommendations, and the moments when they leave the app or repeat familiar music.",
          "Mapped the gap between what listeners intend to hear and what the current discovery surfaces make easy to find.",
          "Separated immediate discovery needs from broader social and mood-based concepts that would require more product complexity.",
        ],
      },
      {
        title: "Recommendation",
        body: [
          "Start with a regional Today shelf that gives listeners a fast path to current, locally relevant music. Defer social and mood features until the team can prove that the shelf improves starts, listening depth, and return behavior.",
        ],
      },
      {
        title: "Business scenario",
        body: [
          "The original concept assumed seven million eligible users, 8% conversion, a monthly price of INR 49, and 12 months. At an illustrative rate of INR 84 per US dollar, that equals approximately $3.9 million in annual revenue. It is a directional model, not a forecast or observed result.",
        ],
      },
    ],
    links: [
      {
        label: "View original deck",
        href: "https://drive.google.com/file/d/1pSqXvEH6_3Mm3eBO-IgKLKIYh3vci4YS/view?usp=sharing",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
