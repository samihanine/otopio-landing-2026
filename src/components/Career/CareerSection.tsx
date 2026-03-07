import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { SectionLabel } from "../ui/SectionLabel";
import { JobCard } from "./JobCard";
import { openPositions } from "../../types/career";
import { SectionHeader } from "../ui/SectionHeader";

export function CareerSection() {
  return (
    <Section className="bg-light">
      <div className="max-w-full mx-auto">
        <SectionHeader
          label="Rejoindre l'équipe"
          title={<>Envie de construire le <span className="text-primary">futur</span> avec nous ?</>}
          subtext="Chez Otopio, nous recherchons des esprits curieux et des talents passionnés par l'innovation digitale. Découvrez nos opportunités actuelles."
          align="left"
          className="mb-16"
        />

        {/* Grille des offres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openPositions.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>

        {/* Pied de section discret */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-[var(--color-border-light)] text-center"
        >
          <p className="text-sm font-body text-[var(--color-muted)] italic">
            Candidature spontanée ? Envoyez-nous votre portfolio à{" "}
            <span className="font-bold text-[var(--color-dark)]">
              hello@otopio.com
            </span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
