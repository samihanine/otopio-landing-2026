import { useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { projects } from "../../types/projects";
import { Section } from "../layout/Section";
import { SectionRenderer } from "./sections/SectionRenderer";
import { ClickableImage } from "../ui/ImageLightbox";

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
        className="font-body flex min-h-screen flex-col items-center justify-center"
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
          className="text-primary text-base-body mt-6 no-underline hover:underline"
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
        className="flex w-full items-center justify-end px-8 py-6 md:px-16"
      >
        <button
          onClick={() => navigate({ to: "/projets" })}
          className="btn-dark text-sm-body flex items-center gap-2 px-6 py-2.5"
        >
          <LucideIcons.ArrowLeft size={16} />
          Tous les Projets
        </button>
      </motion.header>

      {/* ─── Hero: Title + Metadata Table ─── */}
      <div className="px-8 pt-8 pb-14 md:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Title (left) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h1
              className="text-dark font-heading mb-6 whitespace-pre-line"
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
            className="w-full shrink-0 md:w-80 md:min-w-0"
          >
            <table className="text-sm-body w-full tracking-wide uppercase">
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
        <div className="aspect-project bg-border/10 overflow-hidden rounded-2xl shadow-lg">
          <ClickableImage
            src={project.imageUrl}
            alt={project.title}
            containerClassName="w-full h-full"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* ─── Tags + Live Preview button ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:justify-between md:px-16"
      >
        <div className="flex flex-wrap gap-2">
          {project.tagIds?.map((tag: string) => (
            <span
              key={tag}
              className="border-border-dark text-muted text-caption rounded-full border px-4 py-1.5"
            >
              {tag}
            </span>
          ))}
          <span className="bg-dark text-caption rounded-full px-4 py-1.5 text-white/60">
            {projectYear}
          </span>
        </div>

        {project.url && project.url !== "#" && !project.url.startsWith("#") && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm-body inline-flex shrink-0 items-center gap-2 px-6 py-3 font-medium no-underline"
          >
            Live Preview
            <LucideIcons.ExternalLink size={16} />
          </a>
        )}
      </motion.div>

      {/* ─── Project Main Description ─── */}
      {project.description && (
        <div className="w-full px-8 pb-16 md:w-[80%] md:px-16">
          <p className="text-dark text-lg-body leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>
      )}

      {/* ─── Modular Content Sections ─── */}
      <div className="space-y-32 px-8 pb-16 md:px-16">
        {project.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
      </div>

      {/* ─── Project Navigation ─── */}
      <div className="border-border border-t px-8 py-16 md:px-16">
        <div className="flex items-center justify-between">
          {prevProject && (
            <Link
              to="/projets/$projectId"
              params={{ projectId: prevProject.id }}
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
                  {prevProject.title.replace(/\n/g, " ")}
                </p>
              </div>
            </Link>
          )}

          <Link
            to="/projets"
            className="text-subtle hover:text-primary text-overline font-semibold tracking-wider uppercase no-underline transition-colors"
          >
            Tous les Projets
          </Link>

          {nextProject && (
            <Link
              to="/projets/$projectId"
              params={{ projectId: nextProject.id }}
              className="group flex items-center gap-4 no-underline"
            >
              <div className="hidden text-right md:block">
                <p className="text-subtle text-label tracking-wider uppercase">
                  Suivant
                </p>
                <p className="text-dark font-heading text-xl font-medium">
                  {nextProject.title.replace(/\n/g, " ")}
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
    <tr className="border-border border-b">
      <td className="text-subtle text-overline py-3.5 pr-8 font-semibold">
        {label}
      </td>
      <td className="text-dark text-sm-body py-3.5 text-right tracking-normal normal-case">
        {value}
      </td>
    </tr>
  );
}
