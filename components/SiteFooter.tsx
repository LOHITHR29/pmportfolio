import Link from "next/link";
import { site } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow light">Start a conversation</p>
          <h2>Have a product problem worth solving?</h2>
          <a className="footer-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <div className="footer-links">
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <Link href={site.resume} download>
            Download resume <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Lohith Regalla</p>
        <p>Product management and AI</p>
      </div>
    </footer>
  );
}
