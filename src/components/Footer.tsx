"use client";

import { useState } from "react";

export default function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "security" | "license" | null>(null);

  return (
    <footer className="bg-[#1A0B14] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Top Brand */}
        <div className="mb-12">
          <a href="#" className="text-2xl font-extrabold flex items-center gap-2.5">
            <svg className="w-6 h-6 text-[#cbb7fb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2 3.4 3.4 3.4 4.6 0 1.2-3.4 3.4-3.4 4.6 0 .2.6.8 1 1.4 1" />
              <path d="M2 18c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2 3.4 3.4 3.4 4.6 0 .2.6.8 1 1.4 1" />
            </svg>
            <span>Susurrus</span>
          </a>
          <p className="text-xs text-[#94a3b8] mt-2">Builders of Susurrus Platform Voice Engine.</p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li><a href="#dictation" className="hover:text-white transition-colors">Whisper Dictation</a></li>
              <li><a href="#commands" className="hover:text-white transition-colors">Context Commands</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Dual Local Engine</a></li>
              <li><a href="#savings" className="hover:text-white transition-colors">Speed Calculator</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li><a href="https://github.com/ParthVarekar/whisper-landing-page" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About Susurrus</a></li>
              <li><a href="https://github.com/ParthVarekar/whisper-landing-page#readme" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture Vision</a></li>
              <li><a href="mailto:parthvarekar27@gmail.com" className="hover:text-white transition-colors">Contact Founder</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li><button onClick={() => setModalType("license")} className="hover:text-white transition-colors text-left">MIT License</button></li>
              <li><button onClick={() => setModalType("privacy")} className="hover:text-white transition-colors text-left">Privacy Guarantee</button></li>
              <li><button onClick={() => setModalType("security")} className="hover:text-white transition-colors text-left">Security Architecture</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>
                <a href="https://github.com/ParthVarekar/whisper-landing-page" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a href="mailto:parthvarekar27@gmail.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>parthvarekar27@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copy */}
        <div className="border-t border-white/10 pt-6 text-xs text-[#64748b] flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© 2026 Parth Varekar. Open source under the MIT License.</span>
          <span>Engineered for ultimate productivity.</span>
        </div>

      </div>

      {/* Giant Background Watermark */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-sans text-[120px] md:text-[150px] font-black text-white/[0.04] tracking-widest pointer-events-none select-none z-0 whitespace-nowrap">
        SUSURRUS
      </div>

      {/* Interactive Modal System */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/20 rounded-[20px] p-6 md:p-8 max-w-[540px] w-full text-left space-y-4 shadow-2xl text-white">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white">
                {modalType === "privacy" && "🔒 100% On-Device Privacy Guarantee"}
                {modalType === "security" && "🛡️ Security & Zero Telemetry Architecture"}
                {modalType === "license" && "📜 MIT Open Source License"}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="text-slate-400 hover:text-white text-xl font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              {modalType === "privacy" && (
                <>
                  <p>
                    Susurrus runs 100% locally on your machine. Your audio recordings, dictated text, and context command prompts <strong>NEVER leave your hardware</strong>.
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-400">
                    <li>Zero remote API calls for speech recognition or text generation.</li>
                    <li>No audio telemetry or keylogging.</li>
                    <li>Zero clipboard history pollution.</li>
                  </ul>
                </>
              )}
              {modalType === "security" && (
                <>
                  <p>
                    Built on open-source C++ inference backends (<code className="bg-white/10 px-1 py-0.5 rounded text-white">whisper.cpp</code> and <code className="bg-white/10 px-1 py-0.5 rounded text-white">llama.cpp</code>), Susurrus isolates speech processing inside native OS accessibility threads.
                  </p>
                  <p>
                    Questions? Inspect our open-source codebase on <a href="https://github.com/ParthVarekar/whisper-landing-page" target="_blank" rel="noopener noreferrer" className="text-[#cbb7fb] underline">GitHub</a> or contact Parth Varekar at <a href="mailto:parthvarekar27@gmail.com" className="text-[#cbb7fb] underline">parthvarekar27@gmail.com</a>.
                  </p>
                </>
              )}
              {modalType === "license" && (
                <>
                  <p>
                    Copyright (c) 2026 Parth Varekar. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
                  </p>
                  <p className="text-slate-400 italic">
                    The software is provided "as is", without warranty of any kind.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="bg-[#2A2859] hover:bg-[#1E1B42] text-white text-xs font-bold px-5 py-2.5 rounded-[8px] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
