import type { Variants, Easing } from "framer-motion";

export const easeCurve: Easing = [0.22, 1, 0.36, 1]; // cubic-bezier "eased"

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeCurve, 
      delay,
    },
  },
});
