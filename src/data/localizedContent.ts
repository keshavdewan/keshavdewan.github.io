import type { Lang } from './i18n';
import type { RoleEntry, ExpertiseCategory, WorkflowItem, TechGroup } from './profile';
import {
  EXPERIENCE,
  AREAS_OF_EXPERTISE,
  AI_WORKFLOW,
  TECHNICAL_EXPERTISE,
  BRAND_PILLARS,
  EDUCATION,
  TARGET_ROLES,
  SKILL_GROUPS,
} from './profile';

export const EXPERIENCE_I18N: Record<Lang, RoleEntry[]> = {
  en: EXPERIENCE,
  fr: [
    {
      title: 'Stagiaire Analyste Business Intelligence',
      company: 'Mediasoft Group',
      location: 'Nyon, Suisse',
      period: 'Avril 2026 – Septembre 2026',
      summary:
        "Contribution à des projets Business Intelligence portant sur l'extraction, la transformation, la validation, la modélisation sémantique et le reporting Power BI de données ERP.",
      bullets: [
        'Extraction, transformation et validation de jeux de données ERP relationnels complexes via SQL et DBeaver.',
        'Développement et maintenance de modèles sémantiques Power BI intégrant données financières, RH et métier.',
        'Préparation des données sous Power Query et création de mesures DAX pour répondre aux besoins de reporting.',
        'Implémentation du Row-Level Security (RLS) et du filtrage dynamique pour sécuriser l’accès aux informations.',
        'Analyse des écarts entre systèmes sources, jeux de données et rapports afin de renforcer la fiabilité des données.',
        'Contribution au développement Microsoft Fabric, au versionnement Git et aux workflows CI/CD.',
        'Réalisation de rapports paginés et paramétrés avec Power BI Report Builder.',
        'Collaboration avec les équipes métier et techniques pour recueillir les besoins et valider les livrables analytiques.',
      ],
      stack: 'SQL, DBeaver, Power BI, DAX, Power Query, Microsoft Fabric, Git, CI/CD, Report Builder',
    },
    {
      title: 'Stagiaire Data Analyst',
      company: 'KITRO SA',
      location: 'Zurich, Suisse',
      period: 'Avril 2024 – Octobre 2024',
      summary:
        'Collaboration au sein d’une entreprise technologique dédiée à la durabilité pour concevoir des solutions de traitement, d’automatisation et de reporting des données.',
      bullets: [
        'Développement de flux ETL en Python pour de grands ensembles de données multi-sources.',
        'Automatisation des processus de traitement des données, augmentant l’efficacité de 40 %.',
        'Extraction et transformation de jeux de données avec SQL et Python.',
        'Nettoyage, validation et réconciliation des données pour améliorer la fiabilité du reporting.',
        'Conception de rapports et tableaux de bord avec Power BI et Amazon QuickSight.',
        'Mise en place de workflows automatisés de suivi des coûts AWS avec Python et AWS Lambda.',
        'Analyse des incohérences de données en collaboration avec les équipes techniques et métier.',
      ],
      stack: 'Python, Pandas, SQL, AWS Lambda, Google Sheets API, Power BI, Amazon QuickSight',
    },
    {
      title: 'Stagiaire Spécialiste BI',
      company: 'International Telecommunication Union (ITU)',
      organizationNote: 'Nations Unies',
      location: 'Genève, Suisse',
      period: 'Mars 2023 – Juillet 2023',
      summary:
        "Contribution au reporting de performance institutionnel et au suivi du Plan stratégique de l'UIT ainsi que des Objectifs de développement durable des Nations Unies.",
      bullets: [
        'Conception de tableaux de bord Power BI suivant plus de 30 indicateurs des Objectifs de développement durable (ODD).',
        'Consolidation de données multi-départements dans des rapports analytiques interactifs.',
        'Recherches documentaires et coordination inter-départements pour standardiser le reporting.',
        'Appui à la validation et à la réconciliation des données.',
        'Présentation des résultats analytiques et tableaux de bord aux parties prenantes de direction.',
      ],
      stack: 'Power BI, SQL, Excel, Analyse de données, Visualisation de données',
    },
    {
      title: 'Manager – Location commerciale',
      company: 'Brookfield Properties',
      location: 'Inde',
      period: 'Octobre 2019 – Octobre 2021',
      summary:
        "Activité dans l'immobilier commercial alliant études de marché, données de portefeuille, analyse commerciale et reporting de direction.",
      bullets: [
        "Exploitation de données financières, commerciales et de portefeuille multi-sources sur plus de 8M sq. ft. d'actifs tertiaires.",
        'Coordination de la réconciliation des données, du recueil des besoins et du reporting exécutif avec les équipes finance et juridique.',
        'Suivi de la performance du portefeuille contribuant à un taux d’occupation de 97 %.',
        'Réalisation d’études de marché et de veille concurrentielle pour éclairer le positionnement.',
        'Synthèse des données commerciales et de portefeuille en présentations destinées à la direction.',
        'Collaboration étroite avec les parties prenantes juridiques, commerciales et financières.',
      ],
      stack: 'Analytique portefeuille, Études de marché, Reporting commercial, Parties prenantes',
    },
    {
      title: 'Assistant Manager – Business Analyst',
      company: 'BPTP Limited',
      location: 'Inde',
      period: 'Janvier 2019 – Octobre 2019',
      summary:
        'Appui au développement commercial et au suivi de performance via la veille concurrentielle, la collecte de données et le reporting.',
      bullets: [
        'Études concurrentielles, de marché et clients pour appuyer les décisions d’expansion.',
        'Gestion des processus de collecte et d’analyse des données de performance commerciale.',
        'Analyse des informations marché et portefeuille.',
        'Restitution des conclusions et recommandations aux clients et équipes internes.',
      ],
      stack: 'Business Analysis, Études de marché, Suivi de performance, Présentations clients',
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
      stack: 'Looker Studio, Études de marché, Analytique immobilière',
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
      stack: 'Intelligence marché, Due Diligence, Analyse commerciale',
    },
  ],
  de: [
    {
      title: 'Praktikant Business Intelligence Analyst',
      company: 'Mediasoft Group',
      location: 'Nyon, Schweiz',
      period: 'April 2026 – September 2026',
      summary:
        'Mitarbeit an Business-Intelligence-Projekten mit Fokus auf ERP-Datenextraktion, Transformation, Validierung, Semantikmodellierung und Power-BI-Reporting.',
      bullets: [
        'Extraktion, Transformation und Validierung komplexer relationaler ERP-Datensätze mit SQL und DBeaver.',
        'Entwicklung und Pflege von Power-BI-Semantikmodellen für Finanz-, HR- und Unternehmensdaten.',
        'Datenaufbereitung mit Power Query sowie Entwicklung von DAX-Berechnungen für das Berichtswesen.',
        'Implementierung von Row-Level Security (RLS) und dynamischer Filterung zur sicheren Zugriffssteuerung.',
        'Untersuchung von Abweichungen zwischen Quellsystemen, Datensätzen und Berichten zur Steigerung der Datenqualität.',
        'Unterstützung von Microsoft-Fabric-Entwicklung, Git-Versionskontrolle und CI/CD-Workflows.',
        'Erstellung parametrisierter Berichte mit Power BI Report Builder.',
        'Zusammenarbeit mit Fach- und IT-Stakeholdern zur Anforderungsaufnahme und Validierung der Ergebnisse.',
      ],
      stack: 'SQL, DBeaver, Power BI, DAX, Power Query, Microsoft Fabric, Git, CI/CD, Report Builder',
    },
    {
      title: 'Praktikant Data Analyst',
      company: 'KITRO SA',
      location: 'Zürich, Schweiz',
      period: 'April 2024 – Oktober 2024',
      summary:
        'Entwicklung von Datenverarbeitungs-, Automatisierungs- und Reporting-Lösungen bei einem nachhaltigkeitsorientierten Technologieunternehmen.',
      bullets: [
        'Entwicklung Python-basierter ETL-Workflows für umfangreiche Multi-Source-Datensätze.',
        'Automatisierung von Datenverarbeitungsprozessen mit einer Effizienzsteigerung von 40 %.',
        'Extraktion und Transformation von Datensätzen mit SQL und Python.',
        'Datenbereinigung, Validierung und Abstimmung zur Verbesserung der Berichtszuverlässigkeit.',
        'Erstellung von Reporting-Lösungen mit Power BI und Amazon QuickSight.',
        'Entwicklung automatisierter AWS-Kostenverfolgungsprozesse mit Python und AWS Lambda.',
        'Klärung von Datenabweichungen in Zusammenarbeit mit technischen und fachlichen Teams.',
      ],
      stack: 'Python, Pandas, SQL, AWS Lambda, Google Sheets API, Power BI, Amazon QuickSight',
    },
    {
      title: 'Praktikant BI-Spezialist',
      company: 'International Telecommunication Union (ITU)',
      organizationNote: 'Vereinte Nationen',
      location: 'Genf, Schweiz',
      period: 'März 2023 – Juli 2023',
      summary:
        'Mitwirkung am institutionellen Leistungsreporting sowie am Monitoring des ITU-Strategieplans und der UN-Nachhaltigkeitsziele.',
      bullets: [
        'Entwicklung von Power-BI-Dashboards zur Verfolgung von über 30 UN-SDG-Indikatoren.',
        'Konsolidierung abteilungsübergreifender Informationen in interaktiven Analyseberichten.',
        'Sekundärforschung und Abstimmung mit Fachabteilungen zur Standardisierung des Reportings.',
        'Unterstützung bei Datenvalidierung und Baseline-Abgleich.',
        'Präsentation von Analyseergebnissen und Berichten vor Führungsgremien.',
      ],
      stack: 'Power BI, SQL, Excel, Datenanalyse, Datenvisualisierung',
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
        'Durchführung von Markt- und Wettbewerbsanalysen zur Einschätzung der Marktlage.',
        'Aufbereitung kommerzieller Kennzahlen in Präsentationen für das Management.',
        'Enge Zusammenarbeit mit Rechts-, Vertriebs- und Finanz-Stakeholdern.',
      ],
      stack: 'Portfolio-Analytik, Marktforschung, Kommerzielles Reporting, Stakeholder-Abstimmung',
    },
    {
      title: 'Assistant Manager – Business Analyst',
      company: 'BPTP Limited',
      location: 'Indien',
      period: 'Januar 2019 – Oktober 2019',
      summary:
        'Markt-, Wettbewerbs- und Performance-Analysen zur Unterstützung von Expansions- und Portfolioentscheidungen.',
      bullets: [
        'Durchführung von Wettbewerbs-, Markt- und Kundenanalysen für Expansionsentscheidungen.',
        'Steuerung von Datenerfassungs- und Analyseprozessen für das Leistungs-Tracking.',
        'Analyse von Markt- und Portfoliodaten.',
        'Präsentation von Ergebnissen und Handlungsempfehlungen vor Kunden und internen Stakeholdern.',
      ],
      stack: 'Business Analysis, Marktforschung, Performance-Tracking, Präsentationen',
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
      stack: 'Looker Studio, Marktforschung, Immobilienanalytik',
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
      stack: 'Market Intelligence, Due Diligence, Kommerzielle Analyse',
    },
  ],
};

