"use client";

import { ReactNode, useState } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  color: string;
}

export default function SkillCard({ name, icon, color }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 group relative overflow-hidden shrink-0 cursor-default shadow-sm dark:shadow-none"
      style={{
        transform: hovered ? "scale(1.05) translateY(-2px)" : "scale(1) translateY(0)",
        boxShadow: hovered ? `0 0 24px ${color}22, 0 0 48px ${color}11` : "none",
        borderColor: hovered ? `${color}33` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{ 
          background: color,
          opacity: hovered ? 0.1 : 0,
        }}
      />
      
      <div 
        className="relative z-10 text-2xl transition-transform duration-300 drop-shadow-md"
        style={{ 
          color: color,
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {icon}
      </div>
      <h3 className="relative z-10 font-medium text-lg text-foreground/90 whitespace-nowrap">{name}</h3>
    </div>
  );
}
