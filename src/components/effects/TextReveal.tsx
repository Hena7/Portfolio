"use client";

import { useRef, useMemo } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  blur?: boolean;
}

export default function TextReveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  staggerDelay = 0.04,
  duration = 0.6,
  once = true,
  blur = false,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const words = useMemo(() => children.split(" "), [children]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
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
      style={{ display: "inline" }}
    >
      {/* We render a hidden version for SEO / screen readers */}
      <span className="sr-only">{children}</span>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
          }}
          aria-hidden="true"
        >
          {word}{index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  );
}
