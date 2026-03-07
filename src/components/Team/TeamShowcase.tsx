import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { team } from "../../types/team";
import { ProgressRing } from "./ProgressRing";
import { SideSelector } from "../ui/SideSelector";

export function TeamShowcase() {
  const [selectedId, setSelectedId] = useState<string>(team[0].id);
  const selectedMember = team.find((m) => m.id === selectedId) || team[0];

  return (
    <div className="flex w-full flex-col items-start gap-8 lg:flex-row lg:gap-16">
      {/* Left Column: Discrete Selector */}
      <div className="flex w-full flex-col justify-start lg:sticky lg:top-32 lg:w-[25%]">
        <SideSelector
          items={team.map((m) => ({
            id: m.id,
            title: m.name,
            subtitle: m.role,
          }))}
          selectedId={selectedId}
          onSelect={setSelectedId}
          layoutIdPrefix="team"
          variant="large"
          direction="responsive"
        />
      </div>

      {/* Right Column: Permanent Detail Container */}
      <div className="w-full px-4 lg:w-[75%] lg:px-0">
        <div className="bg-dark relative w-full overflow-hidden rounded-[var(--radius-card)] shadow-2xl transition-all duration-500">
          <AnimatePresence initial={false}>
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 z-10 flex h-full w-full flex-col md:flex-row"
            >
              {/* Image Column */}
              <motion.div
                layoutId="member-image-container"
                className="bg-border-lighter relative h-[300px] w-full shrink-0 overflow-hidden md:h-full md:w-[45%]"
              >
                <div className="absolute inset-0 h-full w-full">
                  <motion.img
                    layoutId="member-image"
                    src={selectedMember.imageUrl}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover opacity-90 mix-blend-luminosity grayscale"
                  />
                  <div className="bg-dark/20 pointer-events-none absolute inset-0 mix-blend-multiply" />
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border-border-lighter absolute right-4 bottom-4 left-4 flex items-center gap-4 rounded-2xl border bg-white/95 p-4 shadow-xl backdrop-blur-xl md:right-6 md:bottom-6 md:left-6 md:p-5"
                >
                  <div className="flex shrink-0 -space-x-3">
                    {selectedMember.collaborators.items.map((c, i) => (
                      <img
                        key={i}
                        src={c.avatarUrl}
                        className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm md:h-10 md:w-10"
                        alt={c.name}
                      />
                    ))}
                  </div>
                  <p className="md:text-caption font-body text-dark text-[11px] leading-snug font-semibold">
                    {selectedMember.collaborators.text}
                  </p>
                </motion.div>
              </motion.div>

              {/* Text Column */}
              <div className="bg-dark flex h-full w-full flex-col md:w-[55%]">
                <div className="styled-scrollbar flex-1 overflow-y-auto p-6 text-white md:p-14">
                  <motion.h2
                    layoutId="member-name"
                    className="font-heading mb-2 text-4xl leading-none font-black uppercase md:text-7xl"
                  >
                    {selectedMember.name}
                  </motion.h2>
                  <motion.p
                    layoutId="member-role"
                    className="text-primary font-body mb-6 text-[10px] font-bold tracking-[0.2em] uppercase md:mb-10 md:text-sm"
                  >
                    {selectedMember.role}
                  </motion.p>

                  <motion.div
                    layoutId="member-bio"
                    className="space-y-4 md:space-y-6"
                  >
                    {selectedMember.bio.map((p, i) => (
                      <p
                        key={i}
                        className="md:text-prose font-body text-sm leading-relaxed text-white/70"
                      >
                        {p}
                      </p>
                    ))}
                  </motion.div>
                </div>

                {/* Stats Footer */}
                <motion.div
                  layoutId="member-stats"
                  className="bg-darker mt-auto shrink-0 border-t border-white/5 p-6 md:p-10"
                >
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {selectedMember.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center"
                      >
                        <ProgressRing
                          value={stat.value}
                          size={48}
                          strokeWidth={3}
                          trackColor="var(--color-dark-border)"
                          textColor="white"
                        />
                        <h4 className="font-heading mt-3 text-[8px] font-bold tracking-widest text-white/90 uppercase md:mt-5 md:text-[11px]">
                          {stat.label}
                        </h4>
                        <p className="font-body mt-1.5 hidden text-[9px] leading-tight font-medium text-white/40 uppercase md:block">
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Placeholder structurel invisible pour dicter la hauteur réelle */}
          <div className="pointer-events-none invisible flex w-full flex-col select-none md:flex-row">
            <div className="h-[300px] w-full md:h-[700px] md:w-[45%]" />
            <div className="w-full p-6 md:w-[55%] md:p-14">
              <h2 className="font-heading mb-2 text-4xl md:text-7xl">
                {selectedMember.name}
              </h2>
              <div className="mb-6 md:mb-10">{selectedMember.role}</div>
              <div className="space-y-4 md:space-y-6">
                {selectedMember.bio.map((p, i) => (
                  <p key={i} className="md:text-prose text-sm">
                    {p}
                  </p>
                ))}
              </div>
              <div className="h-32 md:h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
