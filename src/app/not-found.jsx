import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full theme-wrapper transition-colors relative flex flex-col">
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
      <main className="flex flex-1 flex-col items-center justify-center z-10 relative text-center px-6">
        <h1 className="text-6xl font-bold tracking-tight mb-4">404</h1>
        <p className="text-xl mb-12">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl hover:opacity-80 hover:-translate-y-2 transition-all duration-300"
          style={{
            background: "var(--foreground)",
            color: "var(--background)",
          }}
        >
          Go back home
        </Link>
      </main>
    </div>
  );
}
