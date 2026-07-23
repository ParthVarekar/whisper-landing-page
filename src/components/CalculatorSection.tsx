"use client";

import { useState } from "react";

export default function CalculatorSection() {
  const [words, setWords] = useState(4000);
  const [hw, setHw] = useState("nvidia");

  const hoursSaved = (((words / 40 - words / 160) * 22) / 60).toFixed(1);
  const annualCostSaved = Math.max(120, Math.round((words / 150) * 0.006 * 260));

  return (
    <section id="savings" className="py-24 bg-[#F9F8F6]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white border border-[#dcd7d3] rounded-[16px] p-8 md:p-14 shadow-sm">
          
          <div className="text-center max-w-[700px] mx-auto mb-12 space-y-3">
            <span className="bg-[#2A2859] text-white px-4 py-1.5 rounded-[8px] text-xs font-bold font-mono">
              SPEED & SAVINGS CALCULATOR
            </span>
            <h2 className="text-3xl md:text-4xl font-[540] leading-[0.96] text-[#0F172A] tracking-tight">
              Calculate Your Time & Cost Recovery
            </h2>
            <p className="text-base text-[#475569] font-[460] leading-[1.50]">
              See how much time you save each month by speaking at 160 WPM instead of typing at 40 WPM.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-semibold text-[#0F172A]">
                  <span>Daily Dictation Volume:</span>
                  <span className="font-mono text-[#2A2859] font-bold">{words.toLocaleString()} words/day</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="500"
                  value={words}
                  onChange={(e) => setWords(parseInt(e.target.value, 10))}
                  className="w-full accent-[#2A2859] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0F172A] block">
                  Hardware Acceleration Setup:
                </label>
                <select
                  value={hw}
                  onChange={(e) => setHw(e.target.value)}
                  className="w-full p-3 rounded-[8px] border border-[#dcd7d3] bg-[#F9F8F6] text-sm text-[#0F172A] font-medium outline-none focus:border-[#2A2859]"
                >
                  <option value="nvidia">Dedicated NVIDIA GPU (RTX 3060/4070+) — Sub-200ms</option>
                  <option value="apple">Apple Silicon (M1/M2/M3/M4 Metal) — ~240ms</option>
                  <option value="cpu">Multi-core CPU Fallback — ~580ms</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#F9F8F6] border border-[#dcd7d3] p-6 rounded-[8px] flex items-center gap-5">
                <div className="p-3 bg-[#2A2859]/10 rounded-[8px] text-[#2A2859]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#2A2859]">{hoursSaved} Hours</div>
                  <div className="text-xs font-semibold text-[#475569]">Saved Every Month</div>
                </div>
              </div>

              <div className="bg-[#F9F8F6] border border-[#dcd7d3] p-6 rounded-[8px] flex items-center gap-5">
                <div className="p-3 bg-[#2A2859]/10 rounded-[8px] text-[#2A2859]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#2A2859]">${annualCostSaved} / Year</div>
                  <div className="text-xs font-semibold text-[#475569]">Saved vs Paid Cloud STT APIs</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
