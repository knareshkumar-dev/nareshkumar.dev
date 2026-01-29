"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    const container = containerRef.current;
    if (!progress || !container) return;

    // Set initial state
    gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

    // Create scroll-linked animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.to(progress, {
          scaleX: self.progress,
          duration: 0.1,
          ease: "none",
        });
      },
    });

    // Show/hide based on scroll position
    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        gsap.to(container, { opacity: 1, duration: 0.3 });
      } else {
        gsap.to(container, { opacity: 0, duration: 0.3 });
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollTrigger.kill();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 right-0 z-50 h-1 opacity-0"
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-border/50" />
      
      {/* Progress bar */}
      <div
        ref={progressRef}
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent"
        style={{ transformOrigin: "left center" }}
      />
      
      {/* Glow effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent blur-sm opacity-50"
        style={{ 
          transform: `scaleX(var(--progress, 0))`,
          transformOrigin: "left center" 
        }}
      />
    </div>
  );
}
