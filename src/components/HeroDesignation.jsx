"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const designations = [
  "AI-Powered Full-Stack Web Engineer",
  "MERN Stack Developer",
  "React.js & Next.js Specialist",
  "Junior Backend Developer",
  "SaaS & Cloud Architect",
];

export default function HeroDesignation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % designations.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="font-heading mt-3 min-h-8 text-xl font-semibold text-primary sm:text-2xl"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={designations[activeIndex]}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        >
          {designations[activeIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
