"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300 bg-transparent">
      <div
        className={`mx-auto flex items-center justify-between w-full transition-all duration-300 box-border ${
          isScrolled
            ? "max-w-[960px] bg-[#F3F0EB] rounded-[100px] px-6 py-2.5 shadow-xl border border-[#dcd7d3]"
            : "max-w-[1240px] bg-transparent px-8 py-3"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 text-lg tracking-tight shrink-0">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              isScrolled ? "bg-[#2A2859] text-white" : "bg-white/20 backdrop-blur-md text-white"
            }`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2 3.4 3.4 3.4 4.6 0 1.2-3.4 3.4-3.4 4.6 0 .2.6.8 1 1.4 1" />
              <path d="M2 18c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2 3.4 3.4 3.4 4.6 0 .2.6.8 1 1.4 1" />
            </svg>
          </div>
          <span
            className={`font-extrabold text-base tracking-tight shrink-0 transition-colors ${
              isScrolled ? "text-[#0F172A]" : "text-white"
            }`}
          >
            Susurrus
          </span>
        </a>

        {/* Navigation Links with High Contrast Colors */}
        <nav className="hidden md:flex items-center gap-5 shrink">
          <a
            href="#dictation"
            className={`text-xs font-semibold whitespace-nowrap transition-colors ${
              isScrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-slate-200 hover:text-white"
            }`}
          >
            Capabilities
          </a>
          <a
            href="#commands"
            className={`text-xs font-semibold whitespace-nowrap transition-colors ${
              isScrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-slate-200 hover:text-white"
            }`}
          >
            Context Commands
          </a>
          <a
            href="#architecture"
            className={`text-xs font-semibold whitespace-nowrap transition-colors ${
              isScrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-slate-200 hover:text-white"
            }`}
          >
            Architecture
          </a>
          <a
            href="#savings"
            className={`text-xs font-semibold whitespace-nowrap transition-colors ${
              isScrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-slate-200 hover:text-white"
            }`}
          >
            Savings
          </a>
          <a
            href="https://github.com/ParthVarekar/whisper-landing-page"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
              isScrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-slate-200 hover:text-white"
            }`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="mailto:parthvarekar27@gmail.com"
            className={`text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
              isScrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-slate-200 hover:text-white"
            }`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Contact</span>
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center shrink-0">
          <a
            href="#waitlist"
            className="bg-[#2A2859] text-white font-bold text-xs px-4 py-2 rounded-[8px] hover:bg-[#1E1B42] hover:-translate-y-0.5 transition-all duration-200 shadow-md whitespace-nowrap shrink-0 border border-white/20"
          >
            Get Early Access →
          </a>
        </div>
      </div>
    </header>
  );
}
