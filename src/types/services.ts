export type Service = {
  id: string;
  iconName: string;
  label: string;
};

export const services: Service[] = [
  {
    id: "conception-ingenierie",
    iconName: "PenTool",
    label: "Conception & Ingénierie",
  },
  {
    id: "conseil-strategie",
    iconName: "Target",
    label: "Conseil & Stratégie Produit",
  },
  {
    id: "ingenierie-logicielle",
    iconName: "Server",
    label: "Ingénierie Logicielle & SaaS",
  },
  {
    id: "intelligence-artificielle",
    iconName: "Brain",
    label: "Intelligence Artificielle & Data Science",
  },
  {
    id: "growth-automatisation",
    iconName: "Zap",
    label: "Growth Tech & Automatisation",
  },
];

/* ═══════════════════════════════════════════
   Service Detail — Modular page system
   ═══════════════════════════════════════════ */

export type ServiceSectionLayout =
  | "hero-banner"
  | "features-grid"
  | "process-steps"
  | "text-highlight"
  | "icon-list"
  | "comparison"
  | "cta-block"
  | "testimonial-inline";

export type ServiceSubItem = {
  title?: string;
  description?: string;
  iconName?: string;
  imageUrl?: string;
  label?: string;
  href?: string;
};

export type ServiceSection = {
  type: ServiceSectionLayout;
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  iconName?: string;
  items?: ServiceSubItem[];
};

export type ServiceDetail = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  iconName: string;
  hexColor: string;
  keywords: string[];
  projectIds?: string[];
  sections: ServiceSection[];
};

