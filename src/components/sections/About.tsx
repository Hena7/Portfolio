"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FiUser, FiCode, FiServer, FiDatabase } from "react-icons/fi";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-secondary/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 group-hover:opacity-10 transition-opacity duration-500" />
            {/* Placeholder for Profile Image */}
            <div className="w-full h-full flex items-center justify-center text-primary/50">
              <img src="/heni.JPG" />
              {/* <FiUser className="w-32 h-32" /> */}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -z-10" />
        </motion.div>

        {/* Content Column */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-lg text-foreground/80"
          >
            <p>
              I am a dedicated and motivated{" "}
              <span className="text-primary font-medium">
                Software Engineering student
              </span>{" "}
              at Mekelle University, Arid Campus, Ethiopia.
            </p>
            <p>
              With a strong passion for technology and innovation, I focus on
              solving real-world problems through code. I am constantly looking
              for opportunities to learn, collaborate in teams, and deliver
              impactful projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          >
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <FiCode className="text-primary w-6 h-6" />
                <h3 className="font-semibold">Frontend</h3>
              </div>
              <p className="text-sm text-foreground/60">
                React.js, Next.js, TailwindCSS
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <FiServer className="text-secondary w-6 h-6" />
                <h3 className="font-semibold">Backend</h3>
              </div>
              <p className="text-sm text-foreground/60">
                Node.js, MongoDB, SQL, PostgreSQL
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
