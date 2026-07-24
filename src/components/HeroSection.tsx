"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const PORTRAITS = [
  "/assets/hero_portrait.jpg",
  "/assets/hero_portrait_2.jpg",
  "/assets/hero_portrait_3.jpg",
  "/assets/hero_portrait_4.jpg",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [portrait, setPortrait] = useState<string | null>(null);

  useEffect(() => {
    // Read last shown portrait from sessionStorage to avoid back-to-back repeats on reload
    const lastPortrait = typeof window !== "undefined" ? sessionStorage.getItem("susurrus_last_portrait") : null;

    // Exclude last shown portrait from the candidate pool if possible
    const candidatePool = PORTRAITS.filter((p) => p !== lastPortrait);
    const pool = candidatePool.length > 0 ? candidatePool : PORTRAITS;
    
    // Pick a random portrait from the remaining candidates
    const selected = pool[Math.floor(Math.random() * pool.length)];

    // Persist selected portrait for the next reload comparison
    if (typeof window !== "undefined") {
      sessionStorage.setItem("susurrus_last_portrait", selected);
    }

    setPortrait(selected);

    if (heroRef.current) {
      gsap.fromTo(
        ".hero-floating-card",
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.08, ease: "power3.out" }
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

        {/* Hero Interactive Workspace Canvas matching reference layout */}
        <div className="relative max-w-[1180px] mx-auto pt-6 pb-32 min-h-[700px] flex items-center justify-center">
          
          {/* Central Editorial Portrait (Layer Z-20 - Middle Backdrop Depth) */}
          <div className="relative w-[360px] md:w-[440px] h-[500px] rounded-[32px] overflow-hidden border border-white/20 shadow-2xl mx-auto z-20 bg-slate-900/60">
            {portrait && (
              <Image
                src={portrait}
                alt="Susurrus Editorial Portrait"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* 
            ========================================================================
            LEFT-SIDE CARDS: OVERLAPPING ON TOP OF THE IMAGE (Layer Z-30 to Z-50)
            ========================================================================
          */}

          {/* NEW CARD 1: Top-Left Live Dictation Metrics Chip (Red Box #1) */}
          <div className="hero-floating-card absolute left-6 top-0 hidden xl:flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl border border-white/25 rounded-full px-4 py-2 text-xs text-white shadow-xl z-30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-white">160 WPM</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-mono text-[11px]">Sub-200ms Latency</span>
          </div>

          {/* 1. Left Base Card: Voice Assistant Card (z-30) */}
          <div className="hero-floating-card absolute left-2 top-16 hidden lg:block bg-slate-900/90 backdrop-blur-xl border border-white/25 rounded-[20px] p-5 w-[310px] text-left space-y-3 shadow-2xl text-xs z-30">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <div className="w-5 h-5 rounded-full bg-[#2A2859] flex items-center justify-center text-white text-[10px]">
                <svg className="w-3 h-3 text-[#cbb7fb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                </svg>
              </div>
              <span>Susurrus AI Assistant</span>
            </div>
            <p className="text-slate-200 leading-normal text-[11px]">
              Looks like you're chatting with Antonio and Laura in <span className="bg-white/15 px-1.5 py-0.5 rounded text-white font-mono">#launch-project-chat</span> and need to book a meeting. Would you like me to find a good time?
            </p>
            <div className="bg-white/10 rounded-full px-3 py-1 text-[11px] text-slate-300 w-fit ml-auto">yes!</div>
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] text-slate-400">You're all available during these times:</div>
              <div className="flex gap-2">
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-[10px] flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 16 14"/>
                  </svg>
                  Monday at 3:00 PM
                </span>
                <span className="bg-white/10 px-2.5 py-1 rounded-full text-[10px] flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 16 14"/>
                  </svg>
                  Tuesday at 1:00 PM
                </span>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-[8px] p-2 flex justify-between text-slate-300">
              <span>book it for monday</span>
              <span className="text-[#cbb7fb]">➔</span>
            </div>
          </div>

          {/* 2. Vertical Floating Icon Switcher Bar (z-35, Overlaps Voice Card & Image Edge) */}
          <div className="hero-floating-card absolute left-[295px] top-28 hidden xl:flex flex-col gap-4 bg-slate-900/90 backdrop-blur-md rounded-full p-3 border border-white/30 shadow-2xl z-35">
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

          {/* 3. Bottom Left Email Triage Card (z-40, Overlaps bottom of Voice Card & bottom-left of Image!) */}
          <div className="hero-floating-card absolute left-[120px] top-[330px] hidden lg:block bg-slate-900/95 backdrop-blur-2xl border border-white/30 rounded-[20px] p-5 w-[360px] text-left text-xs space-y-3 shadow-2xl z-40">
            <div className="flex gap-4 text-slate-400 font-mono text-[10px] pb-1.5 border-b border-white/10">
              <span className="text-white font-bold">Important 12</span>
              <span>Calendar 13</span>
              <span>Docs 8</span>
              <span>Other 19</span>
            </div>
            <div className="space-y-2 pt-1 text-[11px]">
              <div className="flex justify-between">
                <span className="font-bold text-white">Sarah Kim</span>
                <span className="text-slate-300 truncate max-w-[210px]">Design Review moved to Thursday</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span className="font-bold text-slate-300">James Patel</span>
                <span className="truncate max-w-[210px]">Feedback on client presentation</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span className="font-bold text-slate-300">Laura Chen</span>
                <span className="truncate max-w-[210px]">Coffee next week?</span>
              </div>
            </div>
          </div>

          {/* 4. Small Overlapping Prompt Chip (z-50, Overlaps bottom of Triage Card!) */}
          <div className="hero-floating-card absolute left-[310px] top-[470px] hidden lg:flex items-center gap-2 bg-[#2A2859] backdrop-blur-xl border border-white/30 rounded-2xl p-3 text-xs font-semibold text-white shadow-2xl z-50 max-w-[220px] text-left">
            <svg className="w-4 h-4 text-[#cbb7fb] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
            </svg>
            <span className="text-[11px] leading-tight">Schedule 15 minutes for a quick meeting with Mike</span>
          </div>

          {/* NEW CARD 2: Bottom-Left Quick Command History Card (Red Box #2) */}
          <div className="hero-floating-card absolute left-4 top-[505px] hidden lg:block bg-slate-900/90 backdrop-blur-xl border border-white/25 rounded-[18px] p-4 w-[280px] text-left text-xs space-y-2 shadow-2xl z-30">
            <div className="flex justify-between items-center text-slate-400 font-mono text-[10px] pb-1 border-b border-white/10">
              <span className="text-white font-bold">RECENT COMMANDS</span>
              <span className="text-emerald-400 font-bold">Ctrl+Shift+T</span>
            </div>
            <div className="space-y-1.5 pt-0.5 text-[11px]">
              <div className="flex items-center justify-between text-slate-200">
                <span className="truncate">"Summarize meeting notes"</span>
                <span className="text-[10px] text-slate-400 font-mono">0.1s</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span className="truncate">"Translate to Spanish"</span>
                <span className="text-[10px] text-slate-400 font-mono">0.2s</span>
              </div>
            </div>
          </div>

          {/* 
            ========================================================================
            RIGHT-SIDE CARDS: UNDERLAPPING BEHIND THE IMAGE (Layer Z-10 - Strictly Below Z-20)
            ========================================================================
          */}

          {/* NEW CARD 3: Top-Right Active App Context Banner (Red Box #3) */}
          <div className="hero-floating-card absolute right-4 top-4 hidden lg:flex items-center gap-3 bg-slate-900/85 backdrop-blur-xl border border-white/20 rounded-[16px] px-4 py-2.5 text-xs text-white shadow-xl z-10">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <svg className="w-4 h-4 text-[#cbb7fb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>
              </svg>
              <span>Context Sync:</span>
            </div>
            <div className="flex gap-1.5">
              <span className="bg-white/10 px-2 py-0.5 rounded text-[11px] font-mono text-white">VS Code</span>
              <span className="bg-white/10 px-2 py-0.5 rounded text-[11px] font-mono text-white">Slack</span>
              <span className="bg-white/10 px-2 py-0.5 rounded text-[11px] font-mono text-white">Notion</span>
            </div>
          </div>

          {/* 5. Top Right Prompt Chip (z-10, Passes BEHIND the back of the beanie/head!) */}
          <div className="hero-floating-card absolute right-[130px] top-[140px] hidden lg:flex items-center gap-2 bg-[#433E78]/80 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-xs font-semibold text-white shadow-lg z-10">
            <svg className="w-3.5 h-3.5 text-[#cbb7fb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Tailor this language for executives
          </div>

          {/* 6. Right Document Workspace Window (z-10, Left side passes BEHIND the neck & shoulder!) */}
          <div className="hero-floating-card absolute right-[40px] top-[210px] hidden lg:block bg-slate-900/85 backdrop-blur-xl border border-white/20 rounded-[20px] py-5 pr-5 pl-10 w-[350px] text-left space-y-3 shadow-2xl text-xs z-10">
            <div className="flex justify-between items-center text-slate-400 border-b border-white/10 pb-2">
              <span className="font-semibold text-white">Team workspace</span>
              <span className="flex items-center gap-1.5 text-[11px]">
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

          {/* NEW CARD 4: Mid-Right Dual Engine 100% Offline Badge (Red Box #4) */}
          <div className="hero-floating-card absolute right-4 top-[400px] hidden xl:flex items-center gap-2.5 bg-slate-900/85 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 text-xs text-white shadow-xl z-10">
            <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="font-semibold text-slate-200">whisper.cpp + Gemma 2B</span>
            <span className="bg-emerald-500/20 text-emerald-300 font-mono text-[10px] px-2 py-0.5 rounded-full font-bold">100% Offline</span>
          </div>

          {/* 7. Right Bottom Overlapping/Underlapping Card (z-10, Top-Left Corner Underlaps Bottom-Right of Portrait Image!) */}
          <div className="hero-floating-card absolute right-[100px] top-[505px] hidden lg:flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl border border-white/25 rounded-[20px] p-4 w-[310px] text-left shadow-2xl z-10">
            <div className="w-8 h-8 rounded-full bg-[#2A2859] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-[#cbb7fb]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 9.41L12 0Z"/>
              </svg>
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-white">Proofread with Susurrus</div>
              <p className="text-[10px] text-slate-300">Fix grammar, tone, and formatting in place</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
