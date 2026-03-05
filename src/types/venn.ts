export interface VennEllipse {
  id: string;
  label: string;
  desc: string;
  shortLabel: string;
  // Initial state (logo-like)
  ix: number;
  iy: number;
  irx: number;
  iry: number;
  // Final state (venn triangle)
  fx: number;
  fy: number;
  frx: number;
  fry: number;
  color: string;
  // Label final position
  lx: number;
  ly: number;
}

export interface VennData {
  label: string;
  title: string;
  titleAccent: string;
  ellipses: VennEllipse[];
  intersectionTitle: string;
  intersectionDesc: string;
}

export const defaultVennData: VennData = {
  label: "Nos Expertises",
  title: "Où le développement, l'IA et le design",
  titleAccent: "convergent.",
  ellipses: [
    {
      id: "dev",
      label: "Développement",
      shortLabel: "Dev",
      desc: "Des solutions logicielles robustes, performantes et évolutives, conçues pour accompagner votre croissance à long terme.",
      ix: 222,
      iy: 220,
      irx: 70,
      iry: 64,
      fx: 250,
      fy: 165,
      frx: 105,
      fry: 105,
      color: "var(--color-subtle)",
      lx: 250,
      ly: 115,
    },
    {
      id: "ai",
      shortLabel: "IA",
      label: "Intelligence Artificielle",
      desc: "L'intégration stratégique de l'IA dans vos processus pour automatiser, prédire et créer de la valeur mesurable.",
      ix: 250,
      iy: 220,
      irx: 70,
      iry: 64,
      fx: 180,
      fy: 285,
      frx: 105,
      fry: 105,
      color: "var(--color-subtle)",
      lx: 125,
      ly: 330,
    },
    {
      id: "design",
      label: "Design UX/UI",
      shortLabel: "UX/UI",
      desc: "Des interfaces élégantes et intuitives qui placent l'utilisateur au cœur de chaque décision de conception.",
      ix: 278,
      iy: 220,
      irx: 70,
      iry: 64,
      fx: 320,
      fy: 285,
      frx: 105,
      fry: 105,
      color: "var(--color-subtle)",
      lx: 375,
      ly: 330,
    },
  ],
  intersectionTitle: "L'Approche Otopio",
  intersectionDesc:
    "À l'intersection de ces trois expertises naît notre force : des produits numériques pensés, beaux et intelligents — où chaque ligne de code, chaque pixel et chaque algorithme travaillent ensemble.",
};
