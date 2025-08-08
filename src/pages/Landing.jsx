import Header from "@/components/Header";
import Hero from "@/components/landing/Hero";
import ForWho from "@/components/landing/ForWho";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
import Enhance from "@/components/landing/Enhance";

export default function Landing() {
  return (
    <div className="min-h-screen w-full theme-wrapper transition-colors relative">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
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
        <Enhance />
        <Features />
        <HowItWorks />
        <ForWho />
        <Footer />
      </main>
    </div>
  );
}
