import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Susurrus",
  description: "100% On-Device Privacy Policy and Zero-Telemetry Guarantee for Susurrus Platform Engine.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#121929] text-white flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-36 pb-24 max-w-[900px] mx-auto px-6 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 bg-[#2A2859] text-white px-3.5 py-1 rounded-[6px] text-xs font-bold font-mono">
            <span>LEGAL & TRUST GUARANTEE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-[540] tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-300">
            Last Updated: July 24, 2026 • Effective Immediately
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

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Voluntary Information We Collect</h2>
            <p>
              The only information collected by Susurrus is data you voluntarily provide when interacting with our official website landing page:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li><strong>Early Access Waitlist Email:</strong> When you voluntarily submit your email address on our website waitlist form, we collect your email address and selected role to notify you of beta software availability.</li>
              <li><strong>Direct Email Communications:</strong> If you contact the founder (Parth Varekar) directly at <a href="mailto:parthvarekar27@gmail.com" className="text-[#cbb7fb] underline">parthvarekar27@gmail.com</a>, we retain your communication solely to respond to your inquiry.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Zero Data Sales & No Third-Party Data Sharing</h2>
            <p>
              We do <strong>NOT</strong> sell, rent, trade, or monetize your personal information or email address to third parties, advertisers, or data brokers under any circumstances.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Cookies & Analytics</h2>
            <p>
              Our landing page operates without tracking cookies, invasive third-party ad pixels, or behavioral cross-site profiling trackers. Standard web server logs may temporarily capture basic connection data (IP address, user agent) solely for security monitoring and DDoS protection.
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
            <h2 className="text-lg font-bold text-white">7. Your Rights & Data Deletion Requests</h2>
            <p>
              You have the right to request deletion of your email address from our Early Access waitlist at any time. Simply email Parth Varekar at <a href="mailto:parthvarekar27@gmail.com" className="text-[#cbb7fb] underline font-semibold">parthvarekar27@gmail.com</a> with the subject line <em>"Data Deletion Request"</em>, and your information will be permanently removed within 48 hours.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">8. Contact Information</h2>
            <p>
              For any questions regarding this Privacy Policy or data security practices, please contact:
            </p>
            <div className="bg-slate-900 border border-white/15 p-4 rounded-[12px] text-xs font-mono text-slate-300 space-y-1">
              <div><strong>Data Protection Officer / Developer:</strong> Parth Varekar</div>
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
