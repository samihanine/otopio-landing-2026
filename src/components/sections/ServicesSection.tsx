import { motion } from "framer-motion";
import { PenTool, Target, Server, Brain, Zap } from "lucide-react";

const services = [
  { icon: PenTool, label: "Conception & Ingénierie" },
  { icon: Target, label: "Conseil & Stratégie Produit" },
  { icon: Server, label: "Ingénierie Logicielle & SaaS" },
  { icon: Brain, label: "Intelligence Artificielle & Data Science" },
  { icon: Zap, label: "Growth Tech & Automatisation" },
];

export function ServicesSection() {
  return (
    <section
      className="py-20 md:py-32 px-4"
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Hello label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#ff5500] mb-6"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "30px",
            fontStyle: "italic",
          }}
        >
          Nos Services
        </motion.p>

        {/* Main Text */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 500,
            lineHeight: 1.3,
            color: "#1a1a1a",
          }}
        >
          Nous aidons les entreprises à concevoir des SaaS robustes et de l'IA
          sur mesure — avec clarté,{" "}
          <span className="text-[#999]">vitesse, et fiabilité.</span>
        </motion.h2>

        {/* Service Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ff5500",
                  rotate: index % 2 === 0 ? 0.8 : -0.8,
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer shadow-sm"
                style={{
                  backgroundColor: "#777",
                  color: "#fff",
                  fontSize: "15px",
                }}
              >
                <Icon size={16} />
                {service.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