export const AREAS_I18N: Record<Lang, ExpertiseCategory[]> = {
  en: AREAS_OF_EXPERTISE,
  fr: [
    {
      title: 'Business Intelligence & Reporting',
      items: ['Power BI', 'DAX', 'Power Query', 'Rapports paginés', 'Développement de KPI', 'Tableaux de bord de direction'],
    },
    {
      title: 'Analytique & Visualisation de données',
      items: ['SQL', 'Python', 'Tableau', 'Amazon QuickSight', 'Exploration de données', 'Analyse statistique et descriptive'],
    },
    {
      title: 'Data Engineering & Modélisation',
      items: ['Pipelines ETL/ELT', 'PostgreSQL', 'Python & Pandas', 'Microsoft Fabric', 'Schéma en étoile', 'Modélisation relationnelle'],
    },
    {
      title: 'Gouvernance & Qualité des données',
      items: ['Validation des données', 'Réconciliation', 'Assurance qualité', 'Row-Level Security', 'Documentation technique', 'Glossaires métier'],
    },
    {
      title: 'IA & Automatisation intelligente',
      items: ['IA générative', 'Intégration LLM', 'ChatGPT, Claude et Gemini', 'Prompt Engineering', 'RAG', 'Model Context Protocol', 'API REST & Webhooks', 'Développement assisté par IA'],
      accent: true,
    },
  ],
  de: [
    {
      title: 'Business Intelligence & Reporting',
      items: ['Power BI', 'DAX', 'Power Query', 'Paginierte Berichte', 'KPI-Entwicklung', 'Executive Dashboards'],
    },
    {
      title: 'Datenanalyse & Visualisierung',
      items: ['SQL', 'Python', 'Tableau', 'Amazon QuickSight', 'Datenexploration', 'Statistische & deskriptive Analyse'],
    },
    {
      title: 'Data Engineering & Modellierung',
      items: ['ETL/ELT-Pipelines', 'PostgreSQL', 'Python & Pandas', 'Microsoft Fabric', 'Star Schema', 'Relationale Datenmodellierung'],
    },
    {
      title: 'Data Governance & Qualität',
      items: ['Datenvalidierung', 'Datenabgleich', 'Qualitätssicherung', 'Row-Level Security', 'Datendokumentation', 'Fachglossare'],
    },
    {
      title: 'KI & Intelligente Automatisierung',
      items: ['Generative AI', 'LLM-Integration', 'ChatGPT, Claude und Gemini', 'Prompt Engineering', 'RAG', 'Model Context Protocol', 'REST-APIs & Webhooks', 'KI-gestützte Entwicklung'],
      accent: true,
    },
  ],
};

