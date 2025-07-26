"use client";

import { ClipboardPaste, SlidersHorizontal, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Paste your messy or raw prompt",
    icon: ClipboardPaste,
  },
  {
    title: "Get your refined prompt — optimized and ready",
    icon: CheckCheck,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const lineVariant = {
  hidden: { scaleX: 0, scaleY: 0 },
  visible: {
    scaleX: 1,
    scaleY: 1,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export default function HowItWorks() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl mb-16"
        >
          How It Works
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center md:justify-between gap-16 md:gap-8"
        >
          {steps.map(({ title, icon: Icon }, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4 rounded-full p-4"
                style={{
                  backgroundColor: "rgba(147, 197, 253, 0.15)",
                }}
              >
                <Icon className="h-10 w-10 text-blue-600" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">Step {i + 1}</h3>
              <p style={{ opacity: 0.8 }}>{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
