"use client";

import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="py-28 bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] text-[#0F172A] text-center">
      <div className="max-w-[800px] mx-auto px-6 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-[#2A2859] text-white px-4 py-1.5 rounded-[8px] text-xs font-bold font-mono">
          <span>AI THAT WORKS EVERYWHERE YOU WORK</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-[540] leading-[1.08] tracking-tight">
          Join Susurrus Early Access
        </h2>

        <p className="text-base font-[460] leading-relaxed text-[#334155] max-w-[600px] mx-auto">
          Start dictating at 160 WPM across every desktop application with zero cloud latency and 100% on-device privacy.
        </p>

        {/* Single-field email waitlist form */}
        <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto flex flex-col sm:flex-row gap-3 pt-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email address..."
            className="flex-grow px-5 py-4 rounded-[8px] border border-[#dcd7d3] bg-white text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#2A2859] text-sm font-medium shadow-sm"
          />
          <button
            type="submit"
            className="bg-[#2A2859] text-white font-bold text-base px-8 py-4 rounded-[8px] hover:bg-[#1E1B42] transition-colors whitespace-nowrap shadow-lg"
          >
            {submitted ? "✓ Access Requested!" : "Get Early Access →"}
          </button>
        </form>

        {/* Framing Microcopy */}
        <p className="text-xs font-semibold text-[#475569] pt-2">
          Get early access. No credit card required. Setup in 1 minute.
        </p>

      </div>
    </section>
  );
}
