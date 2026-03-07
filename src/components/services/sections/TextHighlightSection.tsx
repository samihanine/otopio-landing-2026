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
      className="bg-dark relative overflow-hidden rounded-3xl p-10 md:p-16"
    >
      {/* Subtle gradient orb */}
      <div className="bg-primary/10 pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        {Icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10"
          >
            <Icon size={22} className="text-primary" />
          </motion.div>
        )}
        {section.title && (
          <h3
            className="font-heading mb-5 text-white"
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
          <p className="text-base leading-relaxed font-light text-white/65 md:text-lg">
            {section.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
