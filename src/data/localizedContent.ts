import type { Lang } from './i18n';
import type { RoleEntry, ArticleEntry } from './profile';
import { EXPERIENCE, STACK_PILLARS, SKILL_GROUPS, EDUCATION, ARTICLES } from './profile';

export const EXPERIENCE_I18N: Record<Lang, RoleEntry[]> = {
  en: EXPERIENCE,
  fr: [
    {
      title: 'Stagiaire Analyste Business Intelligence',
      company: 'Mediasoft Group',
      location: 'Nyon, Suisse',
      period: 'Avr 2026 – Sep 2026',
      bullets: [
        "Extraction, transformation et validation de jeux de données ERP relationnels complexes via SQL et Power Query, instaurant des standards stricts d'intégrité, de gouvernance et de Row-Level Security (RLS).",
        'Collaboration avec des parties prenantes non techniques pour traduire leurs besoins en modèles sémantiques Microsoft Fabric évolutifs, rapports Power BI et analyses ad-hoc rapides.',
        'Mise en œuvre de règles dynamiques Row-Level Security (RLS) intégrées aux bonnes pratiques Microsoft Fabric, contrôle de version Git et pipelines CI/CD.',
        'Rédaction de la documentation technique complète des modèles sémantiques et des flux de reporting pour assurer maintenance et standardisation.',
      ],
      stack: 'Microsoft Fabric · Power BI · SQL · Power Query · RLS · Git CI/CD',
    },
    {
      title: 'Stagiaire Data Analyst',
      company: 'Kitro SA',
      location: 'Zurich, Suisse',
      period: 'Avr 2024 – Oct 2024',
      bullets: [
        "Automatisation des pipelines ETL de bout en bout pour les données capteurs, opérationnelles et de coûts AWS via Python et AWS Lambda, réduisant l'effort manuel et augmentant l'efficacité de 40 %.",
        'Nettoyage et standardisation de données multi-sources afin de détecter anomalies, tendances et écarts, renforçant directement la fiabilité des rapports.',
        'Collaboration avec les équipes techniques et opérationnelles pour lever les goulets d’étranglement et concevoir des tableaux de bord Amazon QuickSight et Power BI.',
      ],
      stack: 'Python · AWS Lambda · Amazon QuickSight · Power BI · Google Sheets',
    },
    {
      title: 'Stagiaire Spécialiste BI',
      company: 'ITU (Union internationale des télécommunications — ONU)',
      location: 'Genève, Suisse',
      period: 'Mar 2023 – Jul 2023',
      bullets: [
        'Conception de tableaux de bord Power BI à Genève suivant la progression institutionnelle sur plus de 30 indicateurs ODD de l’ONU et le Plan stratégique 2019–2023.',
        'Synthèse de jeux de données hétérogènes via Excel avancé, SQL et Power BI afin de relier les départements opérationnels aux comités de direction.',
        'Audit et réconciliation des chiffres de progression sur plus de 30 indicateurs par rapport aux lignes de base institutionnelles pour la revue de direction.',
      ],
      stack: 'Power BI · SQL · Excel avancé · Reporting ODD ONU',
    },
    {
      title: 'Manager — Location commerciale & Analytique portefeuille',
      company: 'Brookfield Properties',
      location: 'Inde',
      period: 'Oct 2019 – Oct 2021',
      bullets: [
        "Gestion de comptes clients Fortune 500 sur un portefeuille d'environ 8 millions de sq ft de bureaux, atteignant un taux d'occupation de 94 %.",
        'Création de tableaux de bord Power BI ayant soutenu un taux de rétention client de 92 % durant la période COVID (contre 86 % l’année précédente).',
        'Réalisation d’études de marché et de notes de synthèse stratégiques pour orienter les décisions de commercialisation.',
      ],
      stack: 'Power BI · Briefings exécutifs · Études de marché · Analytique CRM',
    },
    {
      title: 'Assistant Manager — Business Analyst',
      company: 'BPTP Ltd',
      location: 'Inde',
      period: 'Jan 2019 – Oct 2019',
      bullets: [
        "Études concurrentielles et d'audience pour guider les décisions d'expansion commerciale et de tarification.",
        "Gestion des pipelines de collecte et d'analyse de données pour le suivi de performance et l'optimisation de portefeuille.",
      ],
    },
    {
      title: 'Associé — Recherche & Conseil',
      company: 'PropEquity Analytics Ltd',
      location: 'Inde',
      period: 'Jan 2018 – Jan 2019',
      bullets: [
        'Collecte et analyse de données ventes/locatives sous Looker Studio (Google Data Studio), réduisant de 30 % les délais de prise de décision.',
        'Développement de tableaux de bord interactifs pour orienter les stratégies d’investissement immobilier.',
      ],
    },
    {
      title: 'Manager — Analyste Intelligence Marché',
      company: 'Realty Business Intelligence',
      location: 'Inde',
      period: '2016 – 2018',
      bullets: [
        'Coordination des audits de due diligence et conformité, réduisant les risques opérationnels de 30 % tout en dépassant les objectifs de revenus de 22 %.',
      ],
    },
  ],
  de: [
    {
      title: 'Praktikant Business Intelligence Analyst',
      company: 'Mediasoft Group',
      location: 'Nyon, Schweiz',
      period: 'Apr 2026 – Sep 2026',
      bullets: [
        'Extraktion, Transformation und Validierung komplexer relationaler ERP-Datensätze mit SQL und Power Query zur Sicherstellung strenger Datenintegrität, Governance und Row-Level Security (RLS).',
        'Zusammenarbeit mit Fachabteilungen zur Übersetzung operativer Fragen in skalierbare Microsoft-Fabric-Semantikmodelle, Power-BI-Berichte und schnelle Ad-hoc-Analysen.',
        'Implementierung dynamischer Row-Level-Security-(RLS)-Regeln nach Enterprise-Standards mit Microsoft Fabric, Git-Versionskontrolle und CI/CD-Workflows.',
        'Erstellung einer durchgängigen technischen Dokumentation für Semantikmodelle und Reporting-Prozesse.',
      ],
      stack: 'Microsoft Fabric · Power BI · SQL · Power Query · RLS · Git CI/CD',
    },
    {
      title: 'Praktikant Data Analyst',
      company: 'Kitro SA',
      location: 'Zürich, Schweiz',
      period: 'Apr 2024 – Okt 2024',
      bullets: [
        'Automatisierung von End-to-End-ETL-Pipelines für Sensor-, Betriebs- und AWS-Kostendaten mit Python und AWS Lambda — 40 % weniger manueller Aufwand und höhere Effizienz.',
        'Bereinigung und Standardisierung mehrerer Datenquellen zur Erkennung von Anomalien, Trends und Abweichungen für verlässlichere Reports.',
        'Entwicklung von Amazon-QuickSight- und Power-BI-Dashboards sowie Behebung von Pipeline-Engpässen in interdisziplinären Teams.',
      ],
      stack: 'Python · AWS Lambda · Amazon QuickSight · Power BI · Google Sheets',
    },
    {
      title: 'Praktikant BI-Spezialist',
      company: 'ITU (Internationale Fernmeldeunion — UNO)',
      location: 'Genf, Schweiz',
      period: 'Mär 2023 – Jul 2023',
      bullets: [
        'Aufbau interaktiver Power-BI-Dashboards in Genf zum Monitoring von über 30 UN-Nachhaltigkeitszielen (SDG) und des Strategieplans 2019–2023.',
        'Analyse und Synthese heterogener Datensätze mit Advanced Excel, SQL und Power BI als Brücke zwischen Fachabteilungen und Executive Steering Committees.',
        'Prüfung und Abstimmung von über 30 Indikatoren gegen institutionelle Baselines für verifizierte Führungskennzahlen.',
      ],
      stack: 'Power BI · SQL · Advanced Excel · UN-SDG-Reporting',
    },
    {
      title: 'Manager — Commercial Leasing & Portfolio Analytics',
      company: 'Brookfield Properties',
      location: 'Indien',
      period: 'Okt 2019 – Okt 2021',
      bullets: [
        'Betreuung von Fortune-500-Unternehmenskunden über ein rund 8 Mio. sq ft großes Büroportfolio mit 94 % Vermietungsquote.',
        'Entwicklung von Power-BI-Retention-Dashboards, die während der COVID-Phase eine Kundenbindung von 92 % unterstützten (Vorjahr: 86 %).',
        'Durchführung von Markt- und Kundenanalysen sowie Executive Briefings zur strategischen Portfolioausrichtung.',
      ],
      stack: 'Power BI · Executive Briefings · Marktforschung · CRM-Analytik',
    },
    {
      title: 'Assistant Manager — Business Analyst',
      company: 'BPTP Ltd',
      location: 'Indien',
      period: 'Jan 2019 – Okt 2019',
      bullets: [
        'Wettbewerbs- und Zielgruppenanalysen zur Unterstützung von Expansions- und Preisentscheidungen.',
        'Betreuung von Datenerfassungs- und Analysepipelines für Leistungs- und Portfolioreporting.',
      ],
    },
    {
      title: 'Associate — Research & Consulting',
      company: 'PropEquity Analytics Ltd',
      location: 'Indien',
      period: 'Jan 2018 – Jan 2019',
      bullets: [
        'Analyse von Verkaufs- und Mietdaten mit Looker Studio (Google Data Studio) — Entscheidungszeit um 30 % verkürzt.',
        'Aufbau interaktiver Markttrend-Dashboards für Immobilieninvestitionsentscheidungen.',
      ],
    },
    {
      title: 'Manager — Market Intelligence Analyst',
      company: 'Realty Business Intelligence',
      location: 'Indien',
      period: '2016 – 2018',
      bullets: [
        'Koordination von Due-Diligence- und Compliance-Prüfungen zur Risikominderung um 30 % bei gleichzeitiger Umsatzsteigerung von 22 %.',
      ],
    },
  ],
};

