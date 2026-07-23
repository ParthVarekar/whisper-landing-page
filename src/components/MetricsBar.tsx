export default function MetricsBar() {
  return (
    <section className="py-12 bg-[#e9e5dd] border-b border-[#dcd7d3]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-[#2A2859]">0 ms</div>
            <div className="text-base font-bold text-[#292827]">Cloud Latency</div>
            <div className="text-xs text-[#475569]">Direct local C++ execution</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-[#2A2859]">0 Bytes</div>
            <div className="text-base font-bold text-[#292827]">Data Uploaded</div>
            <div className="text-xs text-[#475569]">100% on-device privacy</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-[#2A2859]">4.2x</div>
            <div className="text-base font-bold text-[#292827]">Typing Speedup</div>
            <div className="text-xs text-[#475569]">160 WPM voice vs 40 WPM typing</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-extrabold text-[#2A2859]">90+</div>
            <div className="text-base font-bold text-[#292827]">Languages</div>
            <div className="text-xs text-[#475569]">Multilingual whisper.cpp engine</div>
          </div>

        </div>
      </div>
    </section>
  );
}
