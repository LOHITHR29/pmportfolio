import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Lohith Regalla about product management opportunities and collaborations.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/lohithregalla", href: site.linkedin },
  { label: "GitHub", value: "github.com/LOHITHR29", href: site.github },
  { label: "Resume", value: "Download PDF", href: site.resume, download: true },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s talk about the product problem."
        description="I am interested in product management, product strategy, program management, and technology consulting opportunities in the United States."
      />
      <section className="section shell contact-grid">
        <div>
          <p className="eyebrow">Best channel</p>
          <h2>Email is the fastest way to reach me.</h2>
          <p className="contact-note">
            Include the role, team, or problem you want to discuss. I will reply with the
            most relevant work sample or context.
          </p>
        </div>
        <div className="contact-list">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              download={channel.download}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
              <span aria-hidden="true">{channel.download ? "↓" : "↗"}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
