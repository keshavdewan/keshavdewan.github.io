import type { Lang } from './i18n';
import type { RoleEntry, StackColumn } from './profile';
import {
  EXPERIENCE,
  STACK_COLUMNS,
  BRAND_PILLARS,
  EDUCATION,
  TARGET_ROLES,
  SKILL_GROUPS,
} from './profile';

export const EXPERIENCE_I18N: Record<Lang, RoleEntry[]> = {
  en: EXPERIENCE,
  fr: [
    {
      title: 'BI Analyst Intern',
      company: 'Mediasoft Group',
      location: 'Nyon, Suisse',
      period: 'Avril 2026 – Septembre 2026',
      summary:
        "Contribution à des projets Business Intelligence portant sur l'extraction, la transformation, la validation, la modélisation sémantique et le reporting Power BI de données ERP.",
      bullets: [
        'Extraction, transformation et validation de jeux de données ERP relationnels complexes via SQL et DBeaver.',
        'Développement et maintenance de modèles sémantiques Power BI intégrant données financières, RH et métier via Power Query et DAX.',
        'Implémentation du Row-Level Security (RLS) et du filtrage dynamique pour sécuriser l’accès aux informations.',
        'Analyse des écarts entre systèmes sources ERP, jeux de données et rapports afin de renforcer la fiabilité du reporting.',
        'Appui au développement Microsoft Fabric, versionnement Git, CI/CD et rapports paramétrés Power BI Report Builder.',
        'Rédaction de la documentation technique complète des modèles sémantiques en collaboration avec les équipes métier et techniques.',
      ],
      stack: 'SQL · DBeaver · Power BI · DAX · Power Query · Microsoft Fabric · Git · CI/CD · Report Builder',
    },
    {
      title: 'Data Analyst Intern',
      company: 'KITRO SA',
      location: 'Zurich, Suisse',
      period: 'Avril 2024 – Octobre 2024',
      summary:
        'Développement de solutions d’automatisation ETL Python, de validation des données et de reporting au sein d’une entreprise technologique dédiée à la durabilité.',
      bullets: [
        'Développement de flux ETL en Python pour de grands ensembles de données multi-sources (capteurs et opérations).',
        'Automatisation des traitements répétitifs via Python et AWS Lambda, améliorant l’efficacité des workflows de 40 %.',
        'Mise en place de workflows mensuels automatisés de suivi des coûts AWS avec Python, AWS Lambda et Google Sheets API.',
        'Nettoyage, validation et réconciliation des données sous SQL et Python pour détecter anomalies et écarts.',
        'Conception de tableaux de bord interactifs avec Power BI et Amazon QuickSight.',
        'Collaboration transverse pour lever les goulets d’étranglement et fiabiliser les jeux de données.',
      ],
      stack: 'Python · Pandas · SQL · AWS Lambda · Google Sheets API · Power BI · Amazon QuickSight',
    },
    {
      title: 'BI Specialist Intern',
      company: 'International Telecommunication Union (ITU)',
      organizationNote: 'Nations Unies',
      location: 'Genève, Suisse',
      period: 'Mars 2023 – Juillet 2023',
      summary:
        "Contribution au reporting de performance institutionnel et au suivi du Plan stratégique de l'UIT (2019–2023) et des Objectifs de développement durable des Nations Unies.",
      bullets: [
        'Conception de tableaux de bord Power BI suivant plus de 30 indicateurs ODD et institutionnels.',
        'Consolidation de données multi-départements avec SQL, Power BI et Excel avancé pour les rapports de direction.',
        'Audit et réconciliation des chiffres sur plus de 30 indicateurs par rapport aux lignes de base officielles.',
        'Coordination inter-départements pour harmoniser et standardiser les définitions de reporting.',
        'Présentation des résultats analytiques devant les comités de direction et parties prenantes seniors.',
      ],
      stack: 'Power BI · SQL · Excel · Analyse de données · Visualisation de données',
    },
    {
      title: 'Manager – Location commerciale',
      company: 'Brookfield Properties',
      location: 'Inde',
      period: 'Octobre 2019 – Octobre 2021',
      summary:
        "Activité dans l'immobilier commercial alliant études de marché, données de portefeuille, analyse commerciale et reporting de direction.",
      bullets: [
        "Exploitation de données financières, commerciales et de portefeuille multi-sources sur plus de 8M+ sq. ft. d'actifs tertiaires.",
        'Coordination de la réconciliation des données, du recueil des besoins et du reporting exécutif avec les équipes finance et juridique.',
        'Contribution au suivi de la performance soutenant un taux d’occupation de 97 %.',
        'Réalisation d’études de marché et de synthèses exécutives pour la direction.',
      ],
      stack: 'Analytique portefeuille · Études de marché · Reporting commercial · Parties prenantes',
    },
    {
      title: 'Assistant Manager – Business Analyst',
      company: 'BPTP Ltd.',
      location: 'Inde',
      period: 'Janvier 2019 – Octobre 2019',
      summary:
        'Appui au développement commercial et au suivi de performance via la veille concurrentielle, la collecte de données et le reporting.',
      bullets: [
        'Études concurrentielles, de marché et clients pour appuyer les décisions d’expansion.',
        'Gestion des processus de collecte et d’analyse des données de performance commerciale.',
        'Analyse des informations marché et portefeuille et restitution des recommandations aux clients et équipes internes.',
      ],
      stack: 'Business Analysis · Études de marché · Suivi de performance · Présentations clients',
    },
    {
      title: 'Associé – Recherche & Conseil',
      company: 'PropEquity Analytics Ltd',
      location: 'Inde',
      period: 'Janvier 2018 – Janvier 2019',
      summary:
        'Collecte et analyse de données de ventes et de location immobilières pour orienter les décisions d’investissement.',
      bullets: [
        'Analyse des données clients, ventes et loyers sous Looker Studio (Google Data Studio).',
        'Développement de tableaux de bord de tendances marché pour le suivi des portefeuilles.',
      ],
      stack: 'Looker Studio · Études de marché · Analytique immobilière',
    },
    {
      title: 'Manager – Analyste Intelligence Marché',
      company: 'Realty Business Intelligence',
      location: 'Inde',
      period: '2016 – 2018',
      summary: 'Réalisation de revues de due diligence, conformité et veille de marché.',
      bullets: [
        'Coordination des revues de due diligence, conformité et intelligence marché.',
        'Production de rapports analytiques à l’appui des décisions commerciales.',
      ],
      stack: 'Intelligence marché · Due Diligence · Analyse commerciale',
    },
  ],
  de: [
    {
      title: 'BI Analyst Intern',
      company: 'Mediasoft Group',
      location: 'Nyon, Schweiz',
      period: 'April 2026 – September 2026',
      summary:
        'Mitarbeit an Business-Intelligence-Projekten mit Fokus auf ERP-Datenextraktion, Transformation, Validierung, Semantikmodellierung und Power-BI-Reporting.',
      bullets: [
        'Extraktion, Transformation und Validierung komplexer relationaler ERP-Datensätze mit SQL und DBeaver zur Sicherstellung von Datenintegrität.',
        'Entwicklung und Pflege von Power-BI-Semantikmodellen für Finanz-, HR- und Geschäftsdaten mit Power Query und DAX.',
        'Implementierung von Row-Level Security (RLS) und dynamischer Filterung zur sicheren Zugriffssteuerung je Rolle.',
        'Analyse von Abweichungen zwischen ERP-Quellsystemen, Datensätzen und Berichten zur Steigerung der Berichtsqualität.',
        'Unterstützung von Microsoft-Fabric-Entwicklung, Git-Versionskontrolle, CI/CD-Workflows und Power BI Report Builder.',
        'Erstellung einer durchgängigen technischen Dokumentation in Zusammenarbeit mit Fach- und IT-Stakeholdern.',
      ],
      stack: 'SQL · DBeaver · Power BI · DAX · Power Query · Microsoft Fabric · Git · CI/CD · Report Builder',
    },
    {
      title: 'Data Analyst Intern',
      company: 'KITRO SA',
      location: 'Zürich, Schweiz',
      period: 'April 2024 – Oktober 2024',
      summary:
        'Entwicklung von Python-ETL-Automatisierung, Datenvalidierung und Reporting-Lösungen bei einem nachhaltigkeitsorientierten Technologieunternehmen.',
      bullets: [
        'Entwicklung Python-basierter End-to-End-ETL-Workflows für umfangreiche Multi-Source- und Sensordatensätze.',
        'Automatisierung wiederkehrender Datenprozesse mit Python und AWS Lambda — Effizienzsteigerung um 40 %.',
        'Aufbau automatisierter monatlicher AWS-Kostenverfolgungsprozesse mit Python, AWS Lambda und Google Sheets API.',
        'Datenbereinigung, Validierung und Abgleich mit SQL und Python zur Erkennung von Anomalien und Abweichungen.',
        'Aufbau interaktiver Dashboards mit Power BI und Amazon QuickSight.',
        'Enge Zusammenarbeit mit Technik- und Fachteams zur Beseitigung von Pipeline-Engpässen.',
      ],
      stack: 'Python · Pandas · SQL · AWS Lambda · Google Sheets API · Power BI · Amazon QuickSight',
    },
    {
      title: 'BI Specialist Intern',
      company: 'International Telecommunication Union (ITU)',
      organizationNote: 'Vereinte Nationen',
      location: 'Genf, Schweiz',
      period: 'März 2023 – Juli 2023',
      summary:
        'Mitwirkung am institutionellen Leistungsreporting sowie am Monitoring des ITU-Strategieplans (2019–2023) und der UN-Nachhaltigkeitsziele.',
      bullets: [
        'Entwicklung interaktiver Power-BI-Dashboards zur Verfolgung von über 30 UN-SDG- und Organisationsindikatoren.',
        'Konsolidierung abteilungsübergreifender Datensätze mit SQL, Power BI und Advanced Excel für das Executive-Reporting.',
        'Prüfung und Abgleich von über 30 Indikatoren gegen institutionelle Baselines für verifizierte Führungskennzahlen.',
        'Zusammenarbeit mit Fachabteilungen zur Standardisierung globaler Berichtsdefinitionen.',
        'Präsentation verifizierter Analyseergebnisse vor Executive Steering Committees.',
      ],
      stack: 'Power BI · SQL · Excel · Datenanalyse · Datenvisualisierung',
    },
    {
      title: 'Manager – Commercial Leasing',
      company: 'Brookfield Properties',
      location: 'Indien',
      period: 'Oktober 2019 – Oktober 2021',
      summary:
        'Tätigkeit im Bereich Gewerbeimmobilien an der Schnittstelle von Marktforschung, Portfoliodaten, kommerzieller Analyse und Executive-Reporting.',
      bullets: [
        'Auswertung von Finanz-, Vertrags- und Portfoliodaten aus mehreren Quellen für ein Portfolio von über 8M+ sq. ft.',
        'Koordination von Datenabstimmung, Anforderungsaufnahme und Executive-Reporting mit Finanz- und Rechtsabteilungen.',
        'Beitrag zum Portfolio-Monitoring bei einer Vermietungsquote von 97 %.',
        'Markt- und Wettbewerbsanalysen sowie Aufbereitung kommerzieller Ergebnisse für das Management.',
      ],
      stack: 'Portfolio-Analytik · Marktforschung · Kommerzielles Reporting · Stakeholder-Abstimmung',
    },
    {
      title: 'Assistant Manager – Business Analyst',
      company: 'BPTP Ltd.',
      location: 'Indien',
      period: 'Januar 2019 – Oktober 2019',
      summary:
        'Markt-, Wettbewerbs- und Performance-Analysen zur Unterstützung von Expansions- und Portfolioentscheidungen.',
      bullets: [
        'Durchführung von Wettbewerbs-, Markt- und Kundenanalysen für Expansionsentscheidungen.',
        'Steuerung von Datenerfassungs- und Analyseprozessen für das Leistungs-Tracking.',
        'Analyse von Markt- und Portfoliodaten sowie Präsentation von Empfehlungen vor Kunden und internen Stakeholdern.',
      ],
      stack: 'Business Analysis · Marktforschung · Performance-Tracking · Präsentationen',
    },
    {
      title: 'Associate – Research & Consulting',
      company: 'PropEquity Analytics Ltd',
      location: 'Indien',
      period: 'Januar 2018 – Januar 2019',
      summary: 'Analyse von Verkaufs- und Mietdaten für Immobilienmarkt- und Investitionsentscheidungen.',
      bullets: [
        'Auswertung von Kunden-, Verkaufs- und Mietdaten mit Looker Studio (Google Data Studio).',
        'Aufbau interaktiver Markttrend-Dashboards für Portfolioanalysen.',
      ],
      stack: 'Looker Studio · Marktforschung · Immobilienanalytik',
    },
    {
      title: 'Manager – Market Intelligence Analyst',
      company: 'Realty Business Intelligence',
      location: 'Indien',
      period: '2016 – 2018',
      summary: 'Due-Diligence-Prüfungen, Compliance-Analysen und kommerzielle Marktforschung.',
      bullets: [
        'Koordination von Due-Diligence- und Compliance-Prüfungen sowie Marktanalysen.',
        'Erstellung fundierter Marktberichte zur Unterstützung kommerzieller Entscheidungen.',
      ],
      stack: 'Market Intelligence · Due Diligence · Kommerzielle Analyse',
    },
  ],
};

