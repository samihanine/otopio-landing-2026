import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ProjectSection } from "../../../types/projects";
import { ClickableImage } from "../../ui/ImageLightbox";

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
      className={`grid grid-cols-1 ${
        reversed ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-[1fr_2fr]"
      } gap-12 md:gap-24 items-center`}
    >
      {/* Text Content */}
      <div className={reversed ? "md:order-2" : "md:order-1"}>
        <div className="flex flex-col gap-6">
          {Icon && (
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-border-lighter">
              <Icon size={20} className="text-primary" />
            </div>
          )}
          <div>
            {section.title && (
              <h3
                className="text-dark mb-4 font-heading"
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
              <p className="text-body leading-relaxed font-light text-prose">
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
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </motion.div>
  );
}
