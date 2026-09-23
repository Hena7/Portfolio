"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import TextReveal from "@/components/effects/TextReveal";
import StaggerReveal from "@/components/effects/StaggerReveal";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "PlayStation Tournament App",
    description:
      "Competitive gaming platform using Swiss-system pairing. Features random pairing, ranking system, live leaderboard, and detailed player dashboards.",
    tags: ["React", "TailwindCSS", "Prisma", "Node.js", "Socket.io"],
    category: "Full-Stack",
    demoLink: "https://bekisha.vercel.app",
    githubLink: "https://github.com/Hena7/PlayStation-Tournament-App",
    image:
      "https://api.microlink.io/?url=https://bekisha.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "Maedot Consulting",
    description:
      "A comprehensive construction consulting management app that organizes clients, projects, and analytics dashboards. Includes robust admin features for efficient management.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full-Stack",
    demoLink: "https://maedot-consultant.vercel.app",
    githubLink: "https://github.com/Hena7/Maedot-Consulting",
    image:
      "https://api.microlink.io/?url=https://maedot-consultant.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "Yzezun Delivery System",
    description:
      "A food delivery platform featuring admin and customer dashboards, real-time order tracking, and efficient delivery management systems.",
    tags: ["Next.js", "TailwindCSS", "Firebase", "Google Maps API"],
    category: "Full-Stack",
    demoLink: "https://yzezun.vercel.app",
    githubLink: "https://github.com/Hena7/Yzezun-delivery",
    image:
      "https://api.microlink.io/?url=https://yzezun.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "EasyRentX",
    description:
      "A modern car rental application with advanced search, booking management, and user-friendly interface for seamless vehicle rental experiences.",
    tags: ["React", "TypeScript", "TailwindCSS", "Prisma"],
    category: "Full-Stack",
    demoLink: "https://easy-rent-h.vercel.app",
    githubLink: "https://github.com/Hena7/EasyRentX",
    image:
      "https://api.microlink.io/?url=https://easy-rent-h.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "HeniChat",
    description:
      "A modern real-time chat application built with Next.js, Zustand, and Firebase. Features clean UI, responsive design, chat lists, message bubbles, and real-time syncing. Designed to showcase UI architecture and dynamic state management.",
    tags: ["Next.js", "TailwindCSS", "ShadCN UI", "Firebase", "Zustand"],
    category: "Frontend",
    demoLink: "https://heni-chat-h.vercel.app",
    githubLink: "https://github.com/Hena7/HeniChat",
    image:
      "https://api.microlink.io/?url=https://heni-chat-h.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "Lena Garment Store",
    description:
      "An elegant e-commerce platform for luxury fashion items featuring a modern shopping experience, product catalog, and streamlined checkout process.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Stripe"],
    category: "Full-Stack",
    demoLink: "https://lena-luxe-wear.vercel.app",
    githubLink: "https://github.com/Hena7/Lena-garment-store",
    image:
      "https://api.microlink.io/?url=https://lena-luxe-wear.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
  {
    title: "Property Rental Platform",
    description:
      "A Next.js-powered rental platform with comprehensive property listings, booking system, and intuitive user experience for property rentals.",
    tags: ["Next.js", "React", "TailwindCSS", "MongoDB"],
    category: "Full-Stack",
    demoLink: "https://easy-rent-x.vercel.app",
    githubLink: "https://github.com/Hena7/EasyRent",
    image:
      "https://api.microlink.io/?url=https://easy-rent-x.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Backend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <SectionWrapper id="projects" className="bg-secondary/5">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            <TextReveal staggerDelay={0.08} blur delay={0.1}>
              Featured
            </TextReveal>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-gradient inline-block"
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            A selection of projects that demonstrate my ability to solve complex
            problems.
          </motion.p>
        </div>

        {/* Category Filter with animated indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "text-white scale-105"
                  : "bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-foreground"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid with Stagger */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
