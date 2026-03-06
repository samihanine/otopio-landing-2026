import type { ProjectSection } from "../../../types/projects";
import { ImageTextSection } from "./ImageTextSection";
import { CardSection } from "./CardSection";
import { CardsSection } from "./CardsSection";
import { BannerSection } from "./BannerSection";
import { GallerySection } from "./GallerySection";
import { StatsSection } from "./StatsSection";
import { QuoteSection } from "./QuoteSection";

export function SectionRenderer({ section }: { section: ProjectSection }) {
  switch (section.type) {
    case "image-text":
      return <ImageTextSection section={section} />;
    case "text-image":
      return <ImageTextSection section={section} reversed />;
    case "card":
      return <CardSection section={section} />;
    case "cards":
      return <CardsSection section={section} />;
    case "banner":
      return <BannerSection section={section} />;
    case "gallery":
      return <GallerySection section={section} />;
    case "stats":
      return <StatsSection section={section} />;
    case "quote":
      return <QuoteSection section={section} />;
    default:
      return null;
  }
}
