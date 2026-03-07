import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects, type Project } from "../../../types/projects";

export function RelatedProjectsSection({
  projectIds,
}: {
  projectIds: string[];
}) {
  const matched: Project[] = projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => !!p);

  if (matched.length === 0) return null;

  return (
    <div className="px-8 pb-16 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-subtle text-overline mb-2 tracking-wider uppercase">
          Projets associés
        </p>
        <h2 className="font-heading text-dark mb-10 text-2xl font-semibold md:text-3xl">
          Ils nous ont fait confiance
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {matched.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true, margin: "-30px" }}
            className="h-full"
          >
            <Link
              to="/projets/$projectId"
              params={{ projectId: project.id }}
              className="group bg-surface border-border hover:border-primary/30 flex h-full flex-col overflow-hidden rounded-2xl border no-underline transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
              <div className="p-5">
                <p className="text-subtle text-caption mb-1 tracking-wider uppercase">
                  {project.customer}
                </p>
                <h3 className="font-heading text-dark text-lg leading-snug font-semibold">
                  {project.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
