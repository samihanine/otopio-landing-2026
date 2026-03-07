export interface TeamStat {
  value: number;
  label: string;
  description: string;
}

export interface TeamCollaborator {
  name: string;
  avatarUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  imageUrl: string;
  stats: TeamStat[];
  collaborators: {
    text: string;
    items: TeamCollaborator[];
  };
}

export const team: TeamMember[] = [
  {
    id: "sami",
    name: "Sami",
    role: "CEO & CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=800",
    bio: [
      "Sami est le cerveau technique derrière Otopio. Avec une double casquette de CEO et CTO, il allie vision stratégique et expertise technologique pointue.",
      "Il supervise l'architecture des projets complexes et s'assure que chaque solution est robuste, évolutive et à la pointe de l'innovation.",
    ],
    stats: [
      {
        value: 95,
        label: "Architecture",
        description: "Conception de systèmes",
      },
      { value: 90, label: "Vision", description: "Stratégie d'entreprise" },
      { value: 85, label: "Leadership", description: "Gestion d'équipe" },
    ],
    collaborators: {
      text: "Sami travaille en binôme avec Maissane sur la vision",
      items: [
        { name: "Maissane", avatarUrl: "https://i.pravatar.cc/150?u=maissane" },
        { name: "Noah", avatarUrl: "https://i.pravatar.cc/150?u=noah" },
      ],
    },
  },
  {
    id: "maissane",
    name: "Maissane",
    role: "CEO & UI/UX Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800",
    bio: [
      "Maissane insuffle l'âme créative d'Otopio. En tant que CEO et Lead UI/UX, elle garantit que chaque produit n'est pas seulement fonctionnel, mais magnifique et intuitif.",
      "Son approche centrée sur l'utilisateur transforme des concepts complexes en expériences digitales fluides et engageantes.",
    ],
    stats: [
      { value: 95, label: "Créativité", description: "Design et esthétique" },
      { value: 90, label: "Empathie", description: "Expérience utilisateur" },
      { value: 85, label: "Stratégie", description: "Positionnement produit" },
    ],
    collaborators: {
      text: "Maissane s'appuie sur Mathilde pour l'organisation",
      items: [
        { name: "Sami", avatarUrl: "https://i.pravatar.cc/150?u=sami" },
        { name: "Mathilde", avatarUrl: "https://i.pravatar.cc/150?u=mathilde" },
      ],
    },
  },
  {
    id: "noah",
    name: "Noah",
    role: "Développeur",
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    bio: [
      "Noah est le moteur de l'exécution technique. Développeur passionné, il transforme les maquettes de Maissane et l'architecture de Sami en code propre et performant.",
      "Toujours à l'affût des dernières technologies, il assure la livraison de produits de haute qualité.",
    ],
    stats: [
      { value: 90, label: "Code", description: "Développement front/back" },
      { value: 85, label: "Rigueur", description: "Qualité du code" },
      { value: 80, label: "Agilité", description: "Adaptation technique" },
    ],
    collaborators: {
      text: "Noah collabore étroitement avec Sami sur le code",
      items: [
        { name: "Sami", avatarUrl: "https://i.pravatar.cc/150?u=sami" },
        { name: "Mathilde", avatarUrl: "https://i.pravatar.cc/150?u=mathilde" },
      ],
    },
  },
  {
    id: "mathilde",
    name: "Mathilde",
    role: "Gestion de Projet",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio: [
      "Mathilde est la cheffe d'orchestre d'Otopio. Elle veille à ce que chaque projet avance sans accroc, en respectant les délais et les budgets.",
      "Sa communication transparente et son sens aigu de l'organisation font d'elle le pilier central entre l'équipe technique et les clients.",
    ],
    stats: [
      { value: 95, label: "Organisation", description: "Planification" },
      { value: 90, label: "Communication", description: "Lien client/équipe" },
      { value: 85, label: "Résolution", description: "Gestion des risques" },
    ],
    collaborators: {
      text: "Mathilde coordonne l'ensemble de l'équipe",
      items: [
        { name: "Maissane", avatarUrl: "https://i.pravatar.cc/150?u=maissane" },
        { name: "Noah", avatarUrl: "https://i.pravatar.cc/150?u=noah" },
      ],
    },
  },
];
