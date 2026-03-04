import { type Project } from "../../types/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12">
      {projects.map((project, idx) => (
        <div key={project.id} className="flex flex-col gap-4">
          {/* Image Card */}
          <ProjectCard
            project={project}
            index={idx}
            aspectRatio="aspect-project w-full"
          />

          {/* Info Label */}
          <div className="px-2">
            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="text-subtle font-heading text-sm-body"
              >
                {String(idx + 1).padStart(2, "0")}.
              </span>
              <span
                className="text-dark font-heading text-2xl font-medium"
              >
                {project.title}
              </span>
            </div>
            {project.summary && (
              <p
                className="text-muted leading-relaxed text-base-body"
              >
                {project.summary}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
