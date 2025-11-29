"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillCard from "@/components/ui/SkillCard";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiNpm
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "SQL", icon: <SiMysql />, color: "#4479A1" }, // Using MySQL icon for generic SQL
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    ]
  },
  {
    category: "Other Skills",
    items: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "IDEs", icon: <VscCode />, color: "#007ACC" },
      { name: "Package Managers", icon: <SiNpm />, color: "#CB3837" },
    ]
  }
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            A showcase of the technologies and tools I use to build digital products.
          </motion.p>
        </div>

        <div className="grid gap-12">
          {skills.map((category, catIndex) => (
            <div key={category.category} className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-semibold border-l-4 border-primary pl-4"
              >
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.items.map((skill, index) => (
                  <SkillCard 
                    key={skill.name}
                    {...skill}
                    index={index + (catIndex * 4)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
