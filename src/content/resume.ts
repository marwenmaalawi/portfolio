// src/content/resume.ts
// Single source of truth for Mohamed Marwen Maalawi's resume.
// All website sections and PDF generation reference this file.

export const personalInfo = {
  name: "Mohamed Marwen Maalawi",
  nameShort: "Marwen Maalawi",
  title: {
    en: "Senior Full-Stack Software Engineer",
    fr: "Ingénieur Logiciel Senior Full-Stack",
  },
  location: "Tunis, Tunisia",
  email: "mohamedmarwen.maalawi@gmail.com",
  github: "https://github.com/marwenmaalawi",
  githubUsername: "marwenmaalawi",
  linkedin: "https://www.linkedin.com/in/mohamed-marwen-maalawi-61692620b/",
} as const;

export const summary = {
  en: "Senior Full-Stack Software Engineer with a track record of architecting, building and shipping production-grade platforms from zero to scale. I own the full technical lifecycle — from system design and data modeling through API architecture, CI/CD pipelines and production monitoring. Core expertise in NestJS, Spring Boot, Next.js and React Native. Proven ability to lead technical decisions on distributed systems, financial integrations (Stripe, QuickBooks), workflow engines (Camunda BPM) and AI-powered features. I build systems designed to scale without architectural rewrites, and I deliver with full autonomy in fast-paced, international engineering teams.",
  fr: "Ingénieur Logiciel Senior Full-Stack avec un historique prouvé dans l'architecture, la construction et la mise en production de plateformes de qualité industrielle, de zéro à l'échelle. Je prends en charge l'ensemble du cycle technique — de la conception système et la modélisation de données à l'architecture d'API, les pipelines CI/CD et le monitoring de production. Expertise principale en NestJS, Spring Boot, Next.js et React Native. Capacité démontrée à piloter les décisions techniques sur les systèmes distribués, les intégrations financières (Stripe, QuickBooks), les moteurs de workflows (Camunda BPM) et les fonctionnalités IA. Je conçois des systèmes pensés pour scaler sans réécriture architecturale, avec une autonomie totale au sein d'équipes d'ingénierie internationales.",
} as const;

export const spokenLanguages = [
  { language: "French", level: { en: "Fluent", fr: "Courant" } },
  { language: "English", level: { en: "Professional", fr: "Professionnel" } },
  { language: "Arabic", level: { en: "Native", fr: "Natif" } },
] as const;

