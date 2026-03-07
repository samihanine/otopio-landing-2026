import { motion, type Variants } from "framer-motion";
import { ArrowRight, Ticket } from "lucide-react";
import type { JobOffer } from "../../types/career";

interface JobCardProps {
  job: JobOffer;
  index: number;
}

export function JobCard({ job, index }: JobCardProps) {
  // Variantes pour le balayage lumineux (shimmer)
  const shimmerVariants: Variants = {
    hover: {
      x: ["-100%", "250%"],
      opacity: [0, 1, 0],
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Variantes pour le conteneur parent (gestion du z-index)
  const cardVariants: Variants = {
    initial: { opacity: 0, y: 20, zIndex: 1 },
    inView: {
      opacity: 1,
      y: 0,
      zIndex: 1,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
    hover: {
      zIndex: 50,
      transition: { duration: 0 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="inView"
      viewport={{ once: true }}
      whileHover="hover"
      className="relative cursor-pointer group flex w-full items-stretch"
      style={{
        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.05))",
      }}
    >
      {/* --- PARTIE GAUCHE DU TICKET --- */}
      <motion.div
        variants={{
          initial: { rotate: 0, x: 0, rotateX: 0, rotateY: 0 },
          hover: {
            rotate: -2,
            x: -2,
            rotateX: -10,
            rotateY: 2,
            boxShadow: "10px 10px 10px black",
            transition: { type: "spring", stiffness: 400, damping: 25 },
          },
        }}
        className="flex-[3] p-8 md:p-10 bg-white border-y border-l border-border-light group-hover:border-primary/30 transition-colors duration-500 rounded-l-2xl relative overflow-hidden origin-bottom-right"
        style={{
          transformStyle: "preserve-3d",
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

        {/* LIGNE DE PERFORATION - Maintenant solidaire du bloc de gauche */}
        <div className="absolute top-4 bottom-4 right-0 border-r-2 border-dashed border-border-light group-hover:border-primary/30 transition-colors duration-500 z-20" />

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

      {/* --- PARTIE DROITE DU TICKET (DÉTACHABLE) --- */}
      <motion.div
        variants={{
          initial: {
            rotateX: 0,
            rotateY: 0,
            rotate: 0,
            x: 0,
            z: 0,
            y: 0,
            filter: "drop-shadow(0px 0px 0px rgba(255,85,0,0))",
          },
          hover: {
            rotateX: -5,
            rotateY: 4,
            rotate: 3,
            x: 4,
            z: 40,
            y: -4,
            filter: [
              "drop-shadow(-2px 4px 4px rgba(0,0,0,0.1))",
              "drop-shadow(-10px 20px 30px rgba(255,85,0,0.4))",
              "drop-shadow(-20px 40px 60px rgba(255,85,0,0.2))",
            ].join(" "),
            transition: { type: "spring", stiffness: 400, damping: 30 },
          },
        }}
        className="origin-bottom-left flex-1 min-w-[100px] bg-border-lighter border-y border-r border-border-light flex flex-col items-center justify-center gap-4 relative group-hover:bg-dark-light group-hover:border-dark-light transition-colors duration-500 rounded-r-2xl overflow-hidden"
        style={{
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
          WebkitMaskImage: `radial-gradient(circle at 0% 0%, transparent 12px, black 13px), 
                            radial-gradient(circle at 0% 100%, transparent 12px, black 13px)`,
          maskImage: `radial-gradient(circle at 0% 0%, transparent 12px, black 13px), 
                      radial-gradient(circle at 0% 100%, transparent 12px, black 13px)`,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <span className="hidden md:block text-[9px] font-black uppercase tracking-[0.4em] rotate-90 whitespace-nowrap text-muted group-hover:text-white/40 transition-colors relative z-10">
          REJOIGNEZ-NOUS
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
