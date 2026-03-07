import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ServiceSection } from "../../../types/services";

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  viewport: { once: true, margin: "-100px" },
};

export function CtaBlockSection({ section }: { section: ServiceSection }) {
  const cta = section.items?.[0];
  const Icon = cta?.iconName ? (LucideIcons as any)[cta.iconName] : null;

  return (
    <motion.div
      {...sectionAnim}
      className="from-primary/5 to-primary/3 border-primary/10 rounded-3xl border bg-gradient-to-br via-transparent p-10 text-center md:p-16"
    >
      {section.title && (
        <h3
          className="text-dark font-heading mb-4"
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          {section.title}
        </h3>
      )}
      {section.description && (
        <p className="text-body text-prose mx-auto mb-8 max-w-xl leading-relaxed font-light">
          {section.description}
        </p>
      )}
      {cta && (
        <Link
          to={cta.href || "/contact"}
          className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium no-underline"
        >
          {cta.title}
          {Icon && <Icon size={16} />}
        </Link>
      )}
    </motion.div>
  );
}
