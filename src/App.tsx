import FloatingActions from "./components/layout/FloatingActions";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Reviews from "./components/sections/Reviews";
import Services from "./components/sections/Services";
import WhyChoose from "./components/sections/WhyChoose";
import WorkProcess from "./components/sections/WorkProcess";

function GoldDivider() {
  return (
    <div className="relative mx-auto h-px w-full max-w-7xl px-5">
      <div className="gold-line h-px w-full opacity-40" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-night text-paper">
      {/* Global background ambience */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(212,175,55,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0b0b0b,#0d0d0d_50%,#0b0b0b)]" />
      </div>

      <a
        href="#main-content"
        className="fixed right-4 top-4 z-[60] -translate-y-20 rounded-xl bg-gold px-4 py-2 text-sm font-bold text-ink transition-transform focus:translate-y-0"
      >
        الانتقال إلى المحتوى
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <GoldDivider />
        <WhyChoose />
        <Services />
        <WorkProcess />
        <Portfolio />
        <GoldDivider />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <GoldDivider />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
