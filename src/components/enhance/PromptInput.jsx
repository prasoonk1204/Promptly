"use client";

import { useState } from "react";
import { Sparkle } from "lucide-react";

export default function PromptInput({ setEnhanced }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const getCounterClass = () => {
    if (prompt.length > 1900) return "text-red-500";
    if (prompt.length > 1800) return "text-yellow-500";
    return "text-zinc-500";
  };

  const enhancePrompt = async () => {
    setLoading(true);
    const res = await fetch("/api/enhance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setEnhanced(data.enhanced || "Error enhancing prompt.");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-22 backdrop-blur-[2px] w-full max-w-4xl rounded-2xl gap-4 h-75 shadow-md shadow-zinc-500/20 border-[0.01px] cardborder">
      <div className="relative w-full h-full">
        <textarea
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={(e) => {
            if (e.target.value.length <= 2000) {
              setPrompt(e.target.value);
            }
          }}
          className="w-full p-4 border cardborder rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 h-full resize-none"
          style={{ backgroundColor: "var(--background)" }}
        />
        <div
          className={`absolute bottom-4 right-4 text-sm px-2 border rounded-md ${getCounterClass()}`} style={{ backgroundColor: "var(--background)"}}
        >
          {prompt.length}/2000
        </div>
      </div>

      <button
        onClick={enhancePrompt}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all duration-300 w-full hover:scale-102 disabled:bg-zinc-800 cursor-pointer"
      >
        {loading ? "Enhancing..." : <><Sparkle className="inline-block h-4" />Enhance your prompt</>}
      </button>
    </div>
  );
}
