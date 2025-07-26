"use client";

import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="pt-4 p-4 flex items-center justify-center overflow-hidden fixed top-0 left-0 w-full z-20">
      <div
        className="w-full max-w-6xl rounded-xl backdrop-blur-[5px] transition-all duration-300 border"
        style={{
          backgroundColor: "rgba(var(--background-rgb), 0.6)",
          borderColor: "rgba(var(--foreground-rgb), 0.2)",
        }}
      >
        <div className="flex items-center justify-between px-4 py-4 sm:py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Promptly Logo" width={28} height={28} />
            <span
              className="text-lg font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Promptly.ai
            </span>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
