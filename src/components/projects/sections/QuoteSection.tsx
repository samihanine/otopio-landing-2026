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
      className="flex flex-col items-center py-8 text-center md:py-16"
    >
      <div className="max-w-3xl">
        {section.imageUrl && (
          <div className="border-border-mid mx-auto mb-6 h-16 w-16 overflow-hidden rounded-full border-2 shadow-sm">
            <img
              src={section.imageUrl}
              alt={section.title || ""}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {section.description && (
          <blockquote
            className="text-dark font-heading mb-6 italic"
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
          <p className="text-muted text-base font-medium tracking-wide uppercase">
            — {section.title}
          </p>
        )}
      </div>
    </motion.div>
  );
}
