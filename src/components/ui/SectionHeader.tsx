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
        "flex flex-col gap-5 w-full",
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
          "text-3xl md:text-4xl lg:text-5xl font-heading font-semibold tracking-tight leading-[1.1] max-w-4xl",
          colors[variant].title,
        )}
      >
        {title}
      </h2>

      {/* Sous-texte avec max-width identique ou proche pour l'équilibre visuel */}
      {subtext && (
        <p
          className={cn(
            "text-md-body md:text-lg-body font-body leading-relaxed max-w-3xl",
            colors[variant].subtext,
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
