import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Lohith Regalla, a product manager and Rice University MEML student based in Houston, TX.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="relative z-10 flex-1">
        <PageHero
          eyebrow="about"
          title={<>built like an engineer.<br />ships like a pm.</>}
          description="The path from computer science to product management, the education shaping what comes next, and the work I pursue outside the day job."
        />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
