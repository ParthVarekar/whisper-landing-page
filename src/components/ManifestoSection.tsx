import Image from "next/image";

export default function ManifestoSection() {
  return (
    <section className="py-24 bg-[#121929] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Silhouette Photo */}
          <div className="lg:col-span-5 relative rounded-[16px] overflow-hidden h-[360px] border border-white/15 shadow-2xl">
            <Image
              src="/assets/manifesto_art.jpg"
              alt="Unlocking Ultimate Flow Editorial Silhouette Photo"
              fill
              className="object-cover"
            />
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl md:text-5xl font-[540] leading-[0.96] tracking-tight">
              Unlocking Ultimate Flow.
            </h2>
            <p className="text-lg font-[460] leading-[1.50] text-[#cbd5e1]">
              When all your tools are designed to put you in flow, you work faster, think clearer, and focus on what matters most. Susurrus brings zero-latency, local AI dictation directly to your keyboard—100% offline, private, and free forever.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#waitlist"
                className="inline-block bg-white text-[#121929] font-bold text-base px-8 py-4 rounded-[8px] hover:bg-[#e9e5dd] transition-colors shadow-lg"
              >
                Join Early Access →
              </a>
              <a
                href="https://github.com/ParthVarekar/whisper-landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2A2859] text-white font-bold text-base px-8 py-4 rounded-[8px] hover:bg-[#1E1B42] transition-colors shadow-lg border border-white/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>Get Started on GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
