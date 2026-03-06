import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { SectionLabel } from "./SectionLabel";

interface PageHeroProps {
  title: string;
  label?: string;
  description?: string;
  className?: string;
}

export function PageHero({
  title,
  label,
  description,
  className = "",
}: PageHeroProps) {
  return (
    <Section className={`sm:py-12 md:py-12 lg:py-12 ${className}`}>
      <div className="flex flex-col gap-16 text-left">
        {label && (
          <SectionLabel
            text={label}
            animateOnScroll={false}
            className="gap-3"
          />
        )}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-dark font-heading"
          style={{
            fontSize: "clamp(40px, 12vw, 80px)",
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted leading-relaxed max-w-2xl text-lg-body"
          >
            {description}
          </motion.p>
        )}
      </div>
    </Section>
  );
}
