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
  seo: {
    homeTitle: string;
    homeDescription: string;
    workTitle: string;
    workDescription: string;
    cvTitle: string;
    cvDescription: string;
  };
  nav: {
    home: string;
    experience: string;
    projects: string;
    stack: string;
    about: string;
    cv: string;
    contact: string;
    themeDark: string;
    themeLight: string;
    langLabel: string;
  };
  hero: {
    heading: string;
    specialization: string;
    locationBadge: string;
    intro1: string;
    intro2: string;
    intro3: string;
    ctaProjects: string;
    ctaCv: string;
    ctaContact: string;
    portraitAlt: string;
  };
  sections: {
    experience: string;
    careerTimelineHeading: string;
    careerTimelineLink: string;
    projects: string;
    otherProjectsLink: string;
    viewCaseStudy: string;
    stack: string;
    stackIntro: string;
    stackLogosLabel: string;
    aboutMe: string;
    aboutParagraphs: string[];
    aboutPortraitAlt: string;
    languagesLabel: string;
    languagesValue: string;
    volunteeringLabel: string;
    volunteeringItems: { org: string; detail: string }[];
    connectHeading: string;
    connectP1: string;
    connectP2: string;
    targetRolesLabel: string;
    email: string;
    phone: string;
    profiles: string;
    cv: string;
    readOnline: string;
    downloadPdf: string;
  };
  workPage: {
    backHome: string;
    heading: string;
    tagline: string;
    statsCases: string;
    statsCert: string;
    statsLive: string;
    filterLabel: string;
    viewCaseStudy: string;
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
  };
}> = {
  en: {
    skip: 'Skip to content',
    seo: {
      homeTitle: 'Keshav Dewan | Business Intelligence & Data Analyst | Power BI & AI',
      homeDescription:
        'Business Intelligence and Data Analyst based in Geneva, Switzerland. Experienced in Power BI, SQL, Python, Microsoft Fabric, data engineering, ETL automation and AI integration.',
      workTitle: 'Projects & Case Studies — Keshav Dewan',
      workDescription:
        'Business Intelligence, Microsoft Fabric, Python ETL, SQL and AI integration case studies by Keshav Dewan.',
      cvTitle: 'CV — Keshav Dewan | Business Intelligence & Data Analyst',
      cvDescription:
        'Curriculum Vitae of Keshav Dewan — Business Intelligence & Data Analyst in Geneva, Switzerland (PL-300 & DP-600 Certified).',
    },
    nav: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Tech Stack',
      about: 'About Me',
      cv: 'CV',
      contact: "Let's Connect",
      themeDark: 'Dark',
      themeLight: 'Light',
      langLabel: 'Language',
    },
    hero: {
      heading: 'Business Intelligence & Data Analyst',
      specialization: 'Power BI · SQL · Python · Microsoft Fabric · AI & Automation',
      locationBadge: 'Geneva, Switzerland · Swiss work permit available · Microsoft Certified (PL-300 & DP-600)',
      intro1:
        'I am a Business Intelligence and Data Analyst based in Geneva, Switzerland, with a background in strategy development, research and consulting while working with Fortune 500 companies.',
      intro2:
        'I specialize in transforming complex datasets into meaningful insights through data modelling, automated ETL pipelines, interactive dashboards and AI-powered solutions.',
      intro3:
        'My experience spans international organizations, Swiss technology companies and enterprise BI projects. I enjoy combining analytical thinking, technical expertise and emerging AI technologies to solve practical business problems.',
      ctaProjects: 'Explore My Projects',
      ctaCv: 'Download My CV',
      ctaContact: "Let's Connect",
      portraitAlt: 'Corporate headshot of Keshav Dewan, Business Intelligence and Data Analyst in Geneva',
    },
    sections: {
      experience: 'Professional Experience',
      careerTimelineHeading: 'Career Timeline',
      careerTimelineLink: 'Career Timeline →',
      projects: 'Projects & Case Studies',
      otherProjectsLink: 'Other Projects →',
      viewCaseStudy: 'View Case Study →',
      stack: 'Tech Stack',
      stackIntro:
        'PL-300 & DP-600 certified BI and Microsoft Fabric engineering paired with Python automation, relational SQL rigor, and grounded AI workflows — built for enterprise and humanitarian environments.',
      stackLogosLabel: 'Core products & technologies',
      aboutMe: 'About Me',
      aboutParagraphs: [
        "I'm Keshav, a Business Intelligence and Data Analyst based in Geneva, Switzerland.",
        'My professional journey combines an engineering background and postgraduate studies in Advanced Construction Management with experience in business intelligence, data analytics, research and consulting.',
        'I have worked across different industries, including commercial real estate, sustainability-focused technology and international organizations. These experiences have helped me understand how businesses use information to evaluate performance, identify trends and make informed decisions.',
        'My technical work focuses on developing Power BI dashboards, writing SQL queries, automating data workflows using Python, designing data models and improving data quality and reporting reliability.',
        'I am also actively exploring the intersection of Business Intelligence and Artificial Intelligence. I use modern AI tools to support development and problem-solving, and have worked on practical applications involving LLMs, RAG architectures, MCP, APIs and AI-powered chatbots.',
        'I enjoy working at the intersection of business requirements and technology, translating complex data into clear, reliable and actionable insights.',
      ],
      aboutPortraitAlt: 'Keshav Dewan, Business Intelligence & Data Analyst based in Geneva, Switzerland',
      languagesLabel: 'Languages',
      languagesValue: 'English – Native · French – Intermediate (B1)',
      volunteeringLabel: 'Volunteering',
      volunteeringItems: [
        { org: 'iCareFish (2026)', detail: 'User engagement and campaign analytics supporting digital transformation decisions' },
        { org: 'Building Bridges Geneva (2024)', detail: 'Connected cross-sector stakeholders to advance sustainable finance solutions' },
      ],
      connectHeading: "Let's Connect",
      connectP1:
        "I'm always interested in connecting with professionals, recruiters and organizations working in Business Intelligence, Data Analytics, Data Engineering and AI-driven solutions.",
      connectP2: 'I am open to opportunities across Switzerland and international remote environments.',
      targetRolesLabel: 'Areas of interest',
      email: 'Email',
      phone: 'Phone',
      profiles: 'Profiles',
      cv: 'CV',
      readOnline: 'Read online',
      downloadPdf: 'Download PDF',
    },
    workPage: {
      backHome: '← Home',
      heading: 'Projects & Case Studies',
      tagline:
        'Detailed case studies spanning enterprise BI semantic modelling, AI & RAG automation, UN SDG reporting, Python ETL pipelines and SQL analytics.',
      statsCases: 'Detailed case studies',
      statsCert: 'Microsoft Certified (PL-300 & DP-600)',
      statsLive: 'Live Power BI & Tableau reports',
      filterLabel: 'Filter projects by category',
      viewCaseStudy: 'View Case Study →',
      categories: {
        All: 'All',
        'BI & Governance': 'BI & Governance',
        'AI & Automation': 'AI & Automation',
        'Data Engineering': 'Data Engineering',
        'SQL & Analytics': 'SQL & Analytics',
      },
    },
    detailPage: {
      backAll: '← All Projects',
      builtWith: 'Data Sources & Technologies',
      capabilities: 'Capabilities',
      links: 'GitHub & Live Dashboards',
      moreWork: 'More Projects',
    },
    cvPage: {
      backHome: '← Home',
      downloadPdf: 'Download My CV (PDF)',
      viewProjects: 'Explore My Projects',
      profileH: 'Profile',
      profileP1:
        'Business Intelligence & Data Analyst based in Geneva, Switzerland, with a proven track record across international organizations, Swiss technology companies and commercial real estate. Experienced in relational ERP extraction, semantic modelling, DAX, Python ETL pipelines and institutional KPI reporting.',
      profileP2:
        'Combines classical BI and data governance discipline with practical AI integration — including LLMs, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), REST APIs, webhooks and AI-assisted development workflows.',
      experienceH: 'Career Timeline',
      skillsH: 'Tech Stack',
      eduH: 'Education & Certifications',
      volH: 'Volunteering',
      volItems: [
        {
          title: 'iCareFish',
          meta: '2026',
          desc: 'Volunteered as a Data & Research Analyst, analyzing user engagement and campaign performance datasets to support digital transformation decisions.',
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
      line1: 'Keshav Dewan — Business Intelligence & Data Analyst in Geneva, Switzerland.',
    },
  },
  fr: {
    skip: 'Aller au contenu',
    seo: {
      homeTitle: 'Keshav Dewan | Analyste Business Intelligence & Data | Power BI & IA',
      homeDescription:
        'Analyste Business Intelligence et Data basé à Genève, Suisse. Expérimenté en Power BI, SQL, Python, Microsoft Fabric, ingénierie des données, automatisation ETL et intégration IA.',
      workTitle: 'Projets & études de cas — Keshav Dewan',
      workDescription:
        'Études de cas en Business Intelligence, Microsoft Fabric, ETL Python, SQL et intégration IA par Keshav Dewan.',
      cvTitle: 'CV — Keshav Dewan | Analyste Business Intelligence & Data',
      cvDescription:
        'Curriculum Vitae de Keshav Dewan — Analyste Business Intelligence & Data à Genève, Suisse (Certifié PL-300 & DP-600).',
    },
    nav: {
      home: 'Accueil',
      experience: 'Expérience',
      projects: 'Projets',
      stack: 'Tech Stack',
      about: 'À propos',
      cv: 'CV',
      contact: 'Me contacter',
      themeDark: 'Sombre',
      themeLight: 'Clair',
      langLabel: 'Langue',
    },
    hero: {
      heading: 'Analyste Business Intelligence & Data',
      specialization: 'Power BI · SQL · Python · Microsoft Fabric · IA & Automatisation',
      locationBadge: 'Genève, Suisse · Permis de travail suisse · Certifié Microsoft (PL-300 & DP-600)',
      intro1:
        'Je suis Analyste Business Intelligence et Data basé à Genève, en Suisse, avec un parcours en développement stratégique, recherche et conseil auprès d’entreprises Fortune 500.',
      intro2:
        "Je transforme des ensembles de données complexes en indicateurs fiables grâce à la modélisation de données, aux pipelines ETL automatisés, aux tableaux de bord interactifs et aux solutions d'IA appliquée.",
      intro3:
        "Mon expérience couvre les organisations internationales, les entreprises technologiques suisses et des projets BI d'entreprise. J'associe rigueur analytique, maîtrise technique et technologies d'IA émergentes pour résoudre des problématiques métier concrètes.",
      ctaProjects: 'Explorer mes projets',
      ctaCv: 'Télécharger mon CV',
      ctaContact: 'Me contacter',
      portraitAlt: 'Portrait professionnel de Keshav Dewan, Analyste Business Intelligence et Data à Genève',
    },
    sections: {
      experience: 'Expérience professionnelle',
      careerTimelineHeading: 'Parcours professionnel',
      careerTimelineLink: 'Parcours professionnel →',
      projects: 'Projets & études de cas',
      otherProjectsLink: 'Autres projets →',
      viewCaseStudy: "Voir l'étude de cas →",
      stack: 'Tech Stack',
      stackIntro:
        "Certifications PL-300 & DP-600 en BI et Microsoft Fabric alliées à l'automatisation Python, au SQL relationnel et aux workflows IA ancrés — conçues pour les environnements d'entreprise et humanitaires.",
      stackLogosLabel: 'Produits & technologies clés',
      aboutMe: 'À propos',
      aboutParagraphs: [
        'Je suis Keshav, Analyste Business Intelligence et Data basé à Genève, en Suisse.',
        "Mon parcours professionnel associe une formation d'ingénieur et un master en gestion avancée de la construction à une expérience en Business Intelligence, analytique de données, recherche et conseil.",
        "J'ai travaillé dans différents secteurs, notamment l'immobilier commercial, les technologies liées à la durabilité et les organisations internationales. Ces expériences m'ont permis de comprendre comment les organisations exploitent les données pour évaluer la performance, dégager des tendances et éclairer leurs décisions.",
        "Mon travail technique porte sur la conception de tableaux de bord Power BI, l'écriture de requêtes SQL, l'automatisation de flux de données en Python, la modélisation de données ainsi que l'amélioration de la qualité et de la fiabilité du reporting.",
        "J'explore également de manière active la convergence entre Business Intelligence et Intelligence Artificielle. J'utilise les outils d'IA modernes pour soutenir le développement et la résolution de problèmes, et j'ai conçu des applications pratiques reposant sur les LLM, les architectures RAG, le MCP, les API et les chatbots intelligents.",
        "J'apprécie particulièrement travailler à l'interface entre besoins métier et technologie, en traduisant des données complexes en informations claires, fiables et directement exploitables.",
      ],
      aboutPortraitAlt: 'Keshav Dewan, Analyste Business Intelligence & Data à Genève, Suisse',
      languagesLabel: 'Langues',
      languagesValue: 'Anglais – Langue maternelle · Français – Intermédiaire (B1)',
      volunteeringLabel: 'Bénévolat',
      volunteeringItems: [
        { org: 'iCareFish (2026)', detail: "Analytique d'engagement utilisateur et de campagnes pour la transformation digitale" },
        { org: 'Building Bridges Genève (2024)', detail: 'Mise en relation d’acteurs intersectoriels autour de la finance durable' },
      ],
      connectHeading: 'Me contacter',
      connectP1:
        "Je suis toujours ravi d'échanger avec des professionnels, recruteurs et organisations actifs dans la Business Intelligence, l'analytique de données, le Data Engineering et les solutions basées sur l'IA.",
      connectP2: "Je suis ouvert aux opportunités partout en Suisse ainsi qu'à l'international en télétravail.",
      targetRolesLabel: 'Postes recherchés',
      email: 'E-mail',
      phone: 'Téléphone',
      profiles: 'Profils',
      cv: 'CV',
      readOnline: 'Lire en ligne',
      downloadPdf: 'Télécharger le PDF',
    },
    workPage: {
      backHome: '← Accueil',
      heading: 'Projets & études de cas',
      tagline:
        'Études de cas détaillées en modélisation sémantique BI, automatisation IA & RAG, reporting ODD de l’ONU, pipelines ETL Python et analytique SQL.',
      statsCases: 'Études de cas détaillées',
      statsCert: 'Certifié Microsoft (PL-300 & DP-600)',
      statsLive: 'Rapports Power BI & Tableau en ligne',
      filterLabel: 'Filtrer les projets par catégorie',
      viewCaseStudy: "Voir l'étude de cas →",
      categories: {
        All: 'Tous',
        'BI & Governance': 'BI & Gouvernance',
        'AI & Automation': 'IA & Automatisation',
        'Data Engineering': 'Data Engineering',
        'SQL & Analytics': 'SQL & Analytique',
      },
    },
    detailPage: {
      backAll: '← Tous les projets',
      builtWith: 'Sources de données & technologies',
      capabilities: 'Compétences',
      links: 'GitHub & tableaux de bord',
      moreWork: 'Autres projets',
    },
    cvPage: {
      backHome: '← Accueil',
      downloadPdf: 'Télécharger mon CV (PDF)',
      viewProjects: 'Explorer mes projets',
      profileH: 'Profil',
      profileP1:
        "Analyste Business Intelligence & Data basé à Genève, Suisse, fort d'une expérience au sein d'organisations internationales, d'entreprises technologiques suisses et de l'immobilier commercial. Expérimenté en extraction ERP relationnelle, modélisation sémantique, DAX, pipelines ETL Python et reporting KPI institutionnel.",
      profileP2:
        "Allie rigueur BI et gouvernance des données à une pratique concrète de l'intégration IA : LLM, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), API REST, webhooks et workflows de développement assistés par IA.",
      experienceH: 'Parcours professionnel',
      skillsH: 'Tech Stack',
      eduH: 'Formation & certifications',
      volH: 'Bénévolat',
      volItems: [
        {
          title: 'iCareFish',
          meta: '2026',
          desc: "Bénévole en tant que Data & Research Analyst : analyse de l'engagement utilisateur et des performances de campagnes pour orienter les décisions de transformation digitale.",
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
      line1: 'Keshav Dewan — Analyste Business Intelligence & Data à Genève, Suisse.',
    },
  },
  de: {
    skip: 'Zum Inhalt springen',
    seo: {
      homeTitle: 'Keshav Dewan | Business Intelligence & Data Analyst | Power BI & KI',
      homeDescription:
        'Business Intelligence und Data Analyst mit Sitz in Genf, Schweiz. Erfahrung in Power BI, SQL, Python, Microsoft Fabric, Data Engineering, ETL-Automatisierung und KI-Integration.',
      workTitle: 'Projekte & Fallstudien — Keshav Dewan',
      workDescription:
        'Fallstudien zu Business Intelligence, Microsoft Fabric, Python-ETL, SQL und KI-Integration von Keshav Dewan.',
      cvTitle: 'Lebenslauf — Keshav Dewan | Business Intelligence & Data Analyst',
      cvDescription:
        'Lebenslauf von Keshav Dewan — Business Intelligence & Data Analyst in Genf, Schweiz (PL-300 & DP-600 zertifiziert).',
    },
    nav: {
      home: 'Start',
      experience: 'Erfahrung',
      projects: 'Projekte',
      stack: 'Tech Stack',
      about: 'Über mich',
      cv: 'Lebenslauf',
      contact: 'Kontakt',
      themeDark: 'Dunkel',
      themeLight: 'Hell',
      langLabel: 'Sprache',
    },
    hero: {
      heading: 'Business Intelligence & Data Analyst',
      specialization: 'Power BI · SQL · Python · Microsoft Fabric · KI & Automatisierung',
      locationBadge: 'Genf, Schweiz · Schweizer Arbeitsbewilligung · Microsoft-zertifiziert (PL-300 & DP-600)',
      intro1:
        'Ich bin Business Intelligence und Data Analyst mit Sitz in Genf, Schweiz, mit einem Hintergrund in Strategieentwicklung, Forschung und Beratung in Zusammenarbeit mit Fortune-500-Unternehmen.',
      intro2:
        'Mein Schwerpunkt liegt darauf, komplexe Datensätze durch Datenmodellierung, automatisierte ETL-Pipelines, interaktive Dashboards und KI-gestützte Lösungen in belastbare Erkenntnisse zu verwandeln.',
      intro3:
        'Meine Erfahrung umfasst internationale Organisationen, Schweizer Technologieunternehmen und Enterprise-BI-Projekte. Ich verbinde analytisches Denken, technische Umsetzung und moderne KI-Technologien zur Lösung praxisnaher Geschäftsaufgaben.',
      ctaProjects: 'Projekte entdecken',
      ctaCv: 'Lebenslauf herunterladen',
      ctaContact: 'Kontakt',
      portraitAlt: 'Professionelles Porträt von Keshav Dewan, Business Intelligence und Data Analyst in Genf',
    },
    sections: {
      experience: 'Berufserfahrung',
      careerTimelineHeading: 'Karriereverlauf',
      careerTimelineLink: 'Karriereverlauf →',
      projects: 'Projekte & Fallstudien',
      otherProjectsLink: 'Weitere Projekte →',
      viewCaseStudy: 'Fallstudie ansehen →',
      stack: 'Tech Stack',
      stackIntro:
        'PL-300- & DP-600-zertifizierte BI- und Microsoft-Fabric-Expertise kombiniert mit Python-Automatisierung, relationalem SQL und fundierten KI-Workflows — entwickelt für Unternehmens- und UN-Umgebungen.',
      stackLogosLabel: 'Kernprodukte & Technologien',
      aboutMe: 'Über mich',
      aboutParagraphs: [
        'Ich bin Keshav, Business Intelligence und Data Analyst mit Sitz in Genf, Schweiz.',
        'Mein beruflicher Werdegang verbindet ein Ingenieurstudium und ein Aufbaustudium in Advanced Construction Management mit praktischer Erfahrung in Business Intelligence, Data Analytics, Forschung und Beratung.',
        'Ich habe in verschiedenen Branchen gearbeitet — darunter Gewerbeimmobilien, nachhaltigkeitsorientierte Technologieunternehmen und internationale Organisationen. Dadurch verstehe ich, wie Unternehmen Informationen nutzen, um Leistung zu bewerten, Trends zu erkennen und fundierte Entscheidungen zu treffen.',
        'Meine technische Arbeit konzentriert sich auf die Entwicklung von Power-BI-Dashboards, SQL-Abfragen, die Automatisierung von Datenprozessen mit Python, die Gestaltung von Datenmodellen sowie die Verbesserung von Datenqualität und Berichtszuverlässigkeit.',
        'Darüber hinaus befasse ich mich intensiv mit der Verbindung von Business Intelligence und Künstlicher Intelligenz. Ich nutze moderne KI-Werkzeuge zur Unterstützung von Entwicklung und Problemlösung und habe praktische Anwendungen mit LLMs, RAG-Architekturen, MCP, APIs und KI-Chatbots umgesetzt.',
        'Besonders schätze ich die Schnittstelle zwischen Fachbereich und Technologie — komplexe Daten in klare, verlässliche und umsetzbare Erkenntnisse zu übersetzen.',
      ],
      aboutPortraitAlt: 'Keshav Dewan, Business Intelligence & Data Analyst in Genf, Schweiz',
      languagesLabel: 'Sprachen',
      languagesValue: 'Englisch – Muttersprache · Französisch – Mittelstufe (B1)',
      volunteeringLabel: 'Engagement',
      volunteeringItems: [
        { org: 'iCareFish (2026)', detail: 'User-Engagement- und Kampagnen-Analytik für digitale Transformation' },
        { org: 'Building Bridges Genf (2024)', detail: 'Branchenübergreifende Vernetzung für Sustainable Finance' },
      ],
      connectHeading: 'Kontakt',
      connectP1:
        'Ich freue mich jederzeit über den Austausch mit Fach- und Führungskräften, Recruitern und Unternehmen aus den Bereichen Business Intelligence, Data Analytics, Data Engineering und KI-gestützten Lösungen.',
      connectP2: 'Ich bin offen für Positionen in der gesamten Schweiz sowie in internationalen Remote-Umfeldern.',
      targetRolesLabel: 'Zielpositionen',
      email: 'E-Mail',
      phone: 'Telefon',
      profiles: 'Profile',
      cv: 'Lebenslauf',
      readOnline: 'Online lesen',
      downloadPdf: 'PDF herunterladen',
    },
    workPage: {
      backHome: '← Startseite',
      heading: 'Projekte & Fallstudien',
      tagline:
        'Detaillierte Fallstudien zu Enterprise-BI-Semantikmodellen, KI- & RAG-Automatisierung, UN-SDG-Reporting, Python-ETL-Pipelines und SQL-Analysen.',
      statsCases: 'Detaillierte Fallstudien',
      statsCert: 'Microsoft-zertifiziert (PL-300 & DP-600)',
      statsLive: 'Interaktive Power-BI- & Tableau-Berichte',
      filterLabel: 'Projekte nach Kategorie filtern',
      viewCaseStudy: 'Fallstudie ansehen →',
      categories: {
        All: 'Alle',
        'BI & Governance': 'BI & Governance',
        'AI & Automation': 'KI & Automatisierung',
        'Data Engineering': 'Data Engineering',
        'SQL & Analytics': 'SQL & Analytik',
      },
    },
    detailPage: {
      backAll: '← Alle Projekte',
      builtWith: 'Datenquellen & Technologien',
      capabilities: 'Kompetenzen',
      links: 'GitHub & Live-Dashboards',
      moreWork: 'Weitere Projekte',
    },
    cvPage: {
      backHome: '← Startseite',
      downloadPdf: 'Lebenslauf als PDF',
      viewProjects: 'Projekte entdecken',
      profileH: 'Profil',
      profileP1:
        'Business Intelligence & Data Analyst mit Sitz in Genf, Schweiz, mit nachweislicher Erfahrung in internationalen Organisationen, Schweizer Technologieunternehmen und der Gewerbeimmobilienbranche. Erfahren in relationaler ERP-Extraktion, Semantikmodellierung, DAX, Python-ETL-Pipelines und institutionellem KPI-Reporting.',
      profileP2:
        'Verbindet klassische BI- und Data-Governance-Disziplin mit praxisnaher KI-Integration — darunter LLMs, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), REST-APIs, Webhooks und KI-gestützte Entwicklungsworkflows.',
      experienceH: 'Karriereverlauf',
      skillsH: 'Tech Stack',
      eduH: 'Ausbildung & Zertifizierungen',
      volH: 'Ehrenamtliches Engagement',
      volItems: [
        {
          title: 'iCareFish',
          meta: '2026',
          desc: 'Ehrenamtliche Mitarbeit als Data & Research Analyst zur Auswertung von User-Engagement- und Kampagnendaten für digitale Transformationsentscheidungen.',
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
      line1: 'Keshav Dewan — Business Intelligence & Data Analyst in Genf, Schweiz.',
    },
  },
};
