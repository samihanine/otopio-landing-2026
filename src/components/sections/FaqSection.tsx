import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { SectionLabel } from "../ui/SectionLabel";
import { questions } from "../../types/questions";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section
      className="relative py-16 md:py-24 overflow-hidden bg-border-mid border-t border-white/5"
      containerClassName="max-w-3xl"
    >
      {/* Decorative background blur */}
      <div className="absolute -top-[10%] -right-[10%] w-3/4 md:w-1/2 h-[75%] pointer-events-none opacity-60 blur-3xl rounded-full" />

      <SectionLabel text="FAQ" variant="dark" className="mb-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20 space-y-6"
      >
        <h2 className="text-dark font-heading uppercase text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight">
          Foire Aux <br />
          <span className="text-primary italic font-light">Questions</span>
        </h2>
        <p className="text-dark/40 text-sm md:text-base max-w-2xl font-body leading-relaxed">
          Tout ce que vous devez savoir sur nos services, notre processus et
          comment nous pouvons collaborer pour concrétiser votre vision.
        </p>
      </motion.div>

      <div className="space-y-4">
        {questions.map((q, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-dark/20"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-5 md:py-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span
                  className={`font-heading text-lg md:text-xl transition-colors duration-300 pr-8 ${isActive ? "text-primary/90" : "text-dark/90 group-hover:text-primary/70"}`}
                >
                  {q.question}
                </span>
                <span
                  className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${isActive ? "border-primary bg-primary text-dark" : "border-dark/10 text-dark group-hover:border-primary/50 group-hover:text-primary backdrop-blur-sm"}`}
                >
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pt-1 text-dark/50 text-sm md:text-base leading-relaxed md:leading-[1.8] max-w-2xl pr-10 md:pr-16">
                      {q.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
