import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import PrinciplesStack from "@/components/PrinciplesStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex-1">
        <Hero />
        <Statement />
        <PrinciplesStack />
      </main>
      <Footer />
    </>
  );
}
