import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/WorkExperience";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex-1">
        <WorkHero />
        <WorkExperience />
      </main>
      <Footer />
    </>
  );
}

function WorkHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #ffffff 0%, #f0f0f0 25%, #e8e8ff 55%, #c8c6fb 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-36 lg:pt-44 pb-20 lg:pb-28">
        <p
          className="text-[11px] uppercase font-medium text-[color:var(--text-muted)] mb-6"
          style={{ letterSpacing: "0.14em" }}
        >
          (work)
        </p>
        <h1
          className="font-display lowercase font-bold leading-[0.98] tracking-[-0.04em] text-[color:var(--text-strong)] max-w-[18ch]"
          style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
        >
          <span className="text-[color:var(--text-subtle)]">/</span>built.
          <br />
          shipped. measured.
        </h1>
        <p className="mt-8 max-w-[58ch] text-[15px] lg:text-[18px] leading-[1.6] text-[color:var(--text-muted)]">
          Three roles across AI features, growth, and voice platforms. The
          work, the metrics, and the lessons that travelled with me from one
          to the next.
        </p>
      </div>
    </section>
  );
}
