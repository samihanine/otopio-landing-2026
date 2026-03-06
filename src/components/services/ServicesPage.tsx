import { servicesDetails } from "../../types/services";
import { Section } from "../layout/Section";
import { PageHero } from "../ui/PageHero";
import { StickyNote } from "../ui/StickyNote";
import { motion } from "framer-motion";

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Expertises"
        label="Nos domaines d'expertise"
        description="Du conseil stratégique à l'ingénierie logicielle, en passant par l'IA et l'automatisation — découvrez comment nous aidons les entreprises à construire des produits qui comptent."
      />
      <Section className="sm:py-12 md:py-12 lg:py-12" containerClassName="">
        <div className="pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesDetails.map((service, i) => {
            // Predictable pseudo-random rotation between -3deg and 3deg based on index
            const rotations = [-2.5, 1.5, -1, 2, -3, 1];
            const rotation = rotations[i % rotations.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, rotateZ: rotation }}
                animate={{ opacity: 1, y: 0, rotateZ: rotation }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-[400px] sm:h-[450px]"
                style={{ perspective: "1000px" }}
              >
                <div className="h-full transition-transform duration-300 hover:-translate-y-2">
                  <StickyNote service={service} index={i} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
