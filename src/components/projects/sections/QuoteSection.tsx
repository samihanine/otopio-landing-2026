import { motion } from "framer-motion";
import type { ProjectSection } from "../../../types/projects";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function QuoteSection({ section }: { section: ProjectSection }) {
  return (
    <motion.div
      {...sectionAnim}
      className="flex flex-col items-center text-center py-8 md:py-16"
    >
      <div className="max-w-3xl">
        {section.imageUrl && (
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-6 border-2 border-border-mid shadow-sm">
            <img
              src={section.imageUrl}
              alt={section.title || ""}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {section.description && (
          <blockquote
            className="text-dark font-heading italic mb-6"
            style={{
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            "{section.description}"
          </blockquote>
        )}
        {section.title && (
          <p className="text-muted font-medium text-base uppercase tracking-wide">
            — {section.title}
          </p>
        )}
      </div>
    </motion.div>
  );
}
