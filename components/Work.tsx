type Project = {
  company: string;
  location: string;
  role: string;
  description: string;
  needSignup?: boolean;
  surface: string;
};

const projects: Project[] = [
  {
    company: "Ve — the intent company",
    location: "Hyderabad, India",
    role: "Associate Product Manager",
    description:
      "Working on AI-powered onboarding and adoption — turning model output into something users actually understand and act on. Sit between design and engineering on day-to-day product calls and behaviour-analytics work.",
    surface: "from-[#fff2e6] via-[#ffd9b3] to-[#ff8a4c]",
  },
  {
    company: "Ambito",
    location: "Bengaluru, India",
    role: "Associate Product Manager",
    description:
      "Owned AI-feature delivery, growth analytics, and onboarding instrumentation. Spent a lot of time on activation funnels — finding where people quietly dropped off and removing the reason — plus PRDs, sprint releases, and mentoring user research.",
    surface: "from-[#e8eef7] via-[#cfd9e8] to-[#9aaecb]",
  },
  {
    company: "Expedite",
    location: "Andhra Pradesh, India",
    role: "Co-Founder",
    description:
      "Co-founded a no-code / low-code student club at KL University — running Mendix workshops and helping classmates ship their first end-to-end app from idea to install.",
    surface: "from-[#f3eeff] via-[#dfd3ff] to-[#7a5cff]",
  },
  {
    company: "Samsung R&D Institute India — PRISM",
    location: "Remote",
    role: "R&D Intern",
    description:
      "Research project under Samsung's PRISM mentorship program — cross-platform mobile apps in Flutter wired to on-device ML models, exploring TensorFlow, federated learning, and IoT smart-automation use cases.",
    surface: "from-[#eef7ee] via-[#cfe6cf] to-[#7aae8a]",
  },
];

export default function Work() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-16 lg:py-24">
        <h2 className="font-display text-[28px] lg:text-[36px] leading-[1.1] text-[color:var(--text-strong)] mb-12 lg:mb-16 max-w-[640px]">
          Where I&apos;ve worked — products, AI features, and a couple of
          experiments along the way.
        </h2>

        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((p, i) => (
            <Card key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      <div
        className={`relative lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden border border-[color:var(--border)] bg-gradient-to-br ${project.surface}`}
      >
        {project.needSignup && (
          <div className="absolute top-4 right-4 z-10">
            <div className="rounded-md bg-black/80 backdrop-blur px-3 py-2 max-w-[220px]">
              <p className="text-[14px] font-semibold leading-[normal] text-[color:var(--accent)]">
                Needs sign-in
              </p>
              <p className="text-[11px] font-medium leading-[1.3] text-white">
                Locked behind a sign-in due to NDA — preview placeholder.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-4">
          <Field label="Company" value={project.company} />
          <Field label="Location" value={project.location} />
          <Field label="Role" value={project.role} />
        </div>

        <p className="text-[18px] lg:text-[20px] font-medium leading-[1.45] text-[color:var(--text-muted)]">
          {project.description}
        </p>
      </div>
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[14px] font-medium leading-[normal] text-[color:var(--text-muted)]">
        {label}
      </p>
      <p className="font-display text-[20px] lg:text-[24px] font-normal leading-[1.15]">
        {value}
      </p>
    </div>
  );
}
