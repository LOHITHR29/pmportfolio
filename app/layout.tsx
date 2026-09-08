import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import { site } from "@/data/site";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayVar = { "--font-display": "var(--font-sans)" } as React.CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL("https://lohith.me"),
  title: {
    default: "Lohith Regalla — Product manager",
    template: "%s — Lohith Regalla",
  },
  description:
    "Lohith Regalla is a product manager and Rice University MEML student in Houston, TX, working across AI products, growth, and customer journeys.",
  keywords: [
    "Lohith Regalla",
    "product manager",
    "AI product manager",
    "Rice University MEML",
    "product strategy",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://lohith.me",
    siteName: site.name,
    title: "Lohith Regalla — Product manager",
    description:
      "Product manager and Rice University MEML student working across AI products, growth, and customer journeys.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lohith Regalla — Product manager",
    description:
      "Product manager and Rice University MEML student working across AI products, growth, and customer journeys.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
      style={displayVar}
    >
      <body className="relative min-h-full flex flex-col bg-[color:var(--background)] text-[color:var(--text-strong)]">
        <Loader />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              url: "https://lohith.me",
              email: `mailto:${site.email}`,
              jobTitle: site.title,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Houston",
                addressRegion: "TX",
                addressCountry: "US",
              },
              affiliation: {
                "@type": "CollegeOrUniversity",
                name: "Rice University",
              },
              sameAs: [site.linkedin, site.github],
            }),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
