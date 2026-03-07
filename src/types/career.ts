export interface JobOffer {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  shortDescription: string;
}

export const openPositions: JobOffer[] = [
  {
    id: "fullstack-dev",
    title: "Développeur(se) Full-Stack React / Node.js",
    department: "Ingénierie",
    type: "CDI • Temps plein",
    location: "Montréal, QC (Hybride)",
    shortDescription: "Participez à la création d'architectures robustes et d'interfaces intuitives pour nos clients internationaux."
  },
  {
    id: "mobile-flutter",
    title: "Développeur(se) Mobile Flutter",
    department: "Ingénierie",
    type: "CDI • Temps plein",
    location: "Remote / France",
    shortDescription: "Rejoignez notre pôle mobile pour concevoir des applications fluides et performantes sur iOS et Android."
  },
  {
    id: "ux-ui-designer",
    title: "Product Designer Senior",
    department: "Design",
    type: "CDI • Temps plein",
    location: "Montréal, QC (Hybride)",
    shortDescription: "Donnez vie à des expériences utilisateur mémorables à travers un design épuré et stratégique."
  }
];
