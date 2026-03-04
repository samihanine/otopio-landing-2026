import { useNavigate, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { projects, type ProjectSection } from "../../types/projects";

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
      <div
        className="md:max-w-3/4 md:mx-auto min-h-screen flex flex-col items-center justify-center"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <h1
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "48px",
            fontWeight: 600,
          }}
        >
          Projet introuvable
        </h1>
        <Link
          to="/projets"
          className="mt-6 text-[#ff5500] hover:underline no-underline"
          style={{ fontSize: "15px" }}
        >
          &larr; Retour aux Projets
        </Link>
      </div>
    );
  }

  // Next/Prev navigation
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const dateObj = project.startedAt ? new Date(project.startedAt) : new Date();
  const projectYear = project.startedAt ? dateObj.getFullYear() : "2024";

  return (
    <div className="w-full">
      <div
        className="md:max-w-6xl md:mx-auto min-h-screen"
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
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
            className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full hover:bg-[#333] transition-colors duration-300 cursor-pointer flex items-center gap-2"
            style={{ fontSize: "14px" }}
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
                className="text-[#1a1a1a] whitespace-pre-line mb-6"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "clamp(56px, 5vw, 110px)",
                  fontWeight: 600,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                {project.title}
              </h1>
              <p
                className="text-[#666] text-lg"
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
              <table
                className="w-full"
                style={{
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
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
          <div className="rounded-2xl overflow-hidden aspect-[3024/1652] bg-[#ddd]/10 shadow-lg">
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
                className="px-4 py-1.5 rounded-full border border-[#ccc] text-[#666]"
                style={{ fontSize: "13px" }}
              >
                {tag}
              </span>
            ))}
            <span
              className="px-4 py-1.5 rounded-full bg-[#1a1a1a] text-white/60"
              style={{ fontSize: "13px" }}
            >
              {projectYear}
            </span>
          </div>

          {project.url &&
            project.url !== "#" &&
            !project.url.startsWith("#") && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff5500] text-white px-6 py-3 rounded-full hover:bg-[#e64d00] transition-colors duration-300 no-underline shrink-0"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                Live Preview
                <LucideIcons.ExternalLink size={16} />
              </a>
            )}
        </motion.div>

        {/* ─── Project Main Description ─── */}
        {project.description && (
          <div className="px-8 md:px-16 pb-16 w-full md:w-[80%]">
            <p
              className="text-[#1a1a1a] whitespace-pre-line leading-relaxed"
              style={{ fontSize: "18px" }}
            >
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
        <div className="px-8 md:px-16 py-16 border-t border-[#ddd]">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {prevProject && (
              <Link
                to="/projets/$projectId"
                params={{ projectId: prevProject.id }}
                className="group flex items-center gap-4 no-underline"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center group-hover:bg-[#ff5500] transition-colors duration-300">
                  <LucideIcons.ArrowLeft size={20} />
                </div>
                <div className="hidden md:block">
                  <p
                    className="text-[#999] uppercase tracking-wider"
                    style={{ fontSize: "11px" }}
                  >
                    Précédent
                  </p>
                  <p
                    className="text-[#1a1a1a]"
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {prevProject.title.replace(/\n/g, " ")}
                  </p>
                </div>
              </Link>
            )}

            <Link
              to="/projets"
              className="text-[#999] hover:text-[#ff5500] transition-colors no-underline uppercase tracking-wider font-semibold"
              style={{ fontSize: "12px" }}
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
                  <p
                    className="text-[#999] uppercase tracking-wider"
                    style={{ fontSize: "11px" }}
                  >
                    Suivant
                  </p>
                  <p
                    className="text-[#1a1a1a]"
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {nextProject.title.replace(/\n/g, " ")}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center group-hover:bg-[#ff5500] transition-colors duration-300">
                  <LucideIcons.ArrowRight size={20} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
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
    <tr className="border-b border-[#ddd]">
      <td
        className="py-3.5 text-[#999] pr-8"
        style={{ fontSize: "12px", fontWeight: "600" }}
      >
        {label}
      </td>
      <td
        className="py-3.5 text-[#1a1a1a] text-right"
        style={{
          fontSize: "14px",
          textTransform: "none",
          letterSpacing: "normal",
        }}
      >
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
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-[#eee]">
              <Icon size={20} className="text-[#ff5500]" />
            </div>
          )}

          <div>
            <h3
              className="text-[#1a1a1a] mb-4"
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              {block.title}
            </h3>
            <p
              className="text-[#444] leading-relaxed font-light"
              style={{ fontSize: "17px" }}
            >
              {block.description}
            </p>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
        {block.imageUrl && (
          <div className="rounded-2xl overflow-hidden aspect-[3024/1652] bg-[#ddd]/10 shadow-sm border border-[#e8e8e8]">
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
