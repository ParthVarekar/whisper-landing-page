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
              alt="Becoming Superhuman Editorial Silhouette Photo"
              fill
              className="object-cover"
            />
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl md:text-5xl font-[540] leading-[0.96] tracking-tight">
              Becoming Superhuman.
            </h2>
            <p className="text-lg font-[460] leading-[1.50] text-[#cbd5e1]">
              When all your tools are designed to put you in flow, you work faster, think clearer, and focus on what matters most. WhisperFlow brings zero-latency, local AI dictation directly to your keyboard—100% offline, private, and free forever.
            </p>
            <div>
              <a
                href="https://github.com/ParthVarekar/whisper_flow_clone_local"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#121929] font-bold text-base px-8 py-4 rounded-[8px] hover:bg-[#e9e5dd] transition-colors shadow-lg"
              >
                Get Started on GitHub →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
