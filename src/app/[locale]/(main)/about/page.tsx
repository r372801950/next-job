import { HeroSection } from "@/components/about/hero-section";
import { MainContent } from "@/components/about/main-content";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <MainContent />
    </div>
  );
}
