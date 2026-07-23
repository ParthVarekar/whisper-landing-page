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
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.12, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-24 bg-gradient-to-b from-[#1b1938] via-[#2d2955] to-[#121929] text-white text-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 space-y-8">
        
        {/* Top Headline & Subtitle matching attached image #1 */}
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

        {/* Hero Interactive Workspace Canvas matching attached image #1 */}
        <div className="relative max-w-[1060px] mx-auto pt-10 pb-16 min-h-[580px] flex items-center justify-center">
          
          {/* Central Editorial Portrait */}
          <div className="relative w-[340px] md:w-[420px] h-[480px] rounded-[32px] overflow-hidden border border-white/20 shadow-2xl mx-auto">
            <Image
              src="/assets/hero_portrait.jpg"
              alt="Susurrus Editorial Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 1. Left Floating Voice Assistant Meeting Card */}
          <div className="hero-floating-card absolute left-0 top-12 hidden lg:block bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-[16px] p-5 w-[280px] text-left space-y-3 shadow-2xl text-xs z-20">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <div className="w-5 h-5 rounded-full bg-[#2A2859] flex items-center justify-center text-white text-[10px]">🎙️</div>
              <span>Susurrus AI Assistant</span>
            </div>
            <p className="text-slate-200 leading-normal">
              Looks like you're chatting with Antonio and Laura in <span className="bg-white/15 px-1.5 py-0.5 rounded text-white font-mono">#launch-project-chat</span> and need to book a meeting. Would you like me to find a good time?
            </p>
            <div className="bg-white/10 rounded-full px-3 py-1 text-[11px] text-slate-300 w-fit ml-auto">yes!</div>
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] text-slate-400">Available times:</div>
              <div className="flex gap-2">
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-[10px]">⏱️ Mon 3:00 PM</span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-[10px]">⏱️ Tue 1:00 PM</span>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-[8px] p-2 flex justify-between text-slate-300">
              <span>book it for monday</span>
              <span className="text-[#cbb7fb]">➔</span>
            </div>
          </div>

          {/* 2. Vertical Floating Icon Switcher Bar */}
          <div className="hero-floating-card absolute left-[300px] top-32 hidden xl:flex flex-col gap-4 bg-white/15 backdrop-blur-md rounded-full p-2.5 border border-white/20 shadow-xl z-20">
            <div className="w-7 h-7 rounded-full bg-[#2A2859] text-white flex items-center justify-center text-xs">🎙️</div>
            <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">✍️</div>
            <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">📝</div>
            <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs">📅</div>
          </div>

          {/* 3. Bottom Left Email Triage Card */}
          <div className="hero-floating-card absolute left-8 bottom-0 hidden lg:block bg-slate-900/85 backdrop-blur-xl border border-white/20 rounded-[16px] p-4 w-[340px] text-left text-xs space-y-2 shadow-2xl z-20">
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

          {/* 4. Top Right Floating Prompt Pill */}
          <div className="hero-floating-card absolute right-16 top-24 hidden lg:block bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg z-20">
            💬 Tailor this language for executives
          </div>

          {/* 5. Right Document Workspace Window */}
          <div className="hero-floating-card absolute right-0 top-36 hidden lg:block bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-[16px] p-5 w-[320px] text-left space-y-3 shadow-2xl text-xs z-20">
            <div className="flex justify-between text-slate-400 border-b border-white/10 pb-2">
              <span className="font-semibold text-white">Team workspace</span>
              <span>Share 💬</span>
            </div>
            <div className="space-y-1.5">
              <div className="font-bold text-white text-sm">Streamlining Team Documentation</div>
              <p className="text-slate-300 leading-normal text-[11px]">
                I've been thinking about how our team can streamline the onboarding process for <span className="bg-white/20 px-1 rounded text-white">new-hires</span>. Right now documentation is scattered across different tools...
              </p>
            </div>
          </div>

          {/* 6. Bottom Right Floating Prompt Pills */}
          <div className="hero-floating-card absolute right-12 bottom-6 hidden lg:flex flex-col gap-2 z-20">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg">
              ✨ Proofread with Susurrus
            </div>
            <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg">
              ✨ Schedule 15 minutes for a quick meeting with Mike
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
