import type { ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";
import { cn } from "../../utils/cn";

export interface SectionHeaderProps {
  /** Titre principal de la section */
  title: ReactNode;
  /** Texte du badge au-dessus du titre (optionnel) */
  label?: string;
  /** Paragraphe de description (optionnel) */
  subtext?: ReactNode;
  /** Alignement horizontal des éléments (défaut: left) */
  align?: "left" | "center" | "right";
  /** Variante de couleur : "dark" pour fond clair, "light" pour fond sombre */
  variant?: "dark" | "light";
  /** Classes CSS additionnelles pour le conteneur */
  className?: string;
}

export function SectionHeader({
  title,
  label,
  subtext,
  align = "left",
  variant = "dark",
  className,
}: SectionHeaderProps) {
  // Mapping des alignements
  const alignmentMap = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  // Mapping des couleurs selon la variante
  const colors = {
    dark: {
      title: "text-dark",
      subtext: "text-muted",
      label: "dark" as const,
    },
    light: {
      title: "text-white",
      subtext: "text-white/60",
      label: "light" as const,
    },
  };

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-5",
        alignmentMap[align],
        className,
      )}
    >
      {/* Label/Badge optionnel */}
      {label && (
        <SectionLabel
          text={label}
          animateOnScroll={true}
          variant={colors[variant].label}
          className="mb-1"
        />
      )}

      {/* Titre standardisé avec max-width pour la lisibilité */}
      <h2
        className={cn(
          "font-heading max-w-4xl text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-5xl",
          colors[variant].title,
        )}
      >
        {title}
      </h2>

      {/* Sous-texte avec max-width identique ou proche pour l'équilibre visuel */}
      {subtext && (
        <p
          className={cn(
            "text-md-body md:text-lg-body font-body max-w-3xl leading-relaxed",
            colors[variant].subtext,
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
