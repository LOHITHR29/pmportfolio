import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Display alias to the same family — montone style is single-family
const displayVar = { "--font-display": "var(--font-sans)" } as React.CSSProperties;

export const metadata: Metadata = {
  title: "Lohith Regalla — Product manager",
  description:
    "Lohith Regalla — product manager working on AI features in Hyderabad. Selected work, case studies, publications.",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
