"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillCard from "@/components/ui/SkillCard";
import TextReveal from "@/components/effects/TextReveal";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiNpm
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#181717" },
  { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
  { name: "NPM", icon: <SiNpm />, color: "#CB3837" },
];

export default function Skills() {
  // Split skills into two rows for the marquee
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  return (
    <SectionWrapper id="skills" className="overflow-hidden">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            <TextReveal staggerDelay={0.08} blur delay={0.1}>
              What I
            </TextReveal>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-gradient inline-block"
            >
              Work With
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            The technologies, frameworks, and tools I use to bring ideas to life.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex flex-col gap-6 w-full max-w-[100vw]"
        >

          {/* Marquee Row 1 */}
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-6 pl-6">
            {[...row1, ...row1, ...row1].map((skill, index) => (
              <SkillCard 
                key={`row1-${skill.name}-${index}`}
                {...skill}
              />
            ))}
          </div>

          {/* Marquee Row 2 */}
          <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused] gap-6 pl-6">
            {[...row2, ...row2, ...row2].map((skill, index) => (
              <SkillCard 
                key={`row2-${skill.name}-${index}`}
                {...skill}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
