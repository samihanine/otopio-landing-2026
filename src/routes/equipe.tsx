import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/layout/Section";
import { TeamLanyards } from "../components/ui/Lanyard/TeamLanyards";
import { TeamShowcase } from "../components/Team/TeamShowcase";
import { VennSection } from "../components/about/VennSection";
import { teamStrengthData } from "../types/strength";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CareerSection } from "#/components/Career/CareerSection";

export const Route = createFileRoute("/equipe")({
  component: EquipePage,
});

function EquipePage() {
  return (
    <main className="min-h-screen bg-light overflow-hidden">
      {/* Hero Section */}
      <PageHero
        title="Notre Équipe"
        label="L'ÉQUIPE"
        description="Découvrez les esprits créatifs derrière Otopio."
      />

      {/* Multiple Lanyards hanging below hero sharing one space */}
      <TeamLanyards />

      {/* Team Showcase */}
      <Section className="bg-white relative z-20">
        <SectionHeader
          label="RENCONTREZ L'ÉQUIPE"
          title="Une équipe à taille humaine"
          align="left"
          className="mb-12"
        />
        <TeamShowcase />
      </Section>

      {/* Team Strengths Venn Diagram */}
      <VennSection data={teamStrengthData} />
      <CareerSection />
    </main>
  );
}
