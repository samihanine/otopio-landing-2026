import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { type Project } from "../../types/projects";
import { tags as allTags } from "../../types/tags";

export function ProjectCard({
  project,
  index,
  aspectRatio,
}: {
  project: Project;
  index: number;
  aspectRatio: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="rounded-2xl"
    >
      <Link
        to="/projets/$projectId"
        params={{ projectId: project.id }}
        className="block group no-underline project-card-custom-cursor"
      >
        <div
          className={`relative ${aspectRatio} rounded-2xl overflow-hidden bg-border/10 transition-transform duration-500 shadow-xl`}
          style={{ transform: "scale(1)", transformOrigin: "center" }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
          />
          {/* Subtle dark overlay on hover to make image slightly darker without the button */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 pointer-events-none" />

          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none z-10">
            {project.tagIds?.map((tagId) => {
              const tagObj = allTags.find((t) => t.id === tagId);
              if (!tagObj) return null;

              return (
                <span
                  key={tagId}
                  className="px-3 py-1 rounded-full shadow-sm tracking-wide transition-colors duration-300 group-hover:!bg-primary text-label font-semibold"
                  style={{
                    backgroundColor: tagObj.hexColor,
                    color: "#ffffff",
                  }}
                >
                  {tagObj.name}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
