import { useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { projects, type ProjectSection } from "../../types/projects";
import { Section } from "../sections/Section";

/* ═══════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════ */

export function ProjectDetailPage({ projectId }: { projectId: string }) {
  const navigate = useNavigate();

  // Find project synchronously
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projectIndex !== -1 ? projects[projectIndex] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <Section
        as="div"
        className="min-h-screen flex flex-col items-center justify-center font-body"
      >
        <h1
          className="font-heading"
          style={{
            fontSize: "48px",
            fontWeight: 600,
          }}
        >
          Projet introuvable
        </h1>
        <Link
          to="/projets"
          className="mt-6 text-primary hover:underline no-underline text-base-body"
        >
          &larr; Retour aux Projets
        </Link>
      </Section>
    );
  }

  // Next/Prev navigation
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const dateObj = project.startedAt ? new Date(project.startedAt) : new Date();
  const projectYear = project.startedAt ? dateObj.getFullYear() : "2024";

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
          onClick={() => navigate({ to: "/projets" })}
          className="btn-dark px-6 py-2.5 flex items-center gap-2 text-sm-body"
        >
          <LucideIcons.ArrowLeft size={16} />
          Tous les Projets
        </button>
      </motion.header>

      {/* ─── Hero: Title + Metadata Table ─── */}
      <div className="px-8 md:px-16 pt-8 pb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Title (left) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h1
              className="text-dark whitespace-pre-line mb-6 font-heading"
              style={{
                fontSize: "clamp(56px, 5vw, 110px)",
                fontWeight: 600,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              {project.title}
            </h1>
            <p
              className="text-muted text-lg"
              style={{
                lineHeight: 1.5,
                fontWeight: 400,
              }}
            >
              {project.summary}
            </p>
          </motion.div>

          {/* General Info (right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0 w-full md:w-auto md:min-w-[360px]"
          >
            <table className="w-full text-sm-body uppercase tracking-wide">
              <tbody>
                <MetaRow
                  label="Début"
                  value={project.startedAt?.split("T")[0]}
                />
                <MetaRow
                  label="Fin"
                  value={project.endedAt?.split("T")[0] || "En cours"}
                />
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>

      {/* ─── Cover Image ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-4 md:px-8"
      >
        <div className="rounded-2xl overflow-hidden aspect-project bg-border/10 shadow-lg">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* ─── Tags + Live Preview button ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-8 md:px-16 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div className="flex flex-wrap gap-2">
          {project.tagIds?.map((tag: string) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-border-dark text-muted text-caption"
            >
              {tag}
            </span>
          ))}
          <span className="px-4 py-1.5 rounded-full bg-dark text-white/60 text-caption">
            {projectYear}
          </span>
        </div>

        {project.url && project.url !== "#" && !project.url.startsWith("#") && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary px-6 py-3 no-underline shrink-0 text-sm-body font-medium"
          >
            Live Preview
            <LucideIcons.ExternalLink size={16} />
          </a>
        )}
      </motion.div>

      {/* ─── Project Main Description ─── */}
      {project.description && (
        <div className="px-8 md:px-16 pb-16 w-full md:w-[80%]">
          <p className="text-dark whitespace-pre-line leading-relaxed text-lg-body">
            {project.description}
          </p>
        </div>
      )}

      {/* ─── Modular Content Sections ─── */}
      <div className="px-8 md:px-16 pb-16 space-y-32">
        {project.sections.map((section, index) => (
          <SectionBlock key={index} block={section} index={index} />
        ))}
      </div>

      {/* ─── Project Navigation ─── */}
      <div className="px-8 md:px-16 py-16 border-t border-border">
        <div className="flex items-center justify-between">
          {prevProject && (
            <Link
              to="/projets/$projectId"
              params={{ projectId: prevProject.id }}
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
                  {prevProject.title.replace(/\n/g, " ")}
                </p>
              </div>
            </Link>
          )}

          <Link
            to="/projets"
            className="text-subtle hover:text-primary transition-colors no-underline uppercase tracking-wider font-semibold text-overline"
          >
            Tous les Projets
          </Link>

          {nextProject && (
            <Link
              to="/projets/$projectId"
              params={{ projectId: nextProject.id }}
              className="group flex items-center gap-4 no-underline"
            >
              <div className="hidden md:block text-right">
                <p className="text-subtle uppercase tracking-wider text-label">
                  Suivant
                </p>
                <p className="text-dark font-heading text-xl font-medium">
                  {nextProject.title.replace(/\n/g, " ")}
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

/* ═══════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════ */

function MetaRow({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) {
  if (!value) return null;
  return (
    <tr className="border-b border-border">
      <td className="py-3.5 text-subtle pr-8 text-overline font-semibold">
        {label}
      </td>
      <td className="py-3.5 text-dark text-right text-sm-body normal-case tracking-normal">
        {value}
      </td>
    </tr>
  );
}

function SectionBlock({
  block,
  index,
}: {
  block: ProjectSection;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const Icon = block.lucideIcon ? (LucideIcons as any)[block.lucideIcon] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
      viewport={{ once: true, margin: "-100px" }}
      className={`grid grid-cols-1 ${
        isEven ? "md:grid-cols-[1fr_2fr]" : "md:grid-cols-[2fr_1fr]"
      } gap-12 md:gap-24 items-center`}
    >
      {/* Text Content */}
      <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
        <div className="flex flex-col gap-6">
          {/* Tag-like icon container */}
          {Icon && (
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-border-lighter">
              <Icon size={20} className="text-primary" />
            </div>
          )}

          <div>
            <h3
              className="text-dark mb-4 font-heading"
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              {block.title}
            </h3>
            <p className="text-body leading-relaxed font-light text-prose">
              {block.description}
            </p>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
        {block.imageUrl && (
          <div className="rounded-2xl overflow-hidden aspect-project bg-border/10 shadow-sm border border-border-mid">
            <img
              src={block.imageUrl}
              alt={block.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
