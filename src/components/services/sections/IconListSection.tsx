import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ServiceSection } from "../../../types/services";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function IconListSection({ section }: { section: ServiceSection }) {
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
        <p className="text-body font-light text-prose mb-12">
          {section.subtitle}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {section.items?.map((item, i) => {
          const Icon = item.iconName
            ? (LucideIcons as any)[item.iconName]
            : null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              {Icon && (
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
              )}
              <div>
                {item.title && (
                  <p className="text-dark font-heading font-semibold text-base">
                    {item.title}
                  </p>
                )}
                {item.description && (
                  <p className="text-body text-sm font-light">
                    {item.description}
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