export const servicesDetails: ServiceDetail[] = [
  {
    id: "conception-ingenierie",
    title: "Conception & Ingénierie",
    tagline: "L'idée prend forme, le produit prend vie.",
    summary:
      "Nous transformons vos idées en produits digitaux concrets : de la recherche utilisateur au design system, en passant par le prototypage interactif et l'architecture technique.",
    iconName: "PenTool",
    hexColor: "#6366F1",
    keywords: [
      "UX Research",
      "UI Design",
      "Prototypage",
      "Design System",
      "Architecture",
    ],
    projectIds: ["medicpub", "drivite", "assoinfo", "coordia", "voolta"],
    sections: [
      {
        type: "hero-banner",
        title: "Du concept au produit fini",
        description:
          "Une approche méthodique qui allie créativité et rigueur technique pour concevoir des expériences digitales qui marquent.",
        imageUrl:
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        type: "features-grid",
        title: "Notre approche",
        subtitle: "Chaque étape est pensée pour maximiser l'impact.",
        items: [
          {
            title: "Recherche UX",
            description:
              "Interviews, personas, user journeys — on comprend vos utilisateurs avant de dessiner le moindre pixel.",
            iconName: "Search",
          },
          {
            title: "Design UI",
            description:
              "Interfaces modernes, accessibles et cohérentes, conçues dans Figma avec un design system réutilisable.",
            iconName: "Palette",
          },
          {
            title: "Prototypage interactif",
            description:
              "Prototypes haute fidélité pour valider chaque interaction avant le développement.",
            iconName: "MousePointerClick",
          },
          {
            title: "Architecture technique",
            description:
              "Choix technologiques solides, scalabilité pensée dès le jour 1.",
            iconName: "Blocks",
          },
          {
            title: "Design System",
            description:
              "Composants réutilisables, tokens, guidelines — une base solide pour scaler votre produit.",
            iconName: "Component",
          },
          {
            title: "Tests utilisateurs",
            description:
              "Validation terrain avec de vrais utilisateurs pour itérer intelligemment.",
            iconName: "UserCheck",
          },
        ],
      },
      {
        type: "process-steps",
        title: "Notre processus",
        subtitle: "4 phases, zéro improvisation.",
        items: [
          {
            title: "Découverte",
            description:
              "Audit de l'existant, entretiens stakeholders, analyse concurrentielle et définition de la vision produit.",
            iconName: "Compass",
            label: "01",
          },
          {
            title: "Conception",
            description:
              "Wireframes, maquettes, prototypes — itérations rapides pour converger vers la meilleure solution.",
            iconName: "PenTool",
            label: "02",
          },
          {
            title: "Construction",
            description:
              "Développement modulaire avec intégration continue. Le design prend vie pixel par pixel.",
            iconName: "Hammer",
            label: "03",
          },
          {
            title: "Livraison",
            description:
              "Tests, déploiement, documentation. On livre un produit prêt, pas un brouillon.",
            iconName: "Rocket",
            label: "04",
          },
        ],
      },
      {
        type: "text-highlight",
        title: "Pourquoi nous ?",
        description:
          "Parce que concevoir un produit digital ne se résume pas à dessiner des écrans. Nous croisons design thinking, engineering et stratégie business pour créer des produits qui fonctionnent — et qui durent.",
        iconName: "Sparkles",
      },
      {
        type: "cta-block",
        title: "Un projet à concevoir ?",
        description:
          "Parlons de votre idée et construisons ensemble le produit qui fera la différence.",
        items: [
          { title: "Discutons", href: "/contact", iconName: "ArrowRight" },
        ],
      },
    ],
  },
  {
    id: "conseil-strategie",
    title: "Conseil & Stratégie Produit",
    tagline: "Voir clair, décider vite, exécuter juste.",
    summary:
      "Nous aidons les fondateurs et équipes produit à prendre les bonnes décisions : positionnement, roadmap, priorisation, go-to-market — avec clarté et méthode.",
    iconName: "Target",
    hexColor: "#F59E0B",
    keywords: [
      "Stratégie",
      "Roadmap",
      "Positionnement",
      "Go-to-Market",
      "Product Management",
    ],
    projectIds: ["heeroo", "leap", "mtaregion"],
    sections: [
      {
        type: "hero-banner",
        title: "Le bon produit, au bon moment",
        description:
          "On vous aide à passer de l'intuition à la conviction — avec des données, un cadre clair et une exécution sans friction.",
        imageUrl:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
      },
      {
        type: "features-grid",
        title: "Nos expertises stratégiques",
        subtitle: "Les leviers clés pour un produit qui trouve son marché.",
        items: [
          {
            title: "Audit produit",
            description:
              "Analyse approfondie de votre produit existant : forces, faiblesses, opportunités d'amélioration.",
            iconName: "ClipboardCheck",
          },
          {
            title: "Roadmap produit",
            description:
              "Priorisation des fonctionnalités par impact business et effort — fini les features inutiles.",
            iconName: "Map",
          },
          {
            title: "Positionnement",
            description:
              "Définition de votre proposition de valeur unique face à la concurrence.",
            iconName: "Crosshair",
          },
          {
            title: "Go-to-Market",
            description:
              "Plan de lancement structuré : channels, messaging, pricing, premiers utilisateurs.",
            iconName: "Megaphone",
          },
        ],
      },
      {
        type: "process-steps",
        title: "Comment on travaille",
        items: [
          {
            title: "Diagnostic",
            description:
              "On plonge dans votre contexte : marché, concurrence, utilisateurs, contraintes techniques et business.",
            iconName: "Stethoscope",
            label: "01",
          },
          {
            title: "Cadrage",
            description:
              "On définit ensemble la vision, les objectifs mesurables et les priorités.",
            iconName: "Frame",
            label: "02",
          },
          {
            title: "Activation",
            description:
              "On livre un plan d'action concret avec roadmap, KPIs et recommandations opérationnelles.",
            iconName: "Play",
            label: "03",
          },
        ],
      },
      {
        type: "comparison",
        title: "Avec vs. Sans stratégie produit",
        items: [
          {
            title: "Avec stratégie",
            description:
              "Roadmap claire et priorisée|Décisions basées sur la data|Time-to-market optimisé|Budget maîtrisé|Équipe alignée",
            iconName: "Check",
          },
          {
            title: "Sans stratégie",
            description:
              "Features empilées sans vision|Décisions au feeling|Retards à répétition|Coûts qui explosent|Équipe perdue",
            iconName: "X",
          },
        ],
      },
      {
        type: "cta-block",
        title: "Besoin de clarté sur votre produit ?",
        description: "Réservez un appel stratégique gratuit de 30 minutes.",
        items: [
          {
            title: "Prendre rendez-vous",
            href: "/contact",
            iconName: "ArrowRight",
          },
        ],
      },
    ],
  },
  {
    id: "ingenierie-logicielle",
    title: "Ingénierie Logicielle & SaaS",
    tagline: "Du code qui scale, des apps qui tiennent.",
    summary:
      "Nous construisons des applications web et SaaS robustes, performantes et maintenables — avec les meilleures pratiques d'ingénierie moderne.",
    iconName: "Server",
    hexColor: "#10B981",
    keywords: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "SaaS",
      "API",
      "Cloud",
    ],
    projectIds: ["medicpub", "assoinfo", "coordia", "drivite", "mtaregion"],
    sections: [
      {
        type: "hero-banner",
        title: "L'ingénierie au service du produit",
        description:
          "Stack moderne, architecture propre, CI/CD, tests — on ne fait pas de compromis sur la qualité technique.",
        imageUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        type: "icon-list",
        title: "Notre stack technique",
        subtitle: "Des technologies éprouvées, choisies pour leur fiabilité.",
        items: [
          {
            title: "React / Next.js",
            description: "Interfaces réactives et performantes",
            iconName: "Code2",
          },
          {
            title: "TypeScript",
            description: "Typage strict pour un code fiable",
            iconName: "FileCode2",
          },
          {
            title: "Node.js / Python",
            description: "Backends rapides et flexibles",
            iconName: "Server",
          },
          {
            title: "PostgreSQL / Redis",
            description: "Données structurées et cache performant",
            iconName: "Database",
          },
          {
            title: "AWS / Vercel / Docker",
            description: "Déploiement cloud scalable",
            iconName: "Cloud",
          },
          {
            title: "CI/CD & Tests",
            description: "Qualité automatisée à chaque commit",
            iconName: "GitBranch",
          },
        ],
      },
      {
        type: "features-grid",
        title: "Ce qu'on construit",
        items: [
          {
            title: "Applications SaaS",
            description:
              "Plateformes multi-tenant avec billing, auth, dashboards et API.",
            iconName: "LayoutDashboard",
          },
          {
            title: "Portails & Back-offices",
            description:
              "Interfaces d'administration sur mesure, complexes et intuitives.",
            iconName: "PanelLeft",
          },
          {
            title: "APIs & Intégrations",
            description:
              "REST et GraphQL, webhooks, connecteurs tiers — tout communique.",
            iconName: "Plug",
          },
          {
            title: "Migration & Refactoring",
            description: "On modernise votre legacy sans tout casser.",
            iconName: "RefreshCw",
          },
        ],
      },
      {
        type: "process-steps",
        title: "Notre méthode de développement",
        items: [
          {
            title: "Architecture",
            description:
              "Définition du schéma de données, des services et de l'infrastructure.",
            iconName: "Boxes",
            label: "01",
          },
          {
            title: "Sprints",
            description:
              "Développement itératif en cycles courts avec démos régulières.",
            iconName: "IterationCw",
            label: "02",
          },
          {
            title: "Review & QA",
            description:
              "Code review systématique, tests automatisés, monitoring.",
            iconName: "ShieldCheck",
            label: "03",
          },
          {
            title: "Déploiement",
            description:
              "Mise en production continue avec rollback instantané.",
            iconName: "Upload",
            label: "04",
          },
        ],
      },
      {
        type: "cta-block",
        title: "Prêt à construire ?",
        description:
          "Discutons de votre projet technique et voyons comment on peut vous aider.",
        items: [
          {
            title: "Lancer le projet",
            href: "/contact",
            iconName: "ArrowRight",
          },
        ],
      },
    ],
  },
  {
    id: "intelligence-artificielle",
    title: "Intelligence Artificielle & Data Science",
    tagline: "L'IA au service de votre business, pas l'inverse.",
    summary:
      "Nous concevons des solutions d'IA sur mesure — chatbots intelligents, analyse prédictive, automatisation cognitive — intégrées directement dans vos produits et workflows.",
    iconName: "Brain",
    hexColor: "#8B5CF6",
    keywords: [
      "IA",
      "Machine Learning",
      "NLP",
      "LLM",
      "Data Science",
      "Chatbot",
      "RAG",
    ],
    projectIds: ["heeroo"],
    sections: [
      {
        type: "hero-banner",
        title: "L'IA qui crée de la valeur",
        description:
          "Pas de buzzwords, pas de gadgets. Des solutions d'IA qui résolvent de vrais problèmes business et s'intègrent naturellement à vos outils.",
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
      },
      {
        type: "features-grid",
        title: "Nos solutions IA",
        subtitle: "Des briques intelligentes pour augmenter vos produits.",
        items: [
          {
            title: "Chatbots & Assistants IA",
            description:
              "Agents conversationnels propulsés par les LLMs, entraînés sur vos données, intégrés à vos outils.",
            iconName: "MessageSquare",
          },
          {
            title: "RAG & Knowledge Base",
            description:
              "Retrieval-Augmented Generation pour des réponses précises basées sur vos documents internes.",
            iconName: "BookOpen",
          },
          {
            title: "Analyse prédictive",
            description:
              "Modèles ML pour anticiper tendances, churn, demande et prendre de meilleures décisions.",
            iconName: "TrendingUp",
          },
          {
            title: "Automatisation cognitive",
            description:
              "Classification, extraction, résumé — l'IA traite ce qui prenait des heures en quelques secondes.",
            iconName: "Workflow",
          },
          {
            title: "Computer Vision",
            description:
              "Détection d'objets, OCR, analyse d'images — la vision par ordinateur au service de vos processus.",
            iconName: "Eye",
          },
          {
            title: "Fine-tuning & MLOps",
            description:
              "Entraînement de modèles personnalisés et pipelines de déploiement automatisés.",
            iconName: "Settings",
          },
        ],
      },
      {
        type: "text-highlight",
        title: "Notre philosophie IA",
        description:
          "L'IA n'est pas une fin en soi. On commence toujours par le problème business, puis on choisit la technologie la plus adaptée — parfois c'est du ML, parfois c'est une simple règle métier bien pensée.",
        iconName: "Lightbulb",
      },
      {
        type: "process-steps",
        title: "Notre démarche IA",
        items: [
          {
            title: "Cadrage IA",
            description:
              "Identification des cas d'usage à fort impact et évaluation de la faisabilité technique.",
            iconName: "Target",
            label: "01",
          },
          {
            title: "Prototypage rapide",
            description:
              "POC en 2-4 semaines pour valider l'approche avec de vraies données.",
            iconName: "Zap",
            label: "02",
          },
          {
            title: "Industrialisation",
            description:
              "Passage en production avec monitoring, A/B testing et amélioration continue.",
            iconName: "Factory",
            label: "03",
          },
        ],
      },
      {
        type: "cta-block",
        title: "Explorez le potentiel de l'IA",
        description:
          "Un audit IA gratuit pour identifier les opportunités dans votre business.",
        items: [
          {
            title: "Demander un audit IA",
            href: "/contact",
            iconName: "ArrowRight",
          },
        ],
      },
    ],
  },
  {
    id: "growth-automatisation",
    title: "Growth Tech & Automatisation",
    tagline: "Moins de friction, plus de croissance.",
    summary:
      "Nous automatisons vos processus métier et optimisons votre stack growth — pour que votre équipe se concentre sur ce qui compte vraiment.",
    iconName: "Zap",
    hexColor: "#EF4444",
    keywords: [
      "Automatisation",
      "Growth",
      "No-code",
      "CRM",
      "Workflows",
      "Scraping",
      "Analytics",
    ],
    projectIds: ["heeroo", "voolta"],
    sections: [
      {
        type: "hero-banner",
        title: "L'automatisation intelligente",
        description:
          "Chaque tâche répétitive est une opportunité d'optimisation. On identifie, on automatise, vous grandissez.",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      },
      {
        type: "features-grid",
        title: "Ce qu'on automatise",
        subtitle: "Les workflows qui freinent votre croissance.",
        items: [
          {
            title: "Workflows métier",
            description:
              "Automatisation de vos processus internes : onboarding, facturation, relances, reporting.",
            iconName: "Workflow",
          },
          {
            title: "Intégrations CRM",
            description:
              "Connexion et synchronisation de vos outils : HubSpot, Salesforce, Pipedrive et plus.",
            iconName: "Link",
          },
          {
            title: "Scraping & Data",
            description:
              "Collecte et structuration automatique de données web pour alimenter vos processus.",
            iconName: "Globe",
          },
          {
            title: "Email & Nurturing",
            description:
              "Séquences email automatisées, segmentation dynamique, A/B testing natif.",
            iconName: "Mail",
          },
          {
            title: "Analytics & Dashboards",
            description:
              "Tableaux de bord en temps réel pour piloter votre croissance avec les bons KPIs.",
            iconName: "BarChart3",
          },
          {
            title: "Alertes & Monitoring",
            description:
              "Notifications intelligentes quand un événement critique survient dans votre business.",
            iconName: "Bell",
          },
        ],
      },
      {
        type: "icon-list",
        title: "Nos outils & technologies",
        items: [
          {
            title: "n8n / Make",
            description: "Orchestration de workflows complexes",
            iconName: "Workflow",
          },
          {
            title: "Zapier",
            description: "Connexions rapides entre apps",
            iconName: "Zap",
          },
          {
            title: "Python & APIs",
            description: "Scripts sur mesure et intégrations custom",
            iconName: "Code2",
          },
          {
            title: "Airtable / Notion",
            description: "Bases de données légères et flexibles",
            iconName: "Table",
          },
        ],
      },
      {
        type: "comparison",
        title: "Avant / Après automatisation",
        items: [
          {
            title: "Après",
            description:
              "Tâches exécutées en secondes|Données synchronisées en temps réel|Équipe focalisée sur la valeur|Scaling sans recruter|Erreurs humaines éliminées",
            iconName: "Check",
          },
          {
            title: "Avant",
            description:
              "Heures de copier-coller|Données éparpillées|Équipe noyée dans l'opérationnel|Croissance linéaire|Erreurs manuelles fréquentes",
            iconName: "X",
          },
        ],
      },
      {
        type: "cta-block",
        title: "Prêt à automatiser ?",
        description: "On identifie vos quick wins en 30 minutes.",
        items: [
          {
            title: "Réserver un appel",
            href: "/contact",
            iconName: "ArrowRight",
          },
        ],
      },
    ],
  },
];
