import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GradientTitle } from "../ui/GradientTitle";
import { Section } from "../layout/Section";
import { TagInput } from "./TagInput";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [contactTags, setContactTags] = useState<string[]>([]);

  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use a softer spring for a "slow" trailing effect
  const springConfig = { damping: 30, stiffness: 50 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Correctly transform smooth motion values into a background string
  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, rgba(255, 85, 0, 0.15), transparent 80%)`,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <Section className="py-16 md:py-24" containerClassName="relative">
      {/* Title Section */}
      <div className="md:-mb-5 lg:-mb-8 mb-12">
        <GradientTitle>Contact</GradientTitle>
      </div>

      {/* Contact Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-2xl overflow-hidden relative min-h-[500px] z-10 shadow-2xl group/card"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-dark">
          {/* Grid pattern */}
          <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-10">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-dark-light" />
            ))}
          </div>

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-primary/5" />

          {/* Mouse-following radial gradient */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 ease-out group-hover/card:duration-300"
            style={{ background }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-16">
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white mb-6 font-heading"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 500,
                lineHeight: 1.1,
              }}
            >
              Parlons de votre{" "}
              <span className="text-primary italic">projet.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/50 leading-relaxed w-full max-w-xs sm:max-w-sm font-body text-md-body"
            >
              Prêt à donner vie à vos idées ? Envoyez-nous un message et
              commençons l'aventure ensemble.
            </motion.p>
          </div>

          {/* Right side — Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <TagInput value={contactTags} onChange={setContactTags} />
            <div className="group">
              <label className="label-dark">Nom Complet</label>
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-dark text-base-body"
              />
            </div>

            <div className="group">
              <label className="label-dark">Email</label>
              <input
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-dark text-base-body"
              />
            </div>

            <div className="group">
              <label className="label-dark">Description du projet</label>
              <textarea
                placeholder="Dites-nous tout..."
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="input-dark text-base-body resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-5 rounded-full bg-white text-dark mt-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-500 ease-out shadow-xl shadow-black/20 font-bold uppercase tracking-wider text-caption"
            >
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </Section>
  );
}