export const STACK_I18N: Record<Lang, StackColumn[]> = {
  en: STACK_COLUMNS,
  fr: [
    {
      name: 'BI & Ingénierie Fabric',
      tools: 'Power BI (PL-300) · Microsoft Fabric (DP-600) · DAX · Power Query',
      detail:
        'Modèles sémantiques Lakehouse et en étoile, Row-Level Security (RLS), filtrage dynamique, versionnement Git CI/CD et tableaux de bord KPI exécutifs.',
    },
    {
      name: 'Data Engineering & SQL',
      tools: 'Python (Pandas) · PostgreSQL · AWS Lambda · QuickSight',
      detail:
        "Pipelines ETL/ELT automatisés, ingestion via API REST et webhooks, analytique par fonctions de fenêtrage et détection d'anomalies multi-sources.",
    },
    {
      name: 'IA & Automatisation de workflows',
      tools: 'LLMs · Architecture RAG · Model Context Protocol (MCP) · Supabase · Render',
      detail:
        'Développement assisté par IA (Claude, Gemini, Antigravity), prompt engineering, extraction structurée, recherche conversationnelle et automatisation par API/webhooks.',
    },
    {
      name: 'Gouvernance & Storytelling',
      tools: 'Validation des données · Audits KPI · Tableau · Looker Studio',
      detail:
        'Réconciliation sur plus de 30 indicateurs ONU, alignement avec les équipes non techniques et récits décisionnels clairs.',
    },
  ],
  de: [
    {
      name: 'BI & Fabric Engineering',
      tools: 'Power BI (PL-300) · Microsoft Fabric (DP-600) · DAX · Power Query',
      detail:
        'Lakehouse- und Star-Schema-Semantikmodelle, Row-Level Security (RLS), dynamische Filterung, Git CI/CD-Versionierung und Executive-KPI-Scorecards.',
    },
    {
      name: 'Data Engineering & SQL',
      tools: 'Python (Pandas) · PostgreSQL · AWS Lambda · QuickSight',
      detail:
        'Automatisierte ETL/ELT-Pipelines, REST-API- und Webhook-Ingestion, Window-Function-Analytik sowie Multi-Source-Anomalieerkennung.',
    },
    {
      name: 'KI & Workflow-Automatisierung',
      tools: 'LLMs · RAG-Architektur · Model Context Protocol (MCP) · Supabase · Render',
      detail:
        'KI-gestützte Entwicklung (Claude, Gemini, Antigravity), Prompt Engineering, strukturierte Extraktion, konversationelle Event-Suche und API/Webhook-Automatisierung.',
    },
    {
      name: 'Governance & Storytelling',
      tools: 'Datenvalidierung · KPI-Audits · Tableau · Looker Studio',
      detail:
        'Baseline-Abstimmung über mehr als 30 UN-Indikatoren, Zusammenarbeit mit Fachabteilungen und klare Entscheidungsvorlagen.',
    },
  ],
};

export const BRAND_PILLARS_I18N: Record<Lang, typeof BRAND_PILLARS> = {
  en: BRAND_PILLARS,
  fr: [
    { title: 'Business Intelligence', description: 'Conception de tableaux de bord Power BI, modèles sémantiques, solutions de reporting et pipelines gouvernés.' },
    { title: 'Intégration IA', description: 'Pratique concrète des LLM, RAG, MCP, API REST et outils de développement assistés par IA.' },
    { title: 'Compréhension métier', description: 'Alliance entre analytique technique, ingénierie, recherche, conseil et immobilier commercial.' },
  ],
  de: [
    { title: 'Business Intelligence', description: 'Entwicklung von Power-BI-Dashboards, Semantikmodellen, Reporting-Lösungen und regulierten Datenpipelines.' },
    { title: 'KI-Integration', description: 'Praxiserfahrung mit LLMs, RAG, MCP, REST-APIs und KI-gestützten Entwicklungswerkzeugen.' },
    { title: 'Geschäftsverständnis', description: 'Verbindung von technischer Analytik mit Ingenieurwesen, Forschung, Beratung und Gewerbeimmobilien.' },
  ],
};

