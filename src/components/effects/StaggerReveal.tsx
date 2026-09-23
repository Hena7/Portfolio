"use client";

import { useRef, ReactNode, Children } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  scale?: boolean;
}

export default function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.12,
  duration = 0.7,
  delay = 0,
  once = true,
  direction = "up",
  distance = 40,
  scale = false,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const getOffset = () => {
    switch (direction) {
      case "up": return { x: 0, y: distance };
      case "down": return { x: 0, y: -distance };
      case "left": return { x: distance, y: 0 };
      case "right": return { x: -distance, y: 0 };
    }
  };

  const offset = getOffset();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      ...(scale ? { scale: 0.95 } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(scale ? { scale: 1 } : {}),
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
