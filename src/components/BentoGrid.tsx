"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"dictation" | "commands" | "architecture">("dictation");

  // Dictation Studio State
  const [presetIdx, setPresetIdx] = useState(0);
  const dictationPresets = [
    {
      raw: '"um so yeah like I will list a few items bold this word that is groceries bananas and milk and email Sarah by five p m..."',
      result: `• Groceries: Bananas, Milk, Eggs.\nAction item: Email Sarah by 5:00 PM.`
    },
    {
      raw: '"uh hey team so basically we need to push back the deploy to thursday at 3pm due to open bugs on backend..."',
      result: `Update: Deployment schedule adjusted to Thursday at 3:00 PM to resolve critical backend bugs.`
    }
  ];

  // Context Commands State
  const [promptKey, setPromptKey] = useState("professional");
  const contextData: Record<string, { selected: string; spoken: string; result: string }> = {
    professional: {
      selected: '"Hey team, we might delay the release by two days due to open bugs."',
      spoken: '"Make this executive and action-oriented."',
      result: '"Team, we are adjusting our release schedule by 48 hours to resolve critical issues."'
    },
    "action-items": {
      selected: '"We discussed upgrading DB, migrating to OAuth2, and reviewing security audits."',
      spoken: '"Extract into a bulleted action list."',
      result: '• [ ] Upgrade production DB\n• [ ] Migrate to OAuth2\n• [ ] Conduct security audit review'
    },
    spanish: {
      selected: '"Please review the architecture plan and send feedback before end of day."',
      spoken: '"Translate to fluent Spanish."',
      result: '"Por favor revise el plan de arquitectura y envíe sus comentarios antes del final del día."'
    },
    json: {
      selected: '"User Parth Varekar, role Admin, status active."',
      spoken: '"Convert into JSON format."',
      result: '{\n  "user": "Parth Varekar",\n  "role": "Admin",\n  "status": "active"\n}'
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Track active tab state naturally on scroll
    if (card1Ref.current) {
      ScrollTrigger.create({
        trigger: card1Ref.current,
        start: "top 350px",
        end: "bottom 350px",
        onEnter: () => setActiveTab("dictation"),
        onEnterBack: () => setActiveTab("dictation"),
      });
    }

    if (card2Ref.current) {
      ScrollTrigger.create({
        trigger: card2Ref.current,
        start: "top 350px",
        end: "bottom 350px",
        onEnter: () => setActiveTab("commands"),
        onEnterBack: () => setActiveTab("commands"),
      });
    }

    if (card3Ref.current) {
      ScrollTrigger.create({
        trigger: card3Ref.current,
        start: "top 350px",
        end: "bottom 350px",
        onEnter: () => setActiveTab("architecture"),
        onEnterBack: () => setActiveTab("architecture"),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const scrollToSection = (id: string, tab: "dictation" | "commands" | "architecture") => {
    setActiveTab(tab);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="bento-grid" ref={containerRef} className="py-24 bg-[#F9F8F6] relative z-0">
      
      {/* 
        3. STICKY SOLID MASK BAR (Layer z-30, solid #f9f8f6 matching page background)
        Fills the gap above the horizontal slider bar so scrolling cards disappear into #f9f8f6 invisibly!
      */}
      <div className="sticky top-0 z-30 h-16 w-full bg-[#F9F8F6] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2A2859] text-white px-4 py-1.5 rounded-[8px] text-xs font-bold font-mono">
            <span>THE SUSURRUS SUITE</span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-[540] leading-[1.08] tracking-tight text-[#0F172A]">
            Capabilities & Architecture
          </h2>
          <p className="text-base text-[#475569] font-[460] leading-relaxed">
            Engineered for speed, privacy, and flawless text execution.
          </p>
        </div>

        {/* 
          2. STICKY HORIZONTAL SLIDER BAR (Layer z-40, pinned at top-16)
          Flat top edge (rounded-t-none) connects flush with sticky mask bar above so zero top corner gaps exist!
        */}
        <div className="sticky top-16 z-40 w-full bg-[#EFECE6] px-6 py-4 rounded-b-[16px] rounded-t-none border border-[#dcd7d3] border-t-0 mb-10 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl font-[540] text-[#0F172A] tracking-tight">
              Your Susurrus suite
            </h3>
            
            {/* Sticky Tab Switcher Button Group */}
            <div className="flex bg-white p-1.5 rounded-[12px] gap-1 shadow-sm border border-[#dcd7d3]">
              <button
                onClick={() => scrollToSection("dictation", "dictation")}
                className={`px-5 py-2.5 rounded-[8px] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "dictation"
                    ? "bg-[#2A2859] text-white shadow-sm"
                    : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F9F8F6]"
                }`}
              >
                Dictation
              </button>
              <button
                onClick={() => scrollToSection("commands", "commands")}
                className={`px-5 py-2.5 rounded-[8px] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "commands"
                    ? "bg-[#2A2859] text-white shadow-sm"
                    : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F9F8F6]"
                }`}
              >
                Context Commands
              </button>
              <button
                onClick={() => scrollToSection("architecture", "architecture")}
                className={`px-5 py-2.5 rounded-[8px] text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === "architecture"
                    ? "bg-[#2A2859] text-white shadow-sm"
                    : "text-[#475569] hover:text-[#0F172A] hover:bg-[#F9F8F6]"
                }`}
              >
                Dual Engine
              </button>
            </div>
          </div>
        </div>

        {/* 
          4. FEATURE CARDS CONTAINER (Layer z-10, passes under z-40 slider bar & z-30 solid mask)
        */}
        <div className="relative z-10 w-full bg-white border border-[#dcd7d3] rounded-[16px] overflow-hidden shadow-sm flex flex-col divide-y divide-[#dcd7d3]">

          {/* Card 1: Dictation Studio */}
          <div
            ref={card1Ref}
            id="dictation"
            className="p-8 md:p-14 bg-white overflow-hidden scroll-mt-36"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 text-[#2A2859] font-bold text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  </svg>
                  <span>Dictation Studio</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-[540] leading-[1.14] text-[#0F172A] tracking-tight">
                  The most productive voice dictation engine ever made
                </h3>

                <p className="text-base font-[460] leading-relaxed text-[#334155]">
                  To be radically more productive, speech recognition must strip verbal stutters ("um", "uh"), execute spoken formatting cues, and structure bullet points automatically.
                </p>

                <ul className="space-y-3 text-sm font-semibold text-[#0F172A]">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    100% On-Device / Offline Speech Recognition
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Automatic Verbal Stutter & Filler Stripping
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Direct Cursor Auto-Pasting in any Desktop App
                  </li>
                </ul>
              </div>

              {/* Bounded Photography Canvas + Floating White UI Window */}
              <div className="lg:col-span-7 relative rounded-[16px] overflow-hidden aspect-[4/3] p-6 flex items-center justify-center border border-[#dcd7d3] bg-[#F9F8F6]">
                <Image
                  src="/assets/card1_sky.jpg"
                  alt="Pastel Sky Background"
                  fill
                  className="object-cover"
                />
                
                <div className="relative z-10 bg-white rounded-[12px] p-6 shadow-2xl w-full max-w-[480px] border border-[#dcd7d3]">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#dcd7d3]">
                    <span className="text-xs font-bold text-[#0F172A]">Real-Time Dictation Studio</span>
                    <button
                      onClick={() => setPresetIdx((presetIdx + 1) % dictationPresets.length)}
                      className="bg-[#2A2859] text-white text-xs font-bold px-3 py-1.5 rounded-[8px] hover:bg-[#1E1B42] transition-colors"
                    >
                      Transform Sample
                    </button>
                  </div>

                  <div className="space-y-3 font-sans text-xs">
                    <div className="space-y-1">
                      <div className="font-mono text-[11px] font-bold text-[#475569]">RAW AUDIO TRANSCRIPT:</div>
                      <p className="italic text-[#334155]">{dictationPresets[presetIdx].raw}</p>
                    </div>

                    <div className="font-mono text-[11px] font-bold text-[#2A2859] text-center my-2">
                      ↓ Gemma 2B Local LLM Normalization
                    </div>

                    <div className="space-y-1 bg-[#F9F8F6] p-3 rounded-[8px]">
                      <div className="font-mono text-[11px] font-bold text-[#2A2859]">SUSURRUS PASTED RESULT:</div>
                      <p className="whitespace-pre-line font-medium text-[#0F172A]">
                        {dictationPresets[presetIdx].result}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Card 2: Context Commands */}
          <div
            ref={card2Ref}
            id="commands"
            className="p-8 md:p-14 bg-white overflow-hidden scroll-mt-36"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 text-[#2A2859] font-bold text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 7 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
                  </svg>
                  <span>Context Commands</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-[540] leading-[1.14] text-[#0F172A] tracking-tight">
                  AI that actually works in every app you use
                </h3>

                <p className="text-base font-[460] leading-relaxed text-[#334155]">
                  Highlight text in any desktop application—VS Code, Slack, Outlook, or Notion—hold Ctrl+Shift+T, and speak an instruction to rewrite text in place effortlessly.
                </p>

                <ul className="space-y-3 text-sm font-semibold text-[#0F172A]">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    In-Place Text Editing Across All Desktop Apps
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Executive Tone Adjustments & Action Item Extraction
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Zero Clipboard Pollution
                  </li>
                </ul>
              </div>

              {/* Bounded Botanical Photography + Interactive Floating Card */}
              <div className="lg:col-span-7 relative rounded-[16px] overflow-hidden aspect-[4/3] p-6 flex items-center justify-center border border-[#dcd7d3] bg-[#F9F8F6]">
                <Image
                  src="/assets/card2_nature.jpg"
                  alt="Botanical Photography Background"
                  fill
                  className="object-cover"
                />

                <div className="relative z-10 bg-white rounded-[12px] p-6 shadow-2xl w-full max-w-[480px] border border-[#dcd7d3]">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#dcd7d3]">
                    <span className="text-xs font-bold text-[#0F172A]">Context Command Sandbox (Ctrl+Shift+T)</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["professional", "action-items", "spanish", "json"].map((key) => (
                      <button
                        key={key}
                        onClick={() => setPromptKey(key)}
                        className={`text-xs font-semibold px-3 py-1 rounded-[8px] transition-colors ${
                          promptKey === key
                            ? "bg-[#2A2859] text-white"
                            : "bg-[#F9F8F6] text-[#292827] border border-[#dcd7d3]"
                        }`}
                      >
                        {key === "professional" ? "Executive" : key === "action-items" ? "Action Items" : key.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="bg-[#F9F8F6] p-2.5 rounded-[8px]">
                      <span className="font-mono text-[10px] font-bold text-[#475569] block mb-1">SELECTED TEXT:</span>
                      <p className="text-[#334155]">{contextData[promptKey].selected}</p>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <span>Spoken: {contextData[promptKey].spoken}</span>
                    </div>

                    <div className="bg-[#2A2859]/5 border border-[#2A2859]/15 p-2.5 rounded-[8px]">
                      <span className="font-mono text-[10px] font-bold text-[#2A2859] block mb-1">REPLACED RESULT:</span>
                      <p className="whitespace-pre-line font-medium text-[#2A2859]">
                        {contextData[promptKey].result}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Card 3: Dual Local Engine */}
          <div
            ref={card3Ref}
            id="architecture"
            className="p-8 md:p-14 bg-white overflow-hidden scroll-mt-36"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 text-[#2A2859] font-bold text-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                  <span>Dual Local Engine</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-[540] leading-[1.14] text-[#0F172A] tracking-tight">
                  100% Local. Zero Cloud. Powered by whisper.cpp + Gemma 2B.
                </h3>

                <p className="text-base font-[460] leading-relaxed text-[#334155]">
                  Upstream blessed architecture: whisper.cpp handles high-fidelity acoustic speech decoding, llama.cpp handles local context processing.
                </p>

                <ul className="space-y-3 text-sm font-semibold text-[#0F172A]">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    CUDA, Metal & Vulkan GPU Acceleration
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    llama.cpp HTTP Server for Gemma 2B LLM
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Python stdlib-only Orchestrator
                  </li>
                </ul>
              </div>

              {/* Bounded Sunset Photography + Architecture Flow Card */}
              <div className="lg:col-span-7 relative rounded-[16px] overflow-hidden aspect-[4/3] p-6 flex items-center justify-center border border-[#dcd7d3] bg-[#F9F8F6]">
                <Image
                  src="/assets/card3_sunset.jpg"
                  alt="Sunset Photography Background"
                  fill
                  className="object-cover"
                />

                <div className="relative z-10 bg-white rounded-[12px] p-6 shadow-2xl w-full max-w-[480px] border border-[#dcd7d3]">
                  <div className="text-xs font-bold text-[#0F172A] pb-3 mb-4 border-b border-[#dcd7d3]">
                    Local Dual Engine Architecture
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-[#F9F8F6] p-3 rounded-[8px] border border-[#dcd7d3]">
                      <div className="font-bold text-[#0F172A]">Audio Input</div>
                      <div className="font-mono text-[10px] text-[#475569]">VAD Silence</div>
                    </div>
                    <div className="bg-[#2A2859]/5 border border-[#2A2859] p-3 rounded-[8px]">
                      <div className="font-bold text-[#2A2859]">whisper.cpp</div>
                      <div className="font-mono text-[10px] text-[#2A2859]">CUDA / Metal</div>
                    </div>
                    <div className="bg-[#2A2859]/10 border border-[#2A2859] p-3 rounded-[8px]">
                      <div className="font-bold text-[#2A2859]">llama.cpp</div>
                      <div className="font-mono text-[10px] text-[#2A2859]">Gemma 2B</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
