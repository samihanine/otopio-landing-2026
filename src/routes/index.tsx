import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/home/HeroSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { RecentWorksSection } from "../components/home/RecentWorksSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { AboutTeaser } from "../components/home/AboutTeaser";
import { AnimatedBanner } from "../components/ui/AnimatedBanner";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AnimatedBanner />
      <RecentWorksSection />
      <ServicesSection />
      <AboutTeaser />
    </div>
  );
}
