import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "../layout/Section";
import { services } from "../../types/services";

export function ServicesSection() {
  return (
    <Section containerClassName="text-center">
      {/* Hello label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-primary mb-6 font-heading"
        style={{
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
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 500,
          lineHeight: 1.3,
          color: "var(--color-dark)",
        }}
      >
        Nous aidons les entreprises à concevoir des SaaS robustes et de l'IA sur
        mesure — avec clarté,{" "}
        <span className="text-subtle">vitesse, et fiabilité.</span>
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
          const Icon =
            (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[
              service.iconName
            ] ?? LucideIcons.Circle;
          return (
            <Link
              key={service.label}
              to="/expertises/$serviceId"
              params={{ serviceId: service.id }}
              className="no-underline"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--color-primary)",
                  rotate: index % 2 === 0 ? 0.8 : -0.8,
                }}
                style={{
                  backgroundColor: "var(--color-mid)",
                  color: "#fff",
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer shadow-sm text-base-body"
              >
                <Icon size={16} />
                {service.label}
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </Section>
  );
}
