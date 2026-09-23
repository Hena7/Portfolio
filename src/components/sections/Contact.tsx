"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TextReveal from "@/components/effects/TextReveal";
import StaggerReveal from "@/components/effects/StaggerReveal";
import MagneticButton from "@/components/effects/MagneticButton";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xkovwvza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-secondary/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 font-medium text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for opportunities
            </div>
            
            <TextReveal
              className="text-3xl md:text-5xl font-bold mb-6"
              staggerDelay={0.06}
              blur
            >
              Let's build something together
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-foreground/60 text-lg leading-relaxed max-w-md"
            >
              Got a project idea? Need a developer? Or just want to talk code? I'm currently looking for new opportunities and my inbox is always open.
            </motion.p>
          </motion.div>

          <StaggerReveal className="space-y-4" staggerDelay={0.12} direction="left" distance={30}>
            <a
              href="mailto:henockmekonnen105@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 hover:border-primary/30 transition-all group hover:-translate-y-1 shadow-sm dark:shadow-none"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground/50 font-medium mb-1">Email me at</p>
                <h3 className="font-medium text-lg group-hover:text-primary transition-colors">henockmekonnen105@gmail.com</h3>
              </div>
            </a>

            <a
              href="tel:+251904307038"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 hover:border-primary/30 transition-all group hover:-translate-y-1 shadow-sm dark:shadow-none"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground/50 font-medium mb-1">Call me at</p>
                <h3 className="font-medium text-lg group-hover:text-primary transition-colors">+251 90 430 7038</h3>
              </div>
            </a>

            <div className="flex gap-4 pt-4">
              {[
                { icon: <FiGithub className="w-6 h-6" />, href: "https://github.com/Hena7", label: "GitHub" },
                { icon: <FiLinkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/henok-mekonnen-734731362", label: "LinkedIn" },
                { icon: <FaTelegram className="w-6 h-6" />, href: "https://t.me/hena2129", label: "Telegram" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-2 relative group hover:glow-primary shadow-sm dark:shadow-none"
                  aria-label={social.label}
                >
                  {social.icon}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </StaggerReveal>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="p-8 md:p-10 rounded-3xl bg-white/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/10 relative overflow-hidden shadow-xl shadow-black/[0.02] dark:shadow-none"
        >
          {/* Decorative blur */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80 pl-1">
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-foreground/20 focus:shadow-[0_0_20px_rgba(245,166,35,0.1)]"
                placeholder="John Doe"
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1 pl-1 font-medium flex items-center gap-1">
                  * {errors.name.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80 pl-1">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-foreground/20 focus:shadow-[0_0_20px_rgba(245,166,35,0.1)]"
                placeholder="john@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 pl-1 font-medium flex items-center gap-1">
                  * {errors.email.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/80 pl-1"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all hover:border-foreground/20 resize-none focus:shadow-[0_0_20px_rgba(245,166,35,0.1)]"
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <span className="text-red-500 text-xs mt-1 pl-1 font-medium flex items-center gap-1">
                  * {errors.message.message}
                </span>
              )}
            </div>

            <MagneticButton strength={0.15}>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-all disabled:opacity-70 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] shimmer"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <FiCheckCircle className="w-5 h-5" />
                      Message Sent!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message 
                      <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </MagneticButton>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
