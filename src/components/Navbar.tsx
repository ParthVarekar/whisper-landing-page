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
        maxWidth: "800px",
        backgroundColor: "#e9e5dd",
        borderRadius: "100px",
        padding: "10px 24px",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
        color: "#292827",
        ease: "power2.out",
      });

      // Animate nav link colors on scroll
      gsap.to(".nav-text", {
        scrollTrigger: {
          trigger: "body",
          start: "top -40px",
          end: "top -100px",
          scrub: 0.5,
        },
        color: "#292827",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
      <div
        ref={containerRef}
        className="mx-auto flex items-center justify-between w-full max-w-[1200px] px-6 text-white transition-all duration-300"
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
          <span className="text-2xl">🌊</span>
          <span className="nav-text text-white">WhisperFlow</span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#dictation" className="nav-text text-white/80 hover:text-white text-sm font-semibold transition-colors">
            Capabilities
          </a>
          <a href="#commands" className="nav-text text-white/80 hover:text-white text-sm font-semibold transition-colors">
            Context Commands
          </a>
          <a href="#architecture" className="nav-text text-white/80 hover:text-white text-sm font-semibold transition-colors">
            Architecture
          </a>
          <a href="#savings" className="nav-text text-white/80 hover:text-white text-sm font-semibold transition-colors">
            Savings
          </a>
          <a href="#waitlist" className="nav-text text-white/80 hover:text-white text-sm font-semibold transition-colors">
            Early Access
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="bg-[#e9e5dd] text-[#292827] font-bold text-sm px-5 py-2.5 rounded-[8px] hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
          >
            Get Early Access →
          </a>
        </div>
      </div>
    </header>
  );
}
