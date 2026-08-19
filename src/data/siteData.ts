import { ServiceItem, SolutionItem, SectorItem, ClientPartner, Testimonial, StatMetric, BlogPost } from '../types';

export const siteInfo = {
  name: "Horn Africa Technology",
  acronym: "HATECH",
  brandTitle: "HATECH • Horn Africa Technology",
  tagline: "Votre Partenaire Odoo Ready & Leader de la Transformation Digitale en Afrique de l'Est",
  description: "Intégrateur certifié Odoo ERP, Cloud Computing AWS/Azure, solutions biométriques, santé, éducation et fintech sur-mesure pour entreprises et gouvernements.",
  primaryColor: "#630000",
  offices: [
    {
      country: "Djibouti",
      city: "Djibouti Ville",
      address: "Boulevard Cheikh Osman, Centre d'Affaires HATECH, Djibouti",
      email: "contact@hornafricatech.com",
      phone: "+253 21 35 44 80 / +253 77 82 10 90",
      status: "Siège Régional & Centre Opérationnel",
      isHQ: true
    },
    {
      country: "Maroc",
      city: "Casablanca",
      address: "Boulevard d'Anfa, Technopark Casablanca, Maroc",
      email: "maroc@hornafricatech.com",
      phone: "+212 522 88 90 12",
      status: "Pôle R&D & Développement Logiciel",
      isHQ: false
    },
    {
      country: "Canada",
      city: "Montréal",
      address: "1000 Rue de la Gauchetière O, Montréal, QC",
      email: "canada@hornafricatech.com",
      phone: "+1 514 620 4490",
      status: "Partenariats Stratégiques & Cloud Architecture",
      isHQ: false
    }
  ]
};

export const clientPartners: ClientPartner[] = [
  { name: "Odoo Official Partner", category: "Certification ERP", logoText: "ODOO READY PARTNER" },
  { name: "AWS Partner Network", category: "Cloud & Infrastructure", logoText: "AWS PARTNER" },
  { name: "Port Autonome de Djibouti (PAID)", category: "Logistique & Maritime", logoText: "PORT DE DJIBOUTI" },
  { name: "Ministères de Djibouti", category: "Secteur Public", logoText: "GOUV.DJ" },
  { name: "Djibouti Telecom", category: "Télécoms", logoText: "DJIB TELECOM" },
  { name: "East Africa Bank", category: "Finance & Banking", logoText: "EAST AFRICA BANK" },
  { name: "Chambre de Commerce (CCID)", category: "Institution", logoText: "CCID DJIBOUTI" },
  { name: "Horn Logistics Corridor", category: "Transit & Douane", logoText: "HORN LOGISTICS" }
];

export const transformationPoints = [
  {
    id: "manual",
    problemIcon: "FileSpreadsheet",
    problemTitle: "Travail manuel fastidieux",
    problemDesc: "Saisies redondantes sur papier et fichiers Excel instables, ralentissant chaque validation de 4 à 8 heures.",
    solutionTitle: "Automatisation de bout en bout",
    solutionDesc: "Workflows 100% automatisés dans Odoo ERP : devis validé, facture générée et bon de livraison édité en 1 clic."
  },
  {
    id: "errors",
    problemIcon: "AlertTriangle",
    problemTitle: "Erreurs de saisie & pertes de revenus",
    problemDesc: "Écarts d'inventaires, doubles facturations et discordances comptables nuisant à la trésorerie.",
    solutionTitle: "Zéro ressaisie & Rapprochement temps réel",
    solutionDesc: "Base de données unifiée avec contrôles stricts, traçabilité par code-barres et clôture financière instantanée."
  },
  {
    id: "silos",
    problemIcon: "Layers",
    problemTitle: "Documents dispersés & Silos d'information",
    problemDesc: "Données éclatées entre départements (RH, Achats, Ventes) sans visibilité globale pour la direction.",
    solutionTitle: "Tableau de bord de direction 360°",
    solutionDesc: "Indicateurs de performance (KPIs) en direct, alertes automatiques et accès sécurisé depuis mobile et PC."
  }
];

