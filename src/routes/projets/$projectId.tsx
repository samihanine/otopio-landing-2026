import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailPage } from "../../components/projects/ProjectDetailPage";

export const Route = createFileRoute("/projets/$projectId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { projectId } = Route.useParams();
  return <ProjectDetailPage projectId={projectId} />;
}