export const specializations = [
  "System Architecture",
  "NestJS",
  "Spring Boot",
  "Next.js",
  "React Native",
  "Platform Engineering",
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
        "Architected and implemented Spring Boot microservices handling distributed business workflows with fault-tolerant inter-service communication",
        "Designed and deployed Camunda BPM process definitions for multi-step business automation, reducing manual coordination overhead by an order of magnitude",
        "Engineered a GraalVM-based polyglot script execution sandbox, enabling dynamic runtime script evaluation within workflow tasks without JVM restarts",
        "Built production-hardened error recovery mechanisms — circuit breakers, retry policies and dead-letter queues — ensuring zero silent failures in critical business flows",
        "Integrated Keycloak for enterprise-grade identity management: RBAC, SSO, token-based auth and fine-grained permission policies across all services",
        "Led architecture discussions and drove technical decision-making for distributed system design, defining service boundaries, data ownership and API contracts",
      ],
      fr: [
        "Conception de bout en bout et implémentation de microservices Spring Boot orchestrant des workflows métier distribués, avec communication inter-services résiliente",
        "Conception et déploiement de processus Camunda BPM pour l'automatisation multi-étapes, réduisant drastiquement les délais de coordination inter-équipes",
        "Développement d'un bac à sable (sandbox) d'exécution de scripts polyglotte sous GraalVM, permettant d'évaluer dynamiquement des scripts métier sans redémarrer la JVM",
        "Mise en place de mécanismes de résilience avancés — circuit breakers, stratégies de retry et dead-letter queues — pour éviter toute défaillance silencieuse en production",
        "Intégration de Keycloak pour la gestion des identités : RBAC, SSO, et politiques de permissions ultra-granulaires déployées à l'échelle de l'entreprise",
        "Animation des comités d'architecture et prise de décisions techniques clés pour le design des systèmes distribués et la définition stricte des contrats d'API",
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
        "Owned the full-stack architecture of multiple SaaS products and React Native mobile applications serving international B2B clients across North America",
        "Designed and built real-time communication infrastructure — WebSocket-based chat, presence systems and cross-platform push notification pipelines via Firebase and APNs",
        "Architected a comprehensive Stripe integration: subscription lifecycle management, idempotent webhook processing, automated dunning flows, billing portal and complete audit logging — zero billing incidents post-launch",
        "Engineered a bi-directional QuickBooks sync engine with conflict resolution, exponential backoff retry, dead-letter queues and automated reconciliation — eliminating 100% of manual accounting effort",
        "Designed clean AI integration layers with provider abstraction, streaming response support, per-tenant cost tracking and graceful fallback chains — enabling rapid model switching without code changes",
        "Established CI/CD pipelines with GitHub Actions — automated testing, linting, staging deployments and production release gates, reducing deployment time from hours to minutes",
        "Operated as a key technical decision-maker in an international remote team, independently owning features from RFC through production deployment and monitoring",
      ],
      fr: [
        "Responsable de bout en bout de l'architecture full-stack de plusieurs produits SaaS et applications React Native pour des clients B2B nord-américains",
        "Création d'une infrastructure de communication temps réel : chat via WebSocket, gestion de présence et pipelines de notifications push (Firebase et APNs)",
        "Architecture d'une intégration Stripe robuste : gestion du cycle de vie des abonnements, traitement idempotent des webhooks et automatisation des relances, sans aucun incident de facturation",
        "Conception d'un moteur de synchronisation bidirectionnelle avec QuickBooks incluant résolution de conflits et files d'attente (dead-letter), éliminant entièrement la saisie comptable manuelle",
        "Développement de couches d'intégration IA propres et agnostiques (abstraction des fournisseurs, streaming) permettant de basculer facilement d'un modèle à l'autre",
        "Automatisation complète des chaînes CI/CD avec GitHub Actions (tests, linting, déploiements staging et production), réduisant le temps de livraison de plusieurs heures à quelques minutes",
        "Intervention en tant que Tech Lead au sein d'une équipe internationale répartie, garantissant le suivi technique des fonctionnalités, de leur conception initiale (RFC) jusqu'à leur supervision en production",
      ],
    },
    technologies: [
      "NestJS",
      "React Native",
      "Node.js",
      "Stripe",
      "QuickBooks",
      "Firebase",
      "OpenAI",
      "GitHub Actions",
    ],
  },
  {
    id: "savy",
    company: "SAVY",
    role: { en: "Lead Mobile Engineer", fr: "Lead Mobile Engineer" },
    period: { en: "September 2021 – December 2022", fr: "Septembre 2021 – Décembre 2022" },
    type: "fulltime" as const,
    responsibilities: {
      en: [
        "Architected a complex React Native mobile application for UK tax recovery, enabling British citizens to reclaim tax overpayments via automated HMRC self-assessments",
        "Engineered dynamic, multi-step tax deduction forms using React Hook Form and custom Bottom Sheet architectures for efficient receipt categorization and OCR parsing",
        "Implemented a robust offline-first synchronization engine using WatermelonDB (SQLite over JSI), ensuring 60 FPS scrolling and immediate data availability without network connectivity",
        "Optimized list rendering and memory footprint using FlashList and Hermes engine, eliminating layout thrashing and JS frame drops on legacy iOS/Android devices",
        "Integrated complex functional UI components—segmented controls, interactive tax return status bars, and custom date pickers—prioritizing usability and data density",
        "Automated the mobile CI/CD pipeline with Fastlane, enabling predictable App Store/Google Play deployments and Over-The-Air (OTA) updates via CodePush",
      ],
      fr: [
        "Architecture globale d'une application mobile React Native de récupération d'impôts (Tax Recovery), permettant aux citoyens britanniques de réclamer leurs impôts trop perçus via l'automatisation HMRC",
        "Création de formulaires dynamiques complexes (React Hook Form) couplés à des Bottom Sheets sur-mesure pour la catégorisation fluide des reçus par OCR",
        "Mise en place d'un moteur de synchronisation 'offline-first' performant via WatermelonDB (SQLite over JSI), garantissant un défilement à 60 FPS et un accès immédiat aux données hors ligne",
        "Optimisation du rendu des listes et de l'empreinte mémoire via FlashList et le moteur Hermes, éliminant les pertes de frames JS (frame drops) sur les anciens appareils",
        "Intégration d'interfaces utilisateur natives complexes (segmented controls, barres d'état interactives, date pickers) avec une priorité absolue donnée à la réactivité de l'UI thread",
        "Automatisation des livraisons mobiles via Fastlane, assurant des déploiements App Store/Google Play prédictibles et la gestion des mises à jour Over-The-Air (OTA) avec CodePush",
      ],
    },
    technologies: [
      "React Native",
      "TypeScript",
      "WatermelonDB (JSI)",
      "Hermes",
      "CodePush",
      "Fastlane",
      "Redux",
    ],
  },
  {
    id: "fizl",
    company: "FIZL",
    role: { en: "Full-Stack Software Engineer", fr: "Ingénieur Logiciel Full-Stack" },
    period: { en: "March 2020 – August 2021", fr: "Mars 2020 – Août 2021" },
    type: "fulltime" as const,
    responsibilities: {
      en: [
        "Led the architectural design and development of Fizl's core tax management and accounting engine for independent contractors and SMEs",
        "Engineered automated ledger reconciliation algorithms and tax provision modules, reducing manual accounting errors by over 90%",
        "Developed comprehensive financial dashboards using Next.js and Tailwind, visualizing real-time cash flow, pending liabilities, and deductible business expenses",
        "Built a highly scalable RESTful backend in Node.js/NestJS capable of ingesting and categorizing thousands of banking transactions daily via Open Banking APIs",
        "Designed database schemas in PostgreSQL to safely store immutable financial records, ensuring strict compliance with financial auditing standards",
      ],
      fr: [
        "Pilotage de la conception architecturale et du développement du moteur central de gestion fiscale et comptable de Fizl pour les indépendants et les PME",
        "Ingénierie d'algorithmes de réconciliation comptable automatisée et de modules de provisionnement fiscal, réduisant les erreurs manuelles de plus de 90%",
        "Développement de tableaux de bord financiers complets avec Next.js, visualisant la trésorerie en temps réel, les dettes fiscales et les dépenses déductibles",
        "Construction d'un backend RESTful hautement scalable (Node.js/NestJS) capable d'ingérer et catégoriser des milliers de transactions bancaires via les APIs Open Banking",
        "Conception de schémas de base de données PostgreSQL pour stocker des registres financiers immuables, garantissant la stricte conformité aux normes d'audit financier",
      ],
    },
    technologies: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Open Banking",
      "AWS",
      "TypeScript",
    ],
  },
  {
    id: "freelance",
    company: { en: "Independent Consulting", fr: "Consulting Indépendant" },
    role: { en: "Technical Lead & Full-Stack Architect", fr: "Lead Technique & Architecte Full-Stack" },
    period: { en: "2024 – Present", fr: "2024 – Présent" },
    type: "freelance" as const,
    responsibilities: {
      en: [
        "Led end-to-end product architecture and development for clients in e-commerce, logistics and fintech — from initial technical scoping to production launch",
        "Designed NestJS backend architectures with PostgreSQL, implementing domain-driven design, modular service boundaries and scalable REST/GraphQL API layers",
        "Built production Next.js frontends with ISR, server components, optimized Core Web Vitals and comprehensive SEO strategies",
        "Delivered cross-platform React Native mobile applications with offline-first architecture, push notifications and native module integration",
        "Established containerized deployment pipelines with Docker Compose, multi-stage builds and environment-specific configuration management",
        "Provided technical consulting and architecture reviews for product teams — database schema design, API contract definition and technology selection",
      ],
      fr: [
        "Pilotage de l'architecture produit et du développement de bout en bout pour des clients en e-commerce, logistique et fintech — du cadrage technique au lancement en production",
        "Conception d'architectures backend NestJS avec PostgreSQL, implémentation de domain-driven design, frontières de services modulaires et couches d'API REST/GraphQL scalables",
        "Construction de frontends Next.js production avec ISR, server components, Core Web Vitals optimisés et stratégies SEO complètes",
        "Livraison d'applications mobiles React Native cross-platform avec architecture offline-first, notifications push et intégration de modules natifs",
        "Mise en place de pipelines de déploiement conteneurisés avec Docker Compose, builds multi-stage et gestion de configuration par environnement",
        "Consulting technique et revues d'architecture pour les équipes produit — conception de schémas BDD, définition de contrats d'API et sélection technologique",
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
