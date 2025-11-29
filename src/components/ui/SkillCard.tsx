"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  color: string;
  index: number;
}

export default function SkillCard({ name, icon, color, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ background: color }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div 
          className="text-4xl transition-transform duration-300 group-hover:scale-110"
          style={{ color: color }}
        >
          {icon}
        </div>
        <h3 className="font-medium text-lg">{name}</h3>
      </div>
    </motion.div>
  );
}