export const solutionsData: SolutionItem[] = [
  {
    id: "odoo-erp",
    title: "Odoo ERP Enterprise",
    tagline: "Le progiciel tout-en-un mondialement éprouvé",
    description: "Intégration complète : Ventes, Achats, Stocks multi-dépôts, Comptabilité conforme et Point de Vente (POS).",
    icon: "Layers",
    badge: "Solution Phare",
    features: [
      "Gestion commerciale et facturation électronique",
      "Inventaire temps réel avec lecteurs codes-barres",
      "Comptabilité générale et analytique",
      "Portail client et devis en ligne avec signature"
    ],
    impactMetric: "+45% de productivité commerciale"
  },
  {
    id: "hr-payroll",
    title: "RH & Paie Automatisée",
    tagline: "Conformité légale et bulletins en un clic",
    description: "Gestion des employés, contrats, calcul des cotisations sociales locales (CNSS / Impôts), congés et notes de frais.",
    icon: "Users",
    badge: "100% Conforme",
    features: [
      "Fiches de paie générées automatiquement",
      "Suivi des présences et des heures supplémentaires",
      "Portail self-service employé pour congés",
      "Rapports déclaratifs fiscaux et sociaux"
    ],
    impactMetric: "90% de temps économisé sur la paie"
  },
  {
    id: "biometrics",
    title: "Biométrie & Contrôle d'Accès",
    tagline: "Pointage biométrique et sécurité des sites",
    description: "Terminaux de reconnaissance faciale et empreintes digitales connectés en direct au module RH Odoo.",
    icon: "Fingerprint",
    badge: "Haute Sécurité",
    features: [
      "Synchronisation temps réel avec la feuille de temps",
      "Gestion des accès par badges RFID et biométrie",
      "Alertes d'anomalies de présence et retards",
      "Matériel robuste résistant aux environnements sévères"
    ],
    impactMetric: "Zero fraude au pointage"
  },
  {
    id: "transit-customs",
    title: "Transit & Douane Maritime",
    tagline: "Gestion spécialisée transit et corridors portuaires",
    description: "Solution sur-mesure pour transitaires, transporteurs et consignataires maritimes de Djibouti et d'Éthiopie.",
    icon: "Ship",
    badge: "Spécifique Corne",
    features: [
      "Suivi des dossiers de dédouanement et connaissements (BL)",
      "Facturation débours et prestations de transit",
      "Traçabilité des conteneurs et camions en transit",
      "Édition automatisée des manifestes et déclarations"
    ],
    impactMetric: "Traitement douanier 2x plus rapide"
  },
  {
    id: "healthcare",
    title: "Santé & Dossier Médical",
    tagline: "Digitalisation des cliniques et hôpitaux",
    description: "Gestion des patients, consultations, pharmacie intégrée, facturation aux assurances / CNSS et lits d'hospitalisation.",
    icon: "Activity",
    badge: "Santé Numérique",
    features: [
      "Dossier Médical Électronique (DME) sécurisé",
      "Prise de rendez-vous et gestion des files d'attente",
      "Pharmacie avec alertes de péremption et stocks",
      "Télétransmission des prises en charge assurance"
    ],
    impactMetric: "Réduction des temps d'attente de 60%"
  },
  {
    id: "education",
    title: "Éducation & Campus Scolaire",
    tagline: "Gestion académique pour universités et écoles",
    description: "Inscriptions en ligne, scolarité, emplois du temps, notes, bulletins dématérialisés et portail parents/étudiants.",
    icon: "GraduationCap",
    badge: "Smart Campus",
    features: [
      "Paiement des frais de scolarité par Mobile Money",
      "Cahier de texte et relevés de notes en ligne",
      "Communication directe parents-enseignants par SMS/Email",
      "Gestion de la bibliothèque et des diplômes"
    ],
    impactMetric: "100% des inscriptions dématérialisées"
  },
  {
    id: "fintech",
    title: "Fintech & Mobile Money",
    tagline: "Passerelles de paiement locales et microfinance",
    description: "Interconnexion de vos progiciels avec D-Money, Waafi, banques locales et cartes bancaires internationales.",
    icon: "CreditCard",
    badge: "Paiements 2.0",
    features: [
      "API d'encaissement et de décaissement automatique",
      "Gestion des crédits et épargne pour microfinance",
      "Rapprochement bancaire automatisé",
      "Sécurité transactionnelle et chiffrement bancaire"
    ],
    impactMetric: "Rapprochement bancaire instantané"
  }
];

