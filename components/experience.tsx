"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";

const experiences = [
  {
    title: "Full Stack Developer Trainee",
    company: "CODE99 IT Academy",
    period: "Sep 2024 – Jun 2025",
    description:
      "Hands-on training in full-stack web development using the MERN stack. Built real-world applications including flight booking and e-commerce platforms.",
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
    type: "education",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <TextReveal
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Project Experience
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
            My training and project development journey
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.2 + 0.2,
                  }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-4 border-background z-10"
                >
                  {/* Pulse Animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-primary"
                  />
                </motion.div>

                {/* Content Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-10 lg:pr-12" : "md:pl-10 lg:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                    className="bg-card border border-border rounded-lg md:rounded-xl p-4 sm:p-6 shadow-md hover:border-primary/50 transition-colors group"
                  >
                    {/* Type Badge */}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 transition-all ${
                        exp.type === "work"
                          ? "bg-primary/20 text-primary group-hover:bg-primary/30"
                          : "bg-accent/20 text-accent group-hover:bg-accent/30"
                      }`}
                    >
                      {exp.type === "work" ? "Work Experience" : "Training"}
                    </motion.span>

                    {/* Period */}
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 font-medium">
                      {exp.period}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <p className="text-primary font-medium mb-3 text-sm sm:text-base">{exp.company}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 sm:px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty Space for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
