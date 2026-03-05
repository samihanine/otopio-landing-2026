import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { timelineEvents } from "../../types/timeline";
import { Section } from "../sections/Section";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.5"],
  });

  const [currentProgress, setCurrentProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrentProgress(v);
  });

  // Calculate which items are "reached" based on scroll progress
  const total = timelineEvents.length;
  const getItemProgress = (index: number) => {
    const itemStart = index / total;
    const itemEnd = (index + 0.6) / total;
    if (currentProgress <= itemStart) return 0;
    if (currentProgress >= itemEnd) return 1;
    return (currentProgress - itemStart) / (itemEnd - itemStart);
  };

  return (
    // <section className="py-20 md:py-28 px-8 md:px-16 overflow-hidden">
    <Section>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-6"
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-dark uppercase tracking-widest text-overline font-medium">
          Notre Parcours
        </span>
      </motion.div>

      {/* Decorative background title */}
      <div
        className="pointer-events-none select-none"
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: "clamp(40px, 8vw, 100px)",
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          opacity: 0.06,
          color: "var(--color-dark)",
          marginBottom: "40px",
        }}
      >
        Ligne du Temps
      </div>

      {/* Vertical timeline */}
      <div ref={containerRef} className="relative">
        {/* Background track line */}
        <div
          className="absolute left-[23px] md:left-[31px] top-0 bottom-0 w-[2px]"
          style={{ backgroundColor: "var(--color-border-light)" }}
        />

        {/* Filled orange line — grows with scroll */}
        <motion.div
          className="absolute left-[23px] md:left-[31px] top-0 w-[2px] origin-top"
          style={{
            backgroundColor: "var(--color-primary)",
            scaleY: scrollYProgress,
            height: "100%",
            transformOrigin: "top",
          }}
        />

        {/* Events */}
        <div className="relative space-y-0">
          {timelineEvents.map((evt, i) => {
            const progress = getItemProgress(i);
            const isActive = progress > 0.15;
            const isFullyActive = progress >= 1;

            return (
              <div
                key={evt.year}
                className="relative flex items-start gap-6 md:gap-10 pb-16 last:pb-0"
              >
                {/* Dot */}
                <div className="relative z-10 shrink-0 flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.6,
                      backgroundColor: isActive
                        ? "var(--color-primary)"
                        : "var(--color-border)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-full"
                    style={{ width: 14, height: 14 }}
                  />
                  {/* Outer ring for active */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute rounded-full border-2 border-primary/30"
                      style={{ width: 28, height: 28, top: -7 }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 -mt-1">
                  {/* Year */}
                  <motion.p
                    animate={{
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-border-dark)",
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.4 }}
                    className="origin-left"
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: isFullyActive ? "32px" : "24px",
                      fontWeight: 600,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      transition: "font-size 0.4s ease",
                    }}
                  >
                    {evt.year}
                  </motion.p>

                  {/* Title — slides in */}
                  <motion.h3
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 12,
                    }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="mt-3 text-dark"
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {evt.title}
                  </motion.h3>

                  {/* Description — fades in */}
                  <motion.p
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 16,
                    }}
                    transition={{ duration: 0.5, delay: 0.12 }}
                    className="mt-2 text-mid max-w-xl"
                    style={{ fontSize: "14px", lineHeight: 1.8 }}
                  >
                    {evt.description}
                  </motion.p>

                  {/* Highlight tag */}
                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.85,
                    }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="inline-block mt-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary origin-left"
                    style={{ fontSize: "12px", fontWeight: 500 }}
                  >
                    {evt.highlight}
                  </motion.span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
