import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Section } from "../layout/Section";
import { SectionLabel } from "../ui/SectionLabel";
import { defaultManifesto } from "../../types/manifesto";
import type { ManifestoData } from "../../types/manifesto";
import { cn } from "../../utils/cn";

import { SectionHeader } from "../ui/SectionHeader";

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
    <Section className="bg-dark relative overflow-hidden py-20 md:py-28">
      <SectionHeader
        label={data.label}
        title={data.backgroundTitle}
        variant="light"
        className="mb-16"
      />

      <div>
        {/* Manifesto tokens */}
        <div
          ref={containerRef}
          className="font-heading flex flex-wrap items-center gap-x-[0.3em] gap-y-[0.1em]"
          style={{
            fontSize: "clamp(20px, 3vw, 30px)",
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          {data.tokens.map((token, i) => {
            if (token.type === "break") {
              return <div key={`br-${i}`} className="h-0 w-full" />;
            }

            const idx = renderableIndex;
            renderableIndex++;
            const revealAt = idx / totalRenderable;
            const isRevealed = progress >= revealAt;

            if (token.type === "image") {
              return (
                <motion.div
                  key={`img-${i}`}
                  className="mx-1 inline-flex items-center overflow-hidden rounded-full"
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
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              );
            }

            if (token.type === "tag") {
              return (
                <motion.span
                  key={`tag-${i}`}
                  className="mx-1 inline-flex items-center justify-center rounded-full"
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
                  className="relative mx-0.5 inline-block"
                  animate={{
                    color: isRevealed ? "#fff" : "rgba(255,255,255,0.1)",
                  }}
                  transition={{ duration: 0.45 }}
                >
                  {token.text}
                  <svg
                    className="pointer-events-none absolute -inset-x-3 -inset-y-1 h-[calc(100%+8px)] w-[calc(100%+24px)]"
                    viewBox="0 0 200 80"
                    preserveAspectRatio="none"
                  >
                    {/* Main thick stroke — wobbly, loose shape */}
                    <motion.path
                      d="M 24 44 C 20 22, 50 4, 98 6 C 140 3, 178 12, 186 34 C 194 56, 168 76, 116 78 C 64 80, 16 72, 10 50 C 6 32, 38 8, 104 7"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: isRevealed ? 1 : 0,
                        opacity: isRevealed ? 0.5 : 0,
                      }}
                      transition={{ duration: 0.75, ease: "easeOut" }}
                    />
                    {/* Thinner overlay — slightly offset for variable width feel */}
                    <motion.path
                      d="M 28 42 C 30 16, 68 2, 112 5 C 152 8, 182 18, 184 40 C 186 62, 148 78, 104 76 C 54 74, 14 64, 18 46 C 22 26, 56 14, 96 12"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: isRevealed ? 1 : 0,
                        opacity: isRevealed ? 0.7 : 0,
                      }}
                      transition={{ duration: 0.85, ease: "easeOut" }}
                    />
                    {/* Accent dab — thicker pressure point at bottom-right */}
                    <motion.path
                      d="M 140 72 C 160 74, 180 58, 176 42"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: isRevealed ? 1 : 0,
                        opacity: isRevealed ? 0.35 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                    />
                  </svg>
                </motion.span>
              );
            }

            // Regular word
            return (
              <motion.span
                key={`w-${i}`}
                className="relative inline-block"
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
                    className="bg-primary absolute bottom-0 left-0 h-[2px] rounded-full"
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
          className="mt-12 flex flex-col items-start gap-10 border-t border-white/10 pt-10 md:flex-row md:gap-16"
        >
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="hover:border-primary/40 hover:text-primary text-overline cursor-default rounded-full border border-white/10 px-3.5 py-1.5 text-white/40 transition-all duration-300"
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
                  className={cn(
                    "flex flex-col items-start gap-8 md:flex-row md:gap-16",
                    isRight ? "md:flex-row-reverse md:text-right" : "",
                  )}
                >
                  {/* Number + Title column */}
                  <div className="shrink-0 md:w-1/3">
                    <span className="text-primary font-heading text-overline font-medium tracking-widest">
                      {num}
                    </span>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "2.5rem" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className={cn(
                        "bg-primary mt-3 mb-5 h-[2px]",
                        isRight ? "ml-auto" : "",
                      )}
                    />
                    <h3
                      className="font-heading tracking-wider text-white uppercase"
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
                    <p className="text-base-body leading-[1.9] font-light text-white/45">
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
