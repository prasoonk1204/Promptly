"use client";

import { useState } from "react";
import PromptInput from "@/components/enhance/PromptInput";
import EnhancedPrompt from "@/components/enhance/EnhancedPrompt";

export default function Enhance() {
  const [enhanced, setEnhanced] = useState("");

  return (
    <div
      className="w-full theme-wrapper transition-colors relative overflow-x-hidden min-h-[800px]"
      id="enhance"
    >
      <main className="flex flex-col items-center justify-center gap-8 z-10 relative p-4 w-full">
        <PromptInput setEnhanced={setEnhanced} />
        {enhanced && <EnhancedPrompt content={enhanced} />}
      </main>
    </div>
  );
}
