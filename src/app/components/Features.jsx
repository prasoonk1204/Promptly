"use client";

import { Target, Wand2, Rocket, Type } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Features() {
  const feature = [
    {
      title: "AI-Tuned Refinement",
      description: "Prompts tailored to work with ChatGPT, Claude, and more",
      Icon: Wand2,
    },
    {
      title: "Instant Results",
      description: "No signup required — just paste and enhance",
      Icon: Rocket,
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-8 py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl mb-16"
        style={{ color: "var(--foreground)" }}
      >
        Features
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {feature.map(({ title, description, Icon }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative border cardborder hover:border-blue-500 rounded-xl shadow-sm p-6 transition-all hover:shadow-lg shadow-blue-500/30 hover:scale-[1.02] flex flex-col justify-center items-center h-40"
            style={{
              background: "var(--background)",
            }}
          >
            <div
              className="absolute -top-8 md:-top-7 left-1/2 -translate-x-1/2 rounded-full p-4"
              style={{
                background: "var(--background)",
                color: "#3b82f6",
                border: "1px solid #3b82f6",
              }}
            >
              <Icon className="w-6 h-6" />
            </div>
            <h2
              className="text-lg md:text-2xl mt-4"
              style={{ color: "var(--foreground)" }}
            >
              {title}
            </h2>
            <p
              className="text-sm md:text-lg leading-relaxed mt-2"
              style={{ color: "var(--foreground)", opacity: 0.7 }}
            >
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
