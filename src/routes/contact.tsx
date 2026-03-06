import { ContactSection } from "../components/home/ContactSection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ContactSection />;
}
