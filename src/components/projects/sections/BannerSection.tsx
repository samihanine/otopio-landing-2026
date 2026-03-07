import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectSection } from "../../../types/projects";
import { ImageLightbox } from "../../ui/ImageLightbox";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function BannerSection({ section }: { section: ProjectSection }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        {...sectionAnim}
        className="group relative cursor-zoom-in overflow-hidden rounded-2xl"
        onClick={() => section.imageUrl && setLightboxOpen(true)}
      >
        {section.imageUrl && (
          <img
            src={section.imageUrl}
            alt={section.title || ""}
            className="h-full min-h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] md:min-h-[450px]"
          />
        )}
        {(section.title || section.description) && (
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 md:p-12">
            {section.title && (
              <h3
                className="font-heading mb-3 text-white"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 40px)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {section.title}
              </h3>
            )}
            {section.description && (
              <p className="max-w-2xl text-base leading-relaxed font-light text-white/80 md:text-lg">
                {section.description}
              </p>
            )}
          </div>
        )}
      </motion.div>
      <AnimatePresence>
        {lightboxOpen && section.imageUrl && (
          <ImageLightbox
            src={section.imageUrl}
            alt={section.title || ""}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
