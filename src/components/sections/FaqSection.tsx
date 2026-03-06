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
      className="relative py-12 md:py-16 overflow-hidden bg-border-mid border-t border-white/5"
      containerClassName="max-w-3xl"
    >
      <SectionLabel text="FAQ" variant="dark" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 space-y-3"
      >
        <h2 className="text-dark font-heading uppercase text-2xl md:text-3xl font-semibold tracking-wide leading-tight">
          Foire Aux{" "}
          <span className="text-primary italic font-light">Questions</span>
        </h2>
      </motion.div>

      <div className="space-y-0">
        {questions.map((q, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-dark/15"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
              >
                <span
                  className={`font-heading text-base md:text-lg transition-colors duration-300 pr-6 ${isActive ? "text-primary/90" : "text-dark/90 group-hover:text-primary/70"}`}
                >
                  {q.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isActive ? "border-primary bg-primary text-dark" : "border-dark/10 text-dark group-hover:border-primary/50 group-hover:text-primary"}`}
                >
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <svg
                      className="w-4 h-4"
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
                    <p className="pb-4 pt-0.5 text-dark/50 text-sm leading-relaxed max-w-2xl pr-10">
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
