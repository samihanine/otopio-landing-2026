import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ServiceSection } from "../../../types/services";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function TestimonialInlineSection({
  section,
}: {
  section: ServiceSection;
}) {
  return (
    <motion.div
      {...sectionAnim}
      className="flex flex-col items-center text-center py-6 md:py-12"
    >
      <div className="max-w-2xl">
        {section.imageUrl && (
          <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-5 border-2 border-border-mid shadow-sm">
            <img
              src={section.imageUrl}
              alt={section.title || ""}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {section.description && (
          <blockquote
            className="text-dark font-heading italic mb-5"
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 500,
              lineHeight: 1.45,
            }}
          >
            &ldquo;{section.description}&rdquo;
          </blockquote>
        )}
        {section.title && (
          <p className="text-muted font-medium text-sm uppercase tracking-wide">
            — {section.title}
          </p>
        )}
      </div>
    </motion.div>
  );
}
