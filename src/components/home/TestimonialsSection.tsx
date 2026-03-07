import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../types/testimonials";
import { GradientTitle } from "../ui/GradientTitle";
import { Section } from "../layout/Section";

export function TestimonialsSection() {
  const [[current, direction], setPage] = useState([0, 0]);

  const setStep = (newStep: number, newDir: number) => {
    setPage([newStep, newDir]);
  };

  const next = () => setStep((current + 1) % testimonials.length, 1);
  const prev = () =>
    setStep((current - 1 + testimonials.length) % testimonials.length, -1);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "20%" : direction < 0 ? "-20%" : 0,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "20%" : direction > 0 ? "-20%" : 0,
      opacity: 0,
    }),
  };

  return (
    <Section className="w-full py-16 md:py-24" containerClassName="relative">
      {/* Title Section */}
      <div className="mb-12 md:-mb-5 lg:-mb-8">
        <GradientTitle>Témoignages</GradientTitle>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_2fr]">
        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] overflow-hidden rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1639070882750-99dd6ba7dff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
            alt="Stats background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-8 p-8">
            {[
              { value: "32+", label: "Projets Finalisés" },
              { value: "98%", label: "Satisfaction Client" },
              { value: "5/5", label: "Note Moyenne" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                viewport={{ once: true }}
              >
                <p
                  className="font-heading text-white"
                  style={{
                    fontSize: "42px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-caption mt-1 text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-[450px] overflow-hidden rounded-2xl md:h-[500px]"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              <img
                src={testimonials[current].image}
                alt="Testimonial"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 flex h-full flex-col justify-between p-8">
            {/* Counter */}
            <div className="text-primary text-caption">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </div>

            {/* Quote Area - Fixed height to prevent flickering */}
            <div className="relative mt-auto h-[200px] md:h-[240px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                  }}
                  className="absolute inset-x-0 bottom-0"
                >
                  <p className="text-primary text-overline mb-2 font-semibold tracking-widest uppercase">
                    {testimonials[current].quoteTitle}
                  </p>
                  <p
                    className="font-heading mb-6 text-white"
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 26px)",
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    "{testimonials[current].quoteDescription}"
                  </p>
                  <div>
                    <p className="text-base-body font-medium text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-caption text-white/60">
                      {testimonials[current].handle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="relative z-20 mt-6 flex justify-end gap-2">
              <button
                onClick={prev}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
