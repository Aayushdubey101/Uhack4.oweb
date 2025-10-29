import { Variants } from "framer-motion";

// Check for prefers-reduced-motion
const prefersReducedMotion = typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Base duration and stagger values
const DURATION = 0.5;
const STAGGER = 0.12;

// Container variant for staggering children
export const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER,
      delayChildren: 0.1,
    },
  },
};

// Fade up animation for individual items
export const fadeUp: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    y: prefersReducedMotion ? 0 : 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION,
      ease: "easeOut",
    },
  },
};

// Hover lift effect for cards and interactive elements
export const hoverLift: Variants = {
  hover: {
    y: prefersReducedMotion ? 0 : -4,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Combined fadeUp and hoverLift for cards
export const cardVariants: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    y: prefersReducedMotion ? 0 : 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION,
      ease: "easeOut",
    },
  },
  hover: {
    y: prefersReducedMotion ? 0 : -4,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Button hover scale
export const buttonHover: Variants = {
  hover: {
    scale: prefersReducedMotion ? 1 : 1.02,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  tap: {
    scale: prefersReducedMotion ? 1 : 0.98,
    transition: {
      duration: 0.1,
    },
  },
};
