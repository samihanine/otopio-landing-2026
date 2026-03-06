import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectSection } from "../../../types/projects";
import { ImageLightbox } from "./ImageLightbox";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function BannerSection({ section }: { section: ProjectSection }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <motion.div
      {...sectionAnim}
      className="relative rounded-2xl overflow-hidden cursor-zoom-in group"
      onClick={() => section.imageUrl && setLightboxOpen(true)}
    >
      {section.imageUrl && (
        <img
          src={section.imageUrl}
          alt={section.title || ""}
          className="w-full h-full object-cover min-h-[300px] md:min-h-[450px] transition-transform duration-300 group-hover:scale-[1.03]"
        />
      )}
      {(section.title || section.description) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
          {section.title && (
            <h3
              className="text-white mb-3 font-heading"
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
            <p className="text-white/80 leading-relaxed font-light max-w-2xl text-base md:text-lg">
              {section.description}
            </p>
          )}
        </div>
      )}
      <AnimatePresence>
        {lightboxOpen && section.imageUrl && (
          <ImageLightbox
            src={section.imageUrl}
            alt={section.title || ""}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
