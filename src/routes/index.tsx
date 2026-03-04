import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { RecentWorksSection } from "../components/sections/RecentWorksSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ContactSection } from "../components/sections/ContactSection";
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
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
