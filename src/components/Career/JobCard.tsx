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
      className="group relative flex h-full w-full cursor-pointer items-stretch"
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
        className="border-border-light group-hover:border-primary/30 relative min-w-0 flex-[3] origin-bottom-right overflow-hidden rounded-l-2xl border-y border-l bg-white p-8 transition-colors duration-500 md:p-10"
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
        <div className="relative z-10 flex min-w-0 flex-col gap-3 text-left">
          <div className="flex min-w-0 items-center gap-2">
            <Ticket size={14} className="text-primary shrink-0" />
            <span className="font-body text-primary truncate text-[10px] font-black tracking-[0.2em] uppercase">
              {job.department} • {job.type}
            </span>
          </div>
          <h3 className="font-heading text-dark text-2xl leading-tight font-bold break-words lg:text-3xl">
            {job.title}
          </h3>
          <div className="text-overline font-body text-muted flex min-w-0 items-center gap-2 font-medium">
            <span className="bg-border-dark h-1.5 w-1.5 shrink-0 rounded-full" />
            <span className="truncate">{job.location}</span>
          </div>
        </div>
        <p className="font-body text-body relative z-10 mt-6 w-full text-left text-sm leading-relaxed opacity-80">
          {job.shortDescription}
        </p>

        {/* LIGNE DE PERFORATION - Maintenant solidaire du bloc de gauche */}
        <div className="border-border-light group-hover:border-primary/30 absolute top-4 right-0 bottom-4 z-20 border-r-2 border-dashed transition-colors duration-500" />

        <motion.div
          variants={shimmerVariants}
          className="pointer-events-none absolute inset-0 opacity-0"
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
        className="bg-border-lighter border-border-light group-hover:bg-dark-light group-hover:border-dark-light relative flex min-w-0 flex-1 origin-bottom-left flex-col items-center justify-center gap-4 overflow-hidden rounded-r-2xl border-y border-r transition-colors duration-500"
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
        <span className="text-muted relative z-10 rotate-90 text-[9px] font-black tracking-[0.4em] whitespace-nowrap uppercase transition-colors group-hover:text-white/40 md:block">
          REJOIGNEZ-NOUS
        </span>

        <motion.div
          variants={shimmerVariants}
          className="pointer-events-none absolute inset-0 opacity-0"
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
