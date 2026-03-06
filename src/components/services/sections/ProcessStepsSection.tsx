import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { ServiceSection } from "../../../types/services";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function ProcessStepsSection({ section }: { section: ServiceSection }) {
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
        <p className="text-body font-light text-prose mb-14">
          {section.subtitle}
        </p>
      )}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border-mid hidden md:block" />

        <div className="flex flex-col gap-10">
          {section.items?.map((step, i) => {
            const Icon = step.iconName
              ? (LucideIcons as any)[step.iconName]
              : null;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-10 items-start"
              >
                {/* Step indicator */}
                <div className="relative shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-border-mid shadow-sm flex items-center justify-center z-10">
                    {Icon ? (
                      <Icon size={20} className="text-primary" />
                    ) : (
                      <span className="text-primary font-heading font-bold text-sm">
                        {step.label || String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1.5">
                  {step.label && (
                    <span className="text-primary/60 text-xs font-semibold uppercase tracking-widest mb-1 block">
                      Étape {step.label}
                    </span>
                  )}
                  {step.title && (
                    <h4 className="text-dark font-heading text-xl font-semibold mb-2">
                      {step.title}
                    </h4>
                  )}
                  {step.description && (
                    <p className="text-body leading-relaxed font-light text-prose max-w-xl">
                      {step.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
