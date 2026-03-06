import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Brain } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";

const pillars = [
  {
    icon: Sparkles,
    title: "Design & Excellence",
    description:
      "Un design réfléchi, pensé pour durer et marquer les esprits.",
  },
  {
    icon: Brain,
    title: "IA & Innovation",
    description:
      "L'intelligence artificielle intégrée au cœur de chaque produit.",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description:
      "Un partenaire technique engagé, de l'idée au lancement.",
  },
];

export function AboutTeaser() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-heading italic text-lg mb-3">
            Qui sommes-nous ?
          </p>
          <h2
            className="text-dark font-heading mb-6"
            style={{
              fontSize: "clamp(26px, 3.5vw, 42px)",
              fontWeight: 600,
              lineHeight: 1.25,
            }}
          >
            Un studio tech basé à Montréal, obsédé par{" "}
            <span className="text-primary">l'impact.</span>
          </h2>
          <p className="text-body leading-relaxed text-[15px] md:text-base mb-8 max-w-xl">
            Nous accompagnons les startups et les marques ambitieuses à
            concevoir des produits digitaux qui se démarquent — grâce à un
            design réfléchi, une ingénierie solide et l'intégration de
            l'intelligence artificielle.
          </p>

          <Link
            to="/a-propos"
            className="group inline-flex items-center gap-2.5 btn-dark px-6 py-3 text-[15px] font-heading font-semibold no-underline"
          >
            En savoir plus
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Right — pillars */}
        <div className="flex flex-col gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300 bg-white"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <pillar.icon size={20} />
              </div>
              <div>
                <h3 className="font-heading text-dark font-semibold text-[15px] mb-1">
                  {pillar.title}
                </h3>
                <p className="text-muted text-[14px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
