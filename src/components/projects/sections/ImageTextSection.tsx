import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ProjectSection } from "../../../types/projects";
import { ClickableImage } from "../../ui/ImageLightbox";
import { cn } from "../../../utils/cn";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function ImageTextSection({
  section,
  reversed,
}: {
  section: ProjectSection;
  reversed?: boolean;
}) {
  const Icon = section.lucideIcon
    ? (LucideIcons as any)[section.lucideIcon]
    : null;

  return (
    <motion.div
      {...sectionAnim}
      className={cn(
        "grid grid-cols-1 items-center gap-12 md:gap-24",
        reversed ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-[1fr_2fr]",
      )}
    >
      {/* Text Content */}
      <div className={reversed ? "md:order-2" : "md:order-1"}>
        <div className="flex flex-col gap-6">
          {Icon && (
            <div className="border-border-lighter flex h-10 w-10 items-center justify-center rounded-xl border bg-white shadow-sm">
              <Icon size={20} className="text-primary" />
            </div>
          )}
          <div>
            {section.title && (
              <h3
                className="text-dark font-heading mb-4"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {section.title}
              </h3>
            )}
            {section.description && (
              <p className="text-body text-prose leading-relaxed font-light">
                {section.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className={reversed ? "md:order-1" : "md:order-2"}>
        {section.imageUrl && (
          <ClickableImage
            src={section.imageUrl}
            alt={section.title || ""}
            containerClassName="rounded-2xl overflow-hidden aspect-project bg-border/10 shadow-sm border border-border-mid"
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </motion.div>
  );
}
