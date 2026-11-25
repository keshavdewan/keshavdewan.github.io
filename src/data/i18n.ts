export type Lang = 'en' | 'fr' | 'de';

export const LANG_OPTIONS: { code: Lang; label: string; short: string; prefix: string }[] = [
  { code: 'en', label: 'English', short: 'EN', prefix: '' },
  { code: 'fr', label: 'Français', short: 'FR', prefix: '/fr' },
  { code: 'de', label: 'Deutsch', short: 'DE', prefix: '/de' },
];

export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const stripped = clean.replace(/^\/(fr|de)(?=\/|$)/, '') || '/';
  if (lang === 'en') return stripped;
  return stripped === '/' ? `/${lang}/` : `/${lang}${stripped}`;
}

export const UI_COPY: Record<Lang, {
  skip: string;
  nav: { work: string; cv: string; contact: string; themeDark: string; themeLight: string; langLabel: string };
  hero: {
    role: string;
    focus: string;
    lede: string;
    ctaWork: string;
    ctaCv: string;
    portraitAlt: string;
  };
  sections: {
    experience: string;
    experienceMore: string;
    selectedWork: string;
    workMore: string;
    stack: string;
    stackIntro: string;
    stackLogosLabel: string;
    about: string;
    aboutP1: string;
    aboutP2: string;
    languagesLabel: string;
    languagesValue: string;
    volunteeringLabel: string;
    volunteeringValue: string;
    stats: { value: string; label: string; sub: string }[];
    contact: string;
    contactLede: string;
    email: string;
    phone: string;
    profiles: string;
    cv: string;
    readOnline: string;
    downloadPdf: string;
  };
  workPage: {
    title: string;
    backHome: string;
    heading: string;
    tagline: string;
    statsCases: string;
    statsCert: string;
    statsLive: string;
    filterLabel: string;
    categories: Record<string, string>;
  };
  detailPage: {
    backAll: string;
    builtWith: string;
    capabilities: string;
    links: string;
    moreWork: string;
  };
  cvPage: {
    title: string;
    backHome: string;
    downloadPdf: string;
    viewProjects: string;
    profileH: string;
    profileP1: string;
    profileP2: string;
    experienceH: string;
    skillsH: string;
    eduH: string;
    volH: string;
    volItems: { title: string; meta: string; desc: string }[];
    langH: string;
  };
  footer: {
    line1: string;
    line2: string;
  };
}> = {
  en: {
    skip: 'Skip to content',
    nav: { work: 'Projects', cv: 'CV', contact: 'Contact', themeDark: 'Dark', themeLight: 'Light', langLabel: 'Language' },
    hero: {
      role: 'Data Analyst | AI & Automation | Power BI & Fabric',
      focus: 'Geneva, Switzerland · Swiss Work Permit Available · PL-300 & DP-600 Certified',
      lede: 'I turn complex operational and enterprise datasets into governed Power BI semantic models, automated Python ETL pipelines, and practical LLM workflows — from UN SDG reporting in Geneva to Microsoft Fabric ERP analytics.',
      ctaWork: 'Explore projects',
      ctaCv: 'Read CV',
      portraitAlt: 'Portrait of Keshav Dewan, Data Analyst in Geneva',
    },
    sections: {
      experience: 'Experience',
      experienceMore: 'Career Timeline →',
      selectedWork: 'Projects',
      workMore: 'Other Projects →',
      stack: 'The stack',
      stackIntro: 'PL-300 & DP-600 certified BI and Microsoft Fabric engineering paired with Python automation, relational SQL rigor, and grounded AI workflows — built for regulated enterprise and humanitarian environments.',
      stackLogosLabel: 'Core products & technologies',
      about: 'About',
      aboutP1: "I'm Keshav, an Operations & Business Intelligence Data Analyst based in Geneva, Switzerland (with a valid Swiss work permit). My path combines an Engineering and Construction Management foundation with enterprise analytics across UN agencies, Swiss food-tech, and Microsoft Fabric BI consulting.",
      aboutP2: 'Whether reconciling 30+ UN Sustainable Development Goal indicators at ITU, automating AWS Lambda & Python ETL pipelines at Kitro SA, or governing ERP semantic models with Row-Level Security at Mediasoft Group, I focus on turning messy operational datasets into trustworthy decisions.',
      languagesLabel: 'Languages',
      languagesValue: 'English (Native) · French (Intermediate B1)',
      volunteeringLabel: 'Volunteering',
      volunteeringValue: 'iCareFish (2026) — User engagement & campaign analytics · Building Bridges Geneva (2024) — Sustainable finance',
      stats: [
        { value: '30+', label: 'UN SDG indicators monitored & audited', sub: 'at ITU Geneva' },
        { value: '40%', label: 'Workflow efficiency gain via Python ETL', sub: 'at Kitro SA, Zurich' },
        { value: '8M sq ft', label: 'Fortune 500 office portfolio managed at 94% occupancy', sub: '& 92% retention BI' },
      ],
      contact: 'Contact',
      contactLede: 'Open to Data Analyst, BI Developer (Power BI / Fabric), and AI Automation roles across Switzerland or remote.',
      email: 'Email',
      phone: 'Phone',
      profiles: 'Profiles',
      cv: 'CV',
      readOnline: 'Read online',
      downloadPdf: 'Download PDF',
    },
    workPage: {
      title: 'Projects — Keshav Dewan',
      backHome: '← Home',
      heading: 'Projects & case studies',
      tagline: 'Each project has its own case-study page detailing the business problem, data pipeline or semantic model, tools used, and measurable outcomes.',
      statsCases: 'Detailed case studies',
      statsCert: 'Certified Power BI & Fabric Analytics Engineer',
      statsLive: 'Live interactive Power BI & Tableau links',
      filterLabel: 'Filter projects by category',
      categories: { All: 'All', 'AI & Automation': 'AI & Automation', 'BI & Governance': 'BI & Governance', 'Data Engineering': 'Data Engineering', 'SQL & Analytics': 'SQL & Analytics' },
    },
    detailPage: {
      backAll: '← All projects',
      builtWith: 'Built with',
      capabilities: 'Capabilities',
      links: 'Links',
      moreWork: 'More projects',
    },
    cvPage: {
      title: 'CV — Keshav Dewan',
      backHome: '← Home',
      downloadPdf: 'Download the PDF',
      viewProjects: 'Explore projects',
      profileH: 'Profile',
      profileP1: 'Analytical and solutions-driven Operations & BI Data Specialist with a proven track record across international organizations and Swiss enterprises (ITU Geneva, Mediasoft Group, Kitro SA). Certified Power BI Data Analyst (PL-300) and Microsoft Fabric Analytics Engineer (DP-600) experienced in validating complex programme and ERP datasets, building interactive monitoring dashboards, and tracking 30+ global indicators.',
      profileP2: 'Proficient in Python-driven ETL automation, PostgreSQL, Microsoft Fabric lakehouse & semantic modeling with Row-Level Security (RLS), and integrating LLMs via REST APIs and MCP to automate repetitive reporting workflows.',
      experienceH: 'Career Timeline',
      skillsH: 'Core competencies',
      eduH: 'Certifications & Education',
      volH: 'Volunteering',
      volItems: [
        {
          title: 'iCareFish',
          meta: '2026',
          desc: 'Volunteered as a Data & Research Analyst, analyzing user engagement and campaign performance datasets to guide digital transformation decisions.',
        },
        {
          title: 'Building Bridges',
          meta: 'Geneva, 2024',
          desc: 'Connected stakeholders across sectors to advance sustainable finance solutions and impact-driven investments.',
        },
      ],
      langH: 'Languages',
    },
    footer: {
      line1: 'Keshav Dewan, Data Analyst & BI Specialist in Geneva, Switzerland.',
      line2: 'Swiss banknote colour fields and guilloche geometry. Set in Archivo Variable.',
    },
  },
  fr: {
    skip: 'Aller au contenu',
    nav: { work: 'Projets', cv: 'CV', contact: 'Contact', themeDark: 'Sombre', themeLight: 'Clair', langLabel: 'Langue' },
    hero: {
      role: 'Data Analyst | IA & Automatisation | Power BI & Fabric',
      focus: 'Genève, Suisse · Permis de travail suisse · Certifié PL-300 & DP-600',
      lede: "Je transforme des données opérationnelles et d'entreprise complexes en modèles sémantiques Power BI gouvernés, pipelines ETL Python automatisés et flux LLM concrets — du reporting ODD de l'ONU à Genève à l'analytique ERP sur Microsoft Fabric.",
      ctaWork: 'Explorer les projets',
      ctaCv: 'Voir le CV',
      portraitAlt: 'Portrait de Keshav Dewan, Data Analyst à Genève',
    },
    sections: {
      experience: 'Expérience',
      experienceMore: 'Parcours professionnel →',
      selectedWork: 'Projets',
      workMore: 'Autres projets →',
      stack: 'Stack technique',
      stackIntro: "Certifications PL-300 & DP-600 en BI et Microsoft Fabric alliées à l'automatisation Python, au SQL relationnel et aux workflows IA ancrés — conçues pour les environnements d'entreprise et humanitaires.",
      stackLogosLabel: 'Produits & technologies clés',
      about: 'À propos',
      aboutP1: "Je suis Keshav, Data Analyst spécialisé en opérations et Business Intelligence basé à Genève, en Suisse (avec permis de travail suisse). Mon parcours associe une formation d'ingénieur et de gestion de construction à l'analytique d'entreprise au sein d'agences onusiennes, de la food-tech suisse et du conseil BI Microsoft Fabric.",
      aboutP2: "Qu'il s'agisse de réconcilier plus de 30 indicateurs ODD à l'UIT, d'automatiser des pipelines ETL Python & AWS Lambda chez Kitro SA, ou de gouverner des modèles sémantiques ERP avec Row-Level Security chez Mediasoft Group, je transforme des données complexes en décisions fiables.",
      languagesLabel: 'Langues',
      languagesValue: 'Anglais (Natif) · Français (Intermédiaire B1)',
      volunteeringLabel: 'Bénévolat',
      volunteeringValue: 'iCareFish (2026) — Analytique d’engagement & campagnes · Building Bridges Genève (2024) — Finance durable',
      stats: [
        { value: '30+', label: 'Indicateurs ODD de l’ONU suivis & audités', sub: "à l'UIT Genève" },
        { value: '40%', label: 'Gain d’efficacité grâce aux pipelines ETL Python', sub: 'chez Kitro SA, Zurich' },
        { value: '8M sq ft', label: 'Portefeuille bureaux Fortune 500 géré à 94 % d’occupation', sub: '& BI rétention 92 %' },
      ],
      contact: 'Contact',
      contactLede: 'Ouvert aux postes de Data Analyst, Développeur BI (Power BI / Fabric) et Automatisation IA partout en Suisse ou en télétravail.',
      email: 'E-mail',
      phone: 'Téléphone',
      profiles: 'Profils',
      cv: 'CV',
      readOnline: 'Lire en ligne',
      downloadPdf: 'Télécharger le PDF',
    },
    workPage: {
      title: 'Projets — Keshav Dewan',
      backHome: '← Accueil',
      heading: 'Projets & études de cas',
      tagline: 'Chaque projet dispose de sa propre page détaillant la problématique métier, le pipeline de données ou modèle sémantique, les outils utilisés et les résultats obtenus.',
      statsCases: 'Études de cas détaillées',
      statsCert: 'Certifié Power BI & Fabric Analytics Engineer',
      statsLive: 'Tableaux de bord Power BI & Tableau en ligne',
      filterLabel: 'Filtrer les projets par catégorie',
      categories: { All: 'Tous', 'AI & Automation': 'IA & Automatisation', 'BI & Governance': 'BI & Gouvernance', 'Data Engineering': 'Ingénierie des données', 'SQL & Analytics': 'SQL & Analytique' },
    },
    detailPage: {
      backAll: '← Tous les projets',
      builtWith: 'Technologies',
      capabilities: 'Compétences',
      links: 'Liens',
      moreWork: 'Autres projets',
    },
    cvPage: {
      title: 'CV — Keshav Dewan',
      backHome: '← Accueil',
      downloadPdf: 'Télécharger le PDF',
      viewProjects: 'Explorer les projets',
      profileH: 'Profil',
      profileP1: "Spécialiste Data & Business Intelligence orienté solutions, avec une expérience éprouvée au sein d'organisations internationales et d'entreprises suisses (UIT Genève, Mediasoft Group, Kitro SA). Certifié Microsoft Power BI Data Analyst (PL-300) et Fabric Analytics Engineer (DP-600), expérimenté dans la validation de jeux de données complexes, les tableaux de bord de suivi et le pilotage de plus de 30 indicateurs mondiaux.",
      profileP2: "Maîtrise de l'automatisation ETL en Python, PostgreSQL, architecture Lakehouse & modélisation sémantique Microsoft Fabric avec Row-Level Security (RLS) et intégration de LLM via API REST et MCP.",
      experienceH: 'Parcours professionnel',
      skillsH: 'Compétences clés',
      eduH: 'Certifications & Formation',
      volH: 'Bénévolat',
      volItems: [
        {
          title: 'iCareFish',
          meta: '2026',
          desc: "Engagement bénévole en tant que Data & Research Analyst : analyse de l'engagement utilisateur et des performances de campagnes pour soutenir la transformation digitale.",
        },
        {
          title: 'Building Bridges',
          meta: 'Genève, 2024',
          desc: 'Mise en relation des acteurs intersectoriels pour promouvoir les solutions de finance durable et les investissements à impact.',
        },
      ],
      langH: 'Langues',
    },
    footer: {
      line1: 'Keshav Dewan, Data Analyst & Spécialiste BI à Genève, Suisse.',
      line2: 'Champs colorés et tracés guillochés inspirés des billets suisses. Typographie Archivo Variable.',
    },
  },
  de: {
    skip: 'Zum Inhalt springen',
    nav: { work: 'Projekte', cv: 'Lebenslauf', contact: 'Kontakt', themeDark: 'Dunkel', themeLight: 'Hell', langLabel: 'Sprache' },
    hero: {
      role: 'Data Analyst | KI & Automatisierung | Power BI & Fabric',
      focus: 'Genf, Schweiz · Schweizer Arbeitsbewilligung · PL-300 & DP-600 zertifiziert',
      lede: 'Ich verwandle komplexe Betriebs- und Unternehmensdaten in regulierte Power-BI-Semantikmodelle, automatisierte Python-ETL-Pipelines und praxisnahe LLM-Workflows — vom UN-SDG-Reporting in Genf bis zur Microsoft-Fabric-ERP-Analytik.',
      ctaWork: 'Projekte entdecken',
      ctaCv: 'Lebenslauf ansehen',
      portraitAlt: 'Porträt von Keshav Dewan, Data Analyst in Genf',
    },
    sections: {
      experience: 'Berufserfahrung',
      experienceMore: 'Karriereverlauf →',
      selectedWork: 'Projekte',
      workMore: 'Weitere Projekte →',
      stack: 'Technologie-Stack',
      stackIntro: 'PL-300- & DP-600-zertifizierte BI- und Microsoft-Fabric-Expertise kombiniert mit Python-Automatisierung, relationalem SQL und fundierten KI-Workflows — entwickelt für regulierte Unternehmens- und UN-Umgebungen.',
      stackLogosLabel: 'Kernprodukte & Technologien',
      about: 'Über mich',
      aboutP1: 'Ich bin Keshav, Operations- & BI-Data-Analyst mit Sitz in Genf, Schweiz (gültige Schweizer Arbeitsbewilligung). Mein Hintergrund verbindet Ingenieurwesen und Baumanagement mit Enterprise-Analytik bei UN-Organisationen, einem Schweizer Food-Tech-Startup und in der Microsoft-Fabric-BI-Beratung.',
      aboutP2: 'Ob bei der Abstimmung von über 30 UN-SDG-Indikatoren bei der ITU, der Automatisierung von Python- & AWS-Lambda-ETL-Pipelines bei Kitro SA oder der Governance von ERP-Semantikmodellen mit Row-Level Security bei Mediasoft Group — mein Fokus liegt auf verlässlichen datenbasierten Entscheidungen.',
      languagesLabel: 'Sprachen',
      languagesValue: 'Englisch (Muttersprache) · Französisch (Mittelstufe B1)',
      volunteeringLabel: 'Engagement',
      volunteeringValue: 'iCareFish (2026) — User-Engagement- & Kampagnen-Analytik · Building Bridges Genf (2024) — Sustainable Finance',
      stats: [
        { value: '30+', label: 'UN-SDG-Indikatoren überwacht & geprüft', sub: 'bei der ITU Genf' },
        { value: '40%', label: 'Effizienzsteigerung durch Python-ETL', sub: 'bei Kitro SA, Zürich' },
        { value: '8M sq ft', label: 'Fortune-500-Büroportfolio bei 94 % Auslastung betreut', sub: '& 92 % Kundenbindung-BI' },
      ],
      contact: 'Kontakt',
      contactLede: 'Offen für Positionen als Data Analyst, BI Developer (Power BI / Fabric) und AI Automation schweizweit oder remote.',
      email: 'E-Mail',
      phone: 'Telefon',
      profiles: 'Profile',
      cv: 'Lebenslauf',
      readOnline: 'Online lesen',
      downloadPdf: 'PDF herunterladen',
    },
    workPage: {
      title: 'Projekte — Keshav Dewan',
      backHome: '← Startseite',
      heading: 'Projekte & Fallstudien',
      tagline: 'Jedes Projekt verfügt über eine eigene Fallstudienseite mit Geschäftsproblem, Datenpipeline oder Semantikmodell, eingesetzten Tools und messbaren Ergebnissen.',
      statsCases: 'Detaillierte Fallstudien',
      statsCert: 'Zertifizierter Power BI & Fabric Analytics Engineer',
      statsLive: 'Interaktive Power-BI- & Tableau-Dashboards',
      filterLabel: 'Projekte nach Kategorie filtern',
      categories: { All: 'Alle', 'AI & Automation': 'KI & Automatisierung', 'BI & Governance': 'BI & Governance', 'Data Engineering': 'Data Engineering', 'SQL & Analytics': 'SQL & Analytik' },
    },
    detailPage: {
      backAll: '← Alle Projekte',
      builtWith: 'Technologien',
      capabilities: 'Kompetenzen',
      links: 'Links',
      moreWork: 'Weitere Projekte',
    },
    cvPage: {
      title: 'Lebenslauf — Keshav Dewan',
      backHome: '← Startseite',
      downloadPdf: 'PDF herunterladen',
      viewProjects: 'Projekte entdecken',
      profileH: 'Profil',
      profileP1: 'Analytischer Operations- & BI-Datenspezialist mit nachweislicher Erfahrung in internationalen Organisationen und Schweizer Unternehmen (ITU Genf, Mediasoft Group, Kitro SA). Zertifizierter Microsoft Power BI Data Analyst (PL-300) und Fabric Analytics Engineer (DP-600) mit Erfahrung in der Validierung komplexer Programm- und ERP-Daten sowie im Monitoring von über 30 globalen Indikatoren.',
      profileP2: 'Versiert in Python-ETL-Automatisierung, PostgreSQL, Microsoft-Fabric-Lakehouse- & Semantikmodellen mit Row-Level Security (RLS) sowie LLM-Integration über REST-APIs und MCP.',
      experienceH: 'Karriereverlauf',
      skillsH: 'Kernkompetenzen',
      eduH: 'Zertifikate & Ausbildung',
      volH: 'Ehrenamtliches Engagement',
      volItems: [
        {
          title: 'iCareFish',
          meta: '2026',
          desc: 'Ehrenamtliche Tätigkeit als Data & Research Analyst zur Analyse von User-Engagement- und Kampagnendaten für digitale Transformationsentscheidungen.',
        },
        {
          title: 'Building Bridges',
          meta: 'Genf, 2024',
          desc: 'Vernetzung branchenübergreifender Akteure zur Förderung nachhaltiger Finanzlösungen und wirkungsorientierter Investitionen.',
        },
      ],
      langH: 'Sprachen',
    },
    footer: {
      line1: 'Keshav Dewan, Data Analyst & BI-Spezialist in Genf, Schweiz.',
      line2: 'Farbfelder und Guilloche-Linien inspiriert von Schweizer Banknoten. Gesetzt in Archivo Variable.',
    },
  },
};
