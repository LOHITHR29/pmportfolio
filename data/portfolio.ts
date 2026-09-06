export const site = {
  name: "Lohith Regalla",
  email: "lohithregalla123@gmail.com",
  location: "United States",
  linkedin: "https://www.linkedin.com/in/lohithregalla",
  github: "https://github.com/LOHITHR29",
  resume: "/Lohith-Regalla-Resume.pdf",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Ve",
    role: "Product Manager, AI products",
    period: "Aug 2025 - Present",
    location: "Hyderabad, India",
    summary:
      "Product work across AI assistant experiences, product analytics, customer feedback, and growth workflows.",
    bullets: [
      "Analyzed 1,500+ user conversations to identify failure patterns, improve context-aware assistant behavior, and turn support signals into product priorities.",
      "Worked across onboarding, proactive product experiences, PRDs, sprint planning, experimentation, and Mixpanel analysis to improve successful user outcomes and reduce fallback behavior.",
      "Supported AI marketing workflows that produced 50+ ad creative variants and helped run paid search and content experiments, including tests that improved click-through rate.",
    ],
  },
  {
    company: "Ambitio",
    role: "Associate Product Manager",
    period: "Sep 2023 - Aug 2025",
    location: "Bengaluru, India",
    summary:
      "Joined as a product intern and earned a promotion to Associate Product Manager after nine months.",
    bullets: [
      "Redesigned steps in the university application journey and introduced clearer progress tracking, contributing to an approximately 9% improvement in application-step completion.",
      "Led sprint planning, backlog refinement, user research, and coordination across product, engineering, and operations.",
      "Iterated on application workflows during a period when completion and engagement improved by approximately 15%.",
    ],
  },
  {
    company: "Samsung R&D",
    role: "Product Intern",
    period: "Internship",
    location: "Bengaluru, India",
    summary:
      "Supported release quality for Samsung Bixby and learned how platform teams make product decisions under reliability constraints.",
    bullets: [
      "Helped test voice intents across builds, document issues, and support release-readiness discussions with product and engineering partners.",
      "Translated regression findings into clear product feedback for the Bixby voice experience.",
    ],
  },
];

export const capabilities = [
  {
    title: "Product discovery",
    items: ["User interviews", "Conversation analysis", "Journey mapping", "Problem framing"],
  },
  {
    title: "Product delivery",
    items: ["PRDs", "Prioritization", "Sprint planning", "Cross-functional execution"],
  },
  {
    title: "Analytics and growth",
    items: ["Mixpanel", "Experiment design", "Funnel analysis", "GTM planning"],
  },
  {
    title: "AI and technical",
    items: ["AI assistants", "Agent workflows", "Python", "APIs and integrations"],
  },
];

export const education = [
  {
    school: "Rice University",
    degree: "Master of Engineering Management",
    detail: "Current student",
  },
  {
    school: "KL University",
    degree: "Bachelor of Technology in Computer Science",
    detail: "2020 - 2024 | GPA 8.8/10",
  },
];

export const leadership = [
  {
    title: "Expedite, No-Code Club",
    role: "Co-founder",
    detail: "Organized workshops, hackathons, and practical sessions that reached 500+ students.",
  },
  {
    title: "KL University CodeFest",
    role: "Hackathon organizer",
    detail: "Helped run a 24-hour event for 200+ participants with 40+ mentors and six judges.",
  },
];
