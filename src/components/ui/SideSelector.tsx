import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../utils/cn";

export interface SideSelectorItem {
  id: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

interface SideSelectorProps {
  items: SideSelectorItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  layoutIdPrefix: string;
  variant?: "large" | "compact";
  direction?: "responsive" | "vertical";
  className?: string;
}

export function SideSelector({
  items,
  selectedId,
  onSelect,
  layoutIdPrefix,
  variant = "compact",
  direction = "responsive",
  className = "",
}: SideSelectorProps) {
  // ─── VARIANTE LARGE (Équipe) ───
  if (variant === "large") {
    const containerClasses =
      direction === "responsive"
        ? "grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col gap-2 px-4 lg:px-0"
        : "flex flex-col gap-2";

    return (
      <div className={cn(containerClasses, className)}>
        {items.map((item) => {
          const isActive = item.id === selectedId;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={cn(
                "relative group flex flex-col items-start text-left p-4 md:p-5 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden",
                isActive
                  ? "bg-dark shadow-xl"
                  : "bg-transparent hover:bg-border-lighter",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId={`${layoutIdPrefix}-active-bg`}
                  className="absolute inset-0 bg-dark z-0 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={cn(
                  "relative z-10 text-left text-lg md:text-3xl font-heading font-bold uppercase tracking-tight transition-colors duration-300",
                  isActive
                    ? "text-white"
                    : "text-dark group-hover:text-primary",
                )}
              >
                {item.title}
              </span>
              <span
                className={cn(
                  "relative z-10 text-left text-[9px] md:text-xs font-body uppercase tracking-widest mt-0.5 transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted",
                )}
              >
                {item.subtitle}
              </span>

              {isActive && (
                <motion.div
                  layoutId={`${layoutIdPrefix}-dot-large`}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary z-10"
                />
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-2 px-4 lg:px-0",
        direction === "responsive" ? "flex-row lg:flex-col" : "flex-col",
        className,
      )}
    >
      {items.map((item) => {
        const isActive = item.id === selectedId;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={cn(
              "group relative flex transition-all duration-300 cursor-pointer rounded-xl",
              direction === "responsive"
                ? "flex-1 flex-col h-20 items-center justify-center gap-2 lg:flex-row lg:h-auto lg:px-5 lg:py-4 lg:justify-start lg:gap-4"
                : "flex-row items-center gap-4 px-5 py-4 justify-start",
              isActive
                ? "bg-dark text-white shadow-lg"
                : "bg-border-lighter lg:bg-transparent text-body hover:bg-border-lighter",
            )}
          >
            {/* Icône */}
            {item.icon && (
              <div
                className={cn(
                  "relative z-10 shrink-0 flex items-center justify-center transition-colors duration-300",
                  direction === "responsive"
                    ? isActive
                      ? "text-primary lg:bg-primary lg:text-white lg:w-10 lg:h-10 lg:rounded-lg"
                      : "text-body lg:bg-border-light lg:w-10 lg:h-10 lg:rounded-lg lg:group-hover:bg-border"
                    : cn(
                        "w-10 h-10 rounded-lg",
                        isActive
                          ? "bg-primary text-white"
                          : "bg-border-light group-hover:bg-border text-body",
                      ),
                )}
              >
                <div
                  className={
                    direction === "responsive" && !isActive
                      ? ""
                      : "scale-110 lg:scale-100"
                  }
                >
                  {item.icon}
                </div>
              </div>
            )}

            {/* Texte (Uniquement Desktop) */}
            <div
              className={cn("relative z-10 min-w-0 hidden lg:block text-left")}
            >
              <p
                className={cn(
                  "text-left font-heading font-semibold text-[15px] leading-snug transition-colors duration-300",
                  isActive
                    ? "text-white"
                    : "text-dark group-hover:text-primary",
                )}
              >
                {item.title}
              </p>
              <p
                className={cn(
                  "text-left text-[13px] leading-snug mt-0.5 transition-colors duration-300 truncate",
                  isActive ? "text-white/60" : "text-subtle",
                )}
              >
                {item.subtitle}
              </p>
            </div>

            {/* Le Dot (Fixé sur la droite en Desktop) */}
            {isActive && (
              <motion.div
                layoutId={`${layoutIdPrefix}-moving-dot`}
                className={cn(
                  "bg-primary rounded-full shrink-0 absolute",
                  direction === "responsive"
                    ? "bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 lg:bottom-auto lg:left-auto lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:w-2 lg:h-2"
                    : "right-4 top-1/2 -translate-y-1/2 w-2 h-2",
                )}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
