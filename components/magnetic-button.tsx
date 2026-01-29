"use client";

import React from "react"

import { useRef, useCallback } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  strength?: number;
}

export function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
  strength = 0.4,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!buttonRef.current || !textRef.current) return;

      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(textRef.current, {
        x: x * strength * 0.5,
        y: y * strength * 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!buttonRef.current || !textRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });

    gsap.to(textRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md transition-colors overflow-hidden";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "bg-transparent text-foreground border border-border hover:bg-secondary hover:border-muted-foreground";

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`${baseStyles} ${variantStyles} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={textRef} className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Link>
  );
}
