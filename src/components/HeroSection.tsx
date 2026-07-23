"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (headlineRef.current && portraitRef.current) {
      gsap.fromTo(
        portraitRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("git clone https://github.com/ParthVarekar/whisper_flow_clone_local.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-28 pb-20 bg-[#F9F8F6] text-[#0F172A] text-center relative overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        
        {/* Top Brand Pill with Clean SVG Sparkle */}
        <div className="inline-flex items-center gap-2 bg-[#2A2859] text-white px-5 py-2 rounded-full mb-8 shadow-sm">
          <span className="font-bold text-sm">WhisperFlow Engine</span>
          <svg className="w-3.5 h-3.5 text-[#cbb7fb]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        {/* Hero Editorial Portrait Photography */}
        <div
          ref={portraitRef}
          className="relative max-w-[440px] mx-auto mb-8 rounded-[24px] overflow-hidden shadow-2xl border border-[#dcd7d3] aspect-[3/4]"
        >
          <Image
            src="/assets/hero_portrait.jpg"
            alt="WhisperFlow Editorial Creator Portrait"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Display Headline */}
        <h1
          ref={headlineRef}
          className="text-[44px] md:text-[56px] font-[540] leading-[1.05] tracking-tight text-[#0F172A] max-w-[800px] mx-auto mb-6"
        >
          Save 4 hours every single week.<br />
          <span className="font-serif italic font-normal text-[#2A2859] block mt-1">
            The most productive voice experience in the world.
          </span>
        </h1>

        {/* Airy Body Copy */}
        <p className="text-lg md:text-xl font-[460] leading-[1.50] text-[#334155] max-w-[720px] mx-auto mb-8">
          The human voice speaks at 160 words per minute. The keyboard caps out at 40. WhisperFlow listens, cleans stutters, structures thought, and pastes executive-ready text directly at your cursor—100% on your device.
        </p>

        {/* Two-Mode CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <a
            href="#waitlist"
            className="bg-[#2A2859] text-white font-bold text-base px-8 py-4 rounded-[8px] hover:bg-[#1E1B42] hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-[#2A2859]/20"
          >
            Get Early Access →
          </a>

          <button
            onClick={handleCopy}
            className="bg-white border border-[#dcd7d3] text-[#0F172A] font-semibold text-base px-6 py-4 rounded-[8px] hover:bg-[#F3F0EB] transition-all duration-200 flex items-center gap-2 shadow-sm"
          >
            <span>{copied ? "Copied Git Command!" : "git clone repo"}</span>
            <kbd className="bg-[#F9F8F6] text-xs px-2 py-0.5 rounded-[4px] font-mono text-[#475569] border border-[#dcd7d3]">
              Click to copy
            </kbd>
          </button>
        </div>

        {/* Frictionless Microcopy */}
        <p className="text-xs text-[#475569] font-medium mb-10">
          Get early access. No credit card required. Setup in 1 minute.
        </p>

        {/* Global Hotkey Banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white border border-[#dcd7d3] px-6 py-3 rounded-[8px] shadow-sm">
          <span className="font-mono text-xs text-[#475569] font-semibold">GLOBAL HOTKEY:</span>
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
            <kbd className="bg-[#F9F8F6] px-2.5 py-1 rounded-[6px] text-[#0F172A] border border-[#dcd7d3]">Ctrl</kbd>
            <span className="text-[#475569]">+</span>
            <kbd className="bg-[#F9F8F6] px-2.5 py-1 rounded-[6px] text-[#0F172A] border border-[#dcd7d3]">Shift</kbd>
            <span className="text-[#475569]">+</span>
            <kbd className="bg-[#F9F8F6] px-3 py-1 rounded-[6px] text-[#0F172A] border border-[#dcd7d3]">Space</kbd>
          </div>
          <span className="text-xs text-[#475569] hidden sm:inline">• Hold anywhere on Desktop</span>
        </div>

      </div>
    </section>
  );
}
