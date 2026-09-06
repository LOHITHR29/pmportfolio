import Link from "next/link";

type Role = {
  company: string;
  tagline: string;
  location: string;
  role: string;
  description: string;
  needSignup?: boolean;
  surface: string;
  scene: string;
};

const roles: Role[] = [
  {
    company: "Ve",
    tagline: "the intent company",
    location: "Hyderabad, India",
    role: "Associate Product Manager",
    description:
      "AI-powered onboarding and adoption work — turning model output into something users can act on, then sitting close enough to design and engineering to keep the next iteration honest.",
    surface: "from-[#FFB5A7] via-[#F4A261] to-[#E87A4F]",
    scene: "from-[#1a1a1a] to-[#3a3a3a]",
  },
  {
    company: "Ambito",
    tagline: "Study-abroad platform",
    location: "Bengaluru, India",
    role: "Associate Product Manager",
    description:
      "Owned AI feature delivery, growth analytics, and onboarding instrumentation. Spent most days in funnels — finding where people quietly dropped off and removing the reason.",
    surface: "from-[#A8D8EA] via-[#C9B1FF] to-[#B8C5FF]",
    scene: "from-[#3a3a3a] to-[#1a1a1a]",
  },
  {
    company: "Samsung",
    tagline: "Bixby voice platform",
    location: "India · Internship",
    role: "Product Intern",
    description:
      "Four months on Samsung's Bixby voice platform — automated testing, log analysis, and the QA work that decides whether a voice command actually ships.",
    surface: "from-[#FCD5CE] via-[#FFB5A7] to-[#FEC5BB]",
    scene: "from-[#1a1a1a] to-[#3a3a3a]",
  },
];

export default function RolesPreview() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-[12px] tracking-[0.2em] uppercase text-[color:var(--text-muted)] mb-3">
              Selected work
            </p>
            <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.015em] text-[color:var(--text-strong)] max-w-[20ch]">
              Three roles. Three industries.{" "}
              <em className="italic">One thread.</em>
            </h2>
          </div>
          <Link
            href="/work"
            className="lg:col-span-5 lg:justify-self-end inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] px-5 py-2.5 text-[14px] text-[color:var(--text-strong)] hover:bg-[color:var(--text-strong)] hover:text-[color:var(--background)] transition-colors self-start"
          >
            View all work →
          </Link>
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {roles.map((r) => (
            <RoleCard key={r.company} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleCard({ r }: { r: Role }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Mockup tile */}
      <div className="lg:col-span-7">
        <div
          className={`relative aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br ${r.scene}`}
        >
          {/* Floating mockup window */}
          <div
            className={`absolute inset-0 m-auto w-[78%] aspect-[16/10] rounded-2xl bg-gradient-to-br ${r.surface} shadow-[0_18px_60px_rgba(0,0,0,0.25)] grid place-items-center`}
          >
            <span className="font-display italic text-white/95 text-[44px] lg:text-[56px] leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              {r.company.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      {/* Meta + description */}
      <div className="lg:col-span-5 flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-4">
          <Field label="Company" value={r.company} />
          <Field label="Location" value={r.location} />
          <Field label="Role" value={r.role} />
        </div>
        <p className="text-[16px] lg:text-[18px] leading-[1.55] text-[color:var(--text-muted)]">
          {r.description}
        </p>
      </div>
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[12px] font-medium leading-none text-[color:var(--text-muted)]">
        {label}
      </p>
      <p className="font-display text-[18px] lg:text-[22px] leading-[1.15] text-[color:var(--text-strong)]">
        {value}
      </p>
    </div>
  );
}
