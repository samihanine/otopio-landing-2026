import { useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { servicesDetails } from "../../types/services";
import { Section } from "../layout/Section";
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
        className="font-body flex min-h-screen flex-col items-center justify-center"
      >
        <h1
          className="font-heading"
          style={{ fontSize: "48px", fontWeight: 600 }}
        >
          Service introuvable
        </h1>
        <Link
          to="/expertises"
          className="text-primary text-base-body mt-6 no-underline hover:underline"
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

  const Icon = service.iconName ? (LucideIcons as any)[service.iconName] : null;

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
        className="flex w-full items-center justify-end px-8 py-6 md:px-16"
      >
        <button
          onClick={() => navigate({ to: "/expertises" })}
          className="btn-dark text-sm-body flex items-center gap-2 px-6 py-2.5"
        >
          <LucideIcons.ArrowLeft size={16} />
          Toutes les Expertises
        </button>
      </motion.header>

      {/* ─── Hero: Icon + Title + Tagline ─── */}
      <div className="px-8 pt-8 pb-14 md:px-16">
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
              className="border-border-mid mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm"
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

          <p className="text-body text-prose max-w-3xl text-lg leading-relaxed font-light">
            {service.summary}
          </p>
        </motion.div>

        {/* Keywords */}
        {service.keywords.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {service.keywords.map((kw) => (
              <span
                key={kw}
                className="border-border-dark text-muted text-caption rounded-full border px-4 py-1.5"
              >
                {kw}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* ─── Modular Content Sections ─── */}
      <div className="space-y-24 px-8 pb-16 md:px-16">
        {service.sections.map((section, index) => (
          <ServiceSectionRenderer key={index} section={section} />
        ))}
      </div>

      {/* ─── Related Projects ─── */}
      {service.projectIds && service.projectIds.length > 0 && (
        <RelatedProjectsSection projectIds={service.projectIds} />
      )}

      {/* ─── Service Navigation ─── */}
      <div className="border-border border-t px-8 py-16 md:px-16">
        <div className="flex items-center justify-between">
          {prevService && (
            <Link
              to="/expertises/$serviceId"
              params={{ serviceId: prevService.id }}
              className="group flex items-center gap-4 no-underline"
            >
              <div className="icon-circle h-12 w-12">
                <LucideIcons.ArrowLeft size={20} />
              </div>
              <div className="hidden md:block">
                <p className="text-subtle text-label tracking-wider uppercase">
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
            className="text-subtle hover:text-primary text-overline font-semibold tracking-wider uppercase no-underline transition-colors"
          >
            Toutes les Expertises
          </Link>

          {nextService && (
            <Link
              to="/expertises/$serviceId"
              params={{ serviceId: nextService.id }}
              className="group flex items-center gap-4 no-underline"
            >
              <div className="hidden text-right md:block">
                <p className="text-subtle text-label tracking-wider uppercase">
                  Suivant
                </p>
                <p className="text-dark font-heading text-xl font-medium">
                  {nextService.title}
                </p>
              </div>
              <div className="icon-circle h-12 w-12">
                <LucideIcons.ArrowRight size={20} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
}
