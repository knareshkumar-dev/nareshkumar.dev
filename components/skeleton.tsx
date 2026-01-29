"use client";

import { motion } from "framer-motion";

export function SkeletonCard() {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="bg-card border border-border rounded-lg p-6 space-y-4"
    >
      <div className="h-12 bg-secondary/50 rounded-lg" />
      <div className="h-4 bg-secondary/50 rounded w-3/4" />
      <div className="h-4 bg-secondary/50 rounded w-full" />
      <div className="h-4 bg-secondary/50 rounded w-4/5" />
    </motion.div>
  );
}

export function SkeletonText() {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="space-y-3"
    >
      <div className="h-4 bg-secondary/50 rounded w-full" />
      <div className="h-4 bg-secondary/50 rounded w-5/6" />
      <div className="h-4 bg-secondary/50 rounded w-4/5" />
    </motion.div>
  );
}

export function SkeletonAvatar() {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-12 h-12 bg-secondary/50 rounded-full"
    />
  );
}
