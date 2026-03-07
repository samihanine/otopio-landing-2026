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
          className="text-dark font-heading mb-10 text-center"
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
        <p className="text-body text-prose mx-auto mb-10 max-w-2xl text-center leading-relaxed font-light">
          {section.description}
        </p>
      )}
      <div className={cn("grid grid-cols-1 gap-6", gridCols)}>
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
              className="border-border-mid flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {sub.imageUrl && (
                <div className="p-3">
                  <ClickableImage
                    src={sub.imageUrl}
                    alt={sub.title || ""}
                    containerClassName="rounded-2xl overflow-hidden"
                    className="aspect-video w-full rounded-2xl object-cover"
                  />
                </div>
              )}
              {!sub.imageUrl && <div className="flex-1" />}
              <div className="flex flex-col gap-3 p-6">
                {Icon && (
                  <div className="border-border-lighter flex h-9 w-9 items-center justify-center rounded-lg border bg-white shadow-sm">
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
