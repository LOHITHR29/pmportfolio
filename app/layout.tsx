import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://lohith.me"),
  title: {
    default: "Lohith Regalla | Product Manager",
    template: "%s | Lohith Regalla",
  },
  description:
    "Product manager and Rice University MEM student building AI products, growth systems, and clearer customer journeys.",
  keywords: [
    "Lohith Regalla",
    "product manager",
    "AI product manager",
    "Rice University",
    "product strategy",
    "growth product",
  ],
  authors: [{ name: "Lohith Regalla" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://lohith.me",
    title: "Lohith Regalla | Product Manager",
    description:
      "Product manager and Rice University MEM student building AI products and growth systems.",
    siteName: "Lohith Regalla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lohith Regalla | Product Manager",
    description:
      "Product manager and Rice University MEM student building AI products and growth systems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
