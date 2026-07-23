"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Initial reveal animation
    if (headlineRef.current && cardRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("git clone https://github.com/ParthVarekar/whisper_flow_clone_local.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1b1938] via-[#2d2955] to-[#e9e5dd] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        
        {/* Hero Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-[8px] mb-8">
          <span className="text-[#cbb7fb] text-xs font-bold font-mono tracking-wider uppercase">
            ✦ WhisperFlow Local Engine ✦
          </span>
        </div>

        {/* Pain-First Display Headline: 64px, weight 540, line-height 0.96 */}
        <h1
          ref={headlineRef}
          className="text-[44px] md:text-[64px] font-[540] leading-[0.96] tracking-tight text-white max-w-[920px] mx-auto mb-6"
        >
          Save 4 hours every single week.<br />
          <span className="font-serif italic font-normal text-[#cbb7fb] block mt-2">
            The most productive voice experience in the world.
          </span>
        </h1>

        {/* Airy Body Copy: 16px, weight 460, line-height 1.50 */}
        <p className="text-lg md:text-xl font-[460] leading-[1.50] text-[#cbd5e1] max-w-[740px] mx-auto mb-10">
          The human voice speaks at 160 words per minute. The keyboard caps out at 40. WhisperFlow listens, cleans stutters, structures thought, and pastes executive-ready text directly at your cursor—100% on your device.
        </p>

        {/* Two-Mode CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <a
            href="#waitlist"
            className="bg-[#e9e5dd] text-[#292827] font-bold text-base px-8 py-4 rounded-[8px] hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#1b1938]/40"
          >
            Get Early Access →
          </a>

          <button
            onClick={handleCopy}
            className="bg-white/10 border border-white/20 text-white font-semibold text-base px-6 py-4 rounded-[8px] hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
          >
            <span>{copied ? "Copied Git Command!" : "git clone repo"}</span>
            <kbd className="bg-white/10 text-xs px-2 py-0.5 rounded-[4px] font-mono text-[#cbd5e1]">
              Click to copy
            </kbd>
          </button>
        </div>

        {/* Frictionless Microcopy */}
        <p className="text-xs text-[#cbd5e1] font-medium mb-12">
          Get early access. No credit card required. Setup in 1 minute.
        </p>

        {/* Global Hotkey Banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/10 border border-white/20 px-6 py-3 rounded-[8px] mb-12">
          <span className="font-mono text-xs text-[#cbd5e1] font-semibold">GLOBAL HOTKEY:</span>
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
            <kbd className="bg-white/20 px-2.5 py-1 rounded-[6px] text-white">Ctrl</kbd>
            <span className="text-white/60">+</span>
            <kbd className="bg-white/20 px-2.5 py-1 rounded-[6px] text-white">Shift</kbd>
            <span className="text-white/60">+</span>
            <kbd className="bg-white/20 px-3 py-1 rounded-[6px] text-white">Space</kbd>
          </div>
          <span className="text-xs text-[#cbd5e1] hidden sm:inline">• Hold anywhere on Desktop</span>
        </div>

        {/* Floating Glassmorphic Hero Overlay with Full-Bleed Portrait Background */}
        <div
          ref={cardRef}
          className="relative max-w-[840px] mx-auto rounded-[16px] overflow-hidden shadow-2xl border border-white/20 glass-overlay p-8 text-left"
        >
          {/* Background Editorial Photo Layer */}
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/assets/hero_portrait.jpg"
              alt="Editorial Creator Portrait"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating UI HUD Content */}
          <div className="relative z-10 space-y-6">
            <div className="bg-black/40 border border-white/15 rounded-full px-6 py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  RECORDING & TRANSCRIBING...
                </span>
              </div>

              <div className="flex items-center gap-1 h-4">
                <div className="w-1 bg-[#cbb7fb] h-3 animate-pulse" />
                <div className="w-1 bg-[#cbb7fb] h-4 animate-pulse delay-100" />
                <div className="w-1 bg-[#cbb7fb] h-2 animate-pulse delay-200" />
                <div className="w-1 bg-[#cbb7fb] h-4 animate-pulse delay-75" />
              </div>

              <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full">
                ⚡ 142ms Local C++
              </span>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-[8px] p-5 space-y-2">
              <div className="font-mono text-xs font-bold text-[#cbb7fb]">
                RAW AUDIO TRANSCRIPT → GEMMA 2B FORMATTED:
              </div>
              <p className="text-white text-base leading-relaxed">
                "• <strong>Executive Action Items:</strong> Review deployment timeline, approve OAuth2 refactor.<br />
                <em>Note: Team meeting rescheduled to Thursday 3:00 PM.</em>"
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
