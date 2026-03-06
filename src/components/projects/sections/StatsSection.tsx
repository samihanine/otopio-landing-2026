import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ProjectSection } from "../../../types/projects";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function StatsSection({ section }: { section: ProjectSection }) {
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border-mid bg-white shadow-sm"
            >
              {Icon && (
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-border-lighter">
                  <Icon size={20} className="text-primary" />
                </div>
              )}
              {sub.title && (
                <p
                  className="text-dark font-heading"
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {sub.title}
                </p>
              )}
              {sub.description && (
                <p className="text-muted text-sm font-medium uppercase tracking-wide">
                  {sub.description}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
