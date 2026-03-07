import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export interface SectionLabelProps {
  text: string;
  className?: string;
  /** "dark" = texte noir (pour fond clair), "light" = texte blanc/40 (pour fond sombre) */
  variant?: "dark" | "light";
  /** Animation au scroll (whileInView) ou au montage (animate) */
  animateOnScroll?: boolean;
}

export function SectionLabel({
  text,
  className = "",
  variant = "dark",
  animateOnScroll = true,
}: SectionLabelProps) {
  // Définition des couleurs de texte selon la variante
  const textColor = variant === "dark" ? "text-dark" : "text-white/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      {...(animateOnScroll
        ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
        : { animate: { opacity: 1, y: 0 } })}
      transition={{ duration: 0.6 }}
      className={cn("flex items-center gap-2", className)}
    >
      {/* Le point orange reste constant car il ressort sur les deux fonds */}
      <div className="w-2 h-2 rounded-full bg-primary" />
      
      <span
        className={cn(
          "uppercase tracking-[0.2em] text-overline font-semibold",
          textColor
        )}
      >
        {text}
      </span>
    </motion.div>
  );
}