export const EDUCATION_I18N: Record<Lang, typeof EDUCATION> = {
  en: EDUCATION,
  fr: [
    { degree: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)', institution: 'Certification Microsoft', detail: 'Certification sur la préparation, modélisation, visualisation et gouvernance de données Power BI.' },
    { degree: 'Certification Data Analyst', institution: 'CareerFoundry, Allemagne', detail: 'Formation intensive par projets en SQL, Python, Excel avancé, Tableau et Power BI.' },
    { degree: 'Master en gestion avancée de la construction', institution: 'NICMAR, Inde', detail: '2014–2016 · Planification quantitative, gestion commerciale et économie des infrastructures.' },
    { degree: 'Bachelor en ingénierie', institution: 'MDU, Inde', detail: '2008–2012 · Fondamentaux d’ingénierie, pensée systémique et mathématiques appliquées.' },
  ],
  de: [
    { degree: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)', institution: 'Microsoft-Zertifizierung', detail: 'Zertifiziert in Datenaufbereitung, Modellierung, Visualisierung und Governance mit Power BI.' },
    { degree: 'Data Analyst Zertifizierung', institution: 'CareerFoundry, Deutschland', detail: 'Projektbasiertes Intensivprogramm in SQL, Python, Advanced Excel, Tableau und Power BI.' },
    { degree: 'Master in Advanced Construction Management', institution: 'NICMAR, Indien', detail: '2014–2016 · Quantitative Projektplanung, kaufmännisches Management und Infrastrukturökonomie.' },
    { degree: 'Bachelor in Engineering', institution: 'MDU, Indien', detail: '2008–2012 · Ingenieurwissenschaftliche Grundlagen, Systemdenken und angewandte Mathematik.' },
  ],
};

export const TARGET_ROLES_I18N: Record<Lang, string[]> = {
  en: TARGET_ROLES,
  fr: [
    'Business Intelligence Analyst',
    'Data Analyst',
    'Développeur Power BI',
    'Spécialiste BI',
    'Consultant Data Analytics',
    'Data Engineering Analyst',
    'Analyste Data assisté par IA',
    'Analyste Reporting & Automatisation',
  ],
  de: [
    'Business Intelligence Analyst',
    'Data Analyst',
    'Power BI Developer',
    'BI Specialist',
    'Data Analytics Consultant',
    'Data Engineering Analyst',
    'AI-Enabled Data Analyst',
    'Reporting & Automation Analyst',
  ],
};

export const SKILLS_I18N: Record<Lang, typeof SKILL_GROUPS> = {
  en: SKILL_GROUPS,
  fr: [
    { name: 'BI & Visualisation', items: 'Power BI (PL-300), Microsoft Fabric, DAX, Power Query, Report Builder, Tableau, Amazon QuickSight, Looker Studio' },
    { name: 'Programmation & Bases de données', items: 'Python, Pandas, SQL, PostgreSQL, DBeaver, Supabase' },
    { name: 'Data Engineering & Gouvernance', items: 'Pipelines ETL/ELT, Modélisation en étoile, AWS Lambda, Row-Level Security (RLS), Validation & Audits' },
    { name: 'IA & Automatisation intelligente', items: 'LLMs, Architecture RAG, Model Context Protocol (MCP), Prompt Engineering, API REST & Webhooks, Développement assisté par IA (Claude, ChatGPT, Gemini)' },
    { name: 'Développement & Collaboration', items: 'Render, Git, CI/CD, VS Code, Antigravity, Documentation technique, Coordination parties prenantes' },
  ],
  de: [
    { name: 'BI & Visualisierung', items: 'Power BI (PL-300), Microsoft Fabric, DAX, Power Query, Report Builder, Tableau, Amazon QuickSight, Looker Studio' },
    { name: 'Programmierung & Datenbanken', items: 'Python, Pandas, SQL, PostgreSQL, DBeaver, Supabase' },
    { name: 'Data Engineering & Governance', items: 'ETL/ELT-Pipelines, Star-Schema-Modellierung, AWS Lambda, Row-Level Security (RLS), Datenvalidierung & Audits' },
    { name: 'KI & Intelligente Automatisierung', items: 'LLMs, RAG-Architektur, Model Context Protocol (MCP), Prompt Engineering, REST-APIs & Webhooks, KI-gestützte Entwicklung (Claude, ChatGPT, Gemini)' },
    { name: 'Entwicklung & Zusammenarbeit', items: 'Render, Git, CI/CD, VS Code, Antigravity, Technische Dokumentation, Stakeholder-Kommunikation' },
  ],
};

export interface WorkTranslation {
  title: string;
  descriptor: string;
  tagline: string;
  organization: string;
  status: string;
  categoryLabel: string;
  stats?: { value: string; label: string }[];
  capabilities?: string[];
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
}

