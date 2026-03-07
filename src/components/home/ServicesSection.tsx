import { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Section } from "../layout/Section";
import { StickyNote } from "../ui/StickyNote";
import { servicesDetails } from "../../types/services";
import { SideSelector } from "../ui/SideSelector";

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = servicesDetails[activeIndex];

  const resolveIcon = (name: string) => {
    const Icon =
      (
        LucideIcons as unknown as Record<
          string,
          React.ComponentType<{ size?: number }>
        >
      )[name] ?? LucideIcons.Circle;
    return <Icon size={18} />;
  };

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

      {/* ── Tabs + Content ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-stretch">
        {/* Selector (Mobile: expanding row, Desktop: vertical list) */}
        <SideSelector
          items={servicesDetails.map((s) => ({
            id: s.id,
            title: s.title,
            subtitle: s.tagline,
            icon: resolveIcon(s.iconName),
          }))}
          selectedId={active.id}
          onSelect={(id) => {
            const index = servicesDetails.findIndex((s) => s.id === id);
            if (index !== -1) setActiveIndex(index);
          }}
          layoutIdPrefix="services"
          variant="compact"
          direction="responsive"
        />

        {/* Content — sticky note */}
        <div className="flex items-stretch" style={{ perspective: "900px" }}>
          <StickyNote
            service={active}
            compact={typeof window !== "undefined" && window.innerWidth < 1024}
          />
        </div>
      </div>
    </Section>
  );
}
