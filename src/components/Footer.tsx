export default function Footer() {
  return (
    <footer className="bg-[#1A0B14] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Top Brand */}
        <div className="mb-12">
          <a href="#" className="text-2xl font-extrabold flex items-center gap-2.5">
            <svg className="w-6 h-6 text-[#cbb7fb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2 3.4 3.4 3.4 4.6 0 1.2-3.4 3.4-3.4 4.6 0 .2.6.8 1 1.4 1" />
              <path d="M2 18c.6 0 1.2-.4 1.4-1 1.2-3.4 3.4-3.4 4.6 0 1.2 3.4 3.4 3.4 4.6 0 1.2-3.4 3.4-3.4 4.6 0 .2.6.8 1 1.4 1" />
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
              <li><a href="https://github.com/ParthVarekar/whisper_flow_clone_local" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About</a></li>
              <li><a href="https://github.com/ParthVarekar/whisper_flow_clone_local/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://github.com/ParthVarekar/whisper_flow_clone_local/blob/main/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Architecture</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li><a href="#" className="hover:text-white transition-colors">MIT License</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Guarantee</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li><a href="https://github.com/ParthVarekar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
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
    </footer>
  );
}
