"use client";

import React from "react"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
  triggerOffset?: string;
}

export function TextReveal({
  children,
  className = "",
  as: Component = "h2",
  delay = 0,
  staggerDelay = 0.05,
  triggerOffset = "bottom 85%",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const container = containerRef.current;
    const words = container.querySelectorAll(".word");

    // Set initial state
    gsap.set(words, {
      y: "100%",
      opacity: 0,
    });

    // Create scroll-triggered animation
    const ctx = gsap.context(() => {
      gsap.to(words, {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: staggerDelay,
        delay: delay,
        scrollTrigger: {
          trigger: container,
          start: triggerOffset,
          toggleActions: "play none none none",
          once: true,
        },
        onComplete: () => {
          hasAnimated.current = true;
        },
      });
    }, container);

    return () => ctx.revert();
  }, [delay, staggerDelay, triggerOffset]);

  // Split text into words, each wrapped for animation
  const words = children.split(" ");

  return (
    <Component ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
        >
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </Component>
  );
}

// Alternative component for character-by-character reveal (more dramatic)
interface CharRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  staggerDelay?: number;
}

export function CharReveal({
  children,
  className = "",
  as: Component = "h2",
  delay = 0,
  staggerDelay = 0.02,
}: CharRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const container = containerRef.current;
    const chars = container.querySelectorAll(".char");

    gsap.set(chars, {
      y: "100%",
      opacity: 0,
    });

    const ctx = gsap.context(() => {
      gsap.to(chars, {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: staggerDelay,
        delay: delay,
        scrollTrigger: {
          trigger: container,
          start: "bottom 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onComplete: () => {
          hasAnimated.current = true;
        },
      });
    }, container);

    return () => ctx.revert();
  }, [delay, staggerDelay]);

  // Split into words first, then characters
  const words = children.split(" ");

  return (
    <Component ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block mr-[0.25em] last:mr-0">
          {word.split("").map((char, charIndex) => (
            <span
              key={`char-${wordIndex}-${charIndex}`}
              className="inline-block overflow-hidden"
            >
              <span className="char inline-block">{char}</span>
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
