// src/content/resume.ts
// Single source of truth for Mohamed Marwen Maalawi's resume.
// All website sections and PDF generation reference this file.

export const personalInfo = {
  name: "Mohamed Marwen Maalawi",
  nameShort: "Marwen Maalawi",
  title: {
    en: "Senior Full-Stack Software Engineer",
    fr: "Ingénieur Logiciel Full-Stack Senior",
  },
  location: "Tunis, Tunisia",
  email: "mohamedmarwen.maalawi@gmail.com",
  github: "https://github.com/marwenmaalawi",
  githubUsername: "marwenmaalawi",
  linkedin: "https://www.linkedin.com/in/mohamed-marwen-maalawi-61692620b/",
} as const;

export const summary = {
  en: "Senior Full-Stack Software Engineer specialized in designing, developing and delivering production-grade web, mobile and SaaS applications. Strong expertise in NestJS, Next.js, React Native and Spring Boot. Experienced in scalable platforms, distributed systems, financial integrations, e-commerce solutions, workflow automation and AI-powered features. Worked across the full software lifecycle — from business analysis and architecture to deployment automation and production support. Known for fast execution, technical ownership, strong autonomy and a production mindset.",
  fr: "Ingénieur Logiciel Full-Stack Senior spécialisé dans la conception, le développement et la livraison d'applications web, mobiles et SaaS de qualité production. Forte expertise en NestJS, Next.js, React Native et Spring Boot. Expérimenté dans les plateformes scalables, les systèmes distribués, les intégrations financières, les solutions e-commerce, l'automatisation des workflows et les fonctionnalités IA. Intervenu sur l'ensemble du cycle logiciel — de l'analyse métier et l'architecture jusqu'au déploiement automatisé et au support production. Reconnu pour l'exécution rapide, la propriété technique et l'autonomie.",
} as const;

export const spokenLanguages = [
  { language: "French", level: { en: "Fluent", fr: "Courant" } },
  { language: "English", level: { en: "Professional", fr: "Professionnel" } },
  { language: "Arabic", level: { en: "Native", fr: "Natif" } },
] as const;

export const specializations = [
  "NestJS",
  "Next.js",
  "React Native",
  "Spring Boot",
  "DevOps",
  "SaaS Platforms",
  "Distributed Systems",
] as const;

