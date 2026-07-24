"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
  category: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full perspective-1000"
    >
      {/* Ambient Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ transform: "translateZ(-10px)" }} />
      
      <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors duration-300 flex flex-col h-full" style={{ transform: "translateZ(0)" }}>
        {/* Project Image */}
        <div className="relative h-48 w-full bg-dark-navy/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90 z-10" />
          {image && !imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
              )}
              <Image
                src={image}
                alt={title}
                fill
                className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                unoptimized
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-700">
              <span className="text-4xl font-bold text-white/20">{title[0]}</span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow relative z-20" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-foreground/60 mb-6 text-sm leading-relaxed flex-grow">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-primary/5 text-primary/90 border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group/link"
              >
                <FiExternalLink className="group-hover/link:-mt-1 transition-all" /> Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group/link"
              >
                <FiGithub className="group-hover/link:-mt-1 transition-all" /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
