import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ServiceSection } from "../../../types/services";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function FeaturesGridSection({ section }: { section: ServiceSection }) {
  return (
    <motion.div {...sectionAnim}>
      {section.title && (
        <h3
          className="text-dark font-heading mb-3"
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {section.title}
        </h3>
      )}
      {section.subtitle && (
        <p className="text-body text-prose mb-12 font-light">
          {section.subtitle}
        </p>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {section.items?.map((item, i) => {
          const Icon = item.iconName
            ? (LucideIcons as any)[item.iconName]
            : null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group border-border-mid hover:border-primary/30 rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-md"
            >
              {Icon && (
                <div className="bg-primary/5 group-hover:bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300">
                  <Icon size={20} className="text-primary" />
                </div>
              )}
              {item.title && (
                <h4 className="text-dark font-heading mb-2 text-lg font-semibold">
                  {item.title}
                </h4>
              )}
              {item.description && (
                <p className="text-body text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
