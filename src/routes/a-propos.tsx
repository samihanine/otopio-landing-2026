import { createFileRoute } from "@tanstack/react-router";
import AboutSection from "../components/sections/AboutSection";

export const Route = createFileRoute("/a-propos")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AboutSection />;
}
