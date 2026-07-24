"use client";

import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Developer");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Optional Survey State
  const [os, setOs] = useState("Windows");
  const [topFeature, setTopFeature] = useState("160 WPM Dictation");
  const [dailyUsage, setDailyUsage] = useState("15-60 mins/day");
  const [painPoint, setPainPoint] = useState("");
  const [surveyLoading, setSurveyLoading] = useState(false);

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
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSurveyLoading(true);

    try {
      await fetch("/api/waitlist/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          os,
          topFeature,
          dailyUsage,
          painPoint: painPoint.trim() || "None provided",
        }),
      });
    } catch (err) {
      console.error("Survey submission error:", err);
    } finally {
      setSurveyLoading(false);
      setSurveyCompleted(true);
    }
  };

  const mailtoUrl = `mailto:parthvarekar27@gmail.com?subject=${encodeURIComponent(
    `Susurrus Early Access Signup: ${email}`
  )}&body=${encodeURIComponent(
    `Hi Parth,\n\nI just requested early access to Susurrus!\n\nEmail: ${email}\nRole: ${role}\nOS: ${os}\nFeature: ${topFeature}\nUsage: ${dailyUsage}\nPain Point: ${painPoint || "N/A"}\n\nPlease add me to the next beta rollout batch.\n\nThanks!`
  )}`;

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
          <div className="max-w-[620px] mx-auto bg-white border border-emerald-200 rounded-[20px] p-6 md:p-8 shadow-2xl text-left space-y-6">
            
            {/* Header badge */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-lg font-bold">
                  ✓
                </div>
                <span>Access Request Registered!</span>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                {email}
              </span>
            </div>

            {!surveyCompleted ? (
              /* OPTIONAL SURVEY FORM (NOT COMPULSORY) */
              <form onSubmit={handleSurveySubmit} className="space-y-5 bg-[#F8FAFC] border border-slate-200 p-5 md:p-6 rounded-[14px]">
                
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                    <span>📊 Quick 30-Second Survey</span>
                    <span className="text-[11px] font-normal text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded font-mono">
                      Optional
                    </span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSurveyCompleted(true)}
                    className="text-xs text-slate-500 hover:text-[#2A2859] underline font-semibold"
                  >
                    Skip Survey →
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Help us prioritize build targets and tailor features for your workflow (or skip anytime):
                </p>

                {/* Q1: OS Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">1. What is your primary desktop operating system?</label>
                  <div className="flex flex-wrap gap-2">
                    {["Windows", "macOS", "Linux"].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setOs(item)}
                        className={`px-3 py-1.5 rounded-[6px] text-xs transition-colors ${
                          os === item
                            ? "bg-[#2A2859] text-white font-bold"
                            : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2: Top Feature */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">2. Which feature matters most to you?</label>
                  <div className="flex flex-wrap gap-2">
                    {["160 WPM Dictation", "Context Commands (Ctrl+Shift+T)", "100% Offline Privacy", "Custom AI Shortcuts"].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setTopFeature(item)}
                        className={`px-3 py-1.5 rounded-[6px] text-xs transition-colors ${
                          topFeature === item
                            ? "bg-[#2A2859] text-white font-bold"
                            : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q3: Daily Usage */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">3. Estimated daily dictation usage:</label>
                  <div className="flex flex-wrap gap-2">
                    {["< 15 mins/day", "15-60 mins/day", "1-3 hours/day", "Full day flow"].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setDailyUsage(item)}
                        className={`px-3 py-1.5 rounded-[6px] text-xs transition-colors ${
                          dailyUsage === item
                            ? "bg-[#2A2859] text-white font-bold"
                            : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q4: Open Feedback */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">4. What is your biggest pain point with existing voice tools? (Optional)</label>
                  <textarea
                    rows={2}
                    value={painPoint}
                    onChange={(e) => setPainPoint(e.target.value)}
                    placeholder="e.g. Dictation in cloud tools has high latency or poor privacy..."
                    className="w-full p-2.5 text-xs rounded-[8px] border border-slate-300 bg-white text-[#0F172A] outline-none focus:ring-2 focus:ring-[#2A2859]"
                  />
                </div>

                {/* Survey Actions */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setSurveyCompleted(true)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                  >
                    Skip & Finish
                  </button>

                  <button
                    type="submit"
                    disabled={surveyLoading}
                    className="bg-[#2A2859] hover:bg-[#1E1B42] text-white font-bold text-xs py-2.5 px-5 rounded-[8px] transition-colors shadow-md flex items-center gap-2"
                  >
                    {surveyLoading ? "Saving..." : "Submit Preferences →"}
                  </button>
                </div>

              </form>
            ) : (
              /* SURVEY COMPLETED / SKIPPED CONFIRMATION CARD */
              <div className="space-y-4 bg-emerald-50/50 border border-emerald-200 p-5 rounded-[14px]">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <span>🎉 Preferences Recorded!</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you for your feedback! We've saved your workflow preferences and placed your email on high priority for our upcoming beta rollout.
                </p>
              </div>
            )}

            {/* Direct Email Launch Action */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-[12px] p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#0F172A]">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#2A2859]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Direct Founder Contact:
                </span>
                <span className="text-[#2A2859] font-mono text-[11px]">parthvarekar27@gmail.com</span>
              </div>

              <a
                href={mailtoUrl}
                className="w-full bg-[#2A2859] hover:bg-[#1E1B42] text-white font-bold text-xs py-3 px-4 rounded-[8px] transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                <span>Send Email to parthvarekar27@gmail.com ✉️</span>
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setSurveyCompleted(false);
                setEmail("");
              }}
              className="text-xs font-semibold text-[#2A2859] hover:underline pt-1 block"
            >
              ← Submit another email address
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-[580px] mx-auto space-y-4 pt-2">
            
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

            {/* Role selector */}
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

            {/* Direct Email Fallback Link */}
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
