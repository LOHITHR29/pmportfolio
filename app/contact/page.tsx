import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex-1">
        <ContactHero />
        <ContactDetails />
      </main>
      <Footer />
    </>
  );
}

function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #ffffff 0%, #f0f0f0 25%, #e8e8ff 55%, #c8c6fb 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-36 lg:pt-44 pb-20 lg:pb-28">
        <p
          className="text-[11px] uppercase font-medium text-[color:var(--text-muted)] mb-6"
          style={{ letterSpacing: "0.14em" }}
        >
          (contact)
        </p>
        <h1
          className="font-display lowercase font-bold leading-[0.98] tracking-[-0.04em] text-[color:var(--text-strong)] max-w-[16ch]"
          style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
        >
          <span className="text-[color:var(--text-subtle)]">/</span>let&rsquo;s
          build something.
        </h1>
        <p className="mt-8 max-w-[58ch] text-[15px] lg:text-[18px] leading-[1.6] text-[color:var(--text-muted)]">
          Open to PM roles, contract work, and collaborations on AI features
          worth shipping. Drop a line — I read everything.
        </p>
      </div>
    </section>
  );
}

const channels: { tag: string; label: string; href: string; external?: boolean }[] = [
  {
    tag: "Email",
    label: "lohithregalla123@gmail.com",
    href: "mailto:lohithregalla123@gmail.com",
  },
  {
    tag: "LinkedIn",
    label: "in/lohithregalla",
    href: "https://linkedin.com/in/lohithregalla",
    external: true,
  },
  {
    tag: "GitHub",
    label: "@LOHITHR29",
    href: "https://github.com/LOHITHR29",
    external: true,
  },
  {
    tag: "Twitter",
    label: "@lohithregalla",
    href: "https://twitter.com/",
    external: true,
  },
  {
    tag: "Resume",
    label: "Latest PDF — request via email",
    href: "mailto:lohithregalla123@gmail.com?subject=Resume%20request",
  },
];

function ContactDetails() {
  return (
    <section
      className="relative w-full bg-white"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p
              className="text-[11px] uppercase font-medium text-[color:var(--text-muted)] mb-4"
              style={{ letterSpacing: "0.14em" }}
            >
              (where to find me)
            </p>
            <h2
              className="font-display lowercase font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--text-strong)] max-w-[14ch]"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              <span className="text-[color:var(--text-subtle)]">/</span>say hi.
            </h2>

            <p className="mt-6 max-w-[44ch] text-[14px] lg:text-[16px] leading-[1.65] text-[color:var(--text-muted)]">
              Email is fastest. LinkedIn works for context-setting before a
              call. For coffee in Hyderabad — same email.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {channels.map((c, i) => (
              <a
                key={i}
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-baseline gap-4 py-5 border-t border-[color:rgba(17,17,17,0.12)] last:border-b last:border-[color:rgba(17,17,17,0.12)] hover:bg-[color:var(--surface-muted)] transition-colors"
              >
                <span
                  className="text-[10px] uppercase font-medium text-[color:var(--text-muted)] w-20 shrink-0"
                  style={{ letterSpacing: "0.14em" }}
                >
                  {c.tag}
                </span>
                <span className="flex-1 text-[15px] lg:text-[17px] leading-[1.5] text-[color:var(--text-strong)]">
                  {c.label}
                </span>
                <span
                  aria-hidden
                  className="arrow-up-right text-[color:var(--text-muted)]"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
