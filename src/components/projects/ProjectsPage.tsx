import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { projects } from "../../types/projects";
import { tags as allTags } from "../../types/tags";
import { CustomCursor } from "../ui/CustomCursor";
import { ProjectsGrid } from "./ProjectsGrid";

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
    <div
      className="md:mx-auto min-h-screen pb-20 bg-[#F0F0F0]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <CustomCursor />
      {/* Hero Title */}
      <div className="md:max-w-3/4 md:mx-auto px-8 md:px-16 pt-16 pb-12 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#1a1a1a]"
          style={{
            fontFamily: "'Clash Display', sans-serif",
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
          <div className="w-8 h-[2px] bg-[#1a1a1a]" />
          <span
            className="text-[#1a1a1a] uppercase tracking-widest"
            style={{ fontSize: "12px", fontWeight: 500 }}
          >
            Studio Technologique & IA
          </span>
        </motion.div>
      </div>

      {/* Tags Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="px-4 md:px-8 md:max-w-3/4 mx-auto pb-12 flex flex-wrap gap-3"
      >
        {filterTags.map((tag) => {
          const isSelected = selectedTags.includes(tag.id);
          return (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className="px-4 py-2 rounded-full border transition-all duration-300 font-medium tracking-wide cursor-pointer flex items-center gap-2"
              style={{
                fontSize: "13px",
                borderColor: isSelected ? tag.hexColor : "#e5e5e5",
                backgroundColor: isSelected ? tag.hexColor : "#cacacaff",
                filter: isSelected ? "none" : "grayscale(100%)",
                color: isSelected ? "#f3f3f3ff" : "#1a1a1a",
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
      <div className="px-4 md:px-8 md:max-w-3/4 mx-auto pb-24 min-h-[50vh]">
        <ProjectsGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