export const AI_WORKFLOW_I18N: Record<Lang, WorkflowItem[]> = {
  en: AI_WORKFLOW,
  fr: [
    {
      title: 'Développement assisté par IA',
      description:
        "Utilisation d'assistants de code (Claude, ChatGPT, Gemini) pour accélérer le prototypage SQL/DAX, le débogage et la documentation technique.",
      proofLabel: 'Appliqué dans Enterprise BI & Semantic Model Optimization',
      proofUrl: '/fr/work/mediasoft-fabric-bi/',
    },
    {
      title: 'Intégration LLM',
      description:
        'Connexion de modèles de langage à des applications Python, API REST externes et bases structurées pour traiter des requêtes en langage naturel.',
      proofLabel: 'Appliqué dans le chatbot Hey! Geneva',
      proofUrl: '/fr/work/hey-geneva-chatbot/',
    },
    {
      title: 'IA & Récupération de données',
      description:
        'Utilisation du RAG et du Model Context Protocol (MCP) pour interroger les tables Supabase et les métadonnées BI avant de générer une réponse.',
      proofLabel: 'Appliqué dans Hey! Geneva & workflows Claude/MCP',
      proofUrl: '/fr/work/hey-geneva-chatbot/',
    },
    {
      title: 'Automatisation de workflows',
      description:
        'Combinaison de Python, webhooks, API REST et tâches planifiées pour automatiser le nettoyage, l’ingestion et le suivi récurrent des données.',
      proofLabel: 'Appliqué chez KITRO (AWS Costing) & Hey! Geneva',
      proofUrl: '/fr/work/kitro-etl-automation/',
    },
  ],
  de: [
    {
      title: 'KI-gestützte Entwicklung',
      description:
        'Einsatz von Coding-Assistenten (Claude, ChatGPT, Gemini) zur Beschleunigung von SQL/DAX-Entwicklung, Fehlersuche und technischer Dokumentation.',
      proofLabel: 'Umgesetzt in Enterprise BI & Semantic Model Optimization',
      proofUrl: '/de/work/mediasoft-fabric-bi/',
    },
    {
      title: 'LLM-Integration',
      description:
        'Anbindung von Sprachmodellen an Python-Anwendungen, externe REST-APIs und strukturierte Datenbanken für fundierte Antworten.',
      proofLabel: 'Umgesetzt im Chatbot Hey! Geneva',
      proofUrl: '/de/work/hey-geneva-chatbot/',
    },
    {
      title: 'KI & Datenabruf',
      description:
        'Einsatz von RAG und Model Context Protocol (MCP), um relevante Datensätze aus Supabase oder BI-Metadaten vor der Antwortgenerierung abzurufen.',
      proofLabel: 'Umgesetzt in Hey! Geneva & Claude/MCP-Workflows',
      proofUrl: '/de/work/hey-geneva-chatbot/',
    },
    {
      title: 'Workflow-Automatisierung',
      description:
        'Verbindung von Python, Webhooks, REST-APIs und serverlosen Zeitplänen zur Automatisierung wiederkehrender Daten- und Reporting-Prozesse.',
      proofLabel: 'Umgesetzt bei KITRO (AWS Costing) & Hey! Geneva',
      proofUrl: '/de/work/kitro-etl-automation/',
    },
  ],
};

