import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Susurrus",
  description: "Complete Data Disclosure Matrix and 100% On-Device Privacy Guarantee for Susurrus Platform Engine.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#121929] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-36 pb-24 max-w-[960px] mx-auto px-6 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#2A2859] text-white px-3.5 py-1 rounded-[6px] text-xs font-bold font-mono">
            <span>LEGAL & TRUST GUARANTEE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-[540] tracking-tight text-white">
            Privacy Policy & Data Disclosure Matrix
          </h1>
          <p className="text-sm text-slate-300">
            Last Updated: July 24, 2026 • Effective Immediately (GDPR, CCPA, & ePrivacy Compliant)
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300 font-normal">
          
          {/* Section 1 */}
          <section className="space-y-3 bg-white/5 border border-white/10 p-6 rounded-[16px]">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>1. 100% On-Device Local Processing Guarantee</span>
            </h2>
            <p>
              Susurrus is architected with a strict <strong>Zero-Cloud Local First</strong> mandate. All speech recognition (<code className="bg-white/10 px-1.5 py-0.5 rounded text-white">whisper.cpp</code>), Voice Activity Detection (VAD), and local context command LLM processing (<code className="bg-white/10 px-1.5 py-0.5 rounded text-white">llama.cpp</code> / Gemma 2B) execute <strong>entirely on your local client hardware</strong> (NVIDIA CUDA, Apple Metal, or CPU).
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li><strong>Zero Audio Transmissions:</strong> Your microphone audio feeds are never recorded to remote servers or transmitted across the internet.</li>
              <li><strong>Zero Text Logging:</strong> Dictated text and spoken context prompts are typed directly into your operating system's focused cursor location without cloud telemetry.</li>
              <li><strong>Zero Clipboard History Pollution:</strong> Text inserts do not pollute your system clipboard history.</li>
            </ul>
          </section>

          {/* Section 2: Comprehensive Data Disclosure Matrix */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. Comprehensive Data Collection & Usage Matrix</h2>
            <p>
              In compliance with global data protection regulations (GDPR, CCPA/CPRA, and CalOPPA), the table below explicitly discloses all categories of personal data collected, how we use it, our legal basis for processing, and retention policies:
            </p>

            <div className="overflow-x-auto border border-white/15 rounded-[12px] bg-slate-900/80">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-white/10 text-white font-bold border-b border-white/15">
                    <th className="p-3 border-r border-white/10">Data Category</th>
                    <th className="p-3 border-r border-white/10">Specific Data Collected</th>
                    <th className="p-3 border-r border-white/10">Purpose & How We Use It</th>
                    <th className="p-3 border-r border-white/10">Legal Basis (GDPR)</th>
                    <th className="p-3 border-r border-white/10">Retention & Storage</th>
                    <th className="p-3">Third-Party Sharing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-white/10">Waitlist Signups</td>
                    <td className="p-3 border-r border-white/10">Email address, Primary Role (e.g. Developer, Executive)</td>
                    <td className="p-3 border-r border-white/10">To notify users when beta builds are available and send setup instructions.</td>
                    <td className="p-3 border-r border-white/10">Consent (Art. 6(1)(a) GDPR)</td>
                    <td className="p-3 border-r border-white/10">Retained until beta release or until user requests deletion. Stored in Gmail SMTP logs.</td>
                    <td className="p-3 font-semibold text-rose-300">NONE (Never Sold or Shared)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-white/10">Optional Survey Data</td>
                    <td className="p-3 border-r border-white/10">Primary OS (Windows/Mac/Linux), Desired Features, Daily Usage, Workflow Pain Points</td>
                    <td className="p-3 border-r border-white/10">To prioritize OS build targets and prioritize user feature requests. Completely optional/non-compulsory.</td>
                    <td className="p-3 border-r border-white/10">Consent (Art. 6(1)(a) GDPR)</td>
                    <td className="p-3 border-r border-white/10">Retained during product development for aggregation. Stored in founder email inbox.</td>
                    <td className="p-3 font-semibold text-rose-300">NONE (Never Sold or Shared)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-white/10">Direct Inquiries</td>
                    <td className="p-3 border-r border-white/10">Email address, message content sent to founder</td>
                    <td className="p-3 border-r border-white/10">To reply to user questions, priority support requests, or feature inquiries.</td>
                    <td className="p-3 border-r border-white/10">Legitimate Interest (Art. 6(1)(f) GDPR)</td>
                    <td className="p-3 border-r border-white/10">Retained as standard email correspondence.</td>
                    <td className="p-3 font-semibold text-rose-300">NONE (Never Sold or Shared)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-white/10">Server Technical Logs</td>
                    <td className="p-3 border-r border-white/10">IP address, HTTP User-Agent header, request timestamp</td>
                    <td className="p-3 border-r border-white/10">To protect web server infrastructure from automated spam, bots, and DDoS attacks.</td>
                    <td className="p-3 border-r border-white/10">Legitimate Interest (Art. 6(1)(f) GDPR)</td>
                    <td className="p-3 border-r border-white/10">Temporary standard hosting logs (max 30 days).</td>
                    <td className="p-3 font-semibold text-slate-400">Hosting Provider (Cloudflare / Vercel)</td>
                  </tr>
                  <tr className="bg-emerald-950/40">
                    <td className="p-3 font-bold text-emerald-300 border-r border-white/10">Audio & Voice Streams</td>
                    <td className="p-3 border-r border-white/10 font-mono text-emerald-300">NONE (100% Local)</td>
                    <td className="p-3 border-r border-white/10 text-emerald-200">Processed entirely in-memory on client hardware GPU/CPU. NEVER transmitted or saved.</td>
                    <td className="p-3 border-r border-white/10 text-emerald-200">N/A (Zero Collection)</td>
                    <td className="p-3 border-r border-white/10 text-emerald-200">Zero Retention</td>
                    <td className="p-3 font-bold text-emerald-300">NONE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Strict Anti-Monetization & No Data Sales</h2>
            <p>
              We do <strong>NOT</strong> sell, rent, trade, lease, or monetize your personal information, survey responses, or email address to third parties, advertising networks, or data brokers under any circumstances.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Cookies & Web Tracking Policy</h2>
            <p>
              Our landing page operates without tracking cookies, invasive third-party ad pixels, or behavioral cross-site profiling trackers. We do not use Google Analytics or Facebook Meta Pixel scripts.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Open Source Code Transparency</h2>
            <p>
              Susurrus values full architectural transparency. Our landing page and local integration code are open source under the MIT License. Anyone can independently inspect, audit, and verify our zero-telemetry claims on GitHub at:
            </p>
            <p className="pt-1">
              <a
                href="https://github.com/ParthVarekar/whisper-landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbb7fb] font-semibold underline hover:text-white"
              >
                https://github.com/ParthVarekar/whisper-landing-page
              </a>
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 bg-white/5 border border-white/10 p-6 rounded-[16px]">
            <h2 className="text-lg font-bold text-white">6. Limitation of Liability & Disclaimer of Warranties</h2>
            <p className="text-xs text-slate-300 leading-relaxed uppercase font-mono">
              THE SOFTWARE AND WEBSITE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS, PARTH VAREKAR, OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Your Data Subject Rights (GDPR & CCPA)</h2>
            <p>
              Under international privacy laws, you possess the following explicit rights regarding your data:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong>Right to Access:</strong> Request a copy of any personal data we hold about you.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request complete deletion of your email and survey responses.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate information.</li>
            </ul>
            <p className="pt-1">
              To exercise any of these rights, email Parth Varekar at <a href="mailto:parthvarekar27@gmail.com" className="text-[#cbb7fb] underline font-semibold">parthvarekar27@gmail.com</a> with the subject line <em>"Data Privacy Request"</em>, and your request will be fulfilled within 48 hours.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. Contact Information</h2>
            <p>
              For any questions regarding this Privacy Policy, Data Disclosure Matrix, or security practices, please contact:
            </p>
            <div className="bg-slate-900 border border-white/15 p-4 rounded-[12px] text-xs font-mono text-slate-300 space-y-1">
              <div><strong>Data Protection Officer / Founder:</strong> Parth Varekar</div>
              <div><strong>Email:</strong> <a href="mailto:parthvarekar27@gmail.com" className="text-[#cbb7fb] underline">parthvarekar27@gmail.com</a></div>
              <div><strong>GitHub:</strong> <a href="https://github.com/ParthVarekar" target="_blank" rel="noopener noreferrer" className="text-[#cbb7fb] underline">github.com/ParthVarekar</a></div>
            </div>
          </section>

        </div>

        {/* Footer Back CTA */}
        <div className="pt-8 border-t border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#2A2859] hover:bg-[#1E1B42] text-white font-bold text-xs px-6 py-3 rounded-[8px] transition-colors shadow-lg"
          >
            ← Return to Susurrus Home
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
