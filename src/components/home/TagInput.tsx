import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { tags } from "../../types/tags";
import { services } from "../../types/services";

interface TagInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
}

type Suggestion = { label: string; category: "expertise" | "projet" };

const suggestions: Suggestion[] = [
  ...services.map((s) => ({ label: s.label, category: "expertise" as const })),
  ...tags.map((t) => ({ label: t.name, category: "projet" as const })),
];

export function TagInput({ value, onChange }: TagInputProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter suggestions: not already selected, matches query
  const filtered = suggestions.filter(
    (s) =>
      !value.includes(s.label) &&
      s.label.toLowerCase().includes(query.toLowerCase()),
  );

  // Show "create custom" option if query doesn't match any suggestion exactly
  const exactMatch = suggestions.some(
    (s) => s.label.toLowerCase() === query.trim().toLowerCase(),
  );
  const showCustom =
    query.trim().length > 0 && !exactMatch && !value.includes(query.trim());

  const totalOptions = filtered.length + (showCustom ? 1 : 0);

  useEffect(() => {
    setHighlightIdx(-1);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const addTag = (label: string) => {
    if (!label.trim() || value.includes(label.trim())) return;
    onChange([...value, label.trim()]);
    setQuery("");
    setOpen(false);
    inputRef.current?.focus();
  };

  const removeTag = (label: string) => {
    onChange(value.filter((v) => v !== label));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIdx((i) => Math.min(i + 1, totalOptions - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIdx >= 0 && highlightIdx < filtered.length) {
        addTag(filtered[highlightIdx].label);
      } else if (showCustom && highlightIdx === filtered.length) {
        addTag(query.trim());
      } else if (query.trim()) {
        addTag(query.trim());
      }
    } else if (e.key === "Backspace" && query === "" && value.length > 0) {
      removeTag(value[value.length - 1]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const categoryLabel = (cat: "expertise" | "projet") =>
    cat === "expertise" ? "Expertise" : "Type";

  return (
    <div ref={containerRef} className="relative group">
      <label className="label-dark">Domaines & expertises</label>

      {/* Input area with tags */}
      <div
        className="flex flex-wrap items-center gap-1.5 min-h-[48px] px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] focus-within:border-primary/50 transition-colors duration-300 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        <AnimatePresence mode="popLayout">
          {value.map((tag) => (
            <motion.span
              key={tag}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary select-none"
            >
              {tag}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTag(tag);
                }}
                className="flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors p-0.5 cursor-pointer"
              >
                <X size={12} />
              </button>
            </motion.span>
          ))}
        </AnimatePresence>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={
            value.length === 0 ? "Ex: Application Web, UX/UI, IA…" : ""
          }
          className="flex-1 min-w-[120px] bg-transparent outline-none text-white/80 placeholder-white/25 text-sm font-body"
        />
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && totalOptions > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 left-0 right-0 mt-1.5 rounded-xl border border-white/10 bg-dark shadow-2xl shadow-black/40 overflow-hidden max-h-[220px] overflow-y-auto styled-scrollbar"
          >
            {filtered.map((s, idx) => (
              <button
                key={s.label}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => addTag(s.label)}
                onMouseEnter={() => setHighlightIdx(idx)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-left text-sm transition-colors cursor-pointer"
                style={{
                  backgroundColor:
                    highlightIdx === idx ? "rgba(255,85,0,0.1)" : "transparent",
                  color:
                    highlightIdx === idx
                      ? "var(--color-primary)"
                      : "rgba(255,255,255,0.6)",
                }}
              >
                <span>{s.label}</span>
                <span
                  className="text-[10px] uppercase tracking-wider rounded-full px-2 py-0.5 font-medium"
                  style={{
                    backgroundColor:
                      s.category === "expertise"
                        ? "rgba(255,85,0,0.12)"
                        : "rgba(255,255,255,0.06)",
                    color:
                      s.category === "expertise"
                        ? "var(--color-primary)"
                        : "rgba(255,255,255,0.35)",
                  }}
                >
                  {categoryLabel(s.category)}
                </span>
              </button>
            ))}

            {showCustom && (
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => addTag(query.trim())}
                onMouseEnter={() => setHighlightIdx(filtered.length)}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-left text-sm border-t border-white/5 transition-colors cursor-pointer"
                style={{
                  backgroundColor:
                    highlightIdx === filtered.length
                      ? "rgba(255,85,0,0.1)"
                      : "transparent",
                  color:
                    highlightIdx === filtered.length
                      ? "var(--color-primary)"
                      : "rgba(255,255,255,0.5)",
                }}
              >
                <span className="text-primary/60">+</span>
                Ajouter «&nbsp;{query.trim()}&nbsp;»
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
