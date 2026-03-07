import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { SectionLabel } from "../ui/SectionLabel";
import { questions } from "../../types/questions";
import { cn } from "../../utils/cn";

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section
      className="bg-border-mid relative overflow-hidden border-t border-white/5 py-12 md:py-16"
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
        <h2 className="text-dark font-heading text-2xl leading-tight font-semibold tracking-wide uppercase md:text-3xl">
          Foire Aux{" "}
          <span className="text-primary font-light italic">Questions</span>
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
              className="border-dark/15 border-b"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="group flex w-full items-center justify-between py-4 text-left focus:outline-none"
              >
                <span
                  className={cn(
                    "font-heading pr-6 text-base transition-colors duration-300 md:text-lg",
                    isActive
                      ? "text-primary/90"
                      : "text-dark/90 group-hover:text-primary/70",
                  )}
                >
                  {q.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isActive
                      ? "border-primary bg-primary text-dark"
                      : "border-dark/10 text-dark group-hover:border-primary/50 group-hover:text-primary",
                  )}
                >
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <svg
                      className="h-4 w-4"
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
                    <p className="text-dark/50 max-w-2xl pt-0.5 pr-10 pb-4 text-sm leading-relaxed">
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
