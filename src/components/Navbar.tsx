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
            ? "max-w-[920px] bg-[#F3F0EB] rounded-[100px] px-6 py-2.5 shadow-xl border border-[#dcd7d3]"
            : "max-w-[1200px] bg-transparent px-8 py-3"
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
              <path d="M2 18c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2-3.4 3.4-3.4 4.6 0 .2.6.8 1 1.4 1" />
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
        <nav className="hidden lg:flex items-center gap-6 shrink">
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
            href="#waitlist"
            className={`text-xs font-semibold whitespace-nowrap transition-colors ${
              isScrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-slate-200 hover:text-white"
            }`}
          >
            Early Access
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
