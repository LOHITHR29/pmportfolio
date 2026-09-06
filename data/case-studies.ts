// Case studies surfaced on the Work page. Each card links either to an
// internal detail page (`/work/[slug]`) or, if `external` is set, opens
// the source document in a new tab.

export type Priority = "L" | "M" | "H";

export type CaseStudy = {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  role: string;
  company: string;
  dates: string;
  accent: string;
  accentColors: string[];
  problemLine: string;
  /** When set, the card opens this URL in a new tab instead of the internal page. */
  external?: string;

  // Optional deep-dive fields, used by the internal /work/[slug] route.
  context?: { title: string; paragraphs: string[] };
  segment?: {
    label: string;
    fields: { label: string; value: string }[];
    note?: string;
  };
  research?: {
    approach: string;
    questions: string[];
    hypotheses: string[];
  };
  insights?: {
    behaviour: string[];
    painPoints: string[];
    expectations: string[];
  };
  persona?: {
    name: string;
    role: string;
    description: string;
    quote: string;
  };
  journey?: {
    title: string;
    scenario: string;
    steps: { n: string; doing: string; thinking: string; saying: string }[];
  };
  trueProblem?: {
    statement: string;
    why: string;
    whoFaces: string;
    whyNow: string;
    valueForUsers: string;
    valueForBusiness: string;
  };
  solutions?: {
    name: string;
    bullets: string[];
    reach: Priority;
    impact: Priority;
    confidence: Priority;
    effort: Priority;
    rank: number;
  }[];
  chosenRationale?: string;
  userStories?: { audience: string; stories: string[] }[];
  metrics?: {
    nsm: string;
    primary: string[];
    retention: string[];
    business: string[];
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "netflix-india-growth",
    num: "Case 01",
    title: "Solving Netflix India's growth slowdown",
    subtitle:
      "Sizing an underserved segment, mapping their onboarding journey, and prioritising what to ship next.",
    role: "Independent product case study",
    company: "Netflix · India",
    dates: "2024",
    accent: "from-[#E50914] via-[#B0060F] to-[#3A0205]",
    accentColors: ["#E50914", "#B0060F", "#3A0205"],
    problemLine:
      "Revenue growth slowed in India — where do the next million subscribers actually come from?",
    external:
      "https://drive.google.com/file/d/1hYQZuLYdAJ93T-Gw4OKU400QdHF3dMEG/view?usp=drive_link",
  },
];
