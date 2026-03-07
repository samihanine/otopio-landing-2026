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
      className="flex flex-col items-center py-6 text-center md:py-12"
    >
      <div className="max-w-2xl">
        {section.imageUrl && (
          <div className="border-border-mid mx-auto mb-5 h-14 w-14 overflow-hidden rounded-full border-2 shadow-sm">
            <img
              src={section.imageUrl}
              alt={section.title || ""}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {section.description && (
          <blockquote
            className="text-dark font-heading mb-5 italic"
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
          <p className="text-muted text-sm font-medium tracking-wide uppercase">
            — {section.title}
          </p>
        )}
      </div>
    </motion.div>
  );
}
