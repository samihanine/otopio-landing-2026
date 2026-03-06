import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import * as LucideIcons from "lucide-react";
import { servicesDetails } from "../../types/services";
import { Section } from "../sections/Section";
import { PageHero } from "../ui/PageHero";

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Expertises"
        label="Nos domaines d'expertise"
        description="Du conseil stratégique à l'ingénierie logicielle, en passant par l'IA et l'automatisation — découvrez comment nous aidons les entreprises à construire des produits qui comptent."
      />
      <Section className="sm:py-12 md:py-12 lg:py-12" containerClassName="">
        <div className="pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesDetails.map((service, i) => {
            const Icon = service.iconName
              ? (LucideIcons as any)[service.iconName]
              : null;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to="/expertises/$serviceId"
                  params={{ serviceId: service.id }}
                  className="group block no-underline h-full"
                >
                  <div className="h-full rounded-2xl border border-border-mid bg-white p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:border-primary/25 hover:-translate-y-1">
                    {/* Icon */}
                    {Icon && (
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300"
                        style={{
                          backgroundColor: `${service.hexColor}10`,
                        }}
                      >
                        <Icon
                          size={24}
                          style={{ color: service.hexColor }}
                        />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-dark font-heading text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="font-heading text-primary/70 text-sm italic"
                    >
                      {service.tagline}
                    </p>

                    {/* Summary */}
                    <p className="text-body text-sm leading-relaxed font-light flex-1">
                      {service.summary}
                    </p>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {service.keywords.slice(0, 4).map((kw) => (
                        <span
                          key={kw}
                          className="px-2.5 py-1 rounded-full text-xs border border-border-mid text-muted"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Découvrir
                      <LucideIcons.ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
