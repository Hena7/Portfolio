"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 bg-background overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <Link href="#home" className="text-3xl font-bold font-mono inline-block">
              <span className="text-primary">H</span>M
            </Link>
            <p className="text-foreground/60 text-sm max-w-xs leading-relaxed">
              Building things for the web that look good and work even better. Based in Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-semibold text-foreground/90 mb-2">Quick Links</h4>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm text-foreground/60 hover:text-primary transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-semibold text-foreground/90 mb-1">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Hena7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/henok-mekonnen-734731362"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://t.me/hena2129"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
                aria-label="Telegram"
              >
                <FaTelegram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <a href="mailto:henockmekonnen105@gmail.com" className="text-sm text-foreground/60 hover:text-primary transition-colors mt-2 inline-block">
              henockmekonnen105@gmail.com
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Henok Mekonnen Berhe. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="text-sm text-foreground/40 hover:text-primary transition-colors flex items-center gap-2 group p-2"
            aria-label="Back to top"
          >
            Back to top 
            <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
