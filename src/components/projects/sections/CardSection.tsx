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
      <div className="w-full max-w-3xl lg:max-w-4xl rounded-2xl border border-border-mid bg-white shadow-sm overflow-hidden">
        {section.imageUrl && (
          <ClickableImage
            src={section.imageUrl}
            alt={section.title || ""}
            containerClassName="aspect-video bg-border/10"
            className="w-full h-full object-cover"
          />
        )}
        <div className="p-8 md:p-10">
          <div className="flex items-start gap-4">
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-border-lighter shrink-0">
                <Icon size={20} className="text-primary" />
              </div>
            )}
            <div>
              {section.title && (
                <h3
                  className="text-dark mb-3 font-heading"
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
                <p className="text-body leading-relaxed font-light text-prose">
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
