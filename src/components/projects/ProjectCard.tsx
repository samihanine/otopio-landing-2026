import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { type Project } from "../../types/projects";
import { tags as allTags } from "../../types/tags";
import { cn } from "../../utils/cn";

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
        className="group project-card-custom-cursor block no-underline"
      >
        <div
          className={cn(
            "bg-border/10 relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500",
            aspectRatio,
          )}
          style={{ transform: "scale(1)", transformOrigin: "center" }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
          />
          {/* Subtle dark overlay on hover to make image slightly darker without the button */}
          <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/60" />

          {/* Tags */}
          <div className="pointer-events-none absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            {project.tagIds?.map((tagId) => {
              const tagObj = allTags.find((t) => t.id === tagId);
              if (!tagObj) return null;

              return (
                <span
                  key={tagId}
                  className="group-hover:!bg-primary text-label rounded-full px-3 py-1 font-semibold tracking-wide shadow-sm transition-colors duration-300"
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
