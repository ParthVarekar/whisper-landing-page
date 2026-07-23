"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        ".hero-floating-card",
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-24 bg-gradient-to-b from-[#1b1938] via-[#2d2955] to-[#121929] text-white text-center relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-8">
        
        {/* Top Headline & Subtitle */}
        <div className="space-y-4 max-w-[840px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-[540] leading-[1.08] tracking-tight text-white">
            Speech to Structured Thought.
          </h1>
          <p className="text-lg md:text-xl font-normal text-slate-200 leading-relaxed">
            Dictation, Context, and AI that works in every app and tab
          </p>

          {/* Dark Violet Pill CTA */}
          <div className="pt-4 flex justify-center">
            <a
              href="#waitlist"
              className="bg-[#2A2859] hover:bg-[#1E1B42] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-3 shadow-2xl border border-white/20 group"
            >
              <span>Get Susurrus</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </div>
            </a>
          </div>
        </div>

        {/* Hero Interactive Workspace Canvas */}
        <div className="relative max-w-[1180px] mx-auto pt-10 pb-16 min-h-[600px] flex items-center justify-center">
          
          {/* Central Editorial Portrait */}
          <div className="relative w-[340px] md:w-[420px] h-[480px] rounded-[32px] overflow-hidden border border-white/20 shadow-2xl mx-auto z-10">
            <Image
              src="/assets/hero_portrait.jpg"
              alt="Susurrus Editorial Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* NEW 1: Top Left Floating Chip (Top Left Circle) */}
          <div className="hero-floating-card absolute left-4 top-4 hidden xl:flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg z-20">
            <svg className="w-3.5 h-3.5 text-[#cbb7fb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>Dictating at 160 WPM • Sub-200ms</span>
          </div>

          {/* 2. Left Floating Voice Assistant Meeting Card */}
          <div className="hero-floating-card absolute left-0 top-20 hidden lg:block bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-[16px] p-5 w-[280px] text-left space-y-3 shadow-2xl text-xs z-20">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <div className="w-5 h-5 rounded-full bg-[#2A2859] flex items-center justify-center text-white text-[10px]">
                <svg className="w-3 h-3 text-[#cbb7fb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                </svg>
              </div>
              <span>Susurrus AI Assistant</span>
            </div>
            <p className="text-slate-200 leading-normal">
              Looks like you're chatting with Antonio and Laura in <span className="bg-white/15 px-1.5 py-0.5 rounded text-white font-mono">#launch-project-chat</span> and need to book a meeting. Would you like me to find a good time?
            </p>
            <div className="bg-white/10 rounded-full px-3 py-1 text-[11px] text-slate-300 w-fit ml-auto">yes!</div>
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] text-slate-400">Available times:</div>
              <div className="flex gap-2">
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-[10px] flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Mon 3:00 PM
                </span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-[10px] flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Tue 1:00 PM
                </span>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-[8px] p-2 flex justify-between text-slate-300">
              <span>book it for monday</span>
              <span className="text-[#cbb7fb]">➔</span>
            </div>
          </div>

          {/* 3. Vertical Floating Icon Switcher Bar */}
          <div className="hero-floating-card absolute left-[295px] top-36 hidden xl:flex flex-col gap-4 bg-white/15 backdrop-blur-md rounded-full p-2.5 border border-white/20 shadow-xl z-20">
            <div className="w-7 h-7 rounded-full bg-[#2A2859] text-white flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              </svg>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
          </div>

          {/* 4. Bottom Left Email Triage Card */}
          <div className="hero-floating-card absolute left-6 bottom-0 hidden lg:block bg-slate-900/85 backdrop-blur-xl border border-white/20 rounded-[16px] p-4 w-[340px] text-left text-xs space-y-2 shadow-2xl z-20">
            <div className="flex gap-3 text-slate-400 font-mono text-[10px] pb-1 border-b border-white/10">
              <span className="text-white font-bold">Important 12</span>
              <span>Calendar 13</span>
              <span>Docs 8</span>
            </div>
            <div className="space-y-2 pt-1">
              <div className="flex justify-between">
                <span className="font-bold text-white">Sarah Kim</span>
                <span className="text-slate-300">Design Review moved to Thursday</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span className="font-bold text-slate-300">James Patel</span>
                <span>Feedback on client presentation</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span className="font-bold text-slate-300">Laura Chen</span>
                <span>Coffee next week?</span>
              </div>
            </div>
          </div>

          {/* NEW 2: Top Right Floating Chip (Top Right Circle) */}
          <div className="hero-floating-card absolute right-4 top-4 hidden xl:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg z-20">
            <svg className="w-3.5 h-3.5 text-[#cbb7fb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
            </svg>
            <span>Translate selected text to Spanish</span>
          </div>

          {/* 5. Right Document Workspace Window */}
          <div className="hero-floating-card absolute right-10 top-20 hidden lg:block bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-[16px] p-5 w-[320px] text-left space-y-3 shadow-2xl text-xs z-20">
            <div className="flex justify-between items-center text-slate-400 border-b border-white/10 pb-2">
              <span className="font-semibold text-white">Team workspace</span>
              <span className="flex items-center gap-1 text-[11px]">
                Share
                <svg className="w-3 h-3 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="font-bold text-white text-sm">Streamlining Team Documentation</div>
              <p className="text-slate-300 leading-normal text-[11px]">
                I've been thinking about how our team can streamline the onboarding process for <span className="bg-white/20 px-1 rounded text-white">new-hires</span>. Right now documentation is scattered across different tools...
              </p>
            </div>
          </div>

          {/* NEW 3: Mid-Right Local Engine Status Card (Mid-Right Circle) */}
          <div className="hero-floating-card absolute right-4 top-[290px] hidden xl:block bg-slate-900/85 backdrop-blur-xl border border-white/20 rounded-[16px] p-4 w-[280px] text-left text-xs space-y-2 shadow-2xl z-20">
            <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-white/10">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Dual Engine Status
              </span>
              <span className="font-mono text-[10px] text-emerald-400 font-bold">100% Local</span>
            </div>
            <div className="flex justify-between text-[11px] text-slate-300 pt-0.5">
              <span>whisper.cpp acoustic</span>
              <span className="font-mono text-slate-400">0.02s</span>
            </div>
            <div className="flex justify-between text-[11px] text-slate-300">
              <span>Gemma 2B context</span>
              <span className="font-mono text-slate-400">0.14s</span>
            </div>
          </div>

          {/* 6. Bottom Right Floating Prompt Pills */}
          <div className="hero-floating-card absolute right-10 bottom-0 hidden lg:flex flex-col gap-2 z-20">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#cbb7fb]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
              Proofread with Susurrus
            </div>
            <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#cbb7fb]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
              Schedule 15 minutes for a quick meeting with Mike
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