export const STACK_I18N: Record<Lang, typeof STACK_PILLARS> = {
  en: STACK_PILLARS,
  fr: [
    {
      name: 'BI & Modélisation sémantique',
      tools: 'Power BI (PL-300) · Microsoft Fabric · DAX · Power Query',
      detail: 'Schémas en étoile, Row-Level Security (RLS), filtrage dynamique, Git CI/CD et tableaux de bord exécutifs.',
    },
    {
      name: 'Data Engineering & SQL',
      tools: 'Python (Pandas) · PostgreSQL · AWS Lambda · QuickSight',
      detail: "Pipelines ETL/ELT automatisés, ingestion via API REST & webhooks, fonctions de fenêtrage SQL et détection d'anomalies.",
    },
    {
      name: 'IA & Automatisation',
      tools: 'LLMs · Architecture RAG · Model Context Protocol (MCP) · Supabase',
      detail: 'Prompt engineering, extraction structurée, recherche conversationnelle et déclencheurs de reporting automatisés.',
    },
    {
      name: 'Gouvernance & Storytelling',
      tools: 'Validation de données · Audits KPI · Tableau · Looker Studio',
      detail: 'Réconciliation de 30+ indicateurs ONU, alignement inter-équipes et synthèses claires pour la direction.',
    },
  ],
  de: [
    {
      name: 'BI & Semantische Modellierung',
      tools: 'Power BI (PL-300) · Microsoft Fabric · DAX · Power Query',
      detail: 'Star-Schema-Modelle, Row-Level Security (RLS), dynamische Filterung, Git CI/CD und Executive Scorecards.',
    },
    {
      name: 'Data Engineering & SQL',
      tools: 'Python (Pandas) · PostgreSQL · AWS Lambda · QuickSight',
      detail: 'Automatisierte ETL/ELT-Pipelines, REST-API- & Webhook-Ingestion, SQL-Window-Functions und Anomalieerkennung.',
    },
    {
      name: 'KI & Workflow-Automatisierung',
      tools: 'LLMs · RAG-Architektur · Model Context Protocol (MCP) · Supabase',
      detail: 'Prompt Engineering, strukturierte Extraktion, konversationelle Suche und automatisierte Reporting-Trigger.',
    },
    {
      name: 'Governance & Storytelling',
      tools: 'Datenvalidierung · KPI-Audits · Tableau · Looker Studio',
      detail: 'Abstimmung von über 30 UN-Indikatoren, bereichsübergreifende Kommunikation und klare Entscheidungsvorlagen.',
    },
  ],
};

