import { useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { servicesDetails } from "../../types/services";
import { Section } from "../sections/Section";
import { ServiceSectionRenderer } from "./sections/ServiceSectionRenderer";
import { RelatedProjectsSection } from "./sections/RelatedProjectsSection";

export function ServiceDetailPage({ serviceId }: { serviceId: string }) {
  const navigate = useNavigate();

  const serviceIndex = servicesDetails.findIndex((s) => s.id === serviceId);
  const service = serviceIndex !== -1 ? servicesDetails[serviceIndex] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <Section
        as="div"
        className="min-h-screen flex flex-col items-center justify-center font-body"
      >
        <h1 className="font-heading" style={{ fontSize: "48px", fontWeight: 600 }}>
          Service introuvable
        </h1>
        <Link
          to="/expertises"
          className="mt-6 text-primary hover:underline no-underline text-base-body"
        >
          &larr; Retour aux Expertises
        </Link>
      </Section>
    );
  }

  const nextService =
    servicesDetails[(serviceIndex + 1) % servicesDetails.length];
  const prevService =
    servicesDetails[
      (serviceIndex - 1 + servicesDetails.length) % servicesDetails.length
    ];

  const Icon = service.iconName
    ? (LucideIcons as any)[service.iconName]
    : null;

  return (
    <Section
      as="div"
      className="w-full"
      containerClassName="min-h-screen font-body"
    >
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center w-full justify-end px-8 md:px-16 py-6"
      >
        <button
          onClick={() => navigate({ to: "/expertises" })}
          className="btn-dark px-6 py-2.5 flex items-center gap-2 text-sm-body"
        >
          <LucideIcons.ArrowLeft size={16} />
          Toutes les Expertises
        </button>
      </motion.header>

      {/* ─── Hero: Icon + Title + Tagline ─── */}
      <div className="px-8 md:px-16 pt-8 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {Icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-border-mid shadow-sm"
              style={{ backgroundColor: `${service.hexColor}10` }}
            >
              <Icon size={26} style={{ color: service.hexColor }} />
            </motion.div>
          )}

          <h1
            className="text-dark font-heading mb-5"
            style={{
              fontSize: "clamp(40px, 5vw, 80px)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {service.title}
          </h1>

          <p
            className="font-heading text-primary mb-6"
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            {service.tagline}
          </p>

          <p className="text-body leading-relaxed font-light text-prose max-w-3xl text-lg">
            {service.summary}
          </p>
        </motion.div>

        {/* Keywords */}
        {service.keywords.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2 mt-10"
          >
            {service.keywords.map((kw) => (
              <span
                key={kw}
                className="px-4 py-1.5 rounded-full border border-border-dark text-muted text-caption"
              >
                {kw}
              </span>
            ))}
          </motion.div>
        )}
      </div>
      

      {/* ─── Modular Content Sections ─── */}
      <div className="px-8 md:px-16 pb-16 space-y-24">
        {service.sections.map((section, index) => (
          <ServiceSectionRenderer key={index} section={section} />
        ))}
      </div>

      {/* ─── Related Projects ─── */}
      {service.projectIds && service.projectIds.length > 0 && (
        <RelatedProjectsSection projectIds={service.projectIds} />
      )}

      {/* ─── Service Navigation ─── */}
      <div className="px-8 md:px-16 py-16 border-t border-border">
        <div className="flex items-center justify-between">
          {prevService && (
            <Link
              to="/expertises/$serviceId"
              params={{ serviceId: prevService.id }}
              className="group flex items-center gap-4 no-underline"
            >
              <div className="w-12 h-12 icon-circle">
                <LucideIcons.ArrowLeft size={20} />
              </div>
              <div className="hidden md:block">
                <p className="text-subtle uppercase tracking-wider text-label">
                  Précédent
                </p>
                <p className="text-dark font-heading text-xl font-medium">
                  {prevService.title}
                </p>
              </div>
            </Link>
          )}

          <Link
            to="/expertises"
            className="text-subtle hover:text-primary transition-colors no-underline uppercase tracking-wider font-semibold text-overline"
          >
            Toutes les Expertises
          </Link>

          {nextService && (
            <Link
              to="/expertises/$serviceId"
              params={{ serviceId: nextService.id }}
              className="group flex items-center gap-4 no-underline"
            >
              <div className="hidden md:block text-right">
                <p className="text-subtle uppercase tracking-wider text-label">
                  Suivant
                </p>
                <p className="text-dark font-heading text-xl font-medium">
                  {nextService.title}
                </p>
              </div>
              <div className="w-12 h-12 icon-circle">
                <LucideIcons.ArrowRight size={20} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
