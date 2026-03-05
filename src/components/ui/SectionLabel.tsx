import { motion } from "framer-motion";

interface SectionLabelProps {
  text: string;
  className?: string;
  /** "dark" = text-dark (light bg), "light" = text-white/40 (dark bg) */
  variant?: "dark" | "light";
  /** Whether to animate on scroll (whileInView) or on mount (animate) */
  animateOnScroll?: boolean;
}

export function SectionLabel({
  text,
  className = "",
  variant = "dark",
  animateOnScroll = true,
}: SectionLabelProps) {
  const textColor = variant === "dark" ? "text-dark" : "text-white/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      {...(animateOnScroll
        ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
        : { animate: { opacity: 1, y: 0 } })}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <div className="w-2 h-2 rounded-full bg-primary" />
      <span
        className={`${textColor} uppercase tracking-widest text-overline font-medium`}
      >
        {text}
      </span>
    </motion.div>
  );
}
