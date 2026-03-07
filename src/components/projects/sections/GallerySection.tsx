import { motion } from "framer-motion";
import type { ProjectSection } from "../../../types/projects";
import { ClickableImage } from "../../ui/ImageLightbox";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function GallerySection({ section }: { section: ProjectSection }) {
  return (
    <motion.div {...sectionAnim}>
      {section.title && (
        <h3
          className="text-dark font-heading mb-4 text-center"
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
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {section.subsections?.map((sub, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            {sub.imageUrl && (
              <ClickableImage
                src={sub.imageUrl}
                alt={sub.title || ""}
                containerClassName="rounded-xl overflow-hidden aspect-video bg-border/10 shadow-sm border border-border-mid"
                className="h-full w-full object-cover"
              />
            )}
            {sub.title && (
              <p className="text-dark text-center text-sm font-medium">
                {sub.title}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
