import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Section } from "../sections/Section";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function Counter({
  from,
  to,
  duration = 2,
  suffix = "",
  decimals = 0,
}: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(
    count,
    (latest) => latest.toFixed(decimals) + suffix,
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function StatsSection() {
  const stats = [
    { value: 32, label: "Projets Finalisés", suffix: "+", decimals: 0 },
    { value: 98, label: "Satisfaction Client", suffix: "%", decimals: 0 },
    { value: 5, label: "Note Moyenne", suffix: "/5", decimals: 0 },
  ];

  return (
    <Section className="py-12 md:py-20 border-y border-border-light">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <p
              className="text-dark font-heading mb-2"
              style={{
                fontSize: "clamp(48px, 6vw, 72px)",
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              <Counter
                from={0}
                to={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            </p>
            <p className="text-muted uppercase tracking-widest text-overline font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
