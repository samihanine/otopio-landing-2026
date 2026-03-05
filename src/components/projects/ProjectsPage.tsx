import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { projects } from "../../types/projects";
import { tags as allTags } from "../../types/tags";
import { CustomCursor } from "../ui/CustomCursor";
import { ProjectsGrid } from "./ProjectsGrid";
import { Section } from "../sections/Section";

export function ProjectsPage() {
  // Compute which tags are actually used by projects
  const usedTagIds = useMemo(() => {
    const ids = new Set<string>();
    projects.forEach((p) => p.tagIds.forEach((id) => ids.add(id)));
    return Array.from(ids);
  }, []);

  const filterTags = allTags.filter((t) => usedTagIds.includes(t.id));

  // State
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (id: string) => {
    setSelectedTags((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  };

  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    // Show projects that have at least one of the selected tags (OR filtering)
    return projects.filter((p) =>
      p.tagIds.some((tag) => selectedTags.includes(tag)),
    );
  }, [selectedTags]);

  return (
    <Section
      as="div"
      className="min-h-screen pb-20 font-body"
      containerClassName=""
    >
      <CustomCursor />
      {/* Hero Title */}
      <div className="px-8 md:px-16 pt-16 pb-12 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-dark font-heading"
          style={{
            fontSize: "clamp(60px, 12vw, 120px)",
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
          }}
        >
          Projets
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mt-4"
        >
          <div className="w-8 h-[2px] bg-dark" />
          <span className="text-dark uppercase tracking-widest text-overline font-medium">
            Studio Technologique & IA
          </span>
        </motion.div>
      </div>

      {/* Tags Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-4 md:px-8 pb-12 flex flex-wrap gap-3"
      >
        {filterTags.map((tag) => {
          const isSelected = selectedTags.includes(tag.id);
          return (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className="px-4 py-2 rounded-full border transition-all duration-300 font-medium tracking-wide cursor-pointer flex items-center gap-2 text-caption"
              style={{
                borderColor: isSelected
                  ? tag.hexColor
                  : "var(--color-border-light)",
                backgroundColor: isSelected
                  ? tag.hexColor
                  : "var(--color-border-dark)",
                filter: isSelected ? "none" : "grayscale(100%)",
                color: isSelected ? "#f3f3f3ff" : "var(--color-dark)",
                boxShadow: isSelected
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  : "none",
              }}
            >
              {tag.name}
            </button>
          );
        })}
      </motion.div>

      {/* Simple Grid */}
      <div className="px-4 md:px-8 pb-24 min-h-[50vh]">
        <ProjectsGrid projects={filteredProjects} />
      </div>
    </Section>
  );
}
