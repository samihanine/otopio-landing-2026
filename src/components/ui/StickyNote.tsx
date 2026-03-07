import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ServiceDetail } from "../../types/services";
import { cn } from "../../utils/cn";

interface StickyNoteProps {
  service: ServiceDetail;
  compact?: boolean;
  index?: number; // Used for deterministic pseudo-random variations
}

const resolveIcon = (name: string) =>
  (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{ size?: number }>
    >
  )[name] ?? LucideIcons.Circle;

const contentVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export function StickyNote({
  service,
  compact = false,
  index = 0,
}: StickyNoteProps) {
  const Icon = resolveIcon(service.iconName);

  // Pseudo-random deterministic values based on index
  const r1 = (index * 13.54) % 1;
  const r2 = (index * 8.21) % 1;
  const r3 = (index * 19.87) % 1;

  // Organic shape & size variations
  const borderRadiusBase = `${2 + r1 * 2}px ${3 + r2 * 2}px ${4 + r3 * 3}px ${4 + r1 * 2}px`;
  const scale = 0.96 + r1 * 0.08; // 0.96 to 1.04
  const stretchY = 0.98 + r2 * 0.04; // 0.98 to 1.02
  const tapeRotation = -3 + r1 * 6; // -3deg to +3deg
  const tapeOffsetX = -10 + r2 * 20; // -10px to +10px
  const tapeTop = -16 + r3 * 8; // -16px to -8px

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 8, y: 20 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="h-full w-full"
    >
      <div
        className={cn(
          "relative flex h-full w-full flex-col",
          compact ? "p-6" : "p-8 md:p-10",
        )}
        style={{
          background: "var(--sticky-bg-gradient)",
          borderRadius: borderRadiusBase,
          transformStyle: "preserve-3d",
          transform: `rotateY(-1.8deg) rotateX(1.2deg) scale(${scale}, ${scale * stretchY})`,
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
          className="absolute left-1/2 z-10 -translate-x-1/2"
          style={{
            top: `${tapeTop}px`,
            marginLeft: `${tapeOffsetX}px`,
            width: "88px",
            height: "30px",
            background: "var(--sticky-tape-bg)",
            borderRadius: "2px",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow:
              "0 2px 6px rgba(0,0,0,0.1), inset 0 0 0 0.5px rgba(255,255,255,0.3)",
            transform: `rotate(${tapeRotation}deg)`,
            backdropFilter: "blur(1px)",
          }}
        />

        {/* Paper grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            borderRadius: "3px 3px 5px 5px",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px",
          }}
        />

        {/* Ruled lines */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ borderRadius: "3px 3px 5px 5px" }}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="absolute right-0 left-0"
              style={{
                top: `${44 + i * 26}px`,
                height: "1px",
                background: `var(--sticky-line-blue)`,
              }}
            />
          ))}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: "38px",
              width: "1px",
              background: "var(--sticky-line-red)",
            }}
          />
        </div>

        {/* Folded corner shadow (area under the fold) */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 z-[1]"
          style={{
            width: "30px",
            height: "30px",
            background:
              "radial-gradient(circle at bottom right, rgba(0,0,0,0.1) 0%, transparent 70%)",
            borderRadius: "0 0 5px 0",
          }}
        />

        {/* Folded corner */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 z-[2]"
          style={{
            width: "20px",
            height: "20px",
            background: "var(--sticky-fold-bg)",
            boxShadow: "var(--sticky-fold-shadow)",
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
            className={cn(
              "relative z-[1] flex h-full flex-col",
              compact ? "gap-4" : "gap-5",
            )}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div
                className={cn(
                  "flex shrink-0 items-center justify-center text-white",
                  compact ? "h-10 w-10 rounded-lg" : "h-12 w-12 rounded-xl",
                )}
                style={{ backgroundColor: service.hexColor }}
              >
                <Icon size={compact ? 18 : 22} />
              </div>
              <div>
                <h3
                  className={cn(
                    "font-heading leading-snug font-semibold",
                    compact ? "text-lg" : "text-xl",
                  )}
                  style={{ color: "var(--sticky-text-main)" }}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "text-primary mt-0.5 font-medium italic",
                    compact ? "text-[13px]" : "text-sm",
                  )}
                >
                  {service.tagline}
                </p>
              </div>
            </div>

            <p
              className={cn(
                "leading-relaxed",
                compact ? "text-[14px]" : "text-[15px]",
              )}
              style={{ color: "var(--sticky-text-body)" }}
            >
              {service.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {service.keywords.map((kw) => (
                <span
                  key={kw}
                  className={cn(
                    "rounded-full font-medium tracking-wide",
                    compact
                      ? "px-2.5 py-0.5 text-[11px]"
                      : "px-3 py-1 text-[12px]",
                  )}
                  style={{
                    border: "1px solid rgba(0,0,0,0.07)",
                    color: "var(--sticky-text-keywords)",
                    backgroundColor: "var(--sticky-bg-keywords)",
                  }}
                >
                  {kw}
                </span>
              ))}
            </div>

            <Link
              to="/expertises/$serviceId"
              params={{ serviceId: service.id }}
              className={cn(
                "group font-heading hover:text-primary mt-auto inline-flex items-center gap-2 font-semibold no-underline transition-colors duration-300",
                compact ? "text-[14px]" : "text-[15px]",
              )}
              style={{ color: "var(--sticky-text-main)" }}
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
          className="absolute right-4 -bottom-1 left-4 -z-1 h-5"
          style={{
            background: "transparent",
            boxShadow: "0 10px 16px -6px rgba(0,0,0,0.15)",
            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          }}
        />
      </div>
    </motion.div>
  );
}
