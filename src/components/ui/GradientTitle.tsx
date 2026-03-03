import { motion } from "framer-motion";

interface GradientTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientTitle({
  children,
  className = "",
}: GradientTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.15 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`text-center pointer-events-none select-none ${className}`}
      style={{
        position: "relative",
        zIndex: 0,
        maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 40%, transparent 100%)",
      }}
    >
      <span
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "clamp(40px, 10vw, 180px)",
          fontWeight: 600,
          color: "#333",
          lineHeight: 1,
        }}
      >
        {children}
      </span>
    </motion.div>
  );
}
