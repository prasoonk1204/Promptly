"use client";

import Link from "next/link";
import { Twitter, Github} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Twitter",
    url: "https://www.twitter.com/kenma_dev",
    icon: Twitter,
  },
  {
    name: "Github",
    url: "https://github.com/prasoonk1204/Promptly",
    icon: Github,
  },
];

const quickLinks = [
  {
    name: "Feedback",
    url: "mailto:abcdxyz1213140@gmail.com?subject=Feedback%20for%20Promptly.ai&body=Hi%20Promptly%20Team%2C%0A%0AI%20would%20like%20to%20share%20my%20feedback%3A%0A",
  },
  {
    name: "Report an Issue",
    url: "mailto:abcdxyz1213140@gmail.com?subject=Bug%20Report%20for%20Promptly.ai&body=Hi%20Promptly%20Team%2C%0A%0AI%20encountered%20the%20following%20issue%3A%0A",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 border-t mt-16 mb-8 z-10"
      style={{
        borderColor: "var(--border-color)",
        color: "var(--foreground)",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between gap-12">
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex flex-col sm:max-w-md text-center sm:text-start"
        >
          <h1 className="text-3xl sm:text-4xl mb-1">Promptly.ai</h1>
          <h2 style={{ opacity: 0.7 }} className="mb-4 text-sm sm:text-base">
            Refine | Enhance | Promptly
          </h2>

          <div className="mb-4 flex gap-3 sm:gap-4 justify-center sm:justify-start">
            {socialLinks.map(({ name, url, icon: Icon }, i) => (
              <motion.a
                key={name}
                href={url}
                rel="noopener noreferrer"
                aria-label={`Follow us on ${name}`}
                className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 text-xl p-3 rounded-full border cardborder hover:border-blue-500"
                variants={fadeUp}
                custom={i + 1}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p style={{ opacity: 0.6 }} className="text-sm">
            © 2025 Promptly.ai | All rights reserved.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          className="text-center sm:text-end flex flex-col gap-2"
        >
          <h2 className="text-2xl sm:text-3xl mb-4">Quick Links</h2>
          {quickLinks.map(({ name, url }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              custom={i + 5}
              className="hover:scale-105 transition-all duration-200 "
            >
              <Link href={url} className=" text-lg hover:text-blue-500">
                {name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