export const SKILLS_I18N: Record<Lang, typeof SKILL_GROUPS> = {
  en: SKILL_GROUPS,
  fr: [
    { name: 'Analytique & BI', items: 'Power BI (Certifié PL-300), Microsoft Fabric, DAX, Power Query, Modélisation en étoile, Tableau, Looker Studio, Amazon QuickSight, Excel avancé' },
    { name: 'Automatisation & Scripts', items: 'Python (Pandas, Matplotlib, Seaborn, Plotly), SQL (PostgreSQL, DBeaver), API REST, AWS Lambda, Pipelines ETL/ELT' },
    { name: 'Intégration IA & NLP', items: 'LLM, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), Prompt Engineering, Classification & extraction de texte, Supabase' },
    { name: 'Reporting & Gouvernance', items: 'Row-Level Security (RLS), Validation & audit des données, Détection d’anomalies, Suivi KPI, Confidentialité, Git & CI/CD' },
    { name: 'Collaboration & Livraison', items: 'Support analytique ad-hoc, Data Storytelling, Coordination transverse, Briefings exécutifs, Documentation technique complète' },
    { name: 'Expérience sectorielle', items: 'ONU & Organisations internationales (UIT), Systèmes ERP, Food-Tech & durabilité (Kitro SA), Immobilier d’entreprise' },
  ],
  de: [
    { name: 'Analytics & BI', items: 'Power BI (PL-300 zertifiziert), Microsoft Fabric, DAX, Power Query, Star-Schema-Modellierung, Tableau, Looker Studio, Amazon QuickSight, Advanced Excel' },
    { name: 'Automatisierung & Scripting', items: 'Python (Pandas, Matplotlib, Seaborn, Plotly), SQL (PostgreSQL, DBeaver), REST-APIs, AWS Lambda, ETL/ELT-Pipelines' },
    { name: 'KI- & NLP-Integration', items: 'Large Language Models (LLM), Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), Prompt Engineering, Textklassifikation, Supabase' },
    { name: 'Reporting & Data Governance', items: 'Row-Level Security (RLS), Datenvalidierung & Audits, Anomalieerkennung, KPI-Monitoring, Vertraulichkeit, Git & CI/CD' },
    { name: 'Zusammenarbeit & Delivery', items: 'Ad-hoc-Analysen, Data Storytelling, Bereichsübergreifende Koordination, Executive Briefings, Technische Dokumentation' },
    { name: 'Branchenerfahrung', items: 'UN & Internationale Organisationen (ITU), Enterprise-ERP-Systeme, Nachhaltigkeit & Food-Tech (Kitro SA), Gewerbeimmobilien-Analytik' },
  ],
};

export const EDUCATION_I18N: Record<Lang, typeof EDUCATION> = {
  en: EDUCATION,
  fr: [
    { degree: 'PL-300 : Microsoft Power BI Data Analyst Associate', institution: 'Certification Microsoft', detail: 'Certification sur la préparation, modélisation, visualisation et gouvernance de données Power BI.' },
    { degree: 'Certification Data Analytics', institution: 'CareerFoundry, Allemagne', detail: 'Formation intensive par projets en SQL, Python, Excel avancé, Tableau et Power BI.' },
    { degree: 'Master en gestion avancée de la construction', institution: 'NICMAR, Inde', detail: '2014–2016 · Planification quantitative, gestion commerciale et économie des infrastructures.' },
    { degree: 'Bachelor en ingénierie (BTech)', institution: 'MDU, Inde', detail: '2008–2012 · Fondamentaux d’ingénierie, pensée systémique et mathématiques appliquées.' },
  ],
  de: [
    { degree: 'PL-300: Microsoft Power BI Data Analyst Associate', institution: 'Microsoft-Zertifizierung', detail: 'Zertifiziert in Datenaufbereitung, Modellierung, Visualisierung und Governance mit Power BI.' },
    { degree: 'Data Analytics Zertifizierung', institution: 'CareerFoundry, Deutschland', detail: 'Projektbasiertes Intensivprogramm in SQL, Python, Advanced Excel, Tableau und Power BI.' },
    { degree: 'Master in Advanced Construction Management', institution: 'NICMAR, Indien', detail: '2014–2016 · Quantitative Projektplanung, kaufmännisches Management und Infrastrukturökonomie.' },
    { degree: 'Bachelor in Engineering (BTech)', institution: 'MDU, Indien', detail: '2008–2012 · Ingenieurwissenschaftliche Grundlagen, Systemdenken und angewandte Mathematik.' },
  ],
};

