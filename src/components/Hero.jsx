"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center text-center h-screen z-10 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute bottom-[100px] right-[-30px] w-[300px] h-[300px] bg-blue-400 opacity-30 rounded-full blur-3xl z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute top-[80px] left-[-80px] w-[250px] h-[250px] bg-blue-500 opacity-30 rounded-full blur-3xl z-0"
      />

      <motion.h1
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-[42px] sm:text-7xl lg:text-8xl font-bold mb-10 relative z-10"
        style={{ color: "var(--foreground)" }}
      >
        Your Shortcut to
        <span className="text-blue-500">
          <br /> Powerful Prompts
        </span>
      </motion.h1>

      <motion.h3
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-[16px] sm:text-2xl mb-12 max-w-5xl px-4 relative z-10"
        style={{ color: "var(--foreground)" }}
      >
        Promptly.ai rewrites your messy or vague prompts into clear, effective
        instructions for ChatGPT, Claude, and other AI tools.
      </motion.h3>

      <motion.button
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Link
          href="/home"
          className="flex gap-2 items-center bg-blue-500 text-white px-5 sm:px-8 py-3 text-[18px] sm:text-xl rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105  relative z-10 hover:cursor-pointer"
        >
          Refine your prompt <ArrowRight />
        </Link>
      </motion.button>
    </div>
  );
}
