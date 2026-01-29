"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  className?: string;
}

export function ImageReveal({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const reveal = revealRef.current;
    if (!container || !reveal) return;

    // Set initial clip-path based on direction
    const clipPaths = {
      left: {
        initial: "inset(0 100% 0 0)",
        final: "inset(0 0% 0 0)",
      },
      right: {
        initial: "inset(0 0 0 100%)",
        final: "inset(0 0 0 0%)",
      },
      top: {
        initial: "inset(100% 0 0 0)",
        final: "inset(0% 0 0 0)",
      },
      bottom: {
        initial: "inset(0 0 100% 0)",
        final: "inset(0 0 0% 0)",
      },
    };

    gsap.set(reveal, { clipPath: clipPaths[direction].initial });

    const ctx = gsap.context(() => {
      gsap.to(reveal, {
        clipPath: clipPaths[direction].final,
        duration: 1.2,
        ease: "power4.inOut",
        delay,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, container);

    return () => ctx.revert();
  }, [direction, delay]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={revealRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
