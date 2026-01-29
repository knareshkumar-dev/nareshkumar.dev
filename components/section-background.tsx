"use client";

import React from "react"

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Define subtle gradient shifts for each section
const darkSectionColors = [
  { bg: "oklch(0.12 0.01 260)", accent: "oklch(0.14 0.02 260)" }, // Hero - deep navy
  { bg: "oklch(0.11 0.015 250)", accent: "oklch(0.13 0.02 250)" }, // About - slightly cooler
  { bg: "oklch(0.12 0.02 270)", accent: "oklch(0.14 0.025 270)" }, // Skills - hint of purple
  { bg: "oklch(0.105 0.015 240)", accent: "oklch(0.125 0.02 240)" }, // Experience - deeper blue
  { bg: "oklch(0.115 0.02 265)", accent: "oklch(0.135 0.025 265)" }, // Projects - balanced
  { bg: "oklch(0.11 0.018 255)", accent: "oklch(0.13 0.022 255)" }, // Contact - warm finish
];

const lightSectionColors = [
  { bg: "oklch(0.99 0.001 240)", accent: "oklch(0.97 0.005 240)" }, // Hero - near white
  { bg: "oklch(0.98 0.002 240)", accent: "oklch(0.96 0.006 240)" }, // About - slightly cooler
  { bg: "oklch(0.985 0.003 250)", accent: "oklch(0.97 0.007 250)" }, // Skills - hint of purple
  { bg: "oklch(0.99 0.002 240)", accent: "oklch(0.975 0.005 240)" }, // Experience - deeper blue
  { bg: "oklch(0.988 0.003 245)", accent: "oklch(0.97 0.006 245)" }, // Projects - balanced
  { bg: "oklch(0.99 0.002 240)", accent: "oklch(0.975 0.005 240)" }, // Contact - warm finish
];

interface SectionBackgroundProps {
  children: React.ReactNode;
}

export function SectionBackground({ children }: SectionBackgroundProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const sectionColors = currentTheme === "light" ? lightSectionColors : darkSectionColors;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !gradientRef.current) return;

    const sections = containerRef.current.querySelectorAll("section");
    const gradient = gradientRef.current;

    // Create scroll triggers for each section
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section, index) => {
      if (index >= sectionColors.length) return;

      const colors = sectionColors[index];
      const nextColors = sectionColors[Math.min(index + 1, sectionColors.length - 1)];

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(gradient, {
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${colors.accent} 0%, ${colors.bg} 100%)`,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          gsap.to(gradient, {
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${colors.accent} 0%, ${colors.bg} 100%)`,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        onLeave: () => {
          gsap.to(gradient, {
            background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${nextColors.accent} 0%, ${nextColors.bg} 100%)`,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [mounted, sectionColors]);

  return (
    <div ref={containerRef} className="relative">
      {/* Animated gradient background */}
      <div
        ref={gradientRef}
        className="fixed inset-0 -z-10 transition-colors"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${sectionColors[0].accent} 0%, ${sectionColors[0].bg} 100%)`,
        }}
      />
      
      {/* Noise texture overlay for depth */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      
      {children}
    </div>
  );
}
