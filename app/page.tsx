import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import PrinciplesStack from "@/components/PrinciplesStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="relative z-10 flex-1">
        <Hero />
        <Statement />
        <FeaturedCaseStudies />
        <PrinciplesStack />
      </main>
      <Footer />
    </>
  );
}
