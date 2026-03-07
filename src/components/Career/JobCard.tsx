import { motion, type Variants } from "framer-motion";
import { ArrowRight, Ticket } from "lucide-react";
import type { JobOffer } from "../../types/career";

interface JobCardProps {
  job: JobOffer;
  index: number;
}

export function JobCard({ job, index }: JobCardProps) {
  const shimmerVariants: Variants = {
    hover: {
      x: ["-100%", "250%"],
      opacity: [0, 1, 0],
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hover"
      className="relative cursor-pointer group flex w-full items-stretch"
      style={{
        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.05))",
      }}
    >
      {/* --- PARTIE GAUCHE DU TICKET --- */}
      <div
        className="flex-3 p-8 md:p-10 bg-white border-y border-l border-border-light group-hover:border-primary/30 transition-colors duration-500 rounded-l-2xl relative overflow-hidden"
        style={{
          // Encoches en haut à droite et bas à droite
          WebkitMaskImage: `radial-gradient(circle at 100% 0%, transparent 12px, black 13px), 
                            radial-gradient(circle at 100% 100%, transparent 12px, black 13px)`,
          maskImage: `radial-gradient(circle at 100% 0%, transparent 12px, black 13px), 
                      radial-gradient(circle at 100% 100%, transparent 12px, black 13px)`,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <div className="flex flex-col gap-3 text-left relative z-10">
          <div className="flex items-center gap-2">
            <Ticket size={14} className="text-primary" />
            <span className="text-[10px] font-body font-black uppercase tracking-[0.2em] text-primary">
              {job.department} • {job.type}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-dark leading-tight">
            {job.title}
          </h3>
          <div className="flex items-center gap-2 text-overline font-body text-muted font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-border-dark" />
            {job.location}
          </div>
        </div>
        <p className="mt-6 text-sm font-body text-body leading-relaxed max-w-sm text-left opacity-80 relative z-10">
          {job.shortDescription}
        </p>

        <motion.div
          variants={shimmerVariants}
          className="absolute inset-0 pointer-events-none opacity-0"
          style={{
            background:
              "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.6) 50%, transparent 65%)",
            transform: "skewX(-20deg)",
          }}
        />
      </div>

      {/* --- LIGNE DE PERFORATION --- */}
      <div className="relative w-0 z-10">
        <div className="absolute top-[16px] bottom-[16px] left-[-1px] border-r-2 border-dashed border-border-light group-hover:border-primary/30 transition-colors duration-500" />
      </div>

      {/* --- PARTIE DROITE DU TICKET (DÉTACHABLE) --- */}
      <motion.div
        variants={{
          initial: {
            rotateX: 0,
            rotateY: 0,
            rotate: 0,
            z: 0,
            y: 0,
            filter: "drop-shadow(0px 0px 0px rgba(255,85,0,0))",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
              restDelta: 0.0001, // Empêche le "snap" brutal au retour
            },
          },
          hover: {
            zIndex: 50,
            rotateX: -5,
            rotateY: 5,
            rotate: 5,
            z: 20,
            y: -2,
            filter: "drop-shadow(-8px 15px 20px rgba(255,85,0,0.35))",
            transition: {
              type: "spring",
              stiffness: 450,
              damping: 60,
              mass: 1.5,
              restDelta: 0.0001, // Oblige Framer Motion à calculer l'animation jusqu'au bout du moindre pixel
            },
          },
        }}
        initial="initial"
        whileHover="hover"
        className="origin-bottom-left flex-1 min-w-[100px] bg-border-lighter border-y border-r border-border-light flex flex-col items-center justify-center gap-4 relative group-hover:bg-dark group-hover:border-dark transition-colors duration-500 rounded-r-2xl overflow-hidden"
        style={{
          transformPerspective: 1000,
          transformStyle: "preserve-3d",

          // Les optimisations GPU :
          willChange: "transform, filter", // Force le navigateur à garder le composant prêt pour l'animation
          backfaceVisibility: "hidden", // Évite les artefacts de rendu 3D sur les bords

          WebkitMaskImage: `radial-gradient(circle at 0% 0%, transparent 12px, black 13px), 
                            radial-gradient(circle at 0% 100%, transparent 12px, black 13px)`,
          maskImage: `radial-gradient(circle at 0% 0%, transparent 12px, black 13px), 
                      radial-gradient(circle at 0% 100%, transparent 12px, black 13px)`,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <span className="hidden md:block text-[9px] font-black uppercase tracking-[0.4em] rotate-90 whitespace-nowrap text-muted group-hover:text-white/40 transition-colors relative z-10">
          JOIN US
        </span>

        <motion.div
          variants={shimmerVariants}
          className="absolute inset-0 pointer-events-none opacity-0"
          style={{
            background:
              "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.6) 50%, transparent 65%)",
            transform: "skewX(-20deg)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
