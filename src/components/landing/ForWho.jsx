"use client";

import { motion } from "framer-motion";

const users = [
  {
    title: "Developers",
    description: "Streamline your coding process with precise AI prompts.",
  },
  {
    title: "Content Creators",
    description: "Generate engaging content ideas and outlines effortlessly.",
  },
  {
    title: "Marketers",
    description: "Craft compelling marketing messages and campaigns.",
  },
  {
    title: "Students",
    description: "Get help with assignments and study materials quickly.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const ForWhoCard = ({ title, description, index }) => (
  <motion.div
    className="min-w-[250px] w-[350px] h-40 rounded-xl flex flex-col justify-center items-center px-4 text-center shadow mx-2 hover:scale-105 transition-all duration-300 border cardborder hover:border-blue-500"
    style={{
      background: "var(--background)",
      color: "var(--foreground)",
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
    variants={fadeIn}
  >
    <h3 className="text-2xl mb-2">{title}</h3>
    <p style={{ opacity: 0.7 }}>{description}</p>
  </motion.div>
);


export default function ForWho() {
  return (
    <section
      className="w-full max-w-5xl flex flex-col justify-center items-center py-8 backdrop-blur-[5px] mt-20"
      style={{
        color: "var(--foreground)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl mb-12"
      >
        Who It&apos;s For
      </motion.h2>

      <div className="relative w-full max-w-6xl overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-30 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-30 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div className="flex w-max animate-scrollX gap-4 p-4">
          {[...users, ...users].map((user, i) => (
            <ForWhoCard key={i} {...user} index={i % users.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
