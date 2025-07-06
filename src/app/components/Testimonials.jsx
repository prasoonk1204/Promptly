"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Promptly.ai turned my vague ideas into crystal-clear prompts that ChatGPT nailed in seconds.",
    name: "Alex Johnson",
    title: "Full-Stack Developer",
  },
  {
    quote:
      "The enhancer shaved hours off my content pipeline. It’s like Grammarly, but for prompts.",
    name: "Samantha Lee",
    title: "Content Strategist",
  },
  {
    quote:
      "I finally get consistent, predictable answers from my AI agents—thanks to Promptly.ai.",
    name: "David Kim",
    title: "Startup Founder",
  },
  {
    quote:
      "It’s clean, fast, and just works. I don’t write prompts without it anymore.",
    name: "Elena Pérez",
    title: "AI Research Assistant",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const TestimonialCard = ({ quote, name, title, index }) => (
  <motion.div
    className="mx-2 min-w-[280px] w-[350px] h-60 rounded-xl shadow p-6 flex flex-col justify-between text-left border cardborder hover:border-blue-500 transition-all duration-300 hover:scale-105"
    style={{
      background: "var(--background)",
      color: "var(--foreground)",
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
    variants={fadeUp}
  >
    <Quote className="w-5 h-5 text-blue-500 mb-2" />
    <p style={{ opacity: 0.8, fontStyle: "italic" }}>"{quote}"</p>
    <div className="mt-4">
      <p className="font-semibold">{name}</p>
      <p style={{ opacity: 0.6, fontSize: "0.875rem" }}>{title}</p>
    </div>
  </motion.div>
);

export default function Testimonials() {
  return (
    <section
      className="w-full flex flex-col justify-center items-center py-24"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl mb-12"
      >
        What Users Say
      </motion.h2>

      <div className="relative w-full max-w-5xl overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div className="flex w-max animate-scrollX gap-4 p-4">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard
              key={i}
              {...testimonial}
              index={i % testimonials.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
