export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2020",
    title: "Le Début",
    description:
      "Otopio est né d'une passion pour aider les startups à construire des marques significatives. Commençant comme un studio individuel à Montréal, nous avons accompagné nos trois premiers clients et appris que la clarté l'emporte toujours sur la complexité.",
    highlight: "3 premiers clients",
  },
  {
    year: "2021",
    title: "Trouver notre Voix",
    description:
      "Nous avons affiné notre processus et développé notre approche signature : combiner une typographie audacieuse, une pensée stratégique et une esthétique minimaliste. Le studio s'est agrandi avec une équipe de 3 passionnés.",
    highlight: "Équipe de 3",
  },
  {
    year: "2022",
    title: "La Percée",
    description:
      "Notre travail pour Minimal Spaces est devenu viral, attirant une vague de nouveaux clients dans les secteurs de l'architecture, de la technologie et du luxe. Nous avons livré 12 projets majeurs cette année-là.",
    highlight: "12 projets majeurs",
  },
  {
    year: "2023",
    title: "Élargir les Horizons",
    description:
      "Nous avons évolué au-delà du branding vers le design et le développement de produits complets. Nos partenariats nous ont poussés vers le design de plateforme, le motion design et la direction créative.",
    highlight: "Expansion produit",
  },
  {
    year: "2024",
    title: "L'Ère des Plateformes",
    description:
      "Lumen Os et Portpolio sont devenus nos projets les plus ambitieux. Nous avons adopté l'animation basée sur le scroll, les interfaces sombres et le design mobile-first. Le studio est désormais une référence créative.",
    highlight: "Référence créative",
  },
  {
    year: "2025",
    title: "Vers le Futur",
    description:
      "Nous redoublons d'efforts sur les systèmes de design, les workflows augmentés par l'IA et les expériences web immersives. Notre objectif : rendre chaque pixel intentionnel.",
    highlight: "IA & Design immersif",
  },
];
