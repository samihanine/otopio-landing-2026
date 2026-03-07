export type SectionLayout =
  | "image-text"
  | "text-image"
  | "card"
  | "cards"
  | "banner"
  | "gallery"
  | "stats"
  | "quote";

export type ProjectSubSection = {
  title?: string;
  description?: string;
  imageUrl?: string;
  lucideIcon?: string;
};

export type ProjectSection = {
  type: SectionLayout;
  title?: string;
  description?: string;
  imageUrl?: string;
  lucideIcon?: string;
  subsections?: ProjectSubSection[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  imageUrl: string;
  url: string;
  startedAt: string;
  endedAt: string;
  tagIds: string[];
  sections: ProjectSection[];
  lucideIcon: string; // lucide icon
  customer: string;
  hexColor: string;
};

export const medicPub = {
  id: "medicpub",
  title: "Plateforme clinique digitale",
  customer: "Medic.pub",
  hexColor: "#3B9FAA",
  summary:
    "Medic.pub est une plateforme tout-en-un de digitalisation des cliniques qui centralise dossiers patients, opérations, stocks, lits, planning, facturation et pilotage en temps réel, avec une interface dédiée aux patients.",
  description:
    "Medic.pub accompagne la transition des cliniques vers un système moderne en remplaçant le papier et les outils vieillissants par une solution centralisée, sécurisée et simple à adopter.\n\nLa plateforme structure l’activité par cliniques, départements et parcours patient : gestion des dossiers, prescriptions, diagnostics, affectations de lits, mouvements et suivi opérationnel au quotidien.\n\nElle intègre aussi le volet économique et relationnel avec une facturation automatisée du séjour (actes, temps passé, traitements) et une interface patient mobile pour consulter son dossier et confirmer ou annuler ses rendez-vous.",
  imageUrl:
    "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/medic-dashboard.png",
  url: "https://medic.pub",
  startedAt: "2025-01-01",
  endedAt: "",
  sections: [
    {
      type: "image-text",
      title: "Gestion multi-cliniques",
      description:
        "Organisation par cliniques et départements pour structurer les équipes, les ressources et les flux, tout en gardant une vision cohérente des opérations et des responsabilités au sein de l'établissement.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/medic-clinics.png",
      lucideIcon: "Building2",
    },
    {
      type: "text-image",
      title: "Gestion des lits",
      description:
        "Suivi des lits et des transitions patient au sein des départements (ex. urgences) afin d'optimiser l'occupation, fluidifier les admissions et sécuriser le parcours de soin avec un état à jour en continu.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/medic-beds.png",
      lucideIcon: "BedDouble",
    },
    {
      type: "cards",
      title: "Fonctionnalités clés",
      subsections: [
        {
          title: "Facturation automatisée",
          description:
            "Génération en temps réel de la facture du séjour à partir des actes, durées, prescriptions et consommations.",
          imageUrl:
            "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/medic-invoice.png",
          lucideIcon: "Receipt",
        },
        {
          title: "Dossiers patients",
          description:
            "Centralisation des prescriptions, diagnostics et parcours de soin pour chaque patient.",
          lucideIcon: "FileText",
        },
        {
          title: "Pilotage en temps réel",
          description:
            "Indicateurs clés, occupation des lits et suivi opérationnel accessible en un coup d'œil.",
          lucideIcon: "Activity",
        },
      ],
    },
  ],
  lucideIcon: "Ambulance",
  tagIds: ["health", "webapp", "uxui"],
} satisfies Project;

export const drivite = {
  id: "drivite",
  title: "Plateforme automobile multi-acteurs",
  customer: "Drivite",
  summary:
    "Drivite est une plateforme qui met en relation acheteurs, vendeurs et techniciens automobiles : les acheteurs trouvent la voiture idéale selon leurs critères, les vendeurs publient leurs annonces et les techniciens réalisent des contrôles techniques via un formulaire dynamique.",
  description:
    "Drivite simplifie et sécurise l'achat et la vente de véhicules en connectant les trois acteurs clés du marché automobile.\n\nLes acheteurs renseignent leurs critères (budget, carburant, kilométrage, type de véhicule, etc.) et se voient proposer les annonces qui correspondent précisément à leur voiture de rêve, sans avoir à parcourir des milliers d'offres.\n\nLes vendeurs bénéficient d'un espace dédié pour publier et gérer leurs annonces avec un maximum de visibilité auprès d'acheteurs réellement ciblés.\n\nLes techniciens disposent d'un formulaire dynamique qui les guide pas à pas lors de l'inspection du véhicule pour établir un rapport de contrôle technique complet et fiable.\n\nOtopio a conçu et développé le site vitrine ainsi que l'application complète (web & mobile) de Drivite.",
  imageUrl:
    "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/drivite-buy.png",
  url: "https://drivite.fr",
  startedAt: "2024-01-01",
  endedAt: "2025-02-28",
  hexColor: "#00296B",
  sections: [
    {
      type: "text-image",
      title: "Recherche personnalisée pour les acheteurs",
      description:
        "Les acheteurs saisissent leurs critères (budget, type, carburant, kilométrage, marque…) pour recevoir une sélection de véhicules parfaitement adaptée à leurs besoins, sans passer des heures à trier des annonces.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/drivite-b2c.png",
      lucideIcon: "Search",
    },
    {
      type: "banner",
      title: "Contrôle technique par formulaire dynamique",
      description:
        "Les techniciens effectuent l'inspection d'un véhicule grâce à un formulaire dynamique qui s'adapte au type de véhicule et guide l'expert point par point pour produire un rapport de contrôle technique structuré et fiable.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/drivite-b2b.png",
      lucideIcon: "ClipboardCheck",
    },
  ],
  lucideIcon: "Car",
  tagIds: ["automotive", "webapp", "mobile", "uxui"],
} satisfies Project;

export const assoInfo = {
  id: "assoinfo",
  title: "SaaS de gestion d'associations",
  customer: "Asso.info",
  hexColor: "#4F46E5",
  summary:
    "Asso.info est une plateforme SaaS tout-en-un dédiée aux grandes associations : gestion des membres, suivi des adhésions, paiements en ligne, builder de site web et commande de cartes de membre personnalisées.",
  description:
    "Asso.info centralise toute la gestion d'une association en un seul outil, conçu pour répondre aux besoins des structures de grande taille.\n\nLes responsables gèrent leurs membres, suivent les adhésions et les renouvellements, et collectent les paiements directement en ligne sans jongler entre plusieurs outils.\n\nGrâce au builder visuel intégré, chaque association peut créer et personnaliser son propre site web sans compétences techniques, pour soigner sa présence en ligne et communiquer avec ses membres.\n\nEnfin, la plateforme permet de commander des cartes de membre physiques entièrement personnalisées aux couleurs de l'association, renforçant le sentiment d'appartenance et le professionnalisme de la structure.\n\nOtopio a conçu et développé l'intégralité de la plateforme, du design au déploiement.",
  imageUrl:
    "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/assoinfo.png",
  url: "https://asso.info",
  startedAt: "2024-06-01",
  endedAt: "2025-03-01",
  sections: [
    {
      type: "banner",
      title: "Tableau de bord & pilotage",
      description:
        "Un dashboard centralisé donne aux responsables une vue d'ensemble de l'activité de l'association : membres actifs, adhésions récentes, paiements en attente et indicateurs clés pour piloter l'organisation au quotidien.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/assoinfo-dashboard.png",
      lucideIcon: "LayoutDashboard",
    },
    {
      type: "cards",
      title: "Fonctionnalités principales",
      subsections: [
        {
          title: "Builder de site web visuel",
          description:
            "Un éditeur visuel no-code pour créer et personnaliser son site web par simple glisser-déposer.",
          imageUrl:
            "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/assoinfo-builder.png",
          lucideIcon: "PanelsTopLeft",
        },
        {
          title: "Gestion des membres",
          description:
            "Suivi complet des membres, renouvellements d'adhésion et paiements en ligne.",
          imageUrl:
            "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/assoinfo-members.png",
          lucideIcon: "Users",
        },
        {
          title: "Cartes de membre",
          description:
            "Commande de cartes de membre physiques entièrement personnalisées aux couleurs de l'association.",
          lucideIcon: "CreditCard",
        },
      ],
    },
    {
      type: "image-text",
      title: "Gestion des adhésions",
      description:
        "Suivi complet des membres, renouvellements d'adhésion, paiements en ligne et commande de cartes de membre personnalisées, pour une gestion administrative fluide et une expérience soignée pour chaque adhérent.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/assoinfo-members.png",
      lucideIcon: "Users",
    },
  ],
  lucideIcon: "HandHeart",
  tagIds: ["saas", "webapp", "uxui"],
} satisfies Project;

export const coordia = {
  id: "coordia",
  title: "Plateforme médicale en orthopédagogie",
  customer: "Coordia",
  hexColor: "#0EA5E9",
  summary:
    "Coordia est une plateforme médicale québécoise dédiée aux cliniques d'orthopédagogie, conçue pour faciliter le lien entre l'enfant, ses parents, son orthopédagogue, ses enseignants et les autres professionnels de l'enfance.",
  description:
    "Coordia centralise la coordination autour de l'enfant en réunissant tous les acteurs de son parcours — parents, orthopédagogues, enseignants, psychologues et professionnels de l'enfance — dans un espace commun sécurisé.\n\nLa gestion des rendez-vous est simplifiée grâce à un calendrier synchronisé à l'échelle du professionnel et de la clinique. Parents et partenaires peuvent confirmer, déplacer ou annuler leurs rendez-vous directement depuis la plateforme.\n\nLes échanges sont centralisés dans un module de messagerie qui permet des conversations individuelles ou de groupe entre tous les intervenants, favorisant un suivi cohérent et une communication fluide.\n\nDes mini-jeux éducatifs et des plans de suivi interactifs seront intégrés pour accompagner l'enfant dans sa progression entre les séances, en lien avec les objectifs fixés par les professionnels.\n\nOtopio a conçu et développé l'intégralité de la plateforme Coordia.",
  imageUrl:
    "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/coordia-conversation.png",
  url: "https://dashboard.coordia.com",
  startedAt: "2025-01-01",
  endedAt: "",
  sections: [
    {
      type: "image-text",
      title: "Calendrier synchronisé & gestion des RDV",
      description:
        "Un calendrier partagé synchronisé à l'échelle du professionnel et de la clinique permet de planifier, confirmer et gérer les rendez-vous en temps réel. Parents et partenaires reçoivent des notifications et peuvent interagir directement avec leur agenda.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/coordia-calendar.png",
      lucideIcon: "CalendarDays",
    },
    {
      type: "text-image",
      title: "Collaboration & conversations de groupe",
      description:
        "Un espace de communication sécurisé permet d'échanger en tête-à-tête ou en groupe entre parents, enseignants, orthopédagogues, psychologues et professionnels de l'enfance, pour un suivi coordonné autour de chaque enfant.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/coordia-members.png",
      lucideIcon: "MessageCircle",
    },
  ],
  lucideIcon: "Brain",
  tagIds: ["health", "webapp", "uxui"],
} satisfies Project;

export const heeroo = {
  id: "heeroo",
  title: "CRM touristique automatisé par l'IA",
  customer: "Heeroo",
  hexColor: "#F59E0B",
  summary:
    "Heeroo est un CRM intelligent dédié au secteur du tourisme qui automatise la prospection, la conversion, la relation client et l'après-vente grâce à une IA spécialisée qui se comporte comme un vrai employé.",
  description:
    "Heeroo permet à n'importe quelle entreprise touristique de déléguer l'essentiel de sa relation client à une IA conversationnelle formée spécifiquement pour ce secteur.\n\nL'IA répond automatiquement aux prospects et clients depuis l'application mobile Heeroo, en incarnant le rôle d'un employé et en paraissant totalement humaine. Elle gère la prospection, la conversion, le suivi client et l'après-vente sans intervention manuelle.\n\nL'onboarding est entièrement automatisé : à la création du compte, l'IA scanne toutes les informations disponibles en ligne sur l'entreprise pour se configurer seule, sans aucune saisie fastidieuse.\n\nChaque membre peut créer et partager son calendrier de disponibilités avec des créneaux horaires, permettant à n'importe qui de réserver un rendez-vous directement en ligne. La gestion multi-employés permet d'attribuer une IA dédiée à chaque collaborateur.\n\nLa plateforme offre une gestion 360° : l'équipe se concentre uniquement sur les rencontres et appels à forte valeur, l'IA s'occupe du reste.\n\nOtopio a conçu et développé l'intégralité de la plateforme Heeroo.",
  imageUrl:
    "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/heeroo-phone.png",
  url: "https://crm.heeroo.com",
  startedAt: "2025-01-01",
  endedAt: "",
  sections: [
    {
      type: "text-image",
      title: "IA conversationnelle & relation client automatisée",
      description:
        "Une IA spécialisée dans le tourisme répond automatiquement aux prospects et clients en se comportant comme un vrai employé. Elle prend en charge la prospection, la conversion et l'après-vente pour que l'équipe se concentre sur les interactions à haute valeur ajoutée.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/heeroo-messages.png",
      lucideIcon: "BotMessageSquare",
    },
    {
      type: "image-text",
      title: "Calendrier partagé & prise de rendez-vous",
      description:
        "Chaque membre crée son calendrier avec des créneaux disponibles et le partage en un lien. Clients et prospects réservent directement en ligne, sans aller-retour par email, avec une synchronisation en temps réel pour toute l'équipe.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/heeroo-dashboard.png",
      lucideIcon: "CalendarCheck",
    },
    {
      type: "cards",
      title: "Gestion avancée",
      description:
        "Attribution d'une IA dédiée à chaque collaborateur, avec une configuration automatisée à partir des informations en ligne de l'entreprise pour un onboarding sans friction.",
      subsections: [
        {
          title: "IA par employé",
          description:
            "Attribuez une IA personnalisée à chaque collaborateur avec son propre ton, périmètre et disponibilités.",
          imageUrl:
            "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/heeroo-members.png",
          lucideIcon: "Users",
        },
        {
          title: "Onboarding intelligent",
          description:
            "L'IA scanne automatiquement les informations en ligne de l'entreprise pour se configurer seule.",
          imageUrl:
            "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/heeroo-settings.png",
          lucideIcon: "Sparkles",
        },
      ],
    },
    {
      type: "quote",
      title: "L'équipe Heeroo",
      description:
        "Heeroo a transformé notre relation client : l'IA gère 80% des échanges avec un niveau de qualité qui surprend même nos propres équipes.",
    },
  ],
  lucideIcon: "Plane",
  tagIds: ["ai", "saas", "webapp", "mobile", "uxui"],
} satisfies Project;

export const leap = {
  id: "leap",
  title: "Studio de cours en ligne",
  customer: "Leap",
  hexColor: "#8B5CF6",
  summary:
    "Leap est un studio de création de cours en ligne basé à Los Angeles, fondé par une équipe d'entrepreneurs et d'influenceurs à succès. Otopio a conçu leur site web et les a accompagnés dans la production de contenus vidéo techniques sur des sujets comme l'IA et le code.",
  description:
    "Leap réunit une équipe d'entrepreneurs et d'influenceurs basés à Los Angeles pour créer des formations en ligne accessibles et de haute qualité sur des sujets techniques pointus.\n\nOtopio a pris en charge la conception et le design de leur site web, en traduisant l'identité et l'ambition du studio dans une expérience en ligne soignée et moderne.\n\nNous avons également accompagné l'équipe dans la production de contenus vidéo pédagogiques sur des thématiques comme l'intelligence artificielle et le développement, destinés à être diffusés sur Udemy. Nos équipes ont participé à l'enregistrement et à la production des vidéos pour garantir un rendu professionnel.",
  imageUrl:
    "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/leap-hero.png",
  url: "https://www.leapyearlearning.ai/",
  startedAt: "2024-01-01",
  endedAt: "2024-12-31",
  sections: [
    {
      type: "banner",
      title: "Design & site web",
      description:
        "Conception et réalisation du site web du studio, pensé pour refléter l'énergie et la crédibilité de l'équipe, présenter les formations et convertir les visiteurs en apprenants.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/leap-hero.png",
      lucideIcon: "Monitor",
    },
    {
      type: "text-image",
      title: "Production vidéo & cours en ligne",
      description:
        "Accompagnement à la production de vidéos pédagogiques sur des sujets techniques comme l'IA et le code, enregistrées et montées pour une diffusion sur Udemy, avec un niveau de qualité adapté aux standards des meilleures formations en ligne.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/leap-video.png",
      lucideIcon: "Video",
    },
    {
      type: "gallery",
      title: "L'équipe derrière Leap",
      description:
        "Une équipe d'entrepreneurs et d'influenceurs basés à Los Angeles, cumulant des audiences importantes et une solide expérience dans la création de contenus à fort impact.",
      subsections: [
        {
          title: "Équipe Leap",
          imageUrl:
            "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/leap-team.png",
        },
        {
          title: "Production vidéo",
          imageUrl:
            "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/leap-video.png",
        },
        {
          title: "Site web",
          imageUrl:
            "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/leap-hero.png",
        },
      ],
    },
  ],
  lucideIcon: "Clapperboard",
  tagIds: ["webapp", "uxui", "content"],
} satisfies Project;

export const mtaRegion = {
  id: "mtaregion",
  title: "Plateforme de découverte locale au Québec",
  customer: "M ta région",
  hexColor: "#16A34A",
  summary:
    "M ta région est une plateforme québécoise qui met en avant des expériences locales vérifiées — spas, restaurants, hôtels, microbrasseries, chalets et plus — avec un pass d'abonnement permettant d'économiser sur les meilleures adresses de la province.",
  description:
    "M ta région a pour mission de soutenir l'économie locale québécoise en inspirant les résidents à découvrir et consommer des expériences de leur région.\n\nLa plateforme centralise un catalogue de près de 400 adresses vérifiées par l'équipe (spas, restaurants, microbrasseries, hôtels, chalets, parcs régionaux, boutiques d'artisans locaux…) et les rend accessibles via un pass d'abonnement annuel rentabilisé dès la première sortie.\n\nUne carte géolocalisée permet d'explorer les expériences disponibles partout au Québec et de créer des itinéraires personnalisés. Plus de 150 guides découvertes complètent l'offre pour inspirer les prochaines sorties en famille ou entre amis.\n\nL'application mobile et un programme de parrainage viennent renforcer la communauté de membres fidèles depuis le lancement de la plateforme.\n\nOtopio a accompagné M ta région dans la conception et le développement de sa plateforme.",
  imageUrl:
    "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/mtaregion-landing.png",
  url: "https://mtaregion.com/",
  startedAt: "2023-06-01",
  endedAt: "2024-06-01",
  sections: [
    {
      type: "image-text",
      title: "Catalogue d'expériences locales vérifiées",
      description:
        "Près de 400 adresses sélectionnées et vérifiées par l'équipe M ta région — spas, restaurants, hôtels, microbrasseries, chalets, parcs régionaux et artisans locaux — pour garantir des recommandations fiables et de qualité partout au Québec.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/mtaregion-experience.png",
      lucideIcon: "MapPin",
    },
    {
      type: "banner",
      title: "Carte géolocalisée & itinéraires",
      description:
        "Une carte interactive géolocalisée permet d'explorer les expériences disponibles à proximité ou partout en province, avec la possibilité de créer des itinéraires personnalisés pour organiser ses escapades locales.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/mtaregion-map.png",
      lucideIcon: "Map",
    },
    {
      type: "stats",
      title: "M ta région en chiffres",
      subsections: [
        {
          title: "400+",
          description: "Adresses vérifiées",
          lucideIcon: "MapPin",
        },
        {
          title: "150+",
          description: "Guides découvertes",
          lucideIcon: "BookOpen",
        },
        {
          title: "17",
          description: "Régions couvertes",
          lucideIcon: "Map",
        },
        {
          title: "1re",
          description: "Sortie rentabilisée",
          lucideIcon: "Ticket",
        },
      ],
    },
  ],
  lucideIcon: "TreePine",
  tagIds: ["webapp", "mobile", "uxui"],
} satisfies Project;

export const voolta = {
  id: "voolta",
  title: "Plateforme VTC haut de gamme",
  customer: "Voolta",
  hexColor: "#0F172A",
  summary:
    "Voolta est une plateforme dédiée aux agences de taxi privé haut de gamme, conçue pour gérer la relation avec une clientèle fortunée et les entreprises partenaires, avec un design ultra-minimaliste et élégant.",
  description:
    "Voolta s'adresse aux agences de transport privé premium qui souhaitent offrir une expérience à la hauteur de leur clientèle exigeante.\n\nLa plateforme présente l'offre de l'agence avec un design épuré et élégant, expliquant clairement le fonctionnement du service en quelques étapes limpides pour convertir prospects et partenaires entreprises.\n\nLes clients disposent d'une interface dédiée pour suivre et gérer leur course en temps réel — position du véhicule, itinéraire, statut de la course — pour une expérience fluide et rassurante de bout en bout.\n\nLes chauffeurs bénéficient d'un tableau de bord complet pour piloter leur activité : suivi des courses assignées, chiffre d'affaires et statistiques de performance pour rester concentrés sur l'essentiel.\n\nOtopio a conçu et développé l'intégralité de la plateforme Voolta.",
  imageUrl:
    "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/voolta-hero.png",
  url: "https://voolta.vercel.app",
  startedAt: "2024-03-01",
  endedAt: "2024-09-30",
  sections: [
    {
      type: "banner",
      title: "Site vitrine minimaliste & élégant",
      description:
        "Un design ultra-épuré et haut de gamme présente l'offre de l'agence en quelques étapes claires, pour convaincre immédiatement une clientèle fortunée et des entreprises partenaires exigeantes.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/voolta-steps.png",
      lucideIcon: "Sparkles",
    },
    {
      type: "text-image",
      title: "Suivi de course en temps réel",
      description:
        "Une interface client permet de suivre la position du véhicule, l'itinéraire et le statut de la course en temps réel, offrant une expérience premium et transparente du début à la fin de chaque trajet.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/voolta-itinary.png",
      lucideIcon: "Navigation",
    },
    {
      type: "image-text",
      title: "Dashboard chauffeur & statistiques",
      description:
        "Les chauffeurs accèdent à un tableau de bord dédié pour consulter leurs courses, suivre leur chiffre d'affaires et analyser leurs performances grâce à un ensemble de statistiques claires et actionnables.",
      imageUrl:
        "https://medicpub.tor1.cdn.digitaloceanspaces.com/otopio/voolta-dashboard.png",
      lucideIcon: "BarChart3",
    },
  ],
  lucideIcon: "CarFront",
  tagIds: ["webapp", "uxui", "mobile"],
} satisfies Project;

export const projects: Project[] = [
  assoInfo,
  medicPub,
  heeroo,
  coordia,
  drivite,
  leap,
  mtaRegion,
  voolta,
];
