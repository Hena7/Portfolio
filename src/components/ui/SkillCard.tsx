"use client";

import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  color: string;
}

export default function SkillCard({ name, icon, color }: SkillCardProps) {
  return (
    <div
      className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 group relative overflow-hidden shrink-0 cursor-default"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: color }}
      />
      
      <div 
        className="relative z-10 text-2xl transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
        style={{ color: color }}
      >
        {icon}
      </div>
      <h3 className="relative z-10 font-medium text-lg text-foreground/90 whitespace-nowrap">{name}</h3>
    </div>
  );
}
