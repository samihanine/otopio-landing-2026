import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ServiceSection } from "../../../types/services";

export function HeroBannerSection({ section }: { section: ServiceSection }) {
  const Icon = section.iconName ? (LucideIcons as any)[section.iconName] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex min-h-[340px] items-end overflow-hidden rounded-3xl md:min-h-[480px]"
    >
      {section.imageUrl && (
        <img
          src={section.imageUrl}
          alt={section.title || ""}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 max-w-3xl p-8 md:p-14">
        {Icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
          >
            <Icon size={22} className="text-white" />
          </motion.div>
        )}
        {section.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading mb-4 text-white"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 600,
              lineHeight: 1.15,
            }}
          >
            {section.title}
          </motion.h2>
        )}
        {section.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base leading-relaxed font-light text-white/75 md:text-lg"
          >
            {section.description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
