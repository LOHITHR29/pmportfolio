type Cert = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  skills: string[];
  surface: string;
};

const certs: Cert[] = [
  {
    name: "Multicloud Network Associate",
    issuer: "Aviatrix",
    issued: "Mar 2024",
    expires: "Mar 2027",
    skills: ["Cloud", "DevOps"],
    surface: "from-[#fff2e6] via-[#ffd9b3] to-[#ff8a4c]",
  },
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    issued: "Sep 2023",
    expires: "Sep 2026",
    skills: ["Cloud", "DevOps", "Architecture"],
    surface: "from-[#fff7e0] via-[#ffe49a] to-[#ff9f1a]",
  },
  {
    name: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    issued: "Mar 2023",
    expires: "Mar 2026",
    skills: ["RHEL", "Linux"],
    surface: "from-[#ffe7e0] via-[#ffb09a] to-[#cc1414]",
  },
  {
    name: "(ISC)² Candidate",
    issuer: "ISC2",
    issued: "Jan 2023",
    skills: ["Security"],
    surface: "from-[#e0f0ff] via-[#a8c6f0] to-[#1f4f9a]",
  },
];

export default function Certifications() {
  return (
    <section className="w-full bg-[color:var(--surface-muted)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8 py-20 lg:py-28">
        <div className="mb-12 lg:mb-16 max-w-[640px]">
          <p className="text-[16px] lg:text-[18px] font-medium leading-[normal] text-[#696969] mb-3">
            Certifications
          </p>
          <p className="font-display text-[24px] lg:text-[28px] font-normal leading-[1.2] text-[color:var(--text-strong)]">
            Cloud, security, and platform credentials I&apos;ve earned along the
            way — paired with the engineering work that made them stick.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {certs.map((c, i) => (
            <Tile key={i} cert={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ cert }: { cert: Cert }) {
  return (
    <article className="rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] overflow-hidden flex flex-col">
      <div
        className={`aspect-[16/10] bg-gradient-to-br ${cert.surface} grid place-items-center`}
        aria-hidden
      >
        <span className="font-display text-[44px] italic text-white/95 leading-none">
          {cert.issuer.charAt(0)}
        </span>
      </div>
      <div className="p-5 lg:p-6 flex flex-col gap-4 flex-1">
        <div>
          <p className="text-[12px] tracking-[0.12em] uppercase font-medium text-[color:var(--text-muted)]">
            {cert.issuer}
          </p>
          <p className="mt-2 text-[18px] lg:text-[20px] font-medium leading-[1.25] text-[color:var(--text-strong)]">
            {cert.name}
          </p>
        </div>

        <div className="flex gap-6 mt-auto">
          <Stat label="Issued" value={cert.issued} />
          {cert.expires && <Stat label="Valid through" value={cert.expires} />}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[color:var(--border)]">
          {cert.skills.map((s) => (
            <span
              key={s}
              className="text-[11px] font-medium tracking-[0.04em] text-[color:var(--text-muted)] border border-[color:var(--border)] rounded-full px-2 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-[12px] font-medium leading-[normal] text-[color:var(--text-muted)]">
        {label}
      </p>
      <p className="font-display text-[18px] lg:text-[20px] font-normal leading-[1.1] text-[color:var(--text-strong)]">
        {value}
      </p>
    </div>
  );
}