export const sectorsData: SectorItem[] = [
  {
    id: "logistics",
    title: "Logistique & Portuaire",
    subtitle: "Ports, transitaires, entrepôts frigorifiques & transport",
    description: "Optimisation de la chaîne logistique entre le Port de Djibouti et les corridors régionaux. Traçabilité complète des marchandises.",
    icon: "Truck",
    caseStudy: "Déploiement pour les transitaires majeurs de la place portuaire de Djibouti.",
    keyModules: ["Transit Odoo", "Gestion Conteneurs", "Facturation Débours", "WMS Entrepôts"],
    badge: "Corne de l'Afrique"
  },
  {
    id: "education",
    title: "Éducation & Universités",
    subtitle: "Universités, instituts supérieurs, lycées & centres de formation",
    description: "Plateformes de gestion scolaire intégrées facilitant les inscriptions, le suivi pédagogique et le recouvrement des frais.",
    icon: "BookOpen",
    caseStudy: "Modernisation des processus académiques pour instituts régionaux.",
    keyModules: ["Inscriptions Web", "Paiements Frais", "Portail Notes", "Gestion Enseignants"],
    badge: "Scolarité 4.0"
  },
  {
    id: "health",
    title: "Santé & Pharmacies",
    subtitle: "Cliniques privées, hôpitaux, laboratoires & officines",
    description: "Système de santé unifié reliant l'accueil, les médecins, le bloc opératoire, le laboratoire et la pharmacie.",
    icon: "HeartPulse",
    caseStudy: "Système hospitalier informatisé avec télé-déclaration aux assurances.",
    keyModules: ["Dossier Patient", "Pharmacie POS", "Facturation Mutuelle", "Planning Gardes"],
    badge: "Dossier Médical"
  },
  {
    id: "commerce",
    title: "Commerce & Distribution",
    subtitle: "Grossistes, supermarchés, import-export & réseaux de boutiques",
    description: "Gestion des stocks en flux tendu, réapprovisionnements automatisés et caisses enregistreuses (POS) hors-ligne/en ligne.",
    icon: "ShoppingBag",
    caseStudy: "Centralisation de plus de 15 points de vente et entrepôts centraux.",
    keyModules: ["POS Écran Tactile", "Stocks Multi-dépôts", "Fidélité Client", "Comptabilité"],
    badge: "Retail & Retail"
  },
  {
    id: "finance",
    title: "Finance & Microfinance",
    subtitle: "Institutions de microcrédit, bureaux de change & fintechs",
    description: "Logiciels de gestion des prêts, calcul des échéanciers, conformité réglementaire et intégration avec les portefeuilles mobiles.",
    icon: "Landmark",
    caseStudy: "Automatisation du cycle de crédit pour coopératives financières régionales.",
    keyModules: ["Gestion Prêts", "Intégration Mobile Money", "Grand Livre", "Audit & Risques"],
    badge: "Banking Core"
  }
];

export const featuresServicesData: ServiceItem[] = [
  {
    id: "cloud",
    title: "Cloud Computing & Migration",
    shortDesc: "Architectures haute disponibilité sur AWS, Azure et GCP avec 99.9% de disponibilité garantie.",
    fullDesc: "Migration sans interruption de service, bases de données managées (RDS), conteneurisation Docker/Kubernetes et sauvegardes géo-redondantes.",
    iconName: "Cloud",
    badge: "AWS & Multi-Cloud",
    features: ["Migration Zero Downtime", "Bases de données managées", "Conteneurs Kubernetes", "Sauvegardes chiffrées"],
    technologies: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "PostgreSQL"],
    deliverables: ["Architecture Cloud", "Plan de reprise d'activité", "Audit de sécurité FinOps"]
  },
  {
    id: "development",
    title: "Développement Logiciel & Mobile",
    shortDesc: "Applications web métier, portails sécurisés et applications mobiles iOS / Android réactives.",
    fullDesc: "Conception sur-mesure de plateformes logicielles intégrant vos règles d'affaires uniques, connectées à vos bases de données centrales.",
    iconName: "Code2",
    badge: "Sur-Mesure",
    features: ["Apps Mobiles Flutter / React Native", "Portails Web Progressifs (PWA)", "APIs RESTful & Webhooks", "Interfaces UI/UX soignées"],
    technologies: ["React", "Next.js", "Python", "Node.js", "Flutter", "Tailwind CSS"],
    deliverables: ["Code source audité", "Design system", "Assurance qualité QA", "Support continu"]
  },
  {
    id: "fintech-payments",
    title: "Fintech & Passerelles de Paiement",
    shortDesc: "Intégration des paiements D-Money, Waafi, cartes bancaires et réconciliation financière.",
    fullDesc: "Connecteurs certifiés pour accepter les règlements électroniques directement dans votre système Odoo ERP ou sur votre site web.",
    iconName: "CreditCard",
    badge: "Paiements Locaux",
    features: ["Connecteurs D-Money & Waafi", "Passerelles Visa / MasterCard", "Réconciliation en temps réel", "Facturation conforme"],
    technologies: ["APIs Bancaires", "ISO 8583", "Chiffrement SSL/TLS", "Webhooks Odoo"],
    deliverables: ["Module de paiement intégré", "Tableau de trésorerie", "Guide de réconciliation"]
  },
  {
    id: "infrastructure-security",
    title: "Infrastructure Réseau & Cybersécurité",
    shortDesc: "Audits de sécurité, déploiement de pare-feu nouvelle génération et réseaux haute performance.",
    fullDesc: "Protection périmétrique des serveurs, interconnexion de sites distants par VPN sécurisé et maintien en condition opérationnelle 24/7.",
    iconName: "ShieldCheck",
    badge: "Haute Protection",
    features: ["Audit d'intrusion & Pentest", "Pare-feu Fortinet & Cisco", "VPN inter-agences sécurisé", "Monitoring SIEM 24/7"],
    technologies: ["Fortinet", "Cisco", "WireGuard", "Snort", "Linux Hardening"],
    deliverables: ["Rapport d'audit", "Politique de sécurité SI", "Monitoring proactif"]
  }
];

