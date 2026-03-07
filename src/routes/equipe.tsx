import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import Lanyard from "../components/ui/Lanyard/Lanyard";
import { Section } from "../components/layout/Section";

import maissaneGLB from "../components/ui/Lanyard/maissane.glb";
import mathildeGLB from "../components/ui/Lanyard/mathilde.glb";
import noahGLB from "../components/ui/Lanyard/noah.glb";
import samiGLB from "../components/ui/Lanyard/sami.glb";

export const Route = createFileRoute("/equipe")({
  component: EquipePage,
});

function EquipePage() {
  return (
    <main className="min-h-screen pt-24 bg-light overflow-hidden">
      {/* Hero Section */}
      <PageHero
        title="Notre Équipe"
        label="L'ÉQUIPE"
        description="Découvrez les esprits créatifs derrière Otopio."
      />

      {/* Multiple Lanyards hanging below hero sharing one space */}
      <div className="relative w-full z-10 pointer-events-auto h-[70vh] inset-shadow-[0_16px_32px_-10px_rgba(0,0,0,0.15)]">
        <Lanyard
          position={[0, 0, 30]}
          gravity={[0, -40, 0]}
          fov={20}
          items={[
            {
              id: "maissane",
              modelSrc: maissaneGLB,
              startPosition: [-4.5, 6, 0],
            },
            {
              id: "mathilde",
              modelSrc: mathildeGLB,
              startPosition: [-1.5, 6, 0],
            },
            { id: "noah", modelSrc: noahGLB, startPosition: [1.5, 6, 0] },
            { id: "sami", modelSrc: samiGLB, startPosition: [4.5, 6, 0] },
          ]}
        />
      </div>
    </main>
  );
}
