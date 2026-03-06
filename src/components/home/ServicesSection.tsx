import { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Section } from "../layout/Section";
import { StickyNote } from "../ui/StickyNote";
import { servicesDetails } from "../../types/services";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = servicesDetails[activeIndex];

  const resolveIcon = (name: string) =>
    (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[name] ??
    LucideIcons.Circle;

  return (
    <Section>
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 lg:mb-16"
      >
        <p
          className="text-primary mb-4 font-heading"
          style={{ fontSize: "28px", fontStyle: "italic" }}
        >
          Nos Expertises
        </p>
        <h2
          className="text-dark font-heading max-w-3xl mx-auto"
          style={{
            fontSize: "clamp(26px, 3.5vw, 44px)",
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          Des compétences pointues, un seul objectif :{" "}
          <span className="text-subtle">votre produit.</span>
        </h2>
      </motion.div>

      {/* ── Mobile: tabs + content below ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="lg:hidden"
      >
        {/* Tab bar */}
        <div className="flex gap-1.5 mb-6 relative">
          {servicesDetails.map((service, i) => {
            const isActive = i === activeIndex;
            const Icon = resolveIcon(service.iconName);
            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveIndex(i)}
                animate={{ flex: isActive ? 2.2 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`relative flex items-center justify-center gap-2 pt-3 pb-5 px-2 rounded-xl cursor-pointer transition-colors duration-300 overflow-hidden ${
                  isActive
                    ? "bg-dark text-white shadow-md"
                    : "bg-border-lighter text-muted"
                }`}
              >
                <span className="shrink-0"><Icon size={18} /></span>
                {isActive && (
                  <motion.span
                    key={service.id}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="text-[12px] font-heading font-semibold whitespace-nowrap"
                  >
                    {service.title.split(" ")[0]}
                  </motion.span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-dot"
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Content — sticky note */}
        <div className="mt-2" style={{ perspective: "600px" }}>
          <StickyNote service={active} compact />
        </div>
      </motion.div>

      {/* ── Desktop: list + preview side by side ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] gap-12 items-stretch"
      >
        {/* Left — service list */}
        <div className="flex flex-col gap-1">
          {servicesDetails.map((service, i) => {
            const isActive = i === activeIndex;
            const Icon = resolveIcon(service.iconName);

            return (
              <button
                key={service.id}
                onClick={() => setActiveIndex(i)}
                className={`group relative flex items-center gap-4 text-left px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-dark text-white shadow-lg"
                    : "bg-transparent text-body hover:bg-border-lighter"
                }`}
              >
                <div
                  className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isActive ? "bg-primary" : "bg-border-light group-hover:bg-border"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-medium text-[15px] leading-snug">
                    {service.title}
                  </p>
                  <p
                    className={`text-[13px] leading-snug mt-0.5 transition-colors duration-300 ${
                      isActive ? "text-white/60" : "text-subtle"
                    }`}
                  >
                    {service.tagline}
                  </p>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute right-4 w-2 h-2 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right — sticky note preview */}
        <div className="flex items-stretch" style={{ perspective: "900px" }}>
          <StickyNote service={active} />
        </div>
      </motion.div>
    </Section>
  );
}
