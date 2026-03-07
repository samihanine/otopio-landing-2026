import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { team } from "../../types/team";
import { ProgressRing } from "./ProgressRing";
import { SideSelector } from "../ui/SideSelector";

export function TeamShowcase() {
  const [selectedId, setSelectedId] = useState<string>(team[0].id);
  const selectedMember = team.find((m) => m.id === selectedId) || team[0];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
      {/* Left Column: Discrete Selector */}
      <div className="w-full lg:w-[25%] flex flex-col justify-start lg:sticky lg:top-32">
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
      <div className="w-full lg:w-[75%] px-4 lg:px-0">
        <div className="w-full relative bg-dark rounded-[var(--radius-card)] overflow-hidden shadow-2xl transition-all duration-500">
          <AnimatePresence initial={false}>
            <motion.div
              key={selectedMember.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="w-full h-full flex flex-col md:flex-row absolute inset-0 z-10"
            >
              {/* Image Column */}
              <motion.div
                layoutId="member-image-container"
                className="relative w-full md:w-[45%] h-[300px] md:h-full bg-border-lighter overflow-hidden shrink-0"
              >
                <div className="absolute inset-0 w-full h-full">
                  <motion.img
                    layoutId="member-image"
                    src={selectedMember.imageUrl}
                    alt={selectedMember.name}
                    className="h-full w-full object-cover grayscale opacity-90 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-dark/20 mix-blend-multiply pointer-events-none" />
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-xl p-4 md:p-5 rounded-2xl flex items-center gap-4 shadow-xl border border-border-lighter"
                >
                  <div className="flex -space-x-3 shrink-0">
                    {selectedMember.collaborators.items.map((c, i) => (
                      <img
                        key={i}
                        src={c.avatarUrl}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover shadow-sm"
                        alt={c.name}
                      />
                    ))}
                  </div>
                  <p className="text-[11px] md:text-caption font-body font-semibold text-dark leading-snug">
                    {selectedMember.collaborators.text}
                  </p>
                </motion.div>
              </motion.div>

              {/* Text Column */}
              <div className="w-full md:w-[55%] flex flex-col h-full bg-dark">
                <div className="p-6 md:p-14 text-white flex-1 overflow-y-auto styled-scrollbar">
                  <motion.h2
                    layoutId="member-name"
                    className="text-4xl md:text-7xl font-heading font-black uppercase leading-none mb-2"
                  >
                    {selectedMember.name}
                  </motion.h2>
                  <motion.p
                    layoutId="member-role"
                    className="text-primary font-body uppercase tracking-[0.2em] font-bold text-[10px] md:text-sm mb-6 md:mb-10"
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
                        className="text-sm md:text-prose font-body leading-relaxed text-white/70"
                      >
                        {p}
                      </p>
                    ))}
                  </motion.div>
                </div>

                {/* Stats Footer */}
                <motion.div
                  layoutId="member-stats"
                  className="bg-darker p-6 md:p-10 border-t border-white/5 mt-auto shrink-0"
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
                        <h4 className="mt-3 md:mt-5 font-heading font-bold uppercase text-[8px] md:text-[11px] tracking-widest text-white/90">
                          {stat.label}
                        </h4>
                        <p className="text-[9px] text-white/40 mt-1.5 uppercase font-body font-medium leading-tight hidden md:block">
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
          <div className="invisible w-full flex flex-col md:flex-row pointer-events-none select-none">
            <div className="w-full md:w-[45%] h-[300px] md:h-[700px]" />
            <div className="w-full md:w-[55%] p-6 md:p-14">
              <h2 className="text-4xl md:text-7xl font-heading mb-2">
                {selectedMember.name}
              </h2>
              <div className="mb-6 md:mb-10">{selectedMember.role}</div>
              <div className="space-y-4 md:space-y-6">
                {selectedMember.bio.map((p, i) => (
                  <p key={i} className="text-sm md:text-prose">
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
