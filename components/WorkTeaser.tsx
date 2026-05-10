import Link from "next/link";

type Project = {
  num: string;
  company: string;
  role: string;
  surface: string;
  href: string;
};

const featured: Project[] = [
  {
    num: "01",
    company: "Netflix India",
    role: "Independent product case study",
    surface: "from-[#E50914] via-[#B0060F] to-[#3A0205]",
    href: "/work",
  },
  {
    num: "02",
    company: "Ve",
    role: "Associate Product Manager",
    surface: "from-[#FFB5A7] via-[#F4A261] to-[#E87A4F]",
    href: "/work",
  },
  {
    num: "03",
    company: "Ambito",
    role: "Associate Product Manager",
    surface: "from-[#A8D8EA] via-[#C9B1FF] to-[#B8C5FF]",
    href: "/work",
  },
];

export default function WorkTeaser() {
  return (
    <section
      className="relative w-full bg-white"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
          <h2
            className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-strong)] max-w-[16ch]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
          >
            <span className="text-[color:var(--text-subtle)]">/</span>selected
            work.
          </h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] text-[color:var(--text-strong)] px-5 py-2.5 text-[14px] lowercase hover:bg-[color:var(--text-strong)] hover:text-white transition-colors"
          >
            view all work <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {featured.map((p) => (
            <Link
              key={p.num}
              href={p.href}
              className="group block bg-[color:var(--surface-muted)] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
            >
              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${p.surface}`}
              >
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between text-white">
                  <span
                    className="font-display lowercase font-bold leading-none"
                    style={{ fontSize: "44px" }}
                  >
                    {p.num}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/85">
                    {p.role}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-strong)]"
                  style={{ fontSize: "clamp(20px, 2vw, 28px)" }}
                >
                  <span className="text-[color:var(--text-subtle)]">/</span>
                  {p.company.toLowerCase()}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
