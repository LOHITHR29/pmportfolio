import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Lohith Regalla about product management opportunities in the United States.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { tag: "Email", label: site.email, href: `mailto:${site.email}` },
  { tag: "LinkedIn", label: "in/lohithregalla", href: site.linkedin, external: true },
  { tag: "GitHub", label: "@LOHITHR29", href: site.github, external: true },
  { tag: "Resume", label: "Request by email", href: site.resume },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="relative z-10 flex-1">
        <PageHero
          eyebrow="contact"
          title="let’s build something."
          description="Open to product management, product strategy, program management, and technology consulting opportunities in the United States."
          maxWidth="max-w-[16ch]"
        />
        <section className="relative w-full bg-white py-24 lg:py-[120px]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <p className="section-kicker">(where to find me)</p>
                <h2 className="section-subtitle"><span>/</span>say hi.</h2>
                <p className="mt-6 max-w-[44ch] text-[14px] lg:text-[16px] leading-[1.65] text-[color:var(--text-muted)]">
                  Email is fastest. LinkedIn is useful if you want to share role or
                  team context before a call. I am based in {site.location}.
                </p>
              </div>
              <div className="lg:col-span-7 flex flex-col">
                {channels.map((channel) => (
                  <a
                    key={channel.tag}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="group flex items-baseline gap-4 py-5 border-t border-[color:rgba(17,17,17,0.12)] last:border-b hover:bg-[color:var(--surface-muted)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--primary)]"
                  >
                    <span className="text-[10px] uppercase font-medium text-[color:var(--text-muted)] w-20 shrink-0 tracking-[0.14em]">
                      {channel.tag}
                    </span>
                    <span className="flex-1 text-[15px] lg:text-[17px] leading-[1.5] text-[color:var(--text-strong)] break-words min-w-0">
                      {channel.label}
                    </span>
                    <span aria-hidden className="arrow-up-right text-[color:var(--text-muted)]">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
