import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";
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

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-border bg-white p-6 flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0"
                style={{ backgroundColor: active.hexColor }}
              >
                {(() => { const I = resolveIcon(active.iconName); return <I size={20} />; })()}
              </div>
              <div>
                <h3 className="font-heading text-dark text-lg font-semibold leading-snug">
                  {active.title}
                </h3>
                <p className="text-primary text-[13px] font-medium italic">
                  {active.tagline}
                </p>
              </div>
            </div>
            <p className="text-body leading-relaxed text-[14px]">
              {active.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {active.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide border border-border text-muted"
                >
                  {kw}
                </span>
              ))}
            </div>
            <Link
              to="/expertises/$serviceId"
              params={{ serviceId: active.id }}
              className="group inline-flex items-center gap-2 no-underline text-dark font-heading font-semibold text-[14px] hover:text-primary transition-colors duration-300"
            >
              Découvrir cette expertise
              <LucideIcons.ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </AnimatePresence>
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

        {/* Right — active service preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-white p-8 md:p-10 flex flex-col gap-6 h-full"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: active.hexColor }}
              >
                {(() => { const I = resolveIcon(active.iconName); return <I size={22} />; })()}
              </div>
              <div>
                <h3 className="font-heading text-dark text-xl font-semibold leading-snug">
                  {active.title}
                </h3>
                <p className="text-primary text-sm font-medium italic mt-0.5">
                  {active.tagline}
                </p>
              </div>
            </div>
            <p className="text-body leading-relaxed text-[15px]">
              {active.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {active.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 rounded-full text-[12px] font-medium tracking-wide border border-border text-muted"
                >
                  {kw}
                </span>
              ))}
            </div>
            <Link
              to="/expertises/$serviceId"
              params={{ serviceId: active.id }}
              className="group inline-flex items-center gap-2 no-underline text-dark font-heading font-semibold text-[15px] mt-auto hover:text-primary transition-colors duration-300"
            >
              Découvrir cette expertise
              <LucideIcons.ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
