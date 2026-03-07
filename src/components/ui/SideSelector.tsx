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
                "group relative flex cursor-pointer flex-col items-start overflow-hidden rounded-2xl p-4 text-left transition-all duration-500 md:p-5",
                isActive
                  ? "bg-dark shadow-xl"
                  : "hover:bg-border-lighter bg-transparent",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId={`${layoutIdPrefix}-active-bg`}
                  className="bg-dark absolute inset-0 z-0 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={cn(
                  "font-heading relative z-10 text-left text-lg font-bold tracking-tight uppercase transition-colors duration-300 md:text-3xl",
                  isActive
                    ? "text-white"
                    : "text-dark group-hover:text-primary",
                )}
              >
                {item.title}
              </span>
              <span
                className={cn(
                  "font-body relative z-10 mt-0.5 text-left text-[9px] tracking-widest uppercase transition-colors duration-300 md:text-xs",
                  isActive ? "text-primary" : "text-muted",
                )}
              >
                {item.subtitle}
              </span>

              {isActive && (
                <motion.div
                  layoutId={`${layoutIdPrefix}-dot-large`}
                  className="bg-primary absolute top-1/2 right-4 z-10 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
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
              "group relative flex cursor-pointer rounded-xl transition-all duration-300",
              direction === "responsive"
                ? "h-20 flex-1 flex-col items-center justify-center gap-2 lg:h-auto lg:flex-row lg:justify-start lg:gap-4 lg:px-5 lg:py-4"
                : "flex-row items-center justify-start gap-4 px-5 py-4",
              isActive
                ? "bg-dark text-white shadow-lg"
                : "bg-border-lighter text-body hover:bg-border-lighter lg:bg-transparent",
            )}
          >
            {/* Icône */}
            {item.icon && (
              <div
                className={cn(
                  "relative z-10 flex shrink-0 items-center justify-center transition-colors duration-300",
                  direction === "responsive"
                    ? isActive
                      ? "text-primary lg:bg-primary lg:h-10 lg:w-10 lg:rounded-lg lg:text-white"
                      : "text-body lg:bg-border-light lg:group-hover:bg-border lg:h-10 lg:w-10 lg:rounded-lg"
                    : cn(
                        "h-10 w-10 rounded-lg",
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
              className={cn("relative z-10 hidden min-w-0 text-left lg:block")}
            >
              <p
                className={cn(
                  "font-heading text-left text-[15px] leading-snug font-semibold transition-colors duration-300",
                  isActive
                    ? "text-white"
                    : "text-dark group-hover:text-primary",
                )}
              >
                {item.title}
              </p>
              <p
                className={cn(
                  "mt-0.5 truncate text-left text-[13px] leading-snug transition-colors duration-300",
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
                  "bg-primary absolute shrink-0 rounded-full",
                  direction === "responsive"
                    ? "bottom-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 lg:top-1/2 lg:right-4 lg:bottom-auto lg:left-auto lg:h-2 lg:w-2 lg:translate-x-0 lg:-translate-y-1/2"
                    : "top-1/2 right-4 h-2 w-2 -translate-y-1/2",
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
