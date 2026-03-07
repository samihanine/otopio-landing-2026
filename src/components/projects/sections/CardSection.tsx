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

export function CardSection({ section }: { section: ProjectSection }) {
  const Icon = section.lucideIcon
    ? (LucideIcons as any)[section.lucideIcon]
    : null;

  return (
    <motion.div {...sectionAnim} className="flex justify-center">
      <div className="border-border-mid w-full max-w-3xl overflow-hidden rounded-2xl border bg-white shadow-sm lg:max-w-4xl">
        {section.imageUrl && (
          <ClickableImage
            src={section.imageUrl}
            alt={section.title || ""}
            containerClassName="aspect-video bg-border/10"
            className="h-full w-full object-cover"
          />
        )}
        <div className="p-8 md:p-10">
          <div className="flex items-start gap-4">
            {Icon && (
              <div className="border-border-lighter flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm">
                <Icon size={20} className="text-primary" />
              </div>
            )}
            <div>
              {section.title && (
                <h3
                  className="text-dark font-heading mb-3"
                  style={{
                    fontSize: "clamp(22px, 3vw, 30px)",
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
      </div>
    </motion.div>
  );
}
