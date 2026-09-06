type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  surface: string;
};

const items: Testimonial[] = [
  {
    quote:
      "Add a short, specific quote here. The most useful testimonials say what someone is good at and how they made the team better — not adjectives.",
    name: "Collaborator One",
    role: "Lead, Some Team @ Some Company",
    initials: "C1",
    surface: "from-[#ffd2b1] via-[#ff8a4c] to-[#7a2a00]",
  },
  {
    quote:
      "Another short quote — keep it under three sentences. Specific projects, specific outcomes, specific qualities. Avoid 'amazing' and 'great communicator'.",
    name: "Collaborator Two",
    role: "Founder @ Some Company",
    initials: "C2",
    surface: "from-[#cfe6cf] via-[#7aae8a] to-[#1f5a3a]",
  },
  {
    quote:
      "One more placeholder. Replace with a real quote from someone who has shipped something with you. The voice should sound like them, not like you.",
    name: "Collaborator Three",
    role: "Head of Design @ Some Company",
    initials: "C3",
    surface: "from-[#dfd3ff] via-[#7a5cff] to-[#2a1c7a]",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[color:var(--text-strong)] text-[color:var(--background)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-20 lg:py-28">
        <p className="font-display text-[26px] lg:text-[30px] font-normal leading-[1.15] text-left text-white mb-10 lg:mb-16">
          Notes from collaborators
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 lg:p-7 flex flex-col gap-6 h-full">
      <p className="text-[14px] font-medium leading-[1.5] lg:text-[16px] lg:leading-[1.5] text-white/90">
        “{t.quote}”
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.surface} grid place-items-center text-white text-[12px] font-semibold`}
          aria-hidden
        >
          {t.initials}
        </div>
        <div className="text-[13px] lg:text-[14px] leading-tight">
          <p className="font-semibold">{t.name}</p>
          <p className="text-white/60">{t.role}</p>
        </div>
      </div>
    </article>
  );
}
