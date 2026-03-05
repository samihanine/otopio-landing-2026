import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../components/sections/AboutPage";

export const Route = createFileRoute("/a-propos")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AboutPage />;
}