export const hatechStats: StatMetric[] = [
  {
    value: "142+",
    label: "Modules Déployés",
    sublabel: "ERP, RH, Transit, Stocks & POS",
    detail: "Personnalisations et modules métiers en production active"
  },
  {
    value: "2017",
    label: "Année de Fondation",
    sublabel: "Expertise continue & leadership",
    detail: "Près d'une décennie d'ingénierie au service de la Corne de l'Afrique"
  },
  {
    value: "50+",
    label: "Clients Fidélisés",
    sublabel: "Entreprises & Gouvernements",
    detail: "Groupes privés, banques, ministères et acteurs logistiques"
  },
  {
    value: "85+",
    label: "Projets Réussis",
    sublabel: "100% de taux de succès",
    detail: "Transformations numériques livrées dans les délais et budgets"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Pourquoi les entreprises de Djibouti abandonnent Excel au profit d'Odoo ERP",
    date: "14 Août 2026",
    category: "Transformation ERP",
    readTime: "4 min de lecture",
    summary: "Comment la centralisation des stocks et de la comptabilité élimine 90% des erreurs de saisie et accélère la clôture mensuelle.",
    author: "Équipe Consulting HATECH"
  },
  {
    id: "2",
    title: "Digitalisation du transit portuaire : accélérer les dédouanements dans le corridor Djibouti-Addis",
    date: "28 Juillet 2026",
    category: "Logistique & Portuaire",
    readTime: "5 min de lecture",
    summary: "Étude de cas sur l'automatisation des déclarations douanières et le suivi des conteneurs via nos modules Odoo dédiés.",
    author: "Pôle Solutions HATECH"
  },
  {
    id: "3",
    title: "Intégrer D-Money et Waafi dans votre ERP : guide des paiements dématérialisés en 2026",
    date: "10 Juillet 2026",
    category: "Fintech & Paiement",
    readTime: "3 min de lecture",
    summary: "Les meilleures pratiques pour connecter vos caisses et factures aux services de Mobile Money locaux en toute sécurité.",
    author: "Pôle R&D Casablanca/Djibouti"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    clientName: "M. Abdillahi Hassan",
    role: "Directeur des Opérations & SI",
    company: "Société Logistique & Transit Maritime",
    location: "Djibouti Ville",
    content: "L'implémentation de la solution Transit Odoo par HATECH a révolutionné notre gestion portuaire. La traçabilité de nos conteneurs et la facturation automatique des débours nous ont fait gagner un temps précieux.",
    rating: 5,
    projectType: "Odoo ERP Transit & Facturation Débours",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    clientName: "Mme. Fatouma Mohamed",
    role: "Directrice des Ressources Humaines",
    company: "Groupe Commercial d'Import-Export",
    location: "Djibouti",
    content: "Le couplage des pointeuses biométriques avec le module RH et Paie Odoo a totalement éliminé les litiges sur les heures de travail. Nos bulletins de paie sont prêts en 15 minutes chaque fin de mois.",
    rating: 5,
    projectType: "Biométrie & RH Paie Automatisée",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    clientName: "Dr. Youssouf Robleh",
    role: "Directeur Médical",
    company: "Complexe Médical Privé",
    location: "Djibouti",
    content: "La solution de santé HATECH nous a permis de dématérialiser tous les dossiers patients et de synchroniser notre pharmacie avec les caisses. La fluidité pour nos patients est incomparable.",
    rating: 5,
    projectType: "Système Hospitalier & Pharmacie POS",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];
