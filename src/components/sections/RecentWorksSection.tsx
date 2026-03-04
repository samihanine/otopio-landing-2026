import { projects } from "../../types/projects";
import { GradientTitle } from "../ui/GradientTitle";
import { ProjectsGrid } from "../projects/ProjectsGrid";
import { CustomCursor } from "../ui/CustomCursor";

export function RecentWorksSection() {
  // Sort by latest dates first, and take only the first 4
  const latestProjects = [...projects]
    .sort(
      (a, b) =>
        new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
    )
    .slice(0, 4);
  return (
    <section className="py-20 md:py-32 px-4  relative overflow-hidden">
      <CustomCursor />
      <div className="md:max-w-3/4 md:mx-auto mx-auto">
        <div className="md:-mb-5 lg:-mb-8 mb-12">
          <GradientTitle>Réalisations</GradientTitle>
        </div>

        <ProjectsGrid projects={latestProjects} />
      </div>
    </section>
  );
}
