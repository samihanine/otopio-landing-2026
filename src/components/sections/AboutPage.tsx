import { PageHero } from "../ui/PageHero";
import { StatsSection } from "../ui/StatsSection";
import { Timeline } from "../ui/Timeline";
import { ManifestoSection } from "./ManifestoSection";
import { VennSection } from "./VennSection";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="À propos"
        label="Qui nous sommes"
        description="Nous sommes un studio technologique passionné par l'excellence, la clarté et l'impact. Basés à Montréal, nous accompagnons les startups et les marques ambitieuses à se démarquer grâce à un design réfléchi et l'intégration de l'intelligence artificielle."
      />
      <StatsSection />
      <ManifestoSection />
      <Timeline />
      <VennSection />
    </>
  );
}
