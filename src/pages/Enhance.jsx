"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PromptInput from "@/components/enhance/PromptInput";
import EnhancedPrompt from "@/components/enhance/EnhancedPrompt";
import { motion } from "framer-motion";

export default function Enhance() {
  const [enhanced, setEnhanced] = useState("");

  return (
    <div className="min-h-screen w-full theme-wrapper transition-colors relative overflow-x-hidden">
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
      <main className="flex flex-col items-center justify-center z-10 relative p-4 w-full">
        <PromptInput setEnhanced={setEnhanced} />
        {enhanced && <EnhancedPrompt content={enhanced} />}
      </main>
    </div>
  );
}
