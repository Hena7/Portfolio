"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiDownload, FiArrowRight, FiChevronDown } from "react-icons/fi";

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
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div className="space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient">Henok Mekonnen</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-4xl font-light text-foreground/80 h-[40px] md:h-[48px]"
            >
              I am a <span className="font-medium text-foreground">{currentText}</span>
              <span className="animate-pulse ml-1 text-primary">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-xl text-lg text-foreground/60 leading-relaxed"
            >
              I build things for the web — mostly full-stack apps that actually get used. 
              Always experimenting, always learning, and I care way too much about button hover states.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <Link
                href="#projects"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="/Henok_Mekonnen_Fullstack_Resume.pdf"
                className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-medium flex items-center gap-2 hover:-translate-y-1"
              >
                Download CV
                <FiDownload />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hidden lg:flex relative justify-center items-center h-[500px]"
          >
            {/* Abstract geometric shapes */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-3xl border border-primary/20 bg-white/5 backdrop-blur-xl rotate-6 hover:rotate-12 transition-transform duration-500 shadow-2xl" />
              <div className="absolute inset-0 rounded-3xl border border-secondary/20 bg-white/5 backdrop-blur-xl -rotate-6 hover:-rotate-12 transition-transform duration-500 shadow-2xl" />
              
              {/* Code snippet decoration */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-dark-navy/80 p-6 flex flex-col font-mono text-sm overflow-hidden shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-primary opacity-80">const developer = {"{"}</div>
                <div className="pl-4 text-foreground/80">
                  name: <span className="text-secondary">'Henok Mekonnen'</span>,
                </div>
                <div className="pl-4 text-foreground/80">
                  skills: [<span className="text-secondary">'React'</span>, <span className="text-secondary">'Next.js'</span>, <span className="text-secondary">'Node.js'</span>],
                </div>
                <div className="pl-4 text-foreground/80">
                  passion: <span className="text-secondary">'Building great UI/UX'</span>,
                </div>
                <div className="pl-4 text-foreground/80">
                  coffee: <span className="text-accent">true</span>
                </div>
                <div className="text-primary opacity-80">{"}"};</div>
                
                <div className="mt-4 text-primary opacity-80">developer.code();</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-foreground/40 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FiChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
