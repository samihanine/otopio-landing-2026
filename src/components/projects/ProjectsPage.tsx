import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { projects } from "../../types/projects";
import { tags as allTags } from "../../types/tags";
import { CustomCursor } from "../ui/CustomCursor";
import { ProjectsGrid } from "./ProjectsGrid";
import { Section } from "../layout/Section";
import { PageHero } from "../ui/PageHero";

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
    <>
      <PageHero
        title="Projets"
        label="Studio Technologique & IA"
        description="Découvrez comment nous transformons les idées en expériences numériques exceptionnelles. Chaque projet est une preuve de notre engagement envers l'innovation, la qualité et l'impact."
      />
      <Section className="sm:py-12 md:py-12 lg:py-12" containerClassName="">
        <CustomCursor />

        {/* Tags Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 px-4 pb-12 md:px-8"
        >
          {filterTags.map((tag) => {
            const isSelected = selectedTags.includes(tag.id);
            return (
              <button
                key={tag.id}
                onClick={() => toggleTag(tag.id)}
                className="text-caption flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 font-medium tracking-wide transition-all duration-300"
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
        <div className="min-h-[50vh] px-4 pb-24 md:px-8">
          <ProjectsGrid projects={filteredProjects} />
        </div>
      </Section>
    </>
  );
}