export const ARTICLES_I18N: Record<Lang, ArticleEntry[]> = {
  en: ARTICLES,
  fr: ARTICLES.map((a) => ({
    ...a,
    category: a.category === 'BI & Dashboards' ? 'BI & Dashboards' : 'SQL Case Study',
  })),
  de: ARTICLES,
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
    'hey-geneva-chatbot': {
      title: 'Hey! Geneva — Chatbot IA & Pipeline de données',
      descriptor: 'Assistant WhatsApp de découverte d’événements via RAG, MCP & Supabase',
      tagline: 'Un assistant WhatsApp intelligent qui synchronise des flux d’événements locaux en temps réel via webhooks, API REST et Retrieval-Augmented Generation.',
      organization: 'Projet indépendant',
      status: 'Construit & documenté',
      categoryLabel: 'IA & Automatisation',
      stats: [
        { value: 'RAG + MCP', label: 'Recherche ancrée sur des données locales structurées' },
        { value: 'Temps réel', label: 'Synchronisation webhooks & API REST vers Supabase' },
        { value: 'WhatsApp', label: 'Interface conversationnelle directe sans installation' },
      ],
      capabilities: ['Ingestion API temps réel', 'Nettoyage structuré', 'Recherche conversationnelle', 'Retrieval-Augmented Generation', 'Flux WhatsApp'],
      sections: [
        {
          heading: 'Problème & contexte',
          paragraphs: [
            'Découvrir des événements pertinents à Genève implique souvent de consulter de multiples newsletters et agendas dispersés. Hey! Geneva transforme ces sources externes en un assistant WhatsApp capable de répondre avec précision en langage naturel.',
          ],
        },
        {
          heading: 'Architecture & implémentation',
          bullets: [
            'Écouteurs webhook Python et appels API REST planifiés pour ingérer, nettoyer et normaliser les événements avant stockage dans Supabase.',
            'Outils Model Context Protocol (MCP) et contexte RAG permettant au LLM d’interroger des tables vérifiées plutôt que de deviner.',
            'Contrôles de qualité sur les dates, lieux et doublons pour garantir la fiabilité des réponses.',
          ],
        },
        {
          heading: 'Résultats',
          bullets: [
            'Pipeline conversationnel complet reliant automatisation Python, base Supabase, appels MCP et messagerie WhatsApp.',
          ],
        },
      ],
    },
    'mediasoft-fabric-bi': {
      title: 'BI d’entreprise & Row-Level Security sur Fabric',
      descriptor: 'Modèles sémantiques ERP gouvernés, RLS & workflows CI/CD',
      tagline: 'Transformation de jeux de données ERP relationnels complexes en modèles sémantiques Microsoft Fabric avec Row-Level Security et livraison Git.',
      organization: 'Mediasoft Group, Nyon',
      status: 'Livré en stage',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: 'RLS', label: 'Sécurité dynamique au niveau des lignes par rôle' },
        { value: 'Git CI/CD', label: 'Versionnement et déploiement structuré sous Fabric' },
        { value: 'De bout en bout', label: 'Documentation complète de l’ERP à Power BI' },
      ],
      capabilities: ['Extraction ERP relationnelle', 'Modélisation en étoile', 'Row-Level Security (RLS)', 'Filtrage dynamique', 'Analyses ad-hoc', 'Documentation technique'],
      sections: [
        {
          heading: 'Contexte',
          paragraphs: [
            'Durant mon stage chez Mediasoft Group à Nyon (Avr–Sep 2026), les équipes métier avaient besoin d’un reporting rapide et fiable sur les données ERP sans exposer de données sensibles entre services.',
          ],
        },
        {
          heading: 'Approche technique',
          bullets: [
            'Extraction, transformation et validation SQL & Power Query des tables ERP relationnelles avec contrôle d’intégrité référentielle.',
            'Conception de modèles sémantiques Microsoft Fabric et tableaux de bord Power BI alignés avec les utilisateurs non techniques.',
            'Implémentation du Row-Level Security (RLS), du versionnement Git/CI-CD et d’une documentation complète.',
          ],
        },
      ],
    },
    'kitro-etl-automation': {
      title: 'Automatisation AWS Costing & ETL Capteurs',
      descriptor: 'Pipelines Python & AWS Lambda réduisant l’effort manuel',
      tagline: 'Ingestion multi-sources automatisée, détection d’anomalies et calcul mensuel des coûts AWS pour une start-up zurichoise food-tech.',
      organization: 'Kitro SA, Zurich',
      status: 'En production',
      categoryLabel: 'Ingénierie des données',
      stats: [
        { value: '40 %', label: 'Gain d’efficacité sur les workflows de traitement' },
        { value: 'AWS Lambda', label: 'Jobs Python serverless planifiés pour le costing' },
        { value: 'Multi-sources', label: 'Unification capteurs, opérations et facturation' },
      ],
      capabilities: ['Pipelines ETL/ELT automatisés', 'Calcul mensuel AWS', 'Nettoyage capteurs', 'Détection d’anomalies', 'Tableaux de bord KPI'],
      sections: [
        {
          heading: 'Contexte & solution',
          paragraphs: [
            'Chez Kitro SA à Zurich (Avr–Oct 2024), le suivi manuel des coûts AWS mensuels et des logs capteurs consommait un temps précieux. J’ai automatisé la chaîne via Python et AWS Lambda vers Google Sheets, Amazon QuickSight et Power BI.',
          ],
        },
        {
          heading: 'Impact mesuré',
          bullets: [
            'Amélioration de 40 % de l’efficacité des workflows grâce à l’élimination des manipulations manuelles.',
            'Fiabilisation des rapports par détection précoce des anomalies et résolution des goulets d’étranglement.',
          ],
        },
      ],
    },
    'itu-sdg-dashboards': {
      title: 'Tableaux de bord ODD ONU & Plan stratégique',
      descriptor: 'Suivi et audit de 30+ indicateurs institutionnels à l’UIT Genève',
      tagline: 'Tableaux de bord Power BI et réconciliation des lignes de base pour le Plan stratégique 2019–2023 et les Objectifs de développement durable (ODD).',
      organization: 'UIT (Nations Unies), Genève',
      status: 'Livré à la direction',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '30+', label: 'Indicateurs ODD et institutionnels suivis & audités' },
        { value: '2019–2023', label: 'Période du Plan stratégique suivie (Juil 2022–Avr 2023)' },
        { value: 'ONU Genève', label: 'Reporting pour comités de direction transverses' },
      ],
      capabilities: ['Suivi KPI ODD', 'Audit & réconciliation', 'Standardisation inter-services', 'Dashboards exécutifs', 'Data storytelling'],
      sections: [
        {
          heading: 'Réalisations',
          bullets: [
            'Conception de rapports Power BI synthétisant la progression sur plus de 30 indicateurs ODD pour les comités de direction.',
            'Standardisation des définitions entre départements non techniques et audit complet des chiffres face aux références officielles.',
          ],
        },
      ],
    },
    'customer-satisfaction-report': {
      title: 'Rapport Satisfaction Client — OmniRetail',
      descriptor: 'Analytique Power BI & ZoomCharts (Onyx Data Challenge)',
      tagline: 'Identification des facteurs régionaux, démographiques et de support influençant la satisfaction et la fidélité client.',
      organization: 'Onyx Data & ZoomCharts Challenge',
      status: 'Étude publiée',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '120', label: 'Enregistrements clients sur 12 dimensions clés' },
        { value: '9 axes', label: 'Hypothèses métier testées (prix, support, fidélité)' },
        { value: '2024', label: 'Données annuelles omnicanales en ligne & magasin' },
      ],
      capabilities: ['Segmentation client (A/B/C)', 'Analyse impact support', 'Cartographie régionale', 'Facteurs de fidélité'],
      sections: [
        {
          heading: 'Mission & approche',
          paragraphs: [
            'Dans le cadre du challenge Onyx Data & ZoomCharts, ce rapport Power BI examine les moteurs de satisfaction (prix, variété, emballage, contacts support) chez OmniRetail à travers des visuels interactifs à exploration hiérarchique.',
          ],
        },
      ],
    },
    'energy-consumption-dashboard': {
      title: 'Dashboard Consommation Énergétique',
      descriptor: 'Suivi Power BI Eau, Électricité & Gaz (2016–2019)',
      tagline: 'Suite Power BI en quatre pages analysant consommations, coûts et anomalies multi-fluides dans des bâtiments urbains américains.',
      organization: 'Projet BI personnel',
      status: 'Rapport Power BI en ligne',
      categoryLabel: 'BI & Gouvernance',
      stats: [
        { value: '88,49 %', label: 'Part de l’eau dans la consommation totale suivie' },
        { value: '4 pages', label: 'Vues dédiées : Vue globale, Eau, Électricité, Gaz' },
        { value: '2016–2019', label: 'Tendances pluriannuelles par ville et bâtiment' },
      ],
      capabilities: ['Navigation multi-pages BI', 'Mesures DAX personnalisées', 'Forage par ville/bâtiment', 'Analyse durabilité'],
      sections: [
        {
          heading: 'Résultats clés',
          bullets: [
            'L’eau représente 88,49 % des unités consommées (pic en 2017) avec un coût stable — principal levier d’économie.',
            'Le gaz affiche une baisse continue de consommation et de coûts entre 2016 et 2019.',
          ],
        },
      ],
    },
    'global-commodity-prices': {
      title: 'Prix mondiaux des matières premières (1960–2022)',
      descriptor: 'Analyse économique « Pink Sheet » Banque mondiale en Python & Power BI',
      tagline: 'Plus de 60 ans d’évolution des cours du pétrole, café, thé et sucre analysés via EDA Python et tableaux de bord Power BI.',
      organization: 'Données Banque mondiale',
      status: 'Rapport Power BI en ligne',
      categoryLabel: 'Ingénierie des données',
      stats: [
        { value: '62 ans', label: 'Historique Banque mondiale (1960–2022)' },
        { value: '4 actifs', label: 'Pétrole, Café, Thé et Sucre' },
        { value: 'YoY & MoM', label: 'Suivi des variations annuelles et mensuelles' },
      ],
      capabilities: ['EDA séries temporelles', 'Variations YoY & MoM', 'Corrélation chocs macro', 'Segments Power BI dynamiques'],
      sections: [
        {
          heading: 'Méthodologie',
          paragraphs: [
            'Nettoyage et analyse exploratoire en Python (Pandas, Seaborn, Plotly, Matplotlib) suivis d’une restitution Power BI avec indicateurs YoY/MoM et filtres temporels dynamiques.',
          ],
        },
      ],
    },
    'eight-weeks-sql-challenge': {
      title: '8 Weeks SQL Challenge & Parch and Posey',
      descriptor: 'Études de cas PostgreSQL & 8 articles techniques publiés',
      tagline: 'Requêtes PostgreSQL avancées couvrant 8 domaines métier : rétention SaaS, tunnels e-commerce, paniers retail et schémas relationnels.',
      organization: 'Maîtrise PostgreSQL',
      status: '8+ articles publiés',
      categoryLabel: 'SQL & Analytique',
      stats: [
        { value: '8+', label: 'Études de cas SQL complètes + Parch & Posey' },
        { value: '8 articles', label: 'Publiés sur Medium, DevGenius et TowardsDev' },
        { value: 'PostgreSQL', label: 'CTE, fonctions de fenêtrage et nettoyage SQL' },
      ],
      capabilities: ['Jointures complexes', 'Analyse de cohortes & tunnels', 'Nettoyage SQL', 'Fenêtres glissantes'],
      sections: [
        {
          heading: 'Périmètre couvert',
          bullets: [
            'Nettoyage et normalisation de journaux de commandes (Pizza Runner) et calcul de churn/abonnements (Foodie-Fi).',
            'Analyse de tunnels clickstream (Clique Bait), soldes glissants (Data Bank) et paires de produits (Balanced Tree).',
          ],
        },
      ],
    },
    'life-expectancy-undp': {
      title: 'Espérance de vie & IDH mondial (PNUD)',
      descriptor: 'Indicateurs de santé et développement humain (1990–2021)',
      tagline: 'Analyse sur 30 ans de l’espérance de vie à la naissance et du classement IDH avec Python et Power BI.',
      organization: 'Jeu de données PNUD',
      status: 'Rapport Power BI en ligne',
      categoryLabel: 'SQL & Analytique',
      stats: [
        { value: '1990–2021', label: 'Trois décennies de données mondiales PNUD' },
        { value: 'Rang IDH', label: 'Corrélation avec les groupes de développement' },
      ],
      capabilities: ['Analyse longitudinale', 'Corrélation IDH', 'Disparités régionales'],
      sections: [
        {
          heading: 'Axes analysés',
          paragraphs: [
            'Comparaison des trajectoires d’espérance de vie entre régions et groupes IDH grâce à une EDA Python et une restitution interactive Power BI.',
          ],
        },
      ],
    },
    'indian-real-estate': {
      title: 'Analytique du marché immobilier indien',
      descriptor: 'Prix et offre résidentielle sur 7 villes en Python & Tableau',
      tagline: 'Analyse d’annonces résidentielles dans 7 métropoles pour modéliser le prix au pied carré selon la typologie et la surface.',
      organization: 'Projet domaine immobilier',
      status: 'Tableau Public en ligne',
      categoryLabel: 'SQL & Analytique',
      stats: [
        { value: '7 villes', label: 'Comparaison prix et offre sur 7 marchés urbains' },
        { value: '3 types', label: 'Appartements, maisons individuelles et villas' },
      ],
      capabilities: ['Nettoyage web scraping', 'Segmentation prix & surface', 'Corrélation pièces / prix'],
      sections: [
        {
          heading: 'Enseignements',
          paragraphs: [
            'Exploration des distributions de biens et des corrélations entre nombre de chambres, tranches de surface et prix par sq ft sous Python et Tableau Public.',
          ],
        },
      ],
    },
  },
  de: {
    'hey-geneva-chatbot': {
      title: 'Hey! Geneva — KI-Chatbot & Datenpipeline',
      descriptor: 'WhatsApp-Event-Assistent mit RAG, MCP & Supabase',
      tagline: 'Ein intelligenter WhatsApp-Assistent, der lokale Event-Feeds in Echtzeit über Webhooks, REST-APIs und Retrieval-Augmented Generation abfragt.',
      organization: 'Eigenprojekt',
      status: 'Umgesetzt & dokumentiert',
      categoryLabel: 'KI & Automatisierung',
      stats: [
        { value: 'RAG + MCP', label: 'Fundierte Event-Abfrage aus strukturierten Daten' },
        { value: 'Echtzeit', label: 'Webhook- & REST-API-Sync in Supabase' },
        { value: 'WhatsApp', label: 'Direkte Chat-Oberfläche für Genf' },
      ],
      capabilities: ['Echtzeit-API-Ingestion', 'Strukturierte Datenbereinigung', 'Konversationelle Suche', 'Retrieval-Augmented Generation', 'WhatsApp-Integration'],
      sections: [
        {
          heading: 'Problem & Architektur',
          paragraphs: [
            'Statt Event-Infos mühsam über verteilte Kalender zu suchen, synchronisiert Hey! Geneva externe Event-Feeds per Python-Webhooks und REST-APIs in Supabase. Über Model Context Protocol (MCP) und RAG antwortet das LLM ausschließlich auf Basis verifizierter Datensätze.',
          ],
        },
      ],
    },
    'mediasoft-fabric-bi': {
      title: 'Enterprise-BI & Row-Level Security in Fabric',
      descriptor: 'Regulierte ERP-Semantikmodelle, RLS & Git-CI/CD-Workflows',
      tagline: 'Überführung komplexer relationaler ERP-Daten in skalierbare Microsoft-Fabric-Semantikmodelle mit strenger Row-Level Security.',
      organization: 'Mediasoft Group, Nyon',
      status: 'Produktiv im Praktikum',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: 'RLS', label: 'Dynamische Row-Level Security je Benutzerrolle' },
        { value: 'Git CI/CD', label: 'Versionierte Fabric-Semantikmodelle' },
        { value: 'End-to-End', label: 'Vollständige Dokumentation vom ERP bis Power BI' },
      ],
      capabilities: ['Relationale ERP-Extraktion', 'Star-Schema-Modellierung', 'Row-Level Security (RLS)', 'Dynamische Filterung', 'Ad-hoc-Analysen', 'Technische Dokumentation'],
      sections: [
        {
          heading: 'Kontext & Umsetzung',
          paragraphs: [
            'Während meines BI-Praktikums bei Mediasoft Group in Nyon (Apr–Sep 2026) wurden relationale ERP-Daten per SQL und Power Query validiert, in Microsoft-Fabric-Semantikmodelle überführt, mit dynamischen RLS-Regeln abgesichert und über Git-CI/CD dokumentiert bereitgestellt.',
          ],
        },
      ],
    },
    'kitro-etl-automation': {
      title: 'AWS-Costing- & Sensor-ETL-Automatisierung',
      descriptor: 'Python- & AWS-Lambda-Pipelines reduzieren manuellen Aufwand',
      tagline: 'Automatisierte Multi-Source-Datenbereinigung, Anomalieerkennung und monatliche AWS-Kostenberechnung für ein Zürcher Food-Tech-Startup.',
      organization: 'Kitro SA, Zürich',
      status: 'Produktiv im Einsatz',
      categoryLabel: 'Data Engineering',
      stats: [
        { value: '40 %', label: 'Höhere Workflow-Effizienz durch ETL-Automatisierung' },
        { value: 'AWS Lambda', label: 'Geplante Serverless-Python-Jobs für Costing' },
        { value: 'Multi-Source', label: 'Sensor-, Betriebs- und Abrechnungsdaten vereint' },
      ],
      capabilities: ['Automatisierte ETL-Pipelines', 'AWS-Kostenautomatisierung', 'Sensor-Datenbereinigung', 'Anomalieerkennung', 'KPI-Dashboards'],
      sections: [
        {
          heading: 'Lösung & Wirkung',
          paragraphs: [
            'Durch geplante Python-Workflows in AWS Lambda, automatisierte Datenbereinigung und Dashboards in Amazon QuickSight sowie Power BI sank der manuelle Aufwand deutlich bei 40 % höherer Prozesseffizienz.',
          ],
        },
      ],
    },
    'itu-sdg-dashboards': {
      title: 'UN-SDG- & Strategieplan-BI-Dashboards',
      descriptor: 'Monitoring & Audit von über 30 Indikatoren bei der ITU Genf',
      tagline: 'Interaktive Power-BI-Dashboards und Baseline-Abstimmung für den Strategieplan 2019–2023 der ITU und die UN-Nachhaltigkeitsziele.',
      organization: 'ITU (Vereinte Nationen), Genf',
      status: 'Für Führungsgremien geliefert',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '30+', label: 'UN-SDG- und Organisationsindikatoren überwacht' },
        { value: '2019–2023', label: 'Strategieplan-Berichtszeitraum (Jul 2022–Apr 2023)' },
        { value: 'UN Genf', label: 'Abteilungsübergreifendes Executive-Reporting' },
      ],
      capabilities: ['UN-SDG-Monitoring', 'Baseline-Audit', 'Abteilungs-Standardisierung', 'Executive-Dashboards', 'Data Storytelling'],
      sections: [
        {
          heading: 'Ergebnis',
          paragraphs: [
            'Bereitstellung verifizierter Power-BI-Fortschrittsberichte über mehr als 30 Indikatoren samt abteilungsübergreifender Datenharmonisierung für Executive Steering Committees in Genf.',
          ],
        },
      ],
    },
    'customer-satisfaction-report': {
      title: 'Kundenzufriedenheitsbericht — OmniRetail',
      descriptor: 'Power-BI- & ZoomCharts-Analytik (Onyx Data Challenge)',
      tagline: 'Analyse der regionalen, demografischen und Support-Einflussfaktoren auf Kundenzufriedenheit und Loyalität.',
      organization: 'Onyx Data & ZoomCharts Challenge',
      status: 'Veröffentlichte Fallstudie',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '120', label: 'Kundenfeedback-Datensätze mit 12 Merkmalen' },
        { value: '9 Fragen', label: 'Hypothesen zu Loyalität, Preis & Support geprüft' },
        { value: '2024', label: 'Omnichannel-Datensatz (Online & Filiale)' },
      ],
      capabilities: ['Kundensegmentierung', 'Support-Impact-Analyse', 'Geografisches Clustering', 'Loyalitätstreiber'],
      sections: [
        {
          heading: 'Analysefokus',
          paragraphs: [
            'Untersuchung der Kundengruppen A/B/C, Support-Kontakte und Zufriedenheitsfaktoren (Preis, Produktauswahl, Verpackung) mit interaktiven Power-BI- und ZoomCharts-Drilldowns.',
          ],
        },
      ],
    },
    'energy-consumption-dashboard': {
      title: 'Energieverbrauchs-Dashboard (Mehrseitig)',
      descriptor: 'Power-BI-Monitoring für Wasser, Strom & Gas (2016–2019)',
      tagline: 'Vierteiliges Power-BI-Dashboard zur Überwachung von Verbrauchsmustern, Kosten und Ausreißern in US-Gebäuden.',
      organization: 'Eigenes BI-Projekt',
      status: 'Live Power BI Report',
      categoryLabel: 'BI & Governance',
      stats: [
        { value: '88,49 %', label: 'Wasseranteil am gesamten überwachten Verbrauch' },
        { value: '4 Seiten', label: 'Übersicht, Wasser, Strom und Gas getrennt' },
        { value: '2016–2019', label: 'Mehrjährige Stadt- und Gebäude-Trends' },
      ],
      capabilities: ['Mehrseitige BI-Navigation', 'DAX-Kennzahlen', 'Gebäude-Drilldowns', 'Nachhaltigkeitsanalysen'],
      sections: [
        {
          heading: 'Zentrale Erkenntnisse',
          paragraphs: [
            'Wasser macht 88,49 % des Gesamtverbrauchs aus (Höchststand 2017) bei stabilen Kosten, während Gasverbrauch und -kosten zwischen 2016 und 2019 kontinuierlich sanken.',
          ],
        },
      ],
    },
    'global-commodity-prices': {
      title: 'Globale Rohstoffpreise (1960–2022)',
      descriptor: 'Weltbank-„Pink Sheet“-Analyse in Python & Power BI',
      tagline: 'Über sechs Jahrzehnte Preisentwicklung für Öl, Kaffee, Tee und Zucker mit Python-Zeitreihen-EDA und Power BI.',
      organization: 'Weltbank-Datensatz',
      status: 'Live Power BI Report',
      categoryLabel: 'Data Engineering',
      stats: [
        { value: '62 Jahre', label: 'Historische Weltbank-Daten (1960–2022)' },
        { value: '4 Rohstoffe', label: 'Öl, Kaffee, Tee und Zucker' },
        { value: 'YoY & MoM', label: 'Jährliche und monatliche Preisdynamik' },
      ],
      capabilities: ['Zeitreihen-EDA', 'YoY- & MoM-Abweichungen', 'Makro-Schock-Analyse', 'Interaktive Slicer'],
      sections: [
        {
          heading: 'Methodik',
          paragraphs: [
            'Kombination aus Python-Datenbereinigung (Pandas, Seaborn, Plotly, Matplotlib) und interaktiver Power-BI-Visualisierung mit dynamischen KPI-Vergleichen.',
          ],
        },
      ],
    },
    'eight-weeks-sql-challenge': {
      title: '8 Weeks SQL Challenge & Parch and Posey',
      descriptor: 'PostgreSQL-Fallstudien & 8 veröffentlichte Fachartikel',
      tagline: 'Komplexe PostgreSQL-Abfragen über 8 Geschäftsdomänen — von SaaS-Churn und Clickstream-Funnels bis Warenkorbanalysen.',
      organization: 'PostgreSQL-Praxis',
      status: '8+ Artikel veröffentlicht',
      categoryLabel: 'SQL & Analytik',
      stats: [
        { value: '8+', label: 'Vollständige SQL-Fallstudien inkl. Parch & Posey' },
        { value: '8 Artikel', label: 'Auf Medium, DevGenius und TowardsDev' },
        { value: 'PostgreSQL', label: 'CTEs, Window Functions und SQL-Datenbereinigung' },
      ],
      capabilities: ['Komplexe Joins', 'Kohorten- & Funnel-SQL', 'Datenbereinigung in SQL', 'Rollierende Zeitfenster'],
      sections: [
        {
          heading: 'Abgedeckte Analysen',
          bullets: [
            'Bereinigung fehlerhafter Bestelllogs (Pizza Runner), Abo-Upgrades & Churn (Foodie-Fi) sowie Web-Conversion-Funnels (Clique Bait).',
            'Rollierende Kontostände (Data Bank), Nachhaltigkeitsverpackungen (Data Mart) und Produktpaare (Balanced Tree).',
          ],
        },
      ],
    },
    'life-expectancy-undp': {
      title: 'Globale Lebenserwartung & HDI (UNDP)',
      descriptor: 'Gesundheits- und Entwicklungsindikatoren (1990–2021)',
      tagline: 'Analyse von über 30 Jahren UNDP-Lebenserwartung und Human Development Index mit Python und Power BI.',
      organization: 'UNDP-Datensatz',
      status: 'Live Power BI Report',
      categoryLabel: 'SQL & Analytik',
      stats: [
        { value: '1990–2021', label: 'Drei Jahrzehnte globale Lebenserwartungsdaten' },
        { value: 'HDI-Rang', label: 'Korrelation über Entwicklungsregionen hinweg' },
      ],
      capabilities: ['Langzeit-Trendanalyse', 'HDI-Korrelation', 'Regionale Disparitäten'],
      sections: [
        {
          heading: 'Schwerpunkte',
          paragraphs: [
            'Untersuchung globaler Entwicklungstrends und regionaler Unterschiede nach HDI-Gruppen mit Python-EDA und interaktivem Power-BI-Reporting.',
          ],
        },
      ],
    },
    'indian-real-estate': {
      title: 'Indische Immobilienmarktanalyse',
      descriptor: 'Preise & Angebot in 7 Städten mit Python & Tableau',
      tagline: 'Auswertung gescrapter Wohnimmobilien-Angebote aus 7 Großstädten nach Quadratmeterpreis, Fläche und Objekttyp.',
      organization: 'Immobilien-Domänenprojekt',
      status: 'Live Tableau Public Viz',
      categoryLabel: 'SQL & Analytik',
      stats: [
        { value: '7 Städte', label: 'Vergleich von Angebot und Preisniveau' },
        { value: '3 Typen', label: 'Apartments, Einfamilienhäuser und Villen' },
      ],
      capabilities: ['Scraping-Datenbereinigung', 'Preis- & Flächensegmentierung', 'Korrelationsanalyse'],
      sections: [
        {
          heading: 'Erkenntnisse',
          paragraphs: [
            'Aufbereitung in Python und interaktive Segmentierung in Tableau Public zu Zimmeranzahl, Flächenklassen und Preis je Quadratfuß.',
          ],
        },
      ],
    },
  },
};

