import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ProjectSection } from "../../../types/projects";
import { ClickableImage } from "./ImageLightbox";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function CardsSection({ section }: { section: ProjectSection }) {
  const count = section.subsections?.length ?? 0;
  const gridCols =
    count === 1
      ? "md:grid-cols-1"
      : count === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <motion.div {...sectionAnim}>
      {section.title && (
        <h3
          className="text-dark mb-10 font-heading text-center"
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
        <p className="text-body leading-relaxed font-light text-prose text-center max-w-2xl mx-auto mb-10">
          {section.description}
        </p>
      )}
      <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
        {section.subsections?.map((sub, i) => {
          const Icon = sub.lucideIcon
            ? (LucideIcons as any)[sub.lucideIcon]
            : null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border-mid bg-white shadow-sm overflow-hidden flex flex-col"
            >
              {sub.imageUrl && (
                <div className="p-3">
                  <ClickableImage
                    src={sub.imageUrl}
                    alt={sub.title || ""}
                    containerClassName="rounded-2xl overflow-hidden"
                    className="w-full aspect-video object-cover rounded-2xl"
                  />
                </div>
              )}
              {!sub.imageUrl && <div className="flex-1" />}
              <div className="p-6 flex flex-col gap-3">
                {Icon && (
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm border border-border-lighter">
                    <Icon size={18} className="text-primary" />
                  </div>
                )}
                {sub.title && (
                  <h4 className="text-dark font-heading text-lg font-semibold">
                    {sub.title}
                  </h4>
                )}
                {sub.description && (
                  <p className="text-body text-sm leading-relaxed font-light">
                    {sub.description}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
