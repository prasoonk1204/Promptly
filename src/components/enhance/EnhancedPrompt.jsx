"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

export default function EnhancedPrompt({ content }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 border-[0.01px] cardborder p-4 rounded-2xl shadow-md shadow-zinc-500/20 backdrop-blur-[2px]">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Enhanced Prompt</h2>
      </div>

      <div
        className="relative rounded-xl border cardborder p-4 mb-4"
        style={{ backgroundColor: "var(--background)" }}
      >
        <pre className="whitespace-pre-wrap break-words font-sans">
          {content}
        </pre>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleCopy}
          className="px-4 py-2 text-sm  font-medium rounded-lg hover:scale-105 transition-all duration-100"
          style={{
            backgroundColor: "var(--foreground)",
            color: "var(--background)",
          }}
        >
          {copied ? (
            "Copied!"
          ) : (
            <>
              {" "}
              Copy Enhanced <Copy className="inline-block h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