export const experience = [
  {
    id: "numeryx",
    company: "NUMERYX TUNISIA",
    role: { en: "Software Engineer", fr: "Ingénieur Logiciel" },
    period: { en: "June 2025 – Present", fr: "Juin 2025 – Présent" },
    type: "fulltime" as const,
    responsibilities: {
      en: [
        "Design and development of Spring Boot microservices for distributed architectures",
        "Implementation of Camunda BPM workflows for complex business process automation",
        "GraalVM integration for high-performance script execution systems",
        "Performance optimization and error recovery mechanisms in production environments",
        "Keycloak integration for enterprise-grade RBAC, SSO and identity management",
        "Architecture discussions and technical decision-making for production systems",
      ],
      fr: [
        "Conception et développement de microservices Spring Boot pour architectures distribuées",
        "Implémentation de workflows Camunda BPM pour l'automatisation de processus métier complexes",
        "Intégration GraalVM pour des systèmes d'exécution de scripts haute performance",
        "Optimisation des performances et mécanismes de récupération d'erreurs en production",
        "Intégration Keycloak pour RBAC, SSO et gestion d'identité niveau entreprise",
        "Discussions d'architecture et prise de décision technique pour les systèmes de production",
      ],
    },
    technologies: [
      "Spring Boot",
      "Java",
      "Camunda BPM",
      "GraalVM",
      "Keycloak",
      "Docker",
      "Microservices",
    ],
  },
  {
    id: "ludditech",
    company: "LUDDITECH INC",
    role: { en: "Full-Stack Engineer", fr: "Ingénieur Full-Stack" },
    period: { en: "January 2023 – April 2025", fr: "Janvier 2023 – Avril 2025" },
    type: "fulltime" as const,
    responsibilities: {
      en: [
        "Development of SaaS platforms and mobile applications serving international clients",
        "Real-time communication systems, chat systems and push notification infrastructure",
        "Stripe payment integrations including subscriptions, webhooks and billing management",
        "QuickBooks financial synchronization and accounting data integration",
        "AI feature integrations for enhanced product capabilities",
        "CI/CD pipeline improvements and deployment automation",
        "International remote collaboration across distributed engineering teams",
      ],
      fr: [
        "Développement de plateformes SaaS et applications mobiles pour clients internationaux",
        "Systèmes de communication temps réel, systèmes de chat et infrastructure de notifications push",
        "Intégrations Stripe avec abonnements, webhooks et gestion de facturation",
        "Synchronisation financière QuickBooks et intégration de données comptables",
        "Intégrations de fonctionnalités IA pour des capacités produit avancées",
        "Améliorations des pipelines CI/CD et automatisation du déploiement",
        "Collaboration internationale à distance au sein d'équipes d'ingénierie distribuées",
      ],
    },
    technologies: [
      "NestJS",
      "React Native",
      "Angular",
      "Stripe",
      "QuickBooks",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    id: "freelance",
    company: { en: "Freelance", fr: "Freelance" },
    role: { en: "Full-Stack Software Engineer", fr: "Ingénieur Logiciel Full-Stack" },
    period: { en: "2024 – Present", fr: "2024 – Présent" },
    type: "freelance" as const,
    responsibilities: {
      en: [
        "End-to-end product development for clients across multiple industries",
        "NestJS backend architectures with PostgreSQL and scalable API design",
        "Next.js and React frontend applications with modern UX standards",
        "React Native mobile applications for iOS and Android",
        "Docker containerization and production deployment strategies",
        "CI/CD pipeline setup and automation",
        "Technical and architecture consulting for product teams",
      ],
      fr: [
        "Développement produit de bout en bout pour clients multi-secteurs",
        "Architectures backend NestJS avec PostgreSQL et design d'API scalable",
        "Applications frontend Next.js et React avec standards UX modernes",
        "Applications mobiles React Native pour iOS et Android",
        "Conteneurisation Docker et stratégies de déploiement production",
        "Mise en place et automatisation de pipelines CI/CD",
        "Consulting technique et architectural pour les équipes produit",
      ],
    },
    technologies: ["NestJS", "Next.js", "React", "React Native", "PostgreSQL", "Docker", "TypeScript"],
  },
] as const;

export const featuredProject = {
  id: "antigravity",
  name: "Antigravity Sneakers",
  tagline: {
    en: "A production-grade commerce platform built from the ground up",
    fr: "Une plateforme e-commerce production conçue de zéro",
  },
  description: {
    en: "Modern e-commerce platform developed entirely from scratch — combining a high-performance Next.js storefront, a powerful NestJS backend, and a sophisticated administration platform that gives business teams complete control without any developer intervention.",
    fr: "Plateforme e-commerce moderne développée entièrement de zéro — combinant un storefront Next.js haute performance, un backend NestJS puissant, et une plateforme d'administration sophistiquée qui donne aux équipes métier un contrôle total sans intervention développeur.",
  },
  storefrontUrl: "https://antigravitysneakers-staging-web.vercel.app/",
  adminUrl: "https://antigravitysneakers-staging-admin.vercel.app/admin",
  stack: {
    frontend: ["Next.js", "TypeScript", "TailwindCSS"],
    backend: ["NestJS", "TypeScript", "PostgreSQL"],
    infrastructure: ["Docker", "CI/CD", "GitHub Actions", "Vercel"],
    marketing: ["Meta Pixel", "Facebook Conversion API", "TikTok Pixel", "Google Analytics", "Google Tag Manager"],
  },
  adminModules: [
    { icon: "layout-dashboard", label: { en: "Dashboard & KPIs", fr: "Dashboard & KPIs" } },
    { icon: "shopping-bag", label: { en: "Order Management", fr: "Gestion des commandes" } },
    { icon: "package", label: { en: "Product Management", fr: "Gestion des produits" } },
    { icon: "tag", label: { en: "Brands & Categories", fr: "Marques & Catégories" } },
    { icon: "ticket", label: { en: "Coupons & Promotions", fr: "Coupons & Promotions" } },
    { icon: "truck", label: { en: "Delivery Methods", fr: "Méthodes de livraison" } },
    { icon: "megaphone", label: { en: "Marketing Analytics", fr: "Analytics Marketing" } },
    { icon: "settings", label: { en: "Platform Config", fr: "Config Plateforme" } },
    { icon: "mail", label: { en: "Newsletter", fr: "Newsletter" } },
    { icon: "layout", label: { en: "CMS & Page Builder", fr: "CMS & Page Builder" } },
  ],
  adminFeatures: {
    en: [
      "Complete administration dashboard with real-time KPIs and analytics",
      "Advanced CMS with dynamic section management for unlimited layouts",
      "Homepage builder with draggable, configurable content blocks",
      "Landing page and marketing page builder with reusable components",
      "Navigation and footer builders with live preview",
      "Banner and campaign management with scheduling",
      "Visual content editors — no code required for business teams",
      "Theme and branding configuration (colors, typography, assets)",
      "SEO configuration per page — titles, descriptions, Open Graph",
      "Analytics integration configuration (Meta Pixel, TikTok, GA4, GTM)",
      "Complete business autonomy — zero developer intervention required",
    ],
    fr: [
      "Tableau de bord d'administration complet avec KPIs et analytics en temps réel",
      "CMS avancé avec gestion dynamique des sections pour layouts illimités",
      "Constructeur de page d'accueil avec blocs de contenu glissables et configurables",
      "Constructeur de landing pages et pages marketing avec composants réutilisables",
      "Constructeurs de navigation et footer avec prévisualisation en direct",
      "Gestion des bannières et campagnes avec planification",
      "Éditeurs visuels de contenu — aucun code requis pour les équipes métier",
      "Configuration thème et branding (couleurs, typographie, assets)",
      "Configuration SEO par page — titres, descriptions, Open Graph",
      "Configuration des intégrations analytics (Meta Pixel, TikTok, GA4, GTM)",
      "Autonomie métier totale — aucune intervention développeur requise",
    ],
  },
  ecommerceFeatures: {
    en: [
      "Product management with rich media, variants and inventory",
      "Multi-variant support (size, color, style) with stock tracking",
      "Full order lifecycle — placement, fulfillment, tracking",
      "Coupon engine with percentage, fixed and free shipping discounts",
      "Delivery method configuration with pricing rules",
      "Customer order tracking portal",
      "Newsletter and customer communication management",
      "SEO management per product, category and page",
      "Dynamic personalization and content targeting",
    ],
    fr: [
      "Gestion produits avec médias riches, variantes et inventaire",
      "Support multi-variantes (taille, couleur, style) avec suivi du stock",
      "Cycle de vie des commandes complet — placement, fulfillment, suivi",
      "Moteur de coupons avec remises en pourcentage, fixe et livraison gratuite",
      "Configuration des méthodes de livraison avec règles de tarification",
      "Portail de suivi de commande client",
      "Gestion newsletter et communication client",
      "Gestion SEO par produit, catégorie et page",
      "Personnalisation dynamique et ciblage de contenu",
    ],
  },
  marketingIntegrations: [
    {
      name: "Meta Pixel",
      icon: "facebook",
      description: {
        en: "Facebook & Instagram conversion tracking, audience building and retargeting",
        fr: "Suivi des conversions Facebook & Instagram, construction d'audiences et retargeting",
      },
    },
    {
      name: "Facebook Conversion API",
      icon: "server",
      description: {
        en: "Server-side event tracking for accurate attribution, bypassing browser limitations",
        fr: "Suivi d'événements côté serveur pour une attribution précise, contournant les limitations navigateur",
      },
    },
    {
      name: "TikTok Pixel",
      icon: "video",
      description: {
        en: "TikTok ad campaign tracking, conversion optimization and audience insights",
        fr: "Suivi de campagnes publicitaires TikTok, optimisation des conversions et insights audience",
      },
    },
    {
      name: "Google Analytics 4",
      icon: "bar-chart",
      description: {
        en: "Advanced web analytics, user behavior tracking and conversion funnels",
        fr: "Analytics web avancées, suivi du comportement utilisateur et funnels de conversion",
      },
    },
    {
      name: "Google Tag Manager",
      icon: "tag",
      description: {
        en: "Centralized tag management, event orchestration and marketing tool deployment",
        fr: "Gestion centralisée des tags, orchestration des événements et déploiement d'outils marketing",
      },
    },
  ],
} as const;

export const caseStudies = [
  {
    id: "stripe-integration",
    title: { en: "Stripe Payments & Subscription System", fr: "Système de Paiements & Abonnements Stripe" },
    company: "Ludditech Inc",
    category: { en: "Financial Integration", fr: "Intégration Financière" },
    problem: {
      en: "Design and implement a robust payment and subscription management system for a SaaS platform serving international clients with complex billing requirements — including trials, upgrades, downgrades, proration and failed payment recovery.",
      fr: "Concevoir et implémenter un système robuste de paiement et de gestion d'abonnements pour une plateforme SaaS desservant des clients internationaux avec des besoins de facturation complexes — incluant les essais, upgrades, downgrades, proratisation et récupération de paiements échoués.",
    },
    challenges: {
      en: [
        "Complex subscription lifecycle with multiple plan tiers",
        "Webhook event ordering and idempotency guarantees",
        "Failed payment recovery and dunning logic",
        "Multi-currency billing support",
      ],
      fr: [
        "Cycle de vie d'abonnement complexe avec plusieurs niveaux de plans",
        "Ordonnancement des événements webhook et garanties d'idempotence",
        "Récupération des paiements échoués et logique de relance",
        "Support de facturation multi-devises",
      ],
    },
    solution: {
      en: "Built a comprehensive Stripe integration with full subscription lifecycle management, idempotent webhook event processing, billing portal integration, invoice generation, automated dunning flows and complete audit logging.",
      fr: "Construction d'une intégration Stripe complète avec gestion complète du cycle de vie des abonnements, traitement idempotent des événements webhook, intégration du portail de facturation, génération de factures, flows de relance automatisés et journalisation d'audit complète.",
    },
    impact: {
      en: "Zero billing incidents. 100% webhook reliability with idempotency. Full subscription lifecycle automation eliminating manual billing work.",
      fr: "Zéro incident de facturation. 100% de fiabilité webhook avec idempotence. Automatisation complète du cycle de vie des abonnements éliminant le travail de facturation manuel.",
    },
    technologies: ["NestJS", "TypeScript", "Stripe", "PostgreSQL", "Webhooks", "Background Jobs"],
  },
  {
    id: "quickbooks-sync",
    title: { en: "QuickBooks Financial Synchronization", fr: "Synchronisation Financière QuickBooks" },
    company: "Ludditech Inc",
    category: { en: "Financial Integration", fr: "Intégration Financière" },
    problem: {
      en: "Synchronize platform financial data with QuickBooks in real-time to eliminate manual accounting work and ensure accurate financial reporting across multiple entities.",
      fr: "Synchroniser les données financières de la plateforme avec QuickBooks en temps réel pour éliminer la comptabilité manuelle et garantir des rapports financiers précis pour plusieurs entités.",
    },
    challenges: {
      en: [
        "Complex data mapping between platform entities and QuickBooks schema",
        "Handling sync failures and data conflicts gracefully",
        "Rate limiting and API quota management",
        "Ensuring data consistency during network failures",
      ],
      fr: [
        "Mapping de données complexe entre les entités plateforme et le schéma QuickBooks",
        "Gestion élégante des échecs de synchronisation et des conflits de données",
        "Gestion du rate limiting et des quotas API",
        "Garantir la cohérence des données lors des pannes réseau",
      ],
    },
    solution: {
      en: "Designed a bi-directional sync engine with conflict resolution strategies, exponential backoff retry logic, dead letter queue for failed events, comprehensive audit logging and automated reconciliation dashboards.",
      fr: "Conception d'un moteur de synchronisation bidirectionnel avec stratégies de résolution de conflits, logique de retry avec backoff exponentiel, file morte pour les événements échoués, journalisation d'audit complète et tableaux de bord de réconciliation automatisés.",
    },
    impact: {
      en: "100% accounting data accuracy. Manual accounting effort fully eliminated. Real-time financial visibility for business teams.",
      fr: "100% de précision des données comptables. Effort de comptabilité manuelle entièrement éliminé. Visibilité financière en temps réel pour les équipes métier.",
    },
    technologies: ["NestJS", "TypeScript", "QuickBooks API", "PostgreSQL", "Bull Queue", "Redis"],
  },
  {
    id: "camunda-workflows",
    title: { en: "Camunda BPM Workflow Automation", fr: "Automatisation de Workflows Camunda BPM" },
    company: "Numeryx Tunisia",
    category: { en: "Workflow Automation", fr: "Automatisation" },
    problem: {
      en: "Automate complex multi-step business processes with conditional branching, human task assignment, external service orchestration and script execution in a distributed microservices environment.",
      fr: "Automatiser des processus métier complexes multi-étapes avec branchement conditionnel, assignation de tâches humaines, orchestration de services externes et exécution de scripts dans un environnement microservices distribué.",
    },
    challenges: {
      en: [
        "Modeling complex BPMN 2.0 process definitions for real business workflows",
        "Integrating GraalVM for dynamic script execution within process tasks",
        "Securing human task assignment with Keycloak RBAC",
        "Error recovery and compensation flows for distributed transactions",
      ],
      fr: [
        "Modélisation de définitions de processus BPMN 2.0 complexes pour de vrais workflows métier",
        "Intégration de GraalVM pour l'exécution de scripts dynamiques dans les tâches de processus",
        "Sécurisation de l'assignation des tâches humaines avec le RBAC Keycloak",
        "Récupération d'erreurs et flows de compensation pour les transactions distribuées",
      ],
    },
    solution: {
      en: "Implemented BPMN 2.0 process definitions with the Camunda Engine, Spring Boot external task worker services, GraalVM polyglot script execution sandbox, Keycloak-secured task management API and comprehensive process monitoring.",
      fr: "Implémentation de définitions de processus BPMN 2.0 avec le moteur Camunda, services workers de tâches externes Spring Boot, sandbox d'exécution de scripts polyglotte GraalVM, API de gestion des tâches sécurisée par Keycloak et monitoring de processus complet.",
    },
    impact: {
      en: "Complex business processes fully automated. Dramatic reduction in manual coordination overhead. Full process observability and audit trail.",
      fr: "Processus métier complexes entièrement automatisés. Réduction significative de la coordination manuelle. Observabilité complète des processus et piste d'audit.",
    },
    technologies: ["Camunda BPM", "Spring Boot", "Java", "GraalVM", "Keycloak", "BPMN 2.0", "Docker"],
  },
  {
    id: "ai-integrations",
    title: { en: "AI Feature Integrations", fr: "Intégrations de Fonctionnalités IA" },
    company: "Ludditech Inc",
    category: { en: "AI Engineering", fr: "Ingénierie IA" },
    problem: {
      en: "Integrate AI capabilities into existing SaaS products to enhance user experience, automate content workflows and add intelligent features — while maintaining cost control, reliability and clean architecture.",
      fr: "Intégrer des capacités IA dans des produits SaaS existants pour améliorer l'expérience utilisateur, automatiser les workflows de contenu et ajouter des fonctionnalités intelligentes — tout en maintenant le contrôle des coûts, la fiabilité et une architecture propre.",
    },
    challenges: {
      en: [
        "Provider abstraction to avoid vendor lock-in",
        "Streaming response handling for real-time UX",
        "Cost optimization and token budget management",
        "Fallback strategies for provider outages",
      ],
      fr: [
        "Abstraction du fournisseur pour éviter le vendor lock-in",
        "Gestion des réponses en streaming pour une UX temps réel",
        "Optimisation des coûts et gestion du budget en tokens",
        "Stratégies de fallback pour les pannes de fournisseur",
      ],
    },
    solution: {
      en: "Designed clean AI integration layers with provider abstraction interfaces, streaming response support, cost tracking per tenant, configurable model selection and graceful fallback chains.",
      fr: "Conception de couches d'intégration IA propres avec interfaces d'abstraction de fournisseur, support des réponses en streaming, suivi des coûts par tenant, sélection de modèle configurable et chaînes de fallback élégantes.",
    },
    impact: {
      en: "AI features shipped to production on schedule. Clean architecture enabling rapid iteration and future provider switching without code changes.",
      fr: "Fonctionnalités IA déployées en production dans les délais. Architecture propre permettant une itération rapide et le changement de fournisseur futur sans modifications de code.",
    },
    technologies: ["NestJS", "TypeScript", "OpenAI API", "Streaming", "Provider Abstraction"],
  },
] as const;

export const engineeringPhilosophy = [
  {
    id: "architecture-first",
    title: { en: "Architecture First", fr: "Architecture en Premier" },
    description: {
      en: "Design the system before writing a single line. A clear architecture prevents technical debt, simplifies onboarding and makes scaling predictable.",
      fr: "Concevoir le système avant d'écrire la moindre ligne. Une architecture claire prévient la dette technique, simplifie l'onboarding et rend le scaling prévisible.",
    },
    icon: "Layers",
  },
  {
    id: "business-oriented",
    title: { en: "Business-Oriented Engineering", fr: "Ingénierie Orientée Métier" },
    description: {
      en: "Technology serves the business. Every technical decision must be justified by a real product or operational need, not by trends.",
      fr: "La technologie sert le métier. Chaque décision technique doit être justifiée par un besoin produit ou opérationnel réel, et non par des tendances.",
    },
    icon: "Target",
  },
  {
    id: "scalability",
    title: { en: "Scalability by Design", fr: "Scalabilité par Design" },
    description: {
      en: "Build systems that grow without architectural rewrites. Proper abstractions, clean boundaries and stateless designs enable scale from day one.",
      fr: "Construire des systèmes qui grandissent sans réécriture architecturale. Les bonnes abstractions et les designs sans état permettent le scale dès le premier jour.",
    },
    icon: "TrendingUp",
  },
  {
    id: "maintainability",
    title: { en: "Maintainability over Complexity", fr: "Maintenabilité sur Complexité" },
    description: {
      en: "Simple, well-structured code that any engineer can modify confidently is the real achievement. Clever code nobody understands is a liability.",
      fr: "Un code simple et bien structuré que tout ingénieur peut modifier en confiance est le vrai accomplissement. Un code astucieux que personne ne comprend est un passif.",
    },
    icon: "Wrench",
  },
  {
    id: "automation",
    title: { en: "Automation Everywhere", fr: "Automatisation Partout" },
    description: {
      en: "Manual processes are risks. CI/CD, automated testing, infrastructure as code and deployment automation are engineering fundamentals, not optional extras.",
      fr: "Les processus manuels sont des risques. CI/CD, tests automatisés, infrastructure as code et automatisation du déploiement sont des fondamentaux d'ingénierie, pas des extras optionnels.",
    },
    icon: "Zap",
  },
  {
    id: "documentation",
    title: { en: "Documentation as a Feature", fr: "Documentation comme Fonctionnalité" },
    description: {
      en: "Undocumented systems are unmaintainable systems. API docs, architecture docs and deployment runbooks are as important as the code itself.",
      fr: "Les systèmes non documentés sont des systèmes non maintenables. Les docs API, d'architecture et runbooks de déploiement sont aussi importants que le code lui-même.",
    },
    icon: "FileText",
  },
  {
    id: "quality",
    title: { en: "Quality Through Reviews", fr: "Qualité par les Reviews" },
    description: {
      en: "Code reviews are the primary mechanism for knowledge sharing, quality enforcement and team growth — not bureaucracy.",
      fr: "Les code reviews sont le mécanisme principal de partage de connaissances, d'application de la qualité et de croissance d'équipe — pas de la bureaucratie.",
    },
    icon: "CheckCircle",
  },
  {
    id: "performance",
    title: { en: "Performance by Default", fr: "Performance par Défaut" },
    description: {
      en: "Performance is built in from the start. Efficient queries, proper caching, bundle optimization and response time awareness are non-negotiable.",
      fr: "La performance est intégrée dès le début. Les requêtes efficaces, le caching approprié, l'optimisation des bundles et la conscience du temps de réponse sont non-négociables.",
    },
    icon: "Activity",
  },
] as const;

export const engineeringPractices = [
  {
    category: { en: "Architecture & Design", fr: "Architecture & Design" },
    icon: "Layers",
    color: "indigo",
    skills: {
      en: ["System Architecture Design", "Microservices Architecture", "API Design & REST Standards", "Database Schema Design", "Technical Decision Making", "Trade-off Analysis"],
      fr: ["Conception d'architecture système", "Architecture microservices", "Design d'API et standards REST", "Conception de schémas BDD", "Prise de décision technique", "Analyse de compromis"],
    },
  },
  {
    category: { en: "Engineering Process", fr: "Processus d'Ingénierie" },
    icon: "GitBranch",
    color: "violet",
    skills: {
      en: ["Technical Analysis", "Technical Research", "Code Reviews", "Root Cause Analysis", "Performance Optimization", "Learning New Technologies Quickly"],
      fr: ["Analyse technique", "Recherche technique", "Code reviews", "Analyse des causes racines", "Optimisation des performances", "Apprentissage rapide de nouvelles technologies"],
    },
  },
  {
    category: { en: "Documentation", fr: "Documentation" },
    icon: "FileText",
    color: "blue",
    skills: {
      en: ["API Documentation", "Architecture Documentation", "Integration Guides", "Deployment Documentation", "Technical Specifications", "Reading Complex Technical Docs"],
      fr: ["Documentation API", "Documentation d'architecture", "Guides d'intégration", "Documentation de déploiement", "Spécifications techniques", "Lecture de documentation technique complexe"],
    },
  },
  {
    category: { en: "DevOps & Delivery", fr: "DevOps & Livraison" },
    icon: "Rocket",
    color: "emerald",
    skills: {
      en: ["CI/CD Pipeline Design", "Docker & Containerization", "GitHub Actions", "Deployment Automation", "Environment Configuration", "Production Monitoring"],
      fr: ["Conception de pipelines CI/CD", "Docker & Conteneurisation", "GitHub Actions", "Automatisation du déploiement", "Configuration des environnements", "Monitoring de production"],
    },
  },
] as const;

export const techStack = {
  backend: ["NestJS", "Spring Boot", "Node.js", "Java", "TypeScript"],
  frontend: ["Next.js", "React", "Angular", "TypeScript", "TailwindCSS"],
  mobile: ["React Native", "Expo"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "NoSQL", "Redis"],
  infrastructure: ["Docker", "GitHub Actions", "CI/CD", "Vercel"],
  integrations: ["Stripe", "QuickBooks", "Keycloak", "Camunda BPM", "GraalVM", "Meta Pixel", "Google Analytics"],
} as const;
