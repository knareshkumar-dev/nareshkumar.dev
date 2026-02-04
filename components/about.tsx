"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { TextReveal } from "@/components/text-reveal";
import { ImageReveal } from "@/components/image-reveal";
import { ResumeDownload } from "@/components/resume-download";
import { CopyPhoneButton } from "@/components/copy-phone-button";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <TextReveal
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            About Me
          </TextReveal>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto rounded-full origin-left"
          />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image Left with Clip-path Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-xs mx-auto sm:max-w-sm lg:mx-0">
              {/* Decorative border */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute inset-0 border-2 border-primary rounded-2xl translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4"
              />
              {/* Image container with clip-path reveal */}
              <ImageReveal direction="left" className="relative rounded-2xl overflow-hidden border border-border">
                <motion.div
                  className="aspect-square bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center p-6 sm:p-8">
                      <img
                        src="/Naresh_Kumar_K.png"
                        alt="Naresh Kumar"
                        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover mx-auto profile-hover"
                      />
                      <p className="text-base sm:text-lg font-medium text-foreground mt-4">Naresh Kumar K</p>
                      <p className="text-sm sm:text-base text-muted-foreground">Full Stack Developer</p>
                  </div>
                </motion.div>
              </ImageReveal>
            </div>
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                Hello, I&apos;m Naresh 👋
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                A fresher Full Stack Developer specializing in the MERN stack. 
                I have completed professional training and built multiple academic and personal projects. 
                I focus mainly on frontend development with basic backend knowledge.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mt-3">
                I am passionate about learning, writing clean code, and building real-world applications.
              </p>
              <div className="mt-6 flex items-center gap-3 flex-wrap justify-start">
              </div>
            </motion.div>

            {/* Education Card removed — user requested only CODE99 certificate (no MCA) */}

            {/* Course Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="p-2 sm:p-3 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors"
                >
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Training</h4>
                  <p className="text-foreground font-medium text-sm sm:text-base">
                    Full Stack Developer Trainee
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    CODE99 IT Academy
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 mt-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Sep 2024 – Jun 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Chennai, Tamil Nadu</span>
                    </div>
                  </div>
                  <div className="mt-3 text-xs sm:text-sm text-muted-foreground">
                    <p>• Trained in MERN stack fundamentals</p>
                    <p>• Built real-world projects</p>
                    <p>• Learned REST APIs and authentication basics</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
