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
            aspectRatio="aspect-[3024/1652] w-full"
          />

          {/* Info Label */}
          <div className="px-2">
            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="text-[#999]"
                style={{
                  fontSize: "14px",
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                {String(idx + 1).padStart(2, "0")}.
              </span>
              <span
                className="text-[#1a1a1a]"
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                {project.title}
              </span>
            </div>
            {project.summary && (
              <p
                className="text-[#666] leading-relaxed"
                style={{ fontSize: "15px" }}
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
