import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ServiceSection } from "../../../types/services";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function TextHighlightSection({ section }: { section: ServiceSection }) {
  const Icon = section.iconName ? (LucideIcons as any)[section.iconName] : null;

  return (
    <motion.div
      {...sectionAnim}
      className="relative rounded-3xl bg-dark p-10 md:p-16 overflow-hidden"
    >
      {/* Subtle gradient orb */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        {Icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/10"
          >
            <Icon size={22} className="text-primary" />
          </motion.div>
        )}
        {section.title && (
          <h3
            className="text-white font-heading mb-5"
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 600,
              lineHeight: 1.25,
            }}
          >
            {section.title}
          </h3>
        )}
        {section.description && (
          <p className="text-white/65 leading-relaxed font-light text-base md:text-lg">
            {section.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
