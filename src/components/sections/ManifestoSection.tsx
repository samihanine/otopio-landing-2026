import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Section } from "./Section";
import { defaultManifesto } from "../../types/manifesto";
import type { ManifestoData } from "../../types/manifesto";

interface ManifestoSectionProps {
  data?: ManifestoData;
}

export function ManifestoSection({
  data = defaultManifesto,
}: ManifestoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.82", "end 0.55"],
  });
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
  });

  const renderableTokens = data.tokens.filter((t) => t.type !== "break");
  const totalRenderable = renderableTokens.length;
  let renderableIndex = 0;

  return (
    <Section className="relative py-20 md:py-28 overflow-hidden bg-dark">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-10"
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-white/40 uppercase tracking-widest text-label font-medium">
          {data.label}
        </span>
      </motion.div>

      {/* Decorative background title */}
      <div
        className="pointer-events-none select-none font-heading text-dark-light"
        style={{
          fontSize: "clamp(40px, 8vw, 100px)",
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          opacity: 0.15,
          marginBottom: "40px",
        }}
      >
        {data.backgroundTitle}
      </div>

      <div>
        {/* Manifesto tokens */}
        <div
          ref={containerRef}
          className="flex flex-wrap items-center gap-x-[0.3em] gap-y-[0.1em] font-heading"
          style={{
            fontSize: "clamp(22px, 3.5vw, 38px)",
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          {data.tokens.map((token, i) => {
            if (token.type === "break") {
              return <div key={`br-${i}`} className="w-full h-0" />;
            }

            const idx = renderableIndex;
            renderableIndex++;
            const revealAt = idx / totalRenderable;
            const isRevealed = progress >= revealAt;

            if (token.type === "image") {
              return (
                <motion.div
                  key={`img-${i}`}
                  className="inline-flex items-center rounded-full overflow-hidden mx-1"
                  style={{
                    width: "clamp(60px, 10vw, 120px)",
                    height: "clamp(28px, 4.2vw, 44px)",
                  }}
                  animate={{
                    opacity: isRevealed ? 1 : 0,
                    scale: isRevealed ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <img
                    src={token.src}
                    alt={token.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            }

            if (token.type === "tag") {
              return (
                <motion.span
                  key={`tag-${i}`}
                  className="inline-flex items-center justify-center rounded-full mx-1"
                  style={{
                    backgroundColor: isRevealed
                      ? "var(--color-primary)"
                      : "rgba(255,255,255,0.05)",
                    padding: "0.05em 0.45em",
                    fontSize: "0.6em",
                    color: isRevealed ? "#fff" : "transparent",
                    transition: "all 0.4s ease",
                  }}
                  animate={{ opacity: isRevealed ? 1 : 0.15 }}
                  transition={{ duration: 0.35 }}
                >
                  {token.text}
                </motion.span>
              );
            }

            if (token.type === "circle-word") {
              return (
                <motion.span
                  key={`circ-${i}`}
                  className="relative inline-block mx-0.5"
                  animate={{
                    color: isRevealed ? "#fff" : "rgba(255,255,255,0.1)",
                  }}
                  transition={{ duration: 0.45 }}
                >
                  {token.text}
                  <svg
                    className="absolute -inset-x-2 -inset-y-0.5 w-[calc(100%+16px)] h-[calc(100%+4px)] pointer-events-none"
                    viewBox="0 0 200 80"
                    preserveAspectRatio="none"
                  >
                    <motion.ellipse
                      cx="100"
                      cy="40"
                      rx="92"
                      ry="34"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: isRevealed ? 1 : 0,
                        opacity: isRevealed ? 0.7 : 0,
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </svg>
                </motion.span>
              );
            }

            // Regular word
            return (
              <motion.span
                key={`w-${i}`}
                className="inline-block relative"
                animate={{
                  color: isRevealed
                    ? token.highlight
                      ? "var(--color-primary)"
                      : "#fff"
                    : "rgba(255,255,255,0.1)",
                  y: isRevealed ? 0 : 6,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ fontStyle: token.italic ? "italic" : "normal" }}
              >
                {token.text}
                {token.highlight && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] rounded-full bg-primary"
                    animate={{ width: isRevealed ? "100%" : "0%" }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                  />
                )}
              </motion.span>
            );
          })}
        </div>

        {/* Supporting paragraph + tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col md:flex-row items-start gap-10 md:gap-16 border-t border-white/10 pt-10"
        >
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="px-3.5 py-1.5 rounded-full border border-white/10 text-white/40 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default text-overline"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="mt-24 space-y-0">
          {data.sections.map((section, idx) => {
            const isRight = section.align === "right";
            const num = String(idx + 1).padStart(2, "0");
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="border-t border-white/8 py-16 md:py-20"
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                    isRight ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  {/* Number + Title column */}
                  <div className="md:w-1/3 shrink-0">
                    <span className="text-primary font-heading text-overline font-medium tracking-widest">
                      {num}
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "2.5rem" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className={`h-[2px] bg-primary mt-3 mb-5 ${
                        isRight ? "ml-auto" : ""
                      }`}
                    />
                    <h3
                      className="font-heading text-white uppercase tracking-wider"
                      style={{
                        fontSize: "clamp(18px, 2.2vw, 26px)",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {section.title}
                    </h3>
                  </div>

                  {/* Text column */}
                  <div className="md:w-2/3">
                    <p className="text-white/45 text-base-body leading-[1.9] font-light">
                      {section.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
