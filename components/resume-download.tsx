"use client";

import { motion } from "framer-motion";

export function ResumeDownload() {
  return (
    <motion.a
      href="/resume.pdf"
      download="Naresh-Kumar-Resume.pdf"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
      data-cursor="Download"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 16v-4m0 0V8m0 4H8m4 0h4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="hidden sm:inline">Download Resume</span>
      <span className="sm:hidden">Resume</span>
    </motion.a>
  );
}
