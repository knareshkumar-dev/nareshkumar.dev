"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Shield,
} from "lucide-react";
import { TextReveal } from "@/components/text-reveal";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express"],
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB"],
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman"],
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
  },
  {
    title: "APIs & Auth",
    icon: Shield,
    skills: ["REST", "JWT"],
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Skills() {
  return (
    <section className="py-20 lg:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <TextReveal
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Skills and Technologies
          </TextReveal>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full mb-4 origin-left"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base"
          >
            Technologies I work with to build modern, scalable web applications
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                  className={`p-2 sm:p-3 rounded-lg ${category.bgColor} transition-colors`}
                >
                  <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color}`} />
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary text-secondary-foreground text-xs sm:text-sm font-medium rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"
        >
          {[
            { label: "Years Experience", value: "1.6+" },
            { label: "Technologies", value: "10+" },
            { label: "Projects Built", value: "5+" },
            { label: "Lines of Code", value: "50K+" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="text-center p-3 sm:p-4 bg-card border border-border rounded-lg sm:rounded-xl hover:border-primary/50 transition-all"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