export const WORK_TRANSLATIONS: Record<'fr' | 'de', Record<string, WorkTranslation>> = {
  fr: {
    'mediasoft-fabric-bi': {
      title: 'Optimisation BI d’entreprise & Modèles sémantiques',
      descriptor: 'Modèles sémantiques Power BI gouvernés avec SQL, Microsoft Fabric et développement assisté par IA.',
      tagline: 'Conception et optimisation de modèles sémantiques ERP avec SQL, DAX, Row-Level Security, Git CI/CD et documentation assistée par Claude/MCP.',
      organization: 'Mediasoft Group, Nyon',
      status: 'Projet BI d’entreprise',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: 'Star Schema', label: 'Modèles sémantiques réutilisables intégrant données financières, RH et métier' },
        { value: 'RLS', label: 'Row-Level Security et filtrage dynamique par rôle utilisateur' },
        { value: 'Git & MCP', label: 'Versionnement CI/CD et documentation technique assistée par IA' },
      ],
      capabilities: ['Extraction ERP relationnelle', 'Modélisation sémantique en étoile', 'Row-Level Security (RLS)', 'Filtrage dynamique', 'Documentation & métadonnées assistées par IA', 'Git & CI/CD'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Ce projet chez Mediasoft Group portait sur le développement et l’amélioration de solutions de reporting BI à partir de jeux de données ERP relationnels sous SQL, Power BI et Microsoft Fabric.',
          ],
        },
        {
          heading: 'Problématique métier',
          paragraphs: [
            'Les équipes avaient besoin d’un reporting fiable sans dupliquer la logique de calcul ni exposer des données sensibles entre services, tout en corrigeant les écarts entre requêtes ERP et visuels Power BI.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Extraction et validation des tables relationnelles en SQL et DBeaver.',
            'Modélisation en étoile dans Power BI et Microsoft Fabric, standardisation des mesures DAX et mise en place du Row-Level Security.',
            'Utilisation de Claude/MCP pour structurer la documentation technique et les définitions métier avec Git et CI/CD.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Définitions sémantiques unifiées, sécurité RLS renforcée et traçabilité documentaire améliorée sur les rapports financiers, RH et métier.',
          ],
        },
      ],
    },
    'hey-geneva-chatbot': {
      title: 'Hey! Geneva – Chatbot IA de découverte d’événements',
      descriptor: 'Assistant WhatsApp multilingue basé sur Python, APIs, LLMs et RAG.',
      tagline: 'Application indépendante assistée par IA combinant pipelines REST API Python, Supabase, RAG, MCP et webhooks WhatsApp.',
      organization: 'Projet indépendant',
      status: 'Prototype indépendant',
      categoryLabel: 'IA & Automatisation',
      stats: [
        { value: 'RAG + MCP', label: 'Recherche structurée dans Supabase avant génération de réponse LLM' },
        { value: '5 étapes', label: 'Ingestion API, nettoyage Python, base de données, couche IA et webhooks WhatsApp' },
        { value: 'Multilingue', label: 'Conçu pour des requêtes en langage naturel sur les événements à Genève' },
      ],
      capabilities: ['Ingestion API REST', 'Normalisation Python', 'Stockage Supabase', 'Retrieval-Augmented Generation (RAG)', 'Model Context Protocol (MCP)', 'Webhooks WhatsApp'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Hey! Geneva est une application indépendante assistée par IA permettant de rechercher des événements et activités à Genève via une interface conversationnelle WhatsApp.',
          ],
        },
        {
          heading: 'Problématique métier',
          paragraphs: [
            'Les agendas locaux sont dispersés entre de nombreux sites et newsletters ; interroger un LLM générique sans source structurée expose à des dates ou lieux erronés.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            '1. Ingestion : récupération des événements via API REST externes.',
            '2. Traitement : nettoyage et normalisation en Python.',
            '3. Base de données : stockage structuré dans Supabase.',
            '4. Intégration IA : LLMs, RAG et MCP pour ancrer les réponses sur les données disponibles.',
            '5. Communication : intégration WhatsApp par webhooks.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Démonstration d’un prototype complet reliant ingénierie des données Python, Supabase, RAG/MCP et messagerie conversationnelle.',
          ],
        },
      ],
    },
    'construction-bi-paginated-reporting': {
      title: 'PoC BI Construction & Rapports paginés',
      descriptor: 'Modèle BI construction avec masquage automatique des données de démo et rapports imprimables.',
      tagline: 'Modèle Power BI Proof-of-Concept réunissant comptabilité, chiffre d’affaires, RH et logistique — avec anonymisation automatique des chiffres sensibles pour les démos et rapports PDF/Excel filtrables sous Power BI Report Builder.',
      organization: 'Mediasoft Group — PoC BI Construction',
      status: 'Proof-of-Concept & Documentation',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '4 domaines', label: 'Comptabilité, chiffre d’affaires, RH et logistique réunis en un modèle' },
        { value: 'Données sûres', label: 'Brouillage automatique des noms et montants directement dans Power Query' },
        { value: 'PDF + Interactif', label: 'Tableaux de bord interactifs couplés à des états prêts à imprimer (.rdl)' },
      ],
      capabilities: ['Masquage automatique Power Query', 'Formatage clair M / Mrd (DAX)', 'Rapports PDF & Excel (Report Builder)', 'Formatage financier FR/CH', 'Documentation technique BI'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Ce Proof-of-Concept conçu chez Mediasoft Group montre comment centraliser comptabilité, revenus historiques, heures RH et logistique chantier dans une seule architecture BI.',
          ],
        },
        {
          heading: 'Problématique métier',
          paragraphs: [
            'Permettre aux futurs clients d’explorer des tableaux de bord ERP réalistes en démonstration sans jamais exposer de vrais chiffres confidentiels, tout en fournissant des états financiers faciles à imprimer ou exporter.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Règles simples dans Power Query qui remplacent automatiquement les vrais noms et montants pour des démonstrations 100 % confidentielles.',
            'Affichage dynamique en millions (M) et milliards (Mrd) adapté aux normes décimales francophones.',
            'Tableaux de bord Power BI interactifs accompagnés de rapports paginés Power BI Report Builder (.rdl) filtrables et exportables en PDF ou Excel.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Démonstrateur réutilisable et sécurisé accompagné d’une documentation technique complète de 18 sections.',
          ],
        },
      ],
    },
    'glpi-it-analytics': {
      title: 'Analytique Tickets & SLA ITSM (GLPI)',
      descriptor: 'Modélisation du cycle de vie des tickets, DAX SLA et documentation automatisée via Claude MCP.',
      tagline: 'Analytique Power BI pour le support IT GLPI avec suivi SLA, planification Gantt et workflow Claude MCP + python-docx analysant le modèle PBIP pour générer les guides.',
      organization: 'Mediasoft Group — Analytique IT interne',
      status: 'Modèle PBIP & docs Claude MCP',
      categoryLabel: 'IA & Automatisation',
      stats: [
        { value: '30 tables', label: 'Modèle relationnel GLPI avec 24 mesures DAX en PBIP/TMDL' },
        { value: 'Claude MCP', label: 'Connexion de Claude via MCP aux fichiers PBIP/TMDL pour automatiser la doc' },
        { value: 'SLA + Gantt', label: 'Délais de clôture/résolution et suivi Gantt du département BI' },
      ],
      capabilities: ['Inspection de modèle Claude MCP', 'Modélisation cycle ITSM', 'Mesures DAX SLA & retards', 'Calculs Gantt', 'Documentation Word/Markdown automatisée'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Suite analytique Power BI dédiée aux tickets GLPI, couplée à un workflow Claude MCP et Python (python-docx) qui inspecte le modèle PBIP pour générer automatiquement les guides d’utilisation.',
          ],
        },
        {
          heading: 'Problématique métier',
          paragraphs: [
            'Les équipes IT et BI manquaient de visibilité sur les files de tickets, les délais SLA et les demandes BI, tandis que la documentation manuelle devenait vite obsolète.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Modélisation de 30 tables GLPI et 24 mesures DAX (Moyenne_Jours_Cloture, Moyenne_Jours_Resolution, Est_Ticket_BI, Durée_Gantt).',
            'Utilisation de Claude MCP sur l’architecture PBIP/TMDL et génération automatique des guides Word et Markdown via python-docx.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Pilotage unifié des SLA et suppression des écarts documentaires grâce à Claude MCP et l’automatisation Python.',
          ],
        },
      ],
    },
    'itu-sdg-dashboards': {
      title: 'Tableaux de bord ODD ONU & Plan stratégique',
      descriptor: 'Suivi de plus de 30 indicateurs institutionnels à l’Union internationale des télécommunications.',
      tagline: 'Consolidation de données multi-départements en tableaux de bord Power BI pour le Plan stratégique 2019–2023 et plus de 30 indicateurs ODD.',
      organization: 'International Telecommunication Union (ITU) — Nations Unies, Genève',
      status: 'Reporting institutionnel',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '30+', label: 'Indicateurs institutionnels et ODD suivis et validés' },
        { value: '2019–2023', label: 'Cycle de suivi du Plan stratégique de l’UIT' },
        { value: 'ONU Genève', label: 'Harmonisation multi-départements pour la direction' },
      ],
      capabilities: ['Suivi KPI ODD', 'Consolidation multi-départements', 'Validation & réconciliation', 'Reporting standardisé', 'Présentations direction'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Durant mon stage de Spécialiste BI à l’UIT (Nations Unies) à Genève, j’ai contribué au suivi du Plan stratégique 2019–2023 et des Objectifs de développement durable.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Conception de tableaux de bord Power BI regroupant plus de 30 indicateurs institutionnels et ODD.',
            'Standardisation des formats avec plusieurs départements, validation SQL/Excel et restitution aux parties prenantes.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Mise à disposition d’indicateurs vérifiés et cohérents pour le pilotage exécutif.',
          ],
        },
      ],
    },
    'kitro-etl-automation': {
      title: 'Automatisation AWS Costing & ETL Capteurs',
      descriptor: 'Traitement de données en Python et automatisation AWS Lambda.',
      tagline: 'Pipelines ETL Python et suivi automatisé des coûts AWS sous AWS Lambda, améliorant l’efficacité des workflows de 40 %.',
      organization: 'KITRO SA, Zurich',
      status: 'Livré en stage',
      categoryLabel: 'Data Engineering',
      stats: [
        { value: '40 %', label: 'Gain d’efficacité grâce à l’automatisation des workflows' },
        { value: 'AWS Lambda', label: 'Workflows Python planifiés pour le suivi mensuel AWS' },
        { value: 'Multi-sources', label: 'Jeux de données nettoyés pour Power BI et Amazon QuickSight' },
      ],
      capabilities: ['Automatisation ETL Python', 'Planification AWS Lambda', 'Nettoyage & réconciliation', 'Investigation d’écarts', 'Reporting Power BI & QuickSight'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Chez KITRO SA à Zurich, j’ai développé des workflows Python et AWS Lambda automatisant le calcul mensuel des coûts AWS et le traitement de grands jeux de données multi-sources.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Extraction et transformation via Python, Pandas et SQL ; détection d’anomalies et réconciliation avant alimentation de Power BI et Amazon QuickSight.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Amélioration de 40 % de l’efficacité des processus et fiabilisation accrue des données de reporting.',
          ],
        },
      ],
    },
    'internal-billing-logistics-bi': {
      title: 'BI Facturation Interne & Logistique Flotte (Modèle à rôles)',
      descriptor: 'Suivi des refacturations internes de flotte et des expéditions dépôt-chantier en 3 étapes.',
      tagline: 'Modèle Power BI anonymisé pour le BTP suisse résolvant les refacturations internes entre dépôts émetteurs et chantiers via des dimensions à rôles.',
      organization: 'Entreprise suisse de construction (via Mediasoft Group)',
      status: 'Spécification & modèle BI livrés',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '2 modules', label: 'Locations de flotte (fi212) et commandes de matériel (fi400)' },
        { value: 'Rôles doubles', label: 'Séparation PRODUIT (dépôt émetteur) vs. CHARGE (chantier récepteur)' },
        { value: '3 quantités', label: 'Suivi commandé, préparé et livré sur chaque ligne de bon' },
      ],
      capabilities: ['Schéma en étoile à rôles', 'Logique de refacturation interne', 'Analytique flotte & engins', 'Suivi d’expédition en 3 étapes'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Rapport Power BI conçu pour un responsable logistique (client suisse anonymisé) afin de suivre la facturation interne des véhicules, engins et matériaux mobilisés sur chantiers.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Séparation des points de vue analytiques via DIM_CA_PRODUIT vs. DIM_CA_CHARGE et DIM_GENRES_FRAIS_PRODUIT vs. CHARGE reliés au catalogue DIM_ARTICLES_LIGHT.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Traçabilité complète des locations journalières internes et des bons de commande non encore livrés.',
          ],
        },
      ],
    },
    'hr-payroll-sql-datamart': {
      title: 'Couche Datamart SQL RH & Paie ERP',
      descriptor: 'Transformation de tables ERP OpenEdge en vues SQL DATAMART prêtes pour Power BI.',
      tagline: 'Conception d’une couche de 10 vues SQL traduisant des codes ERP Progress/OpenEdge cryptiques en vues analytiques RH et paie lisibles en français.',
      organization: 'Entreprise suisse de construction (via Mediasoft Group)',
      status: 'Vues SQL Datamart en production',
      categoryLabel: 'Data Engineering',
      stats: [
        { value: '10 vues', label: 'Vues SQL DATAMART.DIM_* et DATAMART.F_* sur tables PUB.*' },
        { value: 'RH + Paie', label: 'Salaires fixes, variables, soldes, rapports de travail et heures' },
        { value: 'Schéma unifié', label: 'Nommage métier francophone avant ingestion Power BI' },
      ],
      capabilities: ['Ingénierie de vues SQL', 'Abstraction de schéma ERP', 'Modélisation RH & paie', 'Intégration heures & soldes'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Couche d’abstraction SQL DATAMART de 10 vues (projet client suisse anonymisé) exposant proprement les données RH et paie issues de tables ERP Progress/OpenEdge.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Traduction des codes ERP à 4 caractères en 4 dimensions et 6 faits normalisés (salariés, calendriers, rapports de travail, fixes, variables et soldes).',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Suppression des renommages complexes dans Power Query et contrat SQL partagé pour le reporting RH.',
          ],
        },
      ],
    },
    'accounting-gl-dax-audit': {
      title: 'Consolidation Grand Livre & Audit Sémantique DAX',
      descriptor: 'Modèle Power BI comptable pluriannuel et audit complet de 114 mesures DAX.',
      tagline: 'Projet suisse anonymisé combinant consolidation du Grand Livre sur 5 ans, 5 hiérarchies de comptes et nettoyage vérifié de 114 mesures DAX.',
      organization: 'Groupe suisse Hôtellerie & Construction (via Mediasoft Group)',
      status: 'Audit & modèle sémantique refactorisé',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '114 mesures', label: 'Dictionnaire DAX audité de bout en bout sur 10 pages' },
        { value: '24 épurées', label: 'Mesures inutilisées (257 lignes DAX) et 24 entités supprimées' },
        { value: '5 ans GL', label: 'Consolidation du Grand Livre (2022–2026) à la ligne d’écriture' },
      ],
      capabilities: ['Consolidation Grand Livre', 'Modélisation P&L et Bilan signée', 'Audit & refactoring DAX', 'Validation structurelle PBIP / TMDL'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Consolidation de 5 années de Grand Livre dans un modèle Power BI unique avec 5 hiérarchies de comptes et audit complet des 114 mesures DAX sur 10 pages.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Convention de signe appliquée une fois en Power Query au grain d’écriture comptable, et vérification systématique des liaisons visuelles avant suppression de 24 mesures mortes.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Modèle allégé (257 lignes de DAX superflues retirées) tout en préservant exactement les chiffres financiers.',
          ],
        },
      ],
    },
    'customer-satisfaction-report': {
      title: 'Analytique Satisfaction & Connaissance Client',
      descriptor: 'Analyse de la satisfaction, de la fidélité et de l’expérience support sous Power BI.',
      tagline: 'Projet analytique sous Power BI et ZoomCharts explorant les facteurs influençant la satisfaction et la fidélité client.',
      organization: 'Onyx Data & ZoomCharts Challenge',
      status: 'Étude de cas publiée',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '120', label: 'Retours clients 2024 répartis sur 12 attributs' },
        { value: '9 questions', label: 'Hypothèses testées sur fidélité, géographie et support' },
        { value: 'Power BI', label: 'Exploration hiérarchique interactive avec ZoomCharts' },
      ],
      capabilities: ['Segmentation client (A/B/C)', 'Analyse impact support', 'Tendances géographiques', 'Visuels interactifs'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Étude des facteurs de satisfaction (prix, variété, emballage, interactions avec le support client et localisation) sur un jeu de données omnicanal 2024 sous Power BI et ZoomCharts.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'Identification des leviers différenciants entre groupes de fréquence et publication d’un article détaillé sur Medium.',
          ],
        },
      ],
    },
    'energy-consumption-dashboard': {
      title: 'Tableau de bord Consommation Énergétique',
      descriptor: 'Rapport Power BI multi-pages couvrant eau, électricité et gaz.',
      tagline: 'Rapport Power BI en quatre pages analysant consommations et coûts énergétiques pluriannuels (2016–2019).',
      organization: 'Projet BI personnel',
      status: 'Rapport Power BI en ligne',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '88,49 %', label: 'Part de l’eau dans les unités consommées suivies' },
        { value: '4 pages', label: 'Vues dédiées : Vue globale, Eau, Électricité et Gaz' },
        { value: '2016–2019', label: 'Évolution historique des consommations et coûts' },
      ],
      capabilities: ['Navigation multi-pages BI', 'Mesures DAX & KPI', 'Comparaison par fluide', 'Forage par ville et bâtiment'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Conception d’un rapport Power BI en 4 pages avec mesures DAX personnalisées et segments dynamiques pour suivre les consommations d’eau, d’électricité et de gaz.',
          ],
        },
        {
          heading: 'Principaux résultats',
          bullets: [
            'L’eau représente 88,49 % des unités consommées (pic en 2017) tandis que la consommation et les coûts de gaz ont diminué entre 2016 et 2019.',
          ],
        },
      ],
    },
    'global-commodity-prices': {
      title: 'Analyse des prix mondiaux des matières premières (1960–2022)',
      descriptor: 'Six décennies d’évolution des cours analysées avec Python et Power BI.',
      tagline: 'Analyse des données « Pink Sheet » de la Banque mondiale pour le pétrole, le café, le thé et le sucre.',
      organization: 'World Bank Pink Sheet Analysis',
      status: 'Rapport Power BI en ligne',
      categoryLabel: 'Data Engineering',
      stats: [
        { value: '1960–2022', label: 'Six décennies de séries historiques Banque mondiale' },
        { value: '4 matières', label: 'Pétrole, Café, Thé et Sucre' },
        { value: 'YoY & MoM', label: 'Comparaisons annuelles et mensuelles sous DAX' },
      ],
      capabilities: ['EDA Python', 'Comparaisons YoY & MoM', 'Tendances historiques', 'Tableau de bord Power BI'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Analyse exploratoire sous Python (Pandas, Matplotlib, Seaborn, Plotly) suivie d’un tableau de bord interactif Power BI avec indicateurs YoY et MoM.',
          ],
        },
      ],
    },
    'eight-weeks-sql-challenge': {
      title: '8 Weeks SQL Challenge & Parch and Posey',
      descriptor: 'Études de cas PostgreSQL sur la clientèle, les ventes, les abonnements et la performance.',
      tagline: 'Recueil d’études de cas PostgreSQL illustrant jointures complexes, CTE, fonctions de fenêtrage, cohortes, tunnels et nettoyage de données.',
      organization: 'Études de cas PostgreSQL',
      status: 'Dépôts & articles publiés',
      categoryLabel: 'SQL & Analytique',
      stats: [
        { value: '8+', label: 'Études de cas SQL et schéma relationnel Parch & Posey' },
        { value: '8 articles', label: 'Guides détaillés publiés sur Medium, DevGenius et TowardsDev' },
        { value: 'PostgreSQL', label: 'CTE, fonctions de fenêtrage et nettoyage relationnel' },
      ],
      capabilities: ['Jointures complexes & CTE', 'Fonctions de fenêtrage', 'Segmentation & cohortes', 'Analyse de tunnels', 'Nettoyage SQL'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Résolution complète en PostgreSQL et DBeaver de 8 études de cas métier et du schéma commercial Parch and Posey, accompagnée de 8 articles techniques.',
          ],
        },
      ],
    },
    'life-expectancy-undp': {
      title: 'Espérance de vie & Développement humain (PNUD)',
      descriptor: 'Exploration des tendances mondiales de développement via les données du PNUD.',
      tagline: 'Analyse de l’espérance de vie et de l’indice de développement humain (IDH) par pays et région entre 1990 et 2021.',
      organization: 'Jeu de données PNUD',
      status: 'Rapport Power BI en ligne',
      categoryLabel: 'SQL & Analytique',
      stats: [
        { value: '1990–2021', label: 'Trois décennies de données mondiales PNUD' },
        { value: 'Rang IDH', label: 'Comparaisons régionales et groupes de développement' },
      ],
      capabilities: ['Nettoyage & exploration', 'Analyse longitudinale', 'Comparaisons régionales', 'Tableau de bord interactif'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Nettoyage en Python, stockage PostgreSQL et visualisation sous Power BI des écarts régionaux d’espérance de vie et de classement IDH sur 30 ans.',
          ],
        },
      ],
    },
    'indian-real-estate': {
      title: 'Analytique du marché immobilier indien',
      descriptor: 'Analyse des prix et de l’offre résidentielle dans sept villes indiennes.',
      tagline: 'Mise en pratique de mon expérience immobilière avec Python et Tableau pour analyser appartements, maisons et villas dans sept métropoles.',
      organization: 'Analytique secteur immobilier',
      status: 'Tableau Public en ligne',
      categoryLabel: 'SQL & Analytique',
      stats: [
        { value: '7 villes', label: 'Offre et prix comparés sur sept marchés urbains' },
        { value: '3 types', label: 'Appartements, maisons individuelles et villas' },
      ],
      capabilities: ['Nettoyage de données', 'Segmentation prix / sq. ft.', 'Corrélation chambres & surface', 'Visualisations Tableau'],
      sections: [
        {
          heading: 'Présentation du projet',
          paragraphs: [
            'Ce projet illustre le lien entre mon expérience passée en recherche immobilière et mes compétences actuelles en Python, Pandas et Tableau.',
          ],
        },
      ],
    },
  },
  de: {
    'mediasoft-fabric-bi': {
      title: 'Enterprise BI & Semantic Model Optimization',
      descriptor: 'Entwicklung regulierter Power-BI-Semantikmodelle mit SQL, Microsoft Fabric und KI-gestützter Entwicklung.',
      tagline: 'Aufbau und Optimierung wiederverwendbarer ERP-Semantikmodelle mit SQL, DAX, Row-Level Security, Git CI/CD und Claude/MCP-Metadaten-Workflows.',
      organization: 'Mediasoft Group, Nyon',
      status: 'Enterprise-BI-Projekt',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: 'Star Schema', label: 'Wiederverwendbare Semantikmodelle für Finanz-, HR- und Geschäftsdaten' },
        { value: 'RLS', label: 'Row-Level Security und dynamische Filterung nach Rolle' },
        { value: 'Git & MCP', label: 'CI/CD-Versionskontrolle und KI-gestützte Dokumentation' },
      ],
      capabilities: ['Relationale ERP-Extraktion', 'Star-Schema-Modellierung', 'Row-Level Security (RLS)', 'Dynamische Filterung', 'KI-gestützte Dokumentation & Metadaten', 'Git & CI/CD'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Bei Mediasoft Group lag der Schwerpunkt auf dem Aufbau und der Optimierung unternehmensweiter BI-Berichtslösungen auf Basis relationaler ERP-Daten mit SQL, Power BI und Microsoft Fabric.',
          ],
        },
        {
          heading: 'Geschäftsproblem',
          paragraphs: [
            'Fachabteilungen benötigten konsistente Self-Service-Berichte ohne doppelte Kennzahlenlogik, geschützt durch rollenbasierte Zugriffssteuerung und abgestimmt auf Quellsystemabfragen.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            'Extraktion und Validierung relationaler ERP-Daten mittels SQL und DBeaver.',
            'Aufbau von Star-Schema-Semantikmodellen, DAX-Kennzahlen, Row-Level Security sowie Report-Builder-Ausgaben.',
            'Einsatz von Claude/MCP zur strukturierten technischen Dokumentation neben Git- und CI/CD-Workflows.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Einheitliche Semantikdefinitionen, verlässliche Zugriffskontrolle via RLS und bessere Wartbarkeit durch strukturierte Dokumentation.',
          ],
        },
      ],
    },
    'hey-geneva-chatbot': {
      title: 'Hey! Geneva – KI-gestützter Event-Discovery-Chatbot',
      descriptor: 'Mehrsprachiger WhatsApp-Assistent auf Basis von Python, APIs, LLMs und RAG.',
      tagline: 'Eigenständige KI-gestützte Anwendung, die Python-REST-API-Pipelines, Supabase, RAG, MCP und WhatsApp-Webhooks verbindet.',
      organization: 'Eigenprojekt',
      status: 'Eigenständiger Prototyp',
      categoryLabel: 'KI & Automatisierung',
      stats: [
        { value: 'RAG + MCP', label: 'Strukturierte Event-Abfrage aus Supabase vor LLM-Antworten' },
        { value: '5 Stufen', label: 'API-Ingestion, Python-Bereinigung, Datenbank, KI-Layer & Webhooks' },
        { value: 'Mehrsprachig', label: 'Konzipiert für natürliche Event-Anfragen in Genf' },
      ],
      capabilities: ['REST-API-Ingestion', 'Python-Normalisierung', 'Supabase-Datenbank', 'Retrieval-Augmented Generation (RAG)', 'Model Context Protocol (MCP)', 'WhatsApp-Webhooks'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Hey! Geneva ist ein eigenständiges KI-Projekt, das lokale Veranstaltungen in Genf aus verschiedenen Quellen über ein WhatsApp-Interface auffindbar macht.',
          ],
        },
        {
          heading: 'Geschäftsproblem',
          paragraphs: [
            'Lokale Veranstaltungskalender sind über viele Websites verteilt; ein ungestütztes LLM ohne aktuelle Datenbank läuft Gefahr, veraltete Termine auszugeben.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            '1. Data Ingestion über externe REST-APIs.',
            '2. Data Processing und Bereinigung mit Python.',
            '3. Strukturierte Speicherung in Supabase.',
            '4. AI Integration mittels LLMs, RAG und MCP.',
            '5. Kommunikation über WhatsApp-Webhook-Workflows.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Praxiserprobter Prototyp, der klassisches Python Data Engineering mit RAG- und MCP-gestütztem LLM-Retrieval verbindet.',
          ],
        },
      ],
    },
    'construction-bi-paginated-reporting': {
      title: 'Bau-BI & Paginiertes Reporting PoC',
      descriptor: 'Bau-BI-Modell mit automatischer Demo-Datenmaskierung und druckfertigen Managementberichten.',
      tagline: 'Power-BI-Proof-of-Concept für Buchhaltung, Umsatz, HR und Logistik — mit automatischer Verschleierung sensibler Demowerte in Power Query sowie filterbaren PDF-/Excel-Berichten im Power BI Report Builder.',
      organization: 'Mediasoft Group — Construction BI PoC',
      status: 'BI Proof-of-Concept & Dokumentation',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '4 Domänen', label: 'Buchhaltung, Umsatz, HR/Arbeitsrapporte und Logistik in einem Modell' },
        { value: 'Demo-Sicher', label: 'Automatische Anonymisierung von Firmennamen und Beträgen in Power Query' },
        { value: 'Druck + Live', label: 'Interaktive Dashboards kombiniert mit druckfertigen PDF-/Excel-Berichten (.rdl)' },
      ],
      capabilities: ['Automatische Demo-Maskierung (Power Query)', 'Klare M-/Mrd-Skalierung (DAX)', 'Druckbare PDF- & Excel-Berichte', 'Französische Finanzformatierung', 'Technische BI-Dokumentation'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Dieser BI-Proof-of-Concept bei Mediasoft Group zeigt, wie Buchhaltung, Umsatzhistorie, HR-Rapporte und Baustellenlogistik in einem gemeinsamen Reporting-Modell zusammengeführt werden.',
          ],
        },
        {
          heading: 'Geschäftsproblem',
          paragraphs: [
            'Interessenten sollen praxisnahe ERP-Dashboards testen können, ohne vertrauliche Kundenzahlen offenzulegen — inklusive sauber formatierter Berichte für PDF- und Excel-Exporte.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            'Automatische Verfremdung von Firmennamen und Geldbeträgen direkt in Power Query für sichere Live-Demos.',
            'Klare DAX-Darstellung in Millionen (M) und Milliarden (Mrd) passend zur Westschweizer Zahlenformatierung.',
            'Kombination aus interaktiven Power-BI-Views und filterbaren Report-Builder-Vorlagen (.rdl) für PDF- und Excel-Ausgaben.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Wiederverwendbares Demo-Modell samt 18-teiliger technischer BI-Dokumentation.',
          ],
        },
      ],
    },
    'glpi-it-analytics': {
      title: 'IT Service Management (GLPI) Ticket- & SLA-Analytik',
      descriptor: 'PBIP-Ticketmodell, SLA-DAX und Claude-MCP-gestützte Dokumentationsautomatisierung.',
      tagline: 'Interaktive Power-BI-Analytik für GLPI-Service-Desks mit SLA-Tracking, Gantt-Zeitplänen sowie Claude-MCP- und python-docx-Workflows zur automatischen Handbucherstellung.',
      organization: 'Mediasoft Group — Interne IT-Analytik',
      status: 'PBIP-Modell & Claude-MCP-Doku',
      categoryLabel: 'KI & Automatisierung',
      stats: [
        { value: '30 Tabellen', label: 'Relationales GLPI-Modell mit 24 DAX-Measures in PBIP/TMDL' },
        { value: 'Claude MCP', label: 'Direkte PBIP/TMDL-Analyse über Claude MCP für automatisierte Doku' },
        { value: 'SLA + Gantt', label: 'Bearbeitungszeiten und Gantt-Planung für das BI-Team' },
      ],
      capabilities: ['Claude-MCP-Modellanalyse', 'ITSM-Lebenszyklusmodell', 'SLA- & Verzugs-DAX', 'Gantt-Zeitplanung', 'Automatisierte Word/Markdown-Doku'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'End-to-End-Power-BI-Reporting für GLPI-Tickets kombiniert mit Claude MCP und Python (python-docx), um Modellmetadaten automatisch in Benutzerhandbücher zu überführen.',
          ],
        },
        {
          heading: 'Geschäftsproblem',
          paragraphs: [
            'Fehlende Übersicht über Ticket-Warteschlangen, SLA-Laufzeiten und BI-spezifische Anfragen sowie veraltete manuelle Berichts-Dokumentation.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            'Aufbau von 30 GLPI-Tabellen und 24 DAX-Measures inkl. Est_Ticket_BI und Gantt-Kennzahlen.',
            'Einsatz von Claude MCP zur Inspektion der PBIP/TMDL-Dateien und automatischen Erstellung von Word- und Markdown-Leitfäden via python-docx.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Transparentes SLA-Monitoring und konsistente Dokumentation ohne manuellen Pflegeaufwand dank Claude MCP und Python.',
          ],
        },
      ],
    },
    'itu-sdg-dashboards': {
      title: 'UN SDG & Strategic Plan BI-Dashboards',
      descriptor: 'Tracking von über 30 institutionellen Indikatoren bei der ITU.',
      tagline: 'Konsolidierung abteilungsübergreifender Daten in interaktive Power-BI-Dashboards für den Strategieplan 2019–2023 und 30+ UN-SDG-Indikatoren.',
      organization: 'International Telecommunication Union (ITU) — Vereinte Nationen, Genf',
      status: 'Institutionelles Reporting',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '30+', label: 'Institutionelle und UN-SDG-Indikatoren verfolgt' },
        { value: '2019–2023', label: 'Berichtszyklus des ITU-Strategieplans' },
        { value: 'UN Genf', label: 'Abteilungsübergreifendes Executive-Reporting' },
      ],
      capabilities: ['UN-SDG-Monitoring', 'Abteilungskonsolidierung', 'Datenvalidierung', 'Standardisiertes Reporting', 'Stakeholder-Präsentationen'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Während meines BI-Praktikums bei der ITU in Genf unterstützte ich das Leistungsreporting zum Strategieplan 2019–2023 und den UN-Nachhaltigkeitszielen.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            'Entwicklung interaktiver Power-BI-Dashboards über mehr als 30 Indikatoren.',
            'Abstimmung mit Fachabteilungen, SQL/Excel-Validierung und Präsentation vor Führungsgremien.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Einheitliche und geprüfte Berichtsgrundlage für Managemententscheidungen.',
          ],
        },
      ],
    },
    'kitro-etl-automation': {
      title: 'AWS-Costing- & Sensor-ETL-Automatisierung',
      descriptor: 'Python-basierte Datenverarbeitung und AWS-Lambda-Automatisierung.',
      tagline: 'Automatisierte Python-ETL-Pipelines und AWS-Lambda-Kostenverfolgung bei KITRO SA — 40 % höhere Prozesseffizienz.',
      organization: 'KITRO SA, Zürich',
      status: 'Im Praktikum geliefert',
      categoryLabel: 'Data Engineering',
      stats: [
        { value: '40 %', label: 'Höhere Workflow-Effizienz durch Automatisierung' },
        { value: 'AWS Lambda', label: 'Automatisierte Python-Jobs für monatliches AWS-Costing' },
        { value: 'Multi-Source', label: 'Bereinigte Datensätze für Power BI & QuickSight' },
      ],
      capabilities: ['Python-ETL-Automatisierung', 'AWS-Lambda-Scheduling', 'Datenbereinigung & Abstimmung', 'Fehleranalyse', 'Power BI & QuickSight'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Bei KITRO SA in Zürich entwickelte ich automatisierte Python- und AWS-Lambda-Workflows für monatliche AWS-Kostenberechnungen und Multi-Source-Datensätze.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            'Extraktion, Bereinigung und Validierung mit Python, Pandas und SQL sowie Visualisierung in Power BI und Amazon QuickSight.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Steigerung der Workflow-Effizienz um 40 % und höhere Zuverlässigkeit der Reporting-Daten.',
          ],
        },
      ],
    },
    'internal-billing-logistics-bi': {
      title: 'Interne Leistungsverrechnung & Flottenlogistik BI (Role-Playing)',
      descriptor: 'Verfolgung interner Maschinenmieten und dreistufiger Depot-zu-Baustelle-Lieferungen.',
      tagline: 'Anonymisiertes Schweizer Bau-Power-BI-Modell für interne Umbuchungen zwischen Fuhrpark/Depot und Baustellen über Role-Playing-Dimensionen.',
      organization: 'Schweizer Bauunternehmen (via Mediasoft Group)',
      status: 'Gelieferte BI-Spezifikation & Modell',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '2 Module', label: 'Flottenvermietung (fi212) und Materialbestellungen (fi400)' },
        { value: 'Role-Playing', label: 'Getrennte PRODUIT- (Depot) und CHARGE- (Baustelle) Dimensionen' },
        { value: '3 Mengenstufen', label: 'Bestellt, kommissioniert und geliefert je Position' },
      ],
      capabilities: ['Role-Playing Star Schema', 'Interne Verrechnung', 'Flotten-Auslastungsanalytik', '3-stufiges Bestelltracking'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Power-BI-Bericht für einen Logistikleiter (anonymisierter Schweizer Bau-Kunde) zur Steuerung interner Flottenmieten und Materiallieferungen ohne externe Geldflüsse.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            'Trennung von interner Gutschrift (DIM_CA_PRODUIT) und Baustellenbelastung (DIM_CA_CHARGE) über einen gemeinsamen Artikelstamm.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Volle Transparenz über Geräteeinsatz, Tagessätze und offene Materialscheine.',
          ],
        },
      ],
    },
    'hr-payroll-sql-datamart': {
      title: 'HR- & Lohnbuchhaltungs-ERP-Datamart (SQL-Views)',
      descriptor: 'Übersetzung von OpenEdge-ERP-Tabellen in saubere DATAMART-SQL-Views.',
      tagline: 'Entwicklung einer 10-View-SQL-Datamart-Schicht zur Übersetzung kryptischer Progress/OpenEdge-Codes in Power-BI-fähige HR-Fakten und -Dimensionen.',
      organization: 'Schweizer Bauunternehmen (via Mediasoft Group)',
      status: 'Produktive SQL-Datamart-Views',
      categoryLabel: 'Data Engineering',
      stats: [
        { value: '10 Views', label: 'Saubere DATAMART.DIM_* und DATAMART.F_* Views über PUB.*' },
        { value: 'HR + Lohn', label: 'Fixlöhne, variable Posten, Salden, Arbeitsrapporte & Kalender' },
        { value: 'Einheitlich', label: 'Klare französische Fachspalten vor dem Power-BI-Import' },
      ],
      capabilities: ['SQL-View-Entwicklung', 'Legacy-ERP-Abstraktion', 'HR- & Lohndatenmodellierung', 'Arbeitsrapport-Integration'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            '10-teilige DATAMART-SQL-Schicht (anonymisierter Schweizer Kunde) über kryptischen Progress/OpenEdge-ERP-Tabellen.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            'Mapping von 4-stelligen ERP-Codes in 4 Dimensionen und 6 Fakt-Views für Mitarbeiter, Arbeitskalender, Fixlöhne, variable Lohnarten und Salden.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Saubere Trennung zwischen ERP-Kürzeln und Downstream-Power-BI-Modellen.',
          ],
        },
      ],
    },
    'accounting-gl-dax-audit': {
      title: 'Hauptbuch-Konsolidierung & Semantikmodell-DAX-Audit',
      descriptor: 'Mehrjähriges Power-BI-Hauptbuchmodell und vollständiges Audit von 114 DAX-Measures.',
      tagline: 'Anonymisiertes Schweizer Gruppenprojekt mit 5-Jahres-Hauptbuchkonsolidierung, 5 Kontenhierarchien und Bereinigung von 114 DAX-Measures.',
      organization: 'Schweizer Hospitality- & Baugruppe (via Mediasoft Group)',
      status: 'Audit & bereinigtes Semantikmodell',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '114 Measures', label: 'Vollständiges DAX-Verzeichnis über 10 Berichtsseiten geprüft' },
        { value: '24 bereinigt', label: 'Ungenutzte Measures (257 DAX-Zeilen) und 24 Alt-Entitäten entfernt' },
        { value: '5 Jahre GL', label: 'Hauptbuch-Konsolidierung (2022–2026) auf Buchungsebene' },
      ],
      capabilities: ['Hauptbuch-Konsolidierung', 'Vorzeichenbereinigte GuV & Bilanz', 'DAX-Refactoring-Audit', 'PBIP / TMDL-Strukturprüfung'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Konsolidierung von 5 Jahren Hauptbuchdaten (2022–2026) in ein Power-BI-Modell mit 5 Kontenhierarchien sowie Audit aller 114 DAX-Measures.',
          ],
        },
        {
          heading: 'Technischer Ansatz',
          bullets: [
            'Einheitliche Vorzeichenkonvention in Power Query und Referenzprüfung aller Visual-Bindings vor Entfernung von 24 ungenutzten Measures.',
          ],
        },
        {
          heading: 'Zentrale Erkenntnisse',
          bullets: [
            'Verschlanktes Semantikmodell (257 überflüssige DAX-Zeilen entfernt) bei unveränderten Finanzzahlen.',
          ],
        },
      ],
    },
    'customer-satisfaction-report': {
      title: 'Kundenzufriedenheit & Customer Insights Analytics',
      descriptor: 'Analyse von Kundenzufriedenheit, Loyalität und Support-Erfahrung mit Power BI.',
      tagline: 'Power-BI- und ZoomCharts-Analyse zu Treibern von Kundenzufriedenheit und Kundenbindung.',
      organization: 'Onyx Data & ZoomCharts Challenge',
      status: 'Veröffentlichte Fallstudie',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '120', label: 'Kundenfeedback-Datensätze über 12 Merkmale' },
        { value: '9 Fragen', label: 'Hypothesen zu Loyalität, Geografie und Support' },
        { value: 'Power BI', label: 'Interaktive Drilldowns mit ZoomCharts' },
      ],
      capabilities: ['Kundensegmentierung', 'Support-Analyse', 'Geografische Muster', 'Interaktive Dashboards'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Analyse von Kundengruppen, Support-Kontakten, Zufriedenheitsfaktoren und regionalen Mustern mit Power BI, DAX und ZoomCharts.',
          ],
        },
      ],
    },
    'energy-consumption-dashboard': {
      title: 'Energieverbrauchs-Analyse-Dashboard',
      descriptor: 'Mehrseitiges Power-BI-Dashboard für Wasser-, Strom- und Gasverbrauch.',
      tagline: 'Vierteiliger Power-BI-Bericht zur Auswertung mehrjähriger Verbrauchs- und Kostendaten (2016–2019).',
      organization: 'Eigenes BI-Projekt',
      status: 'Live Power BI Report',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '88,49 %', label: 'Wasseranteil am gesamten überwachten Verbrauch' },
        { value: '4 Seiten', label: 'Übersicht, Wasser, Strom und Gas getrennt' },
        { value: '2016–2019', label: 'Historische Verbrauchs- und Kostenentwicklung' },
      ],
      capabilities: ['Mehrseitige Navigation', 'DAX-Kennzahlen', 'Kategorienvergleich', 'Gebäude-Drilldowns'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Vierteiliges Power-BI-Dashboard mit individuellen DAX-Measures und interaktiven Filtern für Wasser, Strom und Gas.',
          ],
        },
      ],
    },
    'global-commodity-prices': {
      title: 'Globale Rohstoffpreisanalyse (1960–2022)',
      descriptor: 'Sechs Jahrzehnte globaler Rohstoffpreise mit Python und Power BI.',
      tagline: 'Auswertung von Weltbank-„Pink Sheet“-Daten für Öl, Kaffee, Tee und Zucker.',
      organization: 'World Bank Pink Sheet Analysis',
      status: 'Live Power BI Report',
      categoryLabel: 'Data Engineering',
      stats: [
        { value: '1960–2022', label: 'Sechs Jahrzehnte historische Weltbank-Daten' },
        { value: '4 Rohstoffe', label: 'Öl, Kaffee, Tee und Zucker' },
        { value: 'YoY & MoM', label: 'Jährliche und monatliche Preisvergleiche' },
      ],
      capabilities: ['Python-EDA', 'YoY- & MoM-Vergleiche', 'Historische Trends', 'Power-BI-Dashboard'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Explorative Zeitreihenanalyse in Python (Pandas, Matplotlib, Seaborn, Plotly) und interaktives Power-BI-Reporting mit DAX.',
          ],
        },
      ],
    },
    'eight-weeks-sql-challenge': {
      title: '8 Weeks SQL Challenge & Parch and Posey',
      descriptor: 'PostgreSQL-Fallstudien zu Kunden-, Vertriebs-, Abo- und Leistungsanalysen.',
      tagline: 'Sammlung relationaler PostgreSQL-Fallstudien mit komplexen Joins, CTEs, Window Functions sowie Kohorten- und Funnel-Analysen.',
      organization: 'PostgreSQL-Fallstudien',
      status: 'Veröffentlichte Repos & Artikel',
      categoryLabel: 'SQL & Analytique',
      stats: [
        { value: '8+', label: 'SQL-Fallstudien inklusive Parch & Posey' },
        { value: '8 Artikel', label: 'Veröffentlicht auf Medium, DevGenius und TowardsDev' },
        { value: 'PostgreSQL', label: 'CTEs, Window Functions und SQL-Datenbereinigung' },
      ],
      capabilities: ['Komplexe Joins & CTEs', 'Window Functions', 'Kohorten- & Funnel-Analyse', 'Datenbereinigung'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Praxisnahe PostgreSQL- und DBeaver-Analysen über 8 Geschäftsdomänen sowie die Parch-and-Posey-Datenbank.',
          ],
        },
      ],
    },
    'life-expectancy-undp': {
      title: 'Globale Lebenserwartung & Human Development (UNDP)',
      descriptor: 'Analyse globaler Entwicklungstrends mit UNDP-Datensätzen.',
      tagline: 'Auswertung von Lebenserwartung und Human Development Index über Länder und Regionen (1990–2021).',
      organization: 'UNDP-Datensatz',
      status: 'Live Power BI Report',
      categoryLabel: 'SQL & Analytik',
      stats: [
        { value: '1990–2021', label: 'Drei Jahrzehnte globale UNDP-Daten' },
        { value: 'HDI-Rang', label: 'Länder- und Regionalvergleiche' },
      ],
      capabilities: ['Datenbereinigung', 'Längsschnittanalyse', 'Regionalvergleiche', 'Power-BI-Dashboard'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Kombination aus Python-Datenbereinigung, PostgreSQL und Power BI zur Analyse globaler Entwicklungs- und Lebenserwartungstrends.',
          ],
        },
      ],
    },
    'indian-real-estate': {
      title: 'Indische Immobilienmarktanalyse',
      descriptor: 'Analyse von Wohnimmobilienpreisen und -angeboten in sieben indischen Städten.',
      tagline: 'Verbindung von Immobilien-Branchenwissen mit Python und Tableau zur Analyse von Preis-pro-Quadratfuß-Trends und Angeboten.',
      organization: 'Immobilien-Domänenanalyse',
      status: 'Live Tableau Public Viz',
      categoryLabel: 'SQL & Analytik',
      stats: [
        { value: '7 Städte', label: 'Angebots- und Preisvergleich über sieben Märkte' },
        { value: '3 Typen', label: 'Apartments, Einfamilienhäuser und Villen' },
      ],
      capabilities: ['Datenbereinigung', 'Preis-pro-Quadratfuß-Analyse', 'Zimmer- & Flächenkorrelation', 'Tableau-Visualisierung'],
      sections: [
        {
          heading: 'Projektübersicht',
          paragraphs: [
            'Dieses Projekt zeigt die direkte Brücke zwischen meiner früheren Immobilienforschung und meiner heutigen Arbeit mit Python, Pandas und Tableau.',
          ],
        },
      ],
    },
  },
};
