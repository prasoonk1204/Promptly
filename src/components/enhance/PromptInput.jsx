"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkle } from "lucide-react";

export default function PromptInput({ setEnhanced }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getCounterClass = () => {
    if (prompt.length > 1900) return "text-red-500";
    if (prompt.length > 1800) return "text-yellow-500";
    return "text-zinc-500";
  };

  const enhancePrompt = async () => {
    if (prompt.trim().length === 0) {
      setError("Please enter a prompt before enhancing.");
      return;
    }

    setError("");
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center p-4 mt-22 backdrop-blur-[2px] w-full max-w-4xl rounded-2xl gap-4 h-75 shadow-md shadow-zinc-500/20 border-[0.01px] cardborder"
    >
      <h2 className="text-xl sm:text-2xl font-semibold">Enter prompt you'd like to enhance</h2>

      <div className="relative w-full h-full">
        <textarea
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={(e) => {
            if (e.target.value.length <= 2000) {
              setPrompt(e.target.value);
              setError("");
            }
          }}
          className="w-full p-4 border cardborder rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 h-full resize-none"
          style={{ backgroundColor: "var(--background)" }}
        />
        <div
          className={`absolute bottom-4 right-4 text-sm px-2 border rounded-md ${getCounterClass()}`}
          style={{ backgroundColor: "var(--background)" }}
        >
          {prompt.length}/2000
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm self-start -mt-2">{error}</p>
      )}

      <button
        onClick={enhancePrompt}
        disabled={loading || prompt.trim().length === 0}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all duration-300 w-full hover:scale-102 disabled:hover:scale-100 disabled:bg-zinc-800 cursor-pointer disabled:cursor-not-allowed"
      >
        {loading ? (
          "Enhancing..."
        ) : (
          <>
            <Sparkle className="inline-block h-4 mr-1" />
            Enhance your prompt
          </>
        )}
      </button>
    </motion.div>
  );
}
