"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FiCode, FiServer, FiCoffee, FiStar, FiClock } from "react-icons/fi";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-secondary/5">
      <div className="space-y-12">
        <div className="text-center md:text-left md:ml-4 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Profile Image Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group min-h-[300px] md:min-h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
            <img 
              src="/heni.JPG" 
              alt="Henok Mekonnen" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Animated border gradient */}
            <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 [mask-image:linear-gradient(white,white)] [mask-composite:exclude] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)" }} />
          </motion.div>

          {/* Bio Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/20 transition-colors relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl font-semibold mb-6">The TL;DR</h3>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed relative z-10">
              <p>
                I'm a 3rd-year Software Engineering student at Mekelle University who fell into web development trying to build things for my friends — and never stopped.
              </p>
              <p>
                Instead of just learning theory, I focus on building products that actually get used. From competitive gaming tournament brackets to food delivery platforms, I love bridging the gap between a wild idea and a working application.
              </p>
            </div>
          </motion.div>

          {/* Stats Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary/20 transition-colors flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                <FiStar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold">7+</div>
                <div className="text-sm text-foreground/60 font-medium">Projects Built</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <FiClock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm text-foreground/60 font-medium">Years Coding</div>
              </div>
            </div>
          </motion.div>

          {/* Currently Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 hover:border-primary/40 transition-colors flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </div>
              <h3 className="font-semibold text-lg text-foreground/90">Currently</h3>
            </div>
            
            <ul className="space-y-3 text-foreground/80 flex-grow flex flex-col justify-center">
              <li className="flex items-start gap-2">
                <FiCode className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Deep diving into Next.js 14+</span>
              </li>
              <li className="flex items-start gap-2">
                <FiServer className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Building microservices</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCoffee className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Drinking too much coffee</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}
