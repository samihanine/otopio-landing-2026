export type Tag = {
  id: string;
  name: string;
  hexColor: string;
};

export const tags: Tag[] = [
  { id: "health", name: "Santé & Médical", hexColor: "#1a1a1a" },
  { id: "webapp", name: "Application Web", hexColor: "#222222" },
  { id: "mobile", name: "Application Mobile", hexColor: "#2a2a2a" },
  { id: "uxui", name: "Design UX/UI", hexColor: "#333333" },
  { id: "3d", name: "Expérience 3D", hexColor: "#111111" },
  { id: "saas", name: "SaaS", hexColor: "#1c1c1c" },
  { id: "b2b", name: "SaaS B2B", hexColor: "#1c1c1c" },
  { id: "ecommerce", name: "E-commerce", hexColor: "#252525" },
  { id: "social", name: "Réseau Social", hexColor: "#181818" },
  { id: "fintech", name: "Fintech", hexColor: "#232323" },
  { id: "greentech", name: "GreenTech", hexColor: "#1f1f1f" },
  { id: "associatif", name: "Associatif", hexColor: "#1f1f1f" },
];
