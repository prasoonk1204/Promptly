import Header from "../components/Header";
import Hero from "../components/Hero";
import ForWho from "../components/ForWho";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen w-full theme-wrapper transition-colors relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 600px at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 600px at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      <Header />
      <main className="flex flex-col items-center justify-center z-10 relative">
        <Hero />
        <ForWho />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
