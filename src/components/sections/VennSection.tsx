import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { defaultVennData, type VennData } from "../../types/venn";
import { Section } from "./Section";
import { SectionLabel } from "../ui/SectionLabel";

interface VennSectionProps {
  data?: VennData;
}

function vennLerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function VennSection({ data = defaultVennData }: VennSectionProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(diagramRef, {
    once: true,
    margin: "-50% 0px -50% 0px",
  });

  const [morphProgress, setMorphProgress] = useState(0);

  // Animate morph when section comes into view
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 1, {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1],
        onUpdate: (v) => setMorphProgress(v),
      });
      return () => controls.stop();
    }
  }, [isInView]);

  const isMorphed = morphProgress > 0.92;
  const showLabels = morphProgress > 0.5;

  return (
    <Section ref={sectionRef} className="bg-border-mid">
      <SectionLabel text={data.label} className="mb-4" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-dark mb-12 max-w-2xl font-heading"
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 500,
          lineHeight: 1.25,
        }}
      >
        {data.title} <span className="text-subtle">{data.titleAccent}</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* SVG — morphs from logo to Venn */}
        <div
          ref={diagramRef}
          className="shrink-0 relative flex items-center justify-center"
        >
          <svg
            width="500"
            height="420"
            viewBox="0 0 500 420"
            className="w-[380px] h-[320px] md:w-[560px] md:h-[470px]"
          >
            {/* ─── Defs: filters ─── */}
            <defs>
              <filter
                id="venn-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter
                id="center-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* ─── Dashed orbit rings ─── */}
            {data.ellipses.map((e) => {
              const cx = vennLerp(e.ix, e.fx, morphProgress);
              const cy = vennLerp(e.iy, e.fy, morphProgress);
              const r = vennLerp(e.irx, e.frx, morphProgress) + 14;
              return (
                <circle
                  key={`orbit-${e.id}`}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke="var(--color-dark)"
                  strokeWidth="0.5"
                  strokeDasharray="4 6"
                  style={{
                    opacity:
                      morphProgress > 0.7
                        ? ((morphProgress - 0.7) / 0.3) * 0.25
                        : 0,
                    transition: "opacity 0.5s ease",
                  }}
                />
              );
            })}

            {/* ─── Ellipses ─── */}
            {data.ellipses.map((e) => {
              const isHovered = hoveredId === e.id;
              const cx = vennLerp(e.ix, e.fx, morphProgress);
              const cy = vennLerp(e.iy, e.fy, morphProgress);
              const rx = vennLerp(e.irx, e.frx, morphProgress);
              const ry = vennLerp(e.iry, e.fry, morphProgress);
              const sw =
                isHovered && isMorphed
                  ? 2.5
                  : vennLerp(5.5, 1.5, morphProgress);
              const strokeColor =
                isHovered && isMorphed
                  ? "var(--color-primary)"
                  : "var(--color-dark)";
              const dimmed = isMorphed && hoveredId !== null && !isHovered;

              return (
                <g
                  key={e.id}
                  filter={
                    isHovered && isMorphed ? "url(#venn-glow)" : undefined
                  }
                >
                  {/* Invisible hit area */}
                  <ellipse
                    cx={cx}
                    cy={cy}
                    rx={rx}
                    ry={ry}
                    fill="transparent"
                    onMouseEnter={() => isMorphed && setHoveredId(e.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={isMorphed ? "cursor-pointer" : ""}
                  />
                  {/* Visible fill (hover only) */}
                  {isHovered && isMorphed && (
                    <ellipse
                      cx={cx}
                      cy={cy}
                      rx={rx}
                      ry={ry}
                      fill="var(--color-primary)"
                      style={{ opacity: 0.06, pointerEvents: "none" }}
                    />
                  )}
                  {/* Stroke */}
                  <ellipse
                    cx={cx}
                    cy={cy}
                    rx={rx}
                    ry={ry}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={sw}
                    strokeLinecap="round"
                    style={{
                      opacity: dimmed ? 0.15 : 1,
                      transition:
                        "opacity 0.35s ease, stroke 0.35s ease, stroke-width 0.3s ease",
                    }}
                    onMouseEnter={() => isMorphed && setHoveredId(e.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={isMorphed ? "cursor-pointer" : ""}
                  />
                  {/* Hover accent ring */}
                  {isHovered && isMorphed && (
                    <ellipse
                      cx={cx}
                      cy={cy}
                      rx={rx + 6}
                      ry={ry + 6}
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="1"
                      strokeDasharray="6 4"
                      style={{ opacity: 0.4 }}
                    />
                  )}
                </g>
              );
            })}

            {/* ─── Center glow ─── */}
            <circle
              cx="250"
              cy="237"
              r="16"
              fill="var(--color-primary)"
              filter="url(#center-glow)"
              style={{
                opacity: isMorphed ? 0.2 : 0,
                transition: "opacity 0.6s ease 0.2s",
              }}
            />
            <circle
              cx="250"
              cy="237"
              r="4"
              fill="var(--color-primary)"
              style={{
                opacity: isMorphed ? 1 : 0,
                transition: "opacity 0.5s ease 0.3s",
              }}
            />

            {/* ─── Labels ─── */}
            {data.ellipses.map((e) => {
              const isHovered = hoveredId === e.id;
              return (
                <text
                  key={`label-${e.id}`}
                  x={e.lx}
                  y={e.ly}
                  textAnchor="middle"
                  fill={
                    isHovered ? "var(--color-primary)" : "var(--color-dark)"
                  }
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "17px",
                    fontWeight: 600,
                    opacity: showLabels
                      ? Math.min(1, (morphProgress - 0.5) / 0.4)
                      : 0,
                    transition: "fill 0.3s, opacity 0.4s",
                    cursor: isMorphed ? "pointer" : "default",
                  }}
                  onMouseEnter={() => isMorphed && setHoveredId(e.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {e.shortLabel}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Value cards — appear after morph */}
        <div
          className="flex-1 space-y-3 w-full"
          style={{
            opacity: isMorphed ? 1 : 0,
            transform: isMorphed ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {data.ellipses.map((val, i) => {
            const isActive = hoveredId === val.id;
            return (
              <div
                key={val.id}
                onMouseEnter={() => setHoveredId(val.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="p-4 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: isActive ? "white" : "transparent",
                  border: isActive
                    ? "1px solid var(--color-border)"
                    : "1px solid transparent",
                  opacity: isMorphed ? 1 : 0,
                  transform: isMorphed ? "translateY(0)" : "translateY(16px)",
                  transition: `all 0.4s ease ${0.1 + i * 0.1}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-3 h-3 rounded-full shrink-0 mt-1.5"
                    style={{
                      backgroundColor: isActive
                        ? "var(--color-primary)"
                        : val.color,
                      transition: "background-color 0.3s",
                    }}
                  />
                  <div>
                    <h4
                      className="transition-colors duration-300 font-heading"
                      style={{
                        fontSize: "17px",
                        fontWeight: 600,
                        color: isActive
                          ? "var(--color-primary)"
                          : "var(--color-dark)",
                      }}
                    >
                      {val.label}
                    </h4>
                    <p
                      className="text-muted mt-0.5"
                      style={{
                        fontSize: "var(--text-caption)",
                        lineHeight: 1.6,
                      }}
                    >
                      {val.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Intersection summary */}
          <div
            className="p-4 rounded-xl bg-dark mt-2"
            style={{
              opacity: isMorphed ? 1 : 0,
              transform: isMorphed ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.5s ease 0.4s",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-3 h-3 rounded-full shrink-0 mt-1.5"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <div>
                <h4
                  className="text-white font-heading"
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                  }}
                >
                  {data.intersectionTitle}
                </h4>
                <p
                  className="text-white/60 mt-0.5"
                  style={{ fontSize: "var(--text-caption)", lineHeight: 1.6 }}
                >
                  {data.intersectionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
