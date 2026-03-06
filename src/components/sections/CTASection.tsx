import { motion } from "framer-motion";
import { Section } from "./Section";

export function CTASection() {
  return (
    <Section className="relative py-20 md:py-32 bg-gradient-to-b from-border-mid to-darkest">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto rounded-3xl overflow-hidden p-10 md:p-16 lg:p-20 shadow-2xl"
      >
        {/* Card Background */}
        <div className="absolute inset-0 bg-dark-light border border-white/5" />

        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-white font-heading uppercase text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide leading-tight mb-6">
              Prêt à démarrer <br />
              <span className="text-primary italic font-light">
                votre projet ?
              </span>
            </h2>

            <p className="text-white/60 text-base md:text-xl font-body max-w-2xl mb-0 leading-relaxed">
              Transformons votre idée en réalité. Contactez-nous dès aujourd'hui
              pour discuter de vos objectifs et découvrir comment nous pouvons
              vous aider.
            </p>
          </div>

          <div className="flex-shrink-0 flex justify-start lg:justify-end">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 md:px-10 text-lg uppercase tracking-widest inline-flex items-center gap-3 transition-all"
            >
              <span>Démarrer un projet</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
