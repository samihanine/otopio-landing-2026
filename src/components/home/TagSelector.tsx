import { motion } from "framer-motion";
import { tags } from "../../types/tags";
import { services } from "../../types/services";

interface TagSelectorProps {
  selected: string[];
  onChange: (selected: string[]) => void;
}

const expertiseOptions = services.map((s) => ({
  id: `exp-${s.id}`,
  label: s.label,
}));

const tagOptions = tags.map((t) => ({
  id: `tag-${t.id}`,
  label: t.name,
}));

export function TagSelector({ selected, onChange }: TagSelectorProps) {
  const toggle = (id: string) => {
    onChange(
      selected.includes(id)
        ? selected.filter((s) => s !== id)
        : [...selected, id],
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Expertises */}
      <div>
        <span className="label-dark mb-2 block">Expertises</span>
        <div className="flex flex-wrap gap-2">
          {expertiseOptions.map((opt) => {
            const active = selected.includes(opt.id);
            return (
              <motion.button
                key={opt.id}
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => toggle(opt.id)}
                className="cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 select-none"
                style={{
                  borderColor: active
                    ? "var(--color-primary)"
                    : "rgba(255,255,255,0.12)",
                  backgroundColor: active
                    ? "rgba(255,85,0,0.15)"
                    : "transparent",
                  color: active
                    ? "var(--color-primary)"
                    : "rgba(255,255,255,0.45)",
                }}
              >
                {opt.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Type de projet */}
      <div>
        <span className="label-dark mb-2 block">Type de projet</span>
        <div className="flex flex-wrap gap-2">
          {tagOptions.map((opt) => {
            const active = selected.includes(opt.id);
            return (
              <motion.button
                key={opt.id}
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => toggle(opt.id)}
                className="cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 select-none"
                style={{
                  borderColor: active
                    ? "var(--color-primary)"
                    : "rgba(255,255,255,0.12)",
                  backgroundColor: active
                    ? "rgba(255,85,0,0.15)"
                    : "transparent",
                  color: active
                    ? "var(--color-primary)"
                    : "rgba(255,255,255,0.45)",
                }}
              >
                {opt.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
