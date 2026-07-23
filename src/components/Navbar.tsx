"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: "body",
          start: "top -40px",
          end: "top -100px",
          scrub: 0.5,
        },
        maxWidth: "960px",
        backgroundColor: "#F3F0EB",
        borderRadius: "100px",
        padding: "12px 32px",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
        ease: "power2.out",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-transparent">
      <div
        ref={containerRef}
        className="mx-auto flex items-center justify-between w-full max-w-[1200px] px-8 text-[#292827] transition-all duration-300"
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 font-extrabold text-xl tracking-tight text-[#0F172A] shrink-0 mr-8">
          <div className="w-8 h-8 rounded-full bg-[#2A2859] flex items-center justify-center text-white">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2 3.4 3.4 3.4 4.6 0 1.2-3.4 3.4-3.4 4.6 0 .2.6.8 1 1.4 1" />
              <path d="M2 18c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2-3.4 3.4-3.4 4.6 0 1.2-3.4 3.4-3.4 4.6 0 .2.6.8 1 1.4 1" />
            </svg>
          </div>
          <span className="text-[#0F172A] font-extrabold text-lg tracking-tight">Susurrus</span>
        </a>

        {/* Navigation Links with Generous Gap & Whitespace NoWrap */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#dictation" className="text-[#475569] hover:text-[#2A2859] text-sm font-semibold whitespace-nowrap transition-colors">
            Capabilities
          </a>
          <a href="#commands" className="text-[#475569] hover:text-[#2A2859] text-sm font-semibold whitespace-nowrap transition-colors">
            Context Commands
          </a>
          <a href="#architecture" className="text-[#475569] hover:text-[#2A2859] text-sm font-semibold whitespace-nowrap transition-colors">
            Architecture
          </a>
          <a href="#savings" className="text-[#475569] hover:text-[#2A2859] text-sm font-semibold whitespace-nowrap transition-colors">
            Savings
          </a>
          <a href="#waitlist" className="text-[#475569] hover:text-[#2A2859] text-sm font-semibold whitespace-nowrap transition-colors">
            Early Access
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3 shrink-0 ml-6">
          <a
            href="#waitlist"
            className="bg-[#2A2859] text-white font-bold text-sm px-6 py-3 rounded-[8px] hover:bg-[#1E1B42] hover:-translate-y-0.5 transition-all duration-200 shadow-sm whitespace-nowrap"
          >
            Get Early Access →
          </a>
        </div>
      </div>
    </header>
  );
}
