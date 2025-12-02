"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            A selection of projects that demonstrate my ability to solve complex
            problems.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-foreground/60 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
