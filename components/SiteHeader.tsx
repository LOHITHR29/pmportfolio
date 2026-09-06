import Link from "next/link";
import { site } from "@/data/portfolio";

const links = [
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: site.resume, label: "Resume", download: true },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Lohith Regalla home">
          LR<span>.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} download={link.download}>
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} download={link.download}>
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
