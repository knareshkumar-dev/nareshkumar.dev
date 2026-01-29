"use client";

import Link from "next/link"

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current || !nameRef.current) return;

    const headline = headlineRef.current;
    const nameWords = nameRef.current.querySelectorAll(".name-word");

    // Initial state
    gsap.set(headline.querySelectorAll(".hero-word"), {
      y: "100%",
      opacity: 0,
    });
    gsap.set(nameWords, {
      y: "100%",
      opacity: 0,
    });

    // Create timeline for hero entrance
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(headline.querySelectorAll(".hero-word"), {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.08,
    }).to(
      nameWords,
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !backgroundRef.current || !floatingElementsRef.current) return;

    const ctx = gsap.context(() => {
      // Background moves slowest (creates depth)
      gsap.to(backgroundRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Floating elements move at medium speed
      gsap.to(floatingElementsRef.current, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Content moves fastest (foreground)
      gsap.to(contentRef.current, {
        yPercent: 15,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "50% top",
          scrub: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Parallax Background Layer */}
      <div ref={backgroundRef} className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements Layer (medium parallax) */}
      <div ref={floatingElementsRef} className="absolute inset-0 -z-5 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-primary/30 rounded-full" />
        <div className="absolute top-40 right-[15%] w-3 h-3 bg-primary/20 rounded-full" />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-primary/25 rounded-full" />
        <div className="absolute top-1/3 right-[10%] w-1.5 h-1.5 bg-primary/30 rounded-full" />
        <div className="absolute bottom-1/4 right-[25%] w-2 h-2 bg-primary/20 rounded-full" />
        
        {/* Decorative lines */}
        <svg className="absolute top-1/4 left-[5%] w-32 h-32 text-primary/10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="absolute bottom-1/3 right-[8%] w-24 h-24 text-primary/10" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
        </svg>
      </div>

      {/* Content Layer (foreground - fastest parallax) */}
      <div ref={contentRef} className="max-w-4xl mx-auto text-center relative z-10 px-4">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          
        </motion.div>

        {/* Animated Headline with GSAP */}
        <h1
          ref={headlineRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight"
        >
          <span className="inline-block overflow-hidden mr-[0.25em]">
            <span className="hero-word inline-block">{"Hi,"}</span>
          </span>
          <span className="inline-block overflow-hidden mr-[0.25em]">
            <span className="hero-word inline-block">{"I'm"}</span>
          </span>
          <br className="sm:hidden" />
          <span ref={nameRef} className="text-primary">
            {["Naresh", "Kumar", "K"].map((word, index) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <span className={`name-word inline-block ${index === 2 ? "" : ""}`}>{word}</span>
              </span>
            ))}
          </span>
        </h1>

        {/* Role */}
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Full Stack Developer 
        </motion.p>

        {/* Summary */}
        <motion.p
          className="mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Full Stack Developer (MERN) crafting high-performance web applications with a strong focus on usability, scalability, and maintainable code.
        </motion.p>

        {/* CTA Buttons with Magnetic Effect */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <MagneticButton href="#projects" variant="primary" strength={0.3}>
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline" strength={0.3}>
            Contact Me
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
