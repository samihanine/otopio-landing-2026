import { motion } from "framer-motion";
import { Section } from "./Section";

export function CTASection() {
  return (
    <Section className=" py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto overflow-hidden rounded-3xl p-10 md:p-16 lg:p-20"
      >
        {/* Card Background */}
        <div className="bg-dark-light absolute inset-0 border border-white/5" />

        {/* Glow effect */}
        <div className="bg-primary/20 pointer-events-none absolute top-0 left-1/2 h-3/4 w-3/4 -translate-x-1/2 rounded-full opacity-50 blur-[100px]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex-1 text-left">
            <h2 className="font-heading mb-6 text-3xl leading-tight font-semibold tracking-wide text-white uppercase md:text-5xl lg:text-6xl">
              Prêt à démarrer <br />
              <span className="text-primary font-light italic">
                votre projet ?
              </span>
            </h2>

            <p className="font-body mb-0 max-w-2xl text-base leading-relaxed text-white/60 md:text-xl">
              Transformons votre idée en réalité. Contactez-nous dès aujourd'hui
              pour discuter de vos objectifs et découvrir comment nous pouvons
              vous aider.
            </p>
          </div>

          <div className="flex flex-shrink-0 justify-start lg:justify-end">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg tracking-widest uppercase transition-all md:px-10"
            >
              <span>Démarrer un projet</span>
              <svg
                className="h-5 w-5"
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
