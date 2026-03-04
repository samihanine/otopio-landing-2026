import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../types/testimonials";
import { GradientTitle } from "../ui/GradientTitle";

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
    <section
      className="py-16 md:py-24 px-4 md:px-8 w-full"
    >
      {/* Title + Content wrapper */}
      <div className="relative">
        {/* Title Section */}
        <div className="md:-mb-5 lg:-mb-8 mb-12">
          <GradientTitle>Témoignages</GradientTitle>
        </div>

        {/* Content Grid */}
        <div className="md:max-w-3/4 mx-auto grid md:grid-cols-[1fr_2fr] gap-6 relative z-10">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden relative min-h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1639070882750-99dd6ba7dff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              alt="Stats background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-8 flex flex-col justify-center h-full gap-8">
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
                    className="text-white font-heading"
                    style={{
                      fontSize: "42px",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white/60 mt-1"
                    style={{ fontSize: "13px" }}
                  >
                    {stat.label}
                  </p>
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
            className="rounded-2xl overflow-hidden relative h-[450px] md:h-[500px]"
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
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 p-8 flex flex-col justify-between h-full">
              {/* Counter */}
              <div className="text-primary" style={{ fontSize: "13px" }}>
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </div>

              {/* Quote Area - Fixed height to prevent flickering */}
              <div className="mt-auto relative h-[200px] md:h-[240px]">
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
                    <p
                      className="text-primary mb-2 uppercase tracking-widest"
                      style={{ fontSize: "12px", fontWeight: 600 }}
                    >
                      {testimonials[current].quoteTitle}
                    </p>
                    <p
                      className="text-white mb-6 font-heading"
                      style={{
                        fontSize: "clamp(18px, 2.5vw, 26px)",
                        fontWeight: 400,
                        lineHeight: 1.4,
                      }}
                    >
                      "{testimonials[current].quoteDescription}"
                    </p>
                    <div>
                      <p
                        className="text-white"
                        style={{ fontSize: "15px", fontWeight: 500 }}
                      >
                        {testimonials[current].name}
                      </p>
                      <p className="text-white/60" style={{ fontSize: "13px" }}>
                        {testimonials[current].handle}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex gap-2 mt-6 justify-end relative z-20">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
