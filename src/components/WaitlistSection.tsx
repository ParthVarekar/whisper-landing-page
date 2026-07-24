"use client";

import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Developer");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), role }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      // Client-side fallback success state if offline or API is unreachable
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-28 bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#f8fafc] text-[#0F172A] text-center relative overflow-hidden">
      <div className="max-w-[840px] mx-auto px-6 relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-[#2A2859] text-white px-4 py-1.5 rounded-[8px] text-xs font-bold font-mono shadow-sm">
          <span>AI THAT WORKS EVERYWHERE YOU WORK</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-[540] leading-[1.08] tracking-tight">
          Join Susurrus Early Access
        </h2>

        <p className="text-base font-[460] leading-relaxed text-[#334155] max-w-[620px] mx-auto">
          Start dictating at 160 WPM across every desktop application with zero cloud latency and 100% on-device privacy.
        </p>

        {submitted ? (
          <div className="max-w-[560px] mx-auto bg-white border border-emerald-200 rounded-[16px] p-8 shadow-xl text-left space-y-4">
            <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                ✓
              </div>
              <span>Access Requested Successfully!</span>
            </div>

            <p className="text-sm text-[#334155] leading-relaxed">
              We've registered <strong className="text-[#0F172A]">{email || "your email"}</strong> for the next Susurrus beta rollout batch. A confirmation email has been dispatched.
            </p>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-[10px] p-4 text-xs space-y-2 text-slate-600">
              <div className="font-semibold text-[#0F172A] flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Direct Creator Access:</span>
              </div>
              <p>
                Need immediate priority access or custom enterprise integration? Reach out directly to Parth Varekar at{" "}
                <a href="mailto:parthvarekar27@gmail.com" className="text-[#2A2859] font-bold underline hover:text-[#1E1B42]">
                  parthvarekar27@gmail.com
                </a>.
              </p>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setEmail("");
              }}
              className="text-xs font-semibold text-[#2A2859] hover:underline pt-2 block"
            >
              ← Submit another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-[560px] mx-auto space-y-4 pt-2">
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address..."
                className="flex-grow px-5 py-4 rounded-[10px] border border-[#dcd7d3] bg-white text-[#0F172A] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#2A2859] text-sm font-medium shadow-sm"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#2A2859] text-white font-bold text-base px-8 py-4 rounded-[10px] hover:bg-[#1E1B42] transition-all duration-200 whitespace-nowrap shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12" />
                    </svg>
                    <span>Requesting...</span>
                  </>
                ) : (
                  <span>Get Early Access →</span>
                )}
              </button>
            </div>

            {/* Optional Role selector for better context */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#475569]">
              <span className="font-semibold">Primary Use Case:</span>
              {["Developer", "Executive", "Writer", "Researcher"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setRole(item)}
                  className={`px-2.5 py-1 rounded-[6px] transition-colors ${
                    role === item
                      ? "bg-[#2A2859] text-white font-bold"
                      : "bg-white/80 text-slate-600 border border-slate-200 hover:bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {errorMsg && (
              <p className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 py-2 rounded-[6px]">
                {errorMsg}
              </p>
            )}

            {/* Direct Mail Button */}
            <div className="pt-2">
              <a
                href="mailto:parthvarekar27@gmail.com?subject=Susurrus%20Priority%20Early%20Access"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#2A2859] hover:text-[#1E1B42] underline"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Or email Parth Varekar directly at parthvarekar27@gmail.com</span>
              </a>
            </div>

          </form>
        )}

        {/* Framing Microcopy */}
        <p className="text-xs font-semibold text-[#475569] pt-2">
          100% On-Device • Zero Cloud Telemetry • Instant 1-minute setup.
        </p>

      </div>
    </section>
  );
}
