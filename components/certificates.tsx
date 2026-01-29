"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";

const certificates = [
  {
    id: 1,
    title: "Full Stack Developer Certification",
    issuer: "CODE99 IT Academy",
    date: "June 2025",
    description: "Completed intensive training in MERN stack development",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
];

export function Certificates() {
  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <TextReveal
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Certifications & Awards
          </TextReveal>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full mb-4 origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base"
          >
            Professional certifications and educational achievements
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg sm:rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-colors group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10 }}
                className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors"
              >
                {cert.icon}
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-semibold mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {cert.date}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
