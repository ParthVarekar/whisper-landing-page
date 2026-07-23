import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsBar from "@/components/MetricsBar";
import BentoGrid from "@/components/BentoGrid";
import CalculatorSection from "@/components/CalculatorSection";
import ManifestoSection from "@/components/ManifestoSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1b1938]">
      <Navbar />
      <HeroSection />
      <MetricsBar />
      <BentoGrid />
      <CalculatorSection />
      <ManifestoSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