export const TECH_EXPERTISE_I18N: Record<Lang, TechGroup[]> = {
  en: TECHNICAL_EXPERTISE,
  fr: [
    { name: 'BI & Visualisation', tools: ['Power BI', 'DAX', 'Power Query', 'Report Builder', 'Tableau', 'Amazon QuickSight'] },
    { name: 'Programmation & Bases de données', tools: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'DBeaver'] },
    { name: 'Data Engineering', tools: ['Microsoft Fabric', 'AWS Lambda', 'ETL/ELT', 'Pipelines de données', 'Modélisation de données'] },
    { name: 'IA & Technologies émergentes', tools: ['LLMs', 'RAG', 'MCP', 'Prompt Engineering', 'API REST', 'Webhooks', 'Codage assisté par IA'] },
    { name: 'Développement & Collaboration', tools: ['Git', 'CI/CD', 'VS Code', 'Documentation technique'] },
  ],
  de: [
    { name: 'BI & Visualisierung', tools: ['Power BI', 'DAX', 'Power Query', 'Report Builder', 'Tableau', 'Amazon QuickSight'] },
    { name: 'Programmierung & Datenbanken', tools: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'DBeaver'] },
    { name: 'Data Engineering', tools: ['Microsoft Fabric', 'AWS Lambda', 'ETL/ELT', 'Datenpipelines', 'Datenmodellierung'] },
    { name: 'KI & Neue Technologien', tools: ['LLMs', 'RAG', 'MCP', 'Prompt Engineering', 'REST-APIs', 'Webhooks', 'KI-gestützte Entwicklung'] },
    { name: 'Entwicklung & Zusammenarbeit', tools: ['Git', 'CI/CD', 'VS Code', 'Technische Dokumentation'] },
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
    'Spécialiste IA & Automatisation de données',
  ],
  de: [
    'Business Intelligence Analyst',
    'Data Analyst',
    'Power BI Developer',
    'BI Specialist',
    'Data Analytics Consultant',
    'Data Engineering Analyst',
    'AI & Data Automation Specialist',
  ],
};

export const SKILLS_I18N: Record<Lang, typeof SKILL_GROUPS> = {
  en: SKILL_GROUPS,
  fr: TECH_EXPERTISE_I18N.fr.map((g) => ({ name: g.name, items: g.tools.join(', ') })),
  de: TECH_EXPERTISE_I18N.de.map((g) => ({ name: g.name, items: g.tools.join(', ') })),
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
