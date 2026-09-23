"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiDownload, FiArrowRight, FiChevronDown } from "react-icons/fi";
import TextReveal from "@/components/effects/TextReveal";
import MagneticButton from "@/components/effects/MagneticButton";
import ParallaxSection from "@/components/effects/ParallaxSection";

const roles = [
  "Full-Stack Developer",
  "React Enthusiast",
  "Problem Solver",
  "Software Engineer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const codeCardY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const codeCardRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayAfterFullText = 2000;

    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delayAfterFullText);
        return;
      }

      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      const nextText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(nextText);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div className="space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>

            {/* Word-by-word title reveal */}
            <div>
              <TextReveal
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                delay={0.4}
                staggerDelay={0.08}
                duration={0.7}
                blur
              >
                Hi, I'm
              </TextReveal>
              <TextReveal
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient"
                delay={0.8}
                staggerDelay={0.08}
                duration={0.7}
                blur
              >
                Henok Mekonnen
              </TextReveal>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-2xl md:text-4xl font-light text-foreground/80 h-[40px] md:h-[48px]"
            >
              I am a <span className="font-medium text-foreground">{currentText}</span>
              <span className="animate-pulse ml-1 text-primary">|</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <TextReveal
                className="max-w-xl text-lg text-foreground/60 leading-relaxed"
                delay={1.6}
                staggerDelay={0.02}
                duration={0.5}
              >
                I build things for the web — mostly full-stack apps that actually get used. Always experimenting, always learning, and I care way too much about button hover states.
              </TextReveal>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <MagneticButton>
                <Link
                  href="#projects"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 shimmer"
                >
                  View Projects
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href="/Henok_Mekonnen_Fullstack_Resume.pdf"
                  className="px-8 py-4 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all font-medium flex items-center gap-2 hover:-translate-y-1 shadow-sm dark:shadow-none"
                >
                  Download CV
                  <FiDownload />
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:flex relative justify-center items-center h-[500px]"
          >
            {/* Abstract geometric shapes with parallax */}
            <ParallaxSection speed={0.3} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
            </ParallaxSection>

            {/* Floating code card with scroll-linked transform */}
            <motion.div
              className="ml-20 lg:ml-40 relative w-[340px] h-[340px] shrink-0"
              style={{ y: codeCardY, rotate: codeCardRotate }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              }}
            >
              <div className="absolute inset-0 rounded-3xl border border-primary/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl rotate-6 hover:rotate-12 transition-transform duration-500 shadow-xl dark:shadow-2xl" />
              <div className="absolute inset-0 rounded-3xl border border-secondary/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl -rotate-6 hover:-rotate-12 transition-transform duration-500 shadow-xl dark:shadow-2xl" />

              {/* Code snippet decoration */}
              <div className="absolute inset-0 rounded-3xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-dark-navy/85 backdrop-blur-2xl p-6 flex flex-col font-mono text-sm overflow-hidden shadow-2xl dark:shadow-black/50 glow-primary transition-colors duration-300">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/5 dark:border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] text-foreground/40 font-mono select-none">developer.ts</span>
                </div>
                <div className="text-amber-600 dark:text-primary font-semibold">const developer = {"{"}</div>
                <div className="pl-4 text-foreground/80">
                  name: <span className="text-secondary font-medium">'Henok Mekonnen'</span>,
                </div>
                <div className="pl-4 text-foreground/80">
                  skills: [<span className="text-secondary font-medium">'React'</span>, <span className="text-secondary font-medium">'Next.js'</span>, <span className="text-secondary font-medium">'Node.js'</span>],
                </div>
                <div className="pl-4 text-foreground/80">
                  passion: <span className="text-secondary font-medium">'Building great UI/UX'</span>,
                </div>
                <div className="pl-4 text-foreground/80">
                  coffee: <span className="text-accent font-medium">true</span>
                </div>
                <div className="text-amber-600 dark:text-primary font-semibold">{"}"};
                </div>

                <div className="mt-4 text-amber-600 dark:text-primary font-semibold">developer.code();</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Gradients with Parallax */}
      <ParallaxSection speed={0.4} className="absolute top-1/4 -left-40 w-96 h-96 -z-10 pointer-events-none">
        <div className="w-full h-full bg-primary/20 rounded-full blur-[100px]" />
      </ParallaxSection>
      <ParallaxSection speed={0.6} direction="down" className="absolute bottom-0 right-0 w-96 h-96 -z-10 pointer-events-none">
        <div className="w-full h-full bg-secondary/20 rounded-full blur-[100px]" />
      </ParallaxSection>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-foreground/40 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary/20 animate-ping" />
          <FiChevronDown className="w-5 h-5 text-primary relative z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
}
