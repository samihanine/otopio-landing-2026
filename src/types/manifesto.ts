// ─── Manifesto Token Types ───

export type ManifestoToken =
  | { type: "word"; text: string; highlight?: boolean; italic?: boolean }
  | { type: "image"; src: string; alt: string }
  | { type: "break" }
  | { type: "tag"; text: string }
  | { type: "circle-word"; text: string };

export interface ManifestoContentSection {
  title: string;
  text: string;
  align?: "left" | "right";
}

export interface ManifestoData {
  label: string;
  backgroundTitle: string;
  tokens: ManifestoToken[];
  tags: string[];
  sections: ManifestoContentSection[];
}

// ─── Default Manifesto Content (FR) ───

export const defaultManifesto: ManifestoData = {
  label: "Notre Manifeste",
  backgroundTitle: "Manifeste",
  tokens: [
    { type: "word", text: "Chez" },
    { type: "word", text: "nous," },
    { type: "word", text: "technologie", highlight: true },
    { type: "break" },
    { type: "word", text: "et" },
    { type: "word", text: "créativité" },
    { type: "word", text: "ne" },
    { type: "word", text: "font" },
    { type: "word", text: "qu'un." },
    { type: "break" },
    { type: "word", text: "On" },
    { type: "circle-word", text: "transforme" },
    { type: "word", text: "vos" },
    { type: "word", text: "idées", highlight: true },
    { type: "break" },
    { type: "word", text: "en" },
    { type: "word", text: "réalités" },
    { type: "word", text: "numériques" },
    { type: "break" },
    { type: "word", text: "exceptionnelles", italic: true },
    { type: "word", text: "—" },
    { type: "break" },
    { type: "word", text: "avec" },
    { type: "word", text: "passion,", highlight: true },
    { type: "break" },
    { type: "word", text: "sans" },
    { type: "word", text: "compromis." },
  ],
  tags: [
    "Branding",
    "Web Design",
    "UI/UX",
    "Motion",
    "Stratégie",
    "Développement",
    "IA",
  ],
  sections: [
    {
      title: "Notre Équipe",
      text: "Chez Otopio, la technologie et la créativité ne font qu'un grâce à notre équipe dévouée de professionnels passionnés. Nous sommes dirigés par un CTO visionnaire, soutenus par une designeuse UI/UX de renom, et renforcés par une équipe dynamique de développeurs. Chaque membre apporte une expertise unique, une énergie créative, et un engagement sans faille pour transformer vos idées en réalités numériques exceptionnelles.",
      align: "left",
    },
    {
      title: "Notre Excellence",
      text: "Nous plaçons la barre haut en termes de qualité et de performance. Notre objectif n'est pas seulement de répondre à vos attentes, mais de les surpasser. Nous sommes dédiés à bien faire les choses, à rendre nos clients entièrement satisfaits, et à donner le meilleur de nous-mêmes dans chaque projet. Chez Otopio, chaque détail compte, et chaque projet est une opportunité de démontrer notre excellence et notre dévouement.",
      align: "right",
    },
    {
      title: "Notre Flexibilité",
      text: "Otopio est synonyme de flexibilité et d'adaptabilité. Nous comprenons que chaque client est unique, avec des besoins et des budgets variés. Que vous soyez une start-up avec des ressources limitées, ou une entreprise établie cherchant à redéfinir votre présence numérique, nous sommes là pour vous. Nous accueillons chaque projet, grand ou petit, avec la même ardeur, prêts à nous adapter et à innover pour réaliser vos visions.",
      align: "left",
    },
  ],
};
