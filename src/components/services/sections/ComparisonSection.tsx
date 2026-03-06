import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ServiceSection } from "../../../types/services";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function ComparisonSection({ section }: { section: ServiceSection }) {
  const columns = section.items ?? [];

  return (
    <motion.div {...sectionAnim}>
      {section.title && (
        <h3
          className="text-dark font-heading mb-12 text-center"
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {section.title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {columns.map((col, ci) => {
          const isPositive = col.iconName === "Check";
          const lines = col.description?.split("|") ?? [];
          return (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 border ${
                isPositive
                  ? "bg-primary/3 border-primary/20"
                  : "bg-white border-border-mid"
              }`}
            >
              {col.title && (
                <h4
                  className={`font-heading text-xl font-semibold mb-6 ${
                    isPositive ? "text-primary" : "text-muted"
                  }`}
                >
                  {col.title}
                </h4>
              )}
              <ul className="flex flex-col gap-3.5">
                {lines.map((line, li) => {
                  const LineIcon = isPositive
                    ? LucideIcons.Check
                    : LucideIcons.X;
                  return (
                    <li key={li} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPositive
                            ? "bg-primary/10 text-primary"
                            : "bg-red-50 text-red-400"
                        }`}
                      >
                        <LineIcon size={12} strokeWidth={3} />
                      </div>
                      <span className="text-dark text-sm leading-relaxed">
                        {line.trim()}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
