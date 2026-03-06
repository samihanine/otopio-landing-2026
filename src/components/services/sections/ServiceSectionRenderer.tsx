import type { ServiceSection } from "../../../types/services";
import { HeroBannerSection } from "./HeroBannerSection";
import { FeaturesGridSection } from "./FeaturesGridSection";
import { ProcessStepsSection } from "./ProcessStepsSection";
import { TextHighlightSection } from "./TextHighlightSection";
import { IconListSection } from "./IconListSection";
import { ComparisonSection } from "./ComparisonSection";
import { CtaBlockSection } from "./CtaBlockSection";
import { TestimonialInlineSection } from "./TestimonialInlineSection";

export function ServiceSectionRenderer({
  section,
}: {
  section: ServiceSection;
}) {
  switch (section.type) {
    case "hero-banner":
      return <HeroBannerSection section={section} />;
    case "features-grid":
      return <FeaturesGridSection section={section} />;
    case "process-steps":
      return <ProcessStepsSection section={section} />;
    case "text-highlight":
      return <TextHighlightSection section={section} />;
    case "icon-list":
      return <IconListSection section={section} />;
    case "comparison":
      return <ComparisonSection section={section} />;
    case "cta-block":
      return <CtaBlockSection section={section} />;
    case "testimonial-inline":
      return <TestimonialInlineSection section={section} />;
    default:
      return null;
  }
}
