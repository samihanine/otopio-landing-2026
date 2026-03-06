import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ServiceDetail } from "../../types/services";

interface StickyNoteProps {
  service: ServiceDetail;
  compact?: boolean;
}

const resolveIcon = (name: string) =>
  (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[name] ??
  LucideIcons.Circle;

const contentVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export function StickyNote({ service, compact = false }: StickyNoteProps) {
  const Icon = resolveIcon(service.iconName);

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 8, y: 20 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`relative w-full h-full flex flex-col ${compact ? "p-6" : "p-8 md:p-10"}`}
      style={{
        background: "linear-gradient(172deg, #fffef5 0%, #fff9e2 30%, #fffbea 60%, #fffdf2 100%)",
        borderRadius: "3px 3px 5px 5px",
        transformStyle: "preserve-3d",
        transform: "rotateY(-1.8deg) rotateX(1.2deg)",
        boxShadow: [
          "0 1px 2px rgba(0,0,0,0.08)",
          "0 4px 12px rgba(0,0,0,0.07)",
          "0 12px 36px rgba(0,0,0,0.09)",
          "0 24px 60px rgba(0,0,0,0.05)",
          "inset 0 1px 0 rgba(255,255,255,0.9)",
          "inset 0 -1px 0 rgba(0,0,0,0.03)",
        ].join(", "),
      }}
    >
      {/* Tape strip at top */}
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10"
        style={{
          width: "88px",
          height: "30px",
          background: "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(245,243,235,0.4) 100%)",
          borderRadius: "2px",
          border: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1), inset 0 0 0 0.5px rgba(255,255,255,0.3)",
          transform: "rotate(-2deg)",
          backdropFilter: "blur(1px)",
        }}
      />

      {/* Paper grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          borderRadius: "3px 3px 5px 5px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      {/* Ruled lines */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ borderRadius: "3px 3px 5px 5px" }}
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0"
            style={{
              top: `${44 + i * 26}px`,
              height: "1px",
              background: `rgba(180, 200, 220, ${0.18 + (i % 3 === 0 ? 0.08 : 0)})`,
            }}
          />
        ))}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: "38px", width: "1px", background: "rgba(220, 100, 100, 0.08)" }}
        />
      </div>

      {/* Folded corner */}
      <div
        className="absolute bottom-0 right-0 z-[2] pointer-events-none"
        style={{
          width: "20px",
          height: "20px",
          background: "linear-gradient(135deg, transparent 50%, #f5f0e0 50%, #ede8d8 100%)",
          boxShadow: "-1px -1px 3px rgba(0,0,0,0.06)",
          borderRadius: "0 0 5px 0",
        }}
      />

      {/* Dynamic content — animates on service change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`relative z-[1] flex flex-col ${compact ? "gap-4" : "gap-5"} h-full`}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className={`${compact ? "w-10 h-10 rounded-lg" : "w-12 h-12 rounded-xl"} flex items-center justify-center text-white shrink-0`}
              style={{ backgroundColor: service.hexColor }}
            >
              <Icon size={compact ? 18 : 22} />
            </div>
            <div>
              <h3
                className={`font-heading font-semibold leading-snug ${compact ? "text-lg" : "text-xl"}`}
                style={{ color: "#2a2a2a" }}
              >
                {service.title}
              </h3>
              <p className={`text-primary font-medium italic mt-0.5 ${compact ? "text-[13px]" : "text-sm"}`}>
                {service.tagline}
              </p>
            </div>
          </div>

          <p
            className={`leading-relaxed ${compact ? "text-[14px]" : "text-[15px]"}`}
            style={{ color: "#555" }}
          >
            {service.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {service.keywords.map((kw) => (
              <span
                key={kw}
                className={`rounded-full font-medium tracking-wide ${compact ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-[12px]"}`}
                style={{
                  border: "1px solid rgba(0,0,0,0.07)",
                  color: "#888",
                  backgroundColor: "rgba(255,255,255,0.45)",
                }}
              >
                {kw}
              </span>
            ))}
          </div>

          <Link
            to="/expertises/$serviceId"
            params={{ serviceId: service.id }}
            className={`group inline-flex items-center gap-2 no-underline font-heading font-semibold mt-auto hover:text-primary transition-colors duration-300 ${compact ? "text-[14px]" : "text-[15px]"}`}
            style={{ color: "#2a2a2a" }}
          >
            Découvrir cette expertise
            <LucideIcons.ArrowRight
              size={compact ? 14 : 16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Bottom curl shadow */}
      <div
        className="absolute -bottom-1 left-4 right-4 h-5 -z-1"
        style={{
          background: "transparent",
          boxShadow: "0 10px 16px -6px rgba(0,0,0,0.15)",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
        }}
      />
    </motion.div>
  );
}
