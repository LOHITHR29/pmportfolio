type Social = { label: string; href: string };

const socials: Social[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/lohithregalla" },
  { label: "GitHub", href: "https://github.com/LOHITHR29" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Email", href: "mailto:lohithregalla123@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      role="contentinfo"
      style={{ backgroundColor: "#504FED" }}
      className="relative w-full text-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-20 lg:pt-28 pb-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — headline, body, get-in-touch */}
          <div className="lg:col-span-7">
            <h2
              className="font-display lowercase font-bold leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(48px, 7vw, 112px)" }}
            >
              want to build
              <br />
              something{" "}
              <em
                className="italic font-medium"
                style={{ letterSpacing: "-0.015em" }}
              >
                together?
              </em>
            </h2>

            <p
              className="mt-8 lg:mt-10 max-w-[48ch] text-[15px] lg:text-[17px] leading-[1.6]"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              i&rsquo;m always up for a chat about product, AI features, and
              early-stage builds. if you&rsquo;ve got something brewing — or
              just want to swap notes — drop a line.
            </p>

            <div className="mt-10 lg:mt-14">
              <p
                className="text-[11px] uppercase font-medium"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.18em",
                }}
              >
                get in touch
              </p>
              <a
                href="mailto:lohithregalla123@gmail.com"
                className="link-underline before:bg-white inline-block mt-2 text-[18px] lg:text-[22px]"
              >
                lohithregalla123@gmail.com
              </a>
            </div>
          </div>

          {/* Right — social pills */}
          <div className="lg:col-span-5 lg:pt-32 flex flex-wrap gap-3 lg:justify-end items-start content-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2 rounded-full px-4 lg:px-5 py-2 lg:py-2.5 text-[13px] lg:text-[14px] transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,0.32)",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                <span>{s.label}</span>
                <span aria-hidden className="arrow-up-right opacity-70">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — 3 columns: live availability • copyright • location */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-5 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 items-center text-[12px] lg:text-[13px] lowercase">
          {/* Left — availability with pulsing dot */}
          <div
            className="flex items-center gap-2.5"
            style={{ color: "rgba(255,255,255,0.92)", letterSpacing: "0.02em" }}
          >
            <span className="relative inline-flex h-2 w-2 shrink-0">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-70"
                style={{
                  backgroundColor: "#7cf29a",
                  animation: "pulse-ping 2.2s cubic-bezier(0,0,0.2,1) infinite",
                }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: "#7cf29a" }}
              />
            </span>
            <span>open to product roles · q2 2026</span>
          </div>

          {/* Center — copyright + signature, on one tight line */}
          <p
            className="lg:text-center"
            style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "0.02em" }}
          >
            © {year} lohith regalla · all rights reserved
          </p>

          {/* Right — location + live timezone */}
          <p
            className="lg:text-right"
            style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "0.02em" }}
          >
            hyderabad, india · ist (utc +5:30)
          </p>
        </div>
      </div>
    </footer>
  );
}
