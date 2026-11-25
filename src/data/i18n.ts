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
    about: string;
    experience: string;
    projects: string;
    expertise: string;
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
    careerTimelineLink: string;
    projects: string;
    otherProjectsLink: string;
    viewCaseStudy: string;
    areasOfExpertise: string;
    aiWorkflow: string;
    aiWorkflowIntro: string;
    technicalExpertise: string;
    stackLogosLabel: string;
    aboutMe: string;
    aboutParagraphs: string[];
    aboutPortraitAlt: string;
    education: string;
    languagesLabel: string;
    languagesValue: string;
    volunteeringLabel: string;
    volunteeringValue: string;
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
    line2: string;
  };
}> = {
  en: {
    skip: 'Skip to content',
    seo: {
      homeTitle: 'Keshav Dewan | Business Intelligence & Data Analyst | Power BI & AI',
      homeDescription:
        'Business Intelligence and Data Analyst based in Geneva, Switzerland. Experienced in Power BI, SQL, Python, Microsoft Fabric, data engineering, ETL automation and AI integration.',
      workTitle: 'Selected Projects & Case Studies — Keshav Dewan',
      workDescription:
        'Business Intelligence, Microsoft Fabric, Python ETL, SQL and AI integration case studies by Keshav Dewan.',
      cvTitle: 'CV — Keshav Dewan | Business Intelligence & Data Analyst',
      cvDescription:
        'Curriculum Vitae of Keshav Dewan — Business Intelligence & Data Analyst in Geneva, Switzerland (PL-300 Certified).',
    },
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      expertise: 'Expertise',
      cv: 'CV',
      contact: 'Contact',
      themeDark: 'Dark',
      themeLight: 'Light',
      langLabel: 'Language',
    },
    hero: {
      heading: 'Business Intelligence & Data Analyst',
      specialization: 'Power BI · SQL · Python · Microsoft Fabric · AI & Automation',
      locationBadge: 'Geneva, Switzerland · Swiss work permit available · Microsoft Certified (PL-300)',
      intro1:
        'I am a Business Intelligence and Data Analyst based in Geneva, Switzerland, with a background in engineering, research, consulting and commercial real estate.',
      intro2:
        'I specialize in transforming complex datasets into meaningful insights through data modelling, automated ETL pipelines, interactive dashboards and AI-powered solutions.',
      intro3:
        'My experience spans international organizations, Swiss technology companies and enterprise BI projects. I enjoy combining analytical thinking, technical expertise and emerging AI technologies to solve practical business problems.',
      ctaProjects: 'Explore My Projects',
      ctaCv: 'Download My CV',
      ctaContact: 'Get in Touch',
      portraitAlt: 'Corporate headshot of Keshav Dewan, Business Intelligence and Data Analyst in Geneva',
    },
    sections: {
      experience: 'Professional Experience',
      careerTimelineLink: 'Full Career Timeline & CV →',
      projects: 'Selected Projects & Case Studies',
      otherProjectsLink: 'View All Projects →',
      viewCaseStudy: 'View Case Study →',
      areasOfExpertise: 'Areas of Expertise',
      aiWorkflow: 'AI in My Workflow',
      aiWorkflowIntro:
        'Practical ways I combine Generative AI, LLMs, RAG, MCP and coding assistants with BI engineering and Python automation.',
      technicalExpertise: 'Technical Expertise',
      stackLogosLabel: 'Core technologies & platforms',
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
      education: 'Education & Certifications',
      languagesLabel: 'Languages',
      languagesValue: 'English – Native · French – Intermediate (B1)',
      volunteeringLabel: 'Volunteering',
      volunteeringValue: 'iCareFish (2026) — User engagement & campaign analytics · Building Bridges Geneva (2024) — Sustainable finance',
      connectHeading: "Let's Connect",
      connectP1:
        "I'm always interested in connecting with professionals, recruiters and organizations working in Business Intelligence, Data Analytics, Data Engineering and AI-driven solutions.",
      connectP2: 'I am open to opportunities across Switzerland and international environments.',
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
      heading: 'Selected Projects & Case Studies',
      tagline:
        'Detailed case studies spanning enterprise BI semantic modelling, AI & RAG automation, UN SDG reporting, Python ETL pipelines and SQL analytics.',
      statsCases: 'Detailed case studies',
      statsCert: 'Microsoft Certified Power BI Data Analyst (PL-300)',
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
        'Business Intelligence & Data Analyst based in Geneva, Switzerland (Swiss work permit available) with a proven track record across international organizations, Swiss technology companies and commercial real estate. Microsoft Certified Power BI Data Analyst Associate (PL-300) experienced in relational ERP extraction, semantic modelling, DAX, Python ETL pipelines and institutional KPI reporting.',
      profileP2:
        'Combines classical BI and data governance discipline with practical AI integration — including LLMs, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), REST APIs, webhooks and AI-assisted development workflows.',
      experienceH: 'Professional Experience',
      skillsH: 'Technical Expertise',
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
      line2: 'Swiss banknote colour fields and guilloche geometry. Set in Archivo Variable.',
    },
  },
  fr: {
    skip: 'Aller au contenu',
    seo: {
      homeTitle: 'Keshav Dewan | Analyste Business Intelligence & Data | Power BI & IA',
      homeDescription:
        'Analyste Business Intelligence et Data basé à Genève, Suisse. Expérimenté en Power BI, SQL, Python, Microsoft Fabric, ingénierie des données, automatisation ETL et intégration IA.',
      workTitle: 'Projets sélectionnés & études de cas — Keshav Dewan',
      workDescription:
        'Études de cas en Business Intelligence, Microsoft Fabric, ETL Python, SQL et intégration IA par Keshav Dewan.',
      cvTitle: 'CV — Keshav Dewan | Analyste Business Intelligence & Data',
      cvDescription:
        'Curriculum Vitae de Keshav Dewan — Analyste Business Intelligence & Data à Genève, Suisse (Certifié PL-300).',
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      expertise: 'Expertise',
      cv: 'CV',
      contact: 'Contact',
      themeDark: 'Sombre',
      themeLight: 'Clair',
      langLabel: 'Langue',
    },
    hero: {
      heading: 'Analyste Business Intelligence & Data',
      specialization: 'Power BI · SQL · Python · Microsoft Fabric · IA & Automatisation',
      locationBadge: 'Genève, Suisse · Permis de travail suisse · Certifié Microsoft (PL-300)',
      intro1:
        "Je suis Analyste Business Intelligence et Data basé à Genève, en Suisse, avec un parcours alliant ingénierie, recherche, conseil et immobilier d'entreprise.",
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
      careerTimelineLink: 'Parcours complet & CV →',
      projects: 'Projets sélectionnés',
      otherProjectsLink: 'Voir tous les projets →',
      viewCaseStudy: "Voir l'étude de cas →",
      areasOfExpertise: "Domaines d'expertise",
      aiWorkflow: "L'IA dans mon workflow",
      aiWorkflowIntro:
        "Exemples concrets d'intégration de l'IA générative, des LLM, du RAG, du MCP et des assistants de code avec l'ingénierie BI et Python.",
      technicalExpertise: 'Expertise technique',
      stackLogosLabel: 'Technologies & plateformes principales',
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
      education: 'Formation & certifications',
      languagesLabel: 'Langues',
      languagesValue: 'Anglais – Langue maternelle · Français – Intermédiaire (B1)',
      volunteeringLabel: 'Bénévolat',
      volunteeringValue: 'iCareFish (2026) — Analytique engagement & campagnes · Building Bridges Genève (2024) — Finance durable',
      connectHeading: 'Me contacter',
      connectP1:
        "Je suis toujours ravi d'échanger avec des professionnels, recruteurs et organisations actifs dans la Business Intelligence, l'analytique de données, le Data Engineering et les solutions basées sur l'IA.",
      connectP2: 'Je suis ouvert aux opportunités partout en Suisse ainsi que dans des environnements internationaux.',
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
      heading: 'Projets sélectionnés',
      tagline:
        'Études de cas détaillées en modélisation sémantique BI, automatisation IA & RAG, reporting ODD de l’ONU, pipelines ETL Python et analytique SQL.',
      statsCases: 'Études de cas détaillées',
      statsCert: 'Certifié Microsoft Power BI Data Analyst (PL-300)',
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
        "Analyste Business Intelligence & Data basé à Genève, Suisse (permis de travail suisse disponible), fort d'une expérience au sein d'organisations internationales, d'entreprises technologiques suisses et de l'immobilier commercial. Certifié Microsoft Power BI Data Analyst Associate (PL-300), expérimenté en extraction ERP relationnelle, modélisation sémantique, DAX, pipelines ETL Python et reporting KPI institutionnel.",
      profileP2:
        "Allie rigueur BI et gouvernance des données à une pratique concrète de l'intégration IA : LLM, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), API REST, webhooks et workflows de développement assistés par IA.",
      experienceH: 'Expérience professionnelle',
      skillsH: 'Expertise technique',
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
      line2: 'Champs colorés et tracés guillochés inspirés des billets suisses. Typographie Archivo Variable.',
    },
  },
  de: {
    skip: 'Zum Inhalt springen',
    seo: {
      homeTitle: 'Keshav Dewan | Business Intelligence & Data Analyst | Power BI & KI',
      homeDescription:
        'Business Intelligence und Data Analyst mit Sitz in Genf, Schweiz. Erfahrung in Power BI, SQL, Python, Microsoft Fabric, Data Engineering, ETL-Automatisierung und KI-Integration.',
      workTitle: 'Ausgewählte Projekte & Fallstudien — Keshav Dewan',
      workDescription:
        'Fallstudien zu Business Intelligence, Microsoft Fabric, Python-ETL, SQL und KI-Integration von Keshav Dewan.',
      cvTitle: 'Lebenslauf — Keshav Dewan | Business Intelligence & Data Analyst',
      cvDescription:
        'Lebenslauf von Keshav Dewan — Business Intelligence & Data Analyst in Genf, Schweiz (PL-300 zertifiziert).',
    },
    nav: {
      home: 'Start',
      about: 'Über mich',
      experience: 'Erfahrung',
      projects: 'Projekte',
      expertise: 'Kompetenzen',
      cv: 'Lebenslauf',
      contact: 'Kontakt',
      themeDark: 'Dunkel',
      themeLight: 'Hell',
      langLabel: 'Sprache',
    },
    hero: {
      heading: 'Business Intelligence & Data Analyst',
      specialization: 'Power BI · SQL · Python · Microsoft Fabric · KI & Automatisierung',
      locationBadge: 'Genf, Schweiz · Schweizer Arbeitsbewilligung · Microsoft-zertifiziert (PL-300)',
      intro1:
        'Ich bin Business Intelligence und Data Analyst mit Sitz in Genf, Schweiz, und bringe einen Hintergrund in Ingenieurwesen, Forschung, Beratung und Gewerbeimmobilien mit.',
      intro2:
        'Mein Schwerpunkt liegt darauf, komplexe Datensätze durch Datenmodellierung, automatisierte ETL-Pipelines, interaktive Dashboards und KI-gestützte Lösungen in belastbare Erkenntnisse zu verwandeln.',
      intro3:
        'Meine Erfahrung umfasst internationale Organisationen, Schweizer Technologieunternehmen und Enterprise-BI-Projekte. Ich verbinde analytisches Denken, technische Umsetzung und moderne KI-Technologien zur Lösung praxisnaher Geschäftsaufgaben.',
      ctaProjects: 'Projekte entdecken',
      ctaCv: 'Lebenslauf herunterladen',
      ctaContact: 'Kontakt aufnehmen',
      portraitAlt: 'Professionelles Porträt von Keshav Dewan, Business Intelligence und Data Analyst in Genf',
    },
    sections: {
      experience: 'Berufserfahrung',
      careerTimelineLink: 'Vollständiger Lebenslauf →',
      projects: 'Ausgewählte Projekte',
      otherProjectsLink: 'Alle Projekte ansehen →',
      viewCaseStudy: 'Fallstudie ansehen →',
      areasOfExpertise: 'Fachliche Schwerpunkte',
      aiWorkflow: 'KI in meinem Workflow',
      aiWorkflowIntro:
        'Konkrete Einsatzbeispiele für Generative AI, LLMs, RAG, MCP und KI-gestützte Entwicklung im Zusammenspiel mit BI und Python.',
      technicalExpertise: 'Technische Kompetenzen',
      stackLogosLabel: 'Kerntechnologien & Plattformen',
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
      education: 'Ausbildung & Zertifizierungen',
      languagesLabel: 'Sprachen',
      languagesValue: 'Englisch – Muttersprache · Französisch – Mittelstufe (B1)',
      volunteeringLabel: 'Engagement',
      volunteeringValue: 'iCareFish (2026) — User-Engagement- & Kampagnen-Analytik · Building Bridges Genf (2024) — Sustainable Finance',
      connectHeading: 'Kontakt',
      connectP1:
        'Ich freue mich jederzeit über den Austausch mit Fach- und Führungskräften, Recruitern und Unternehmen aus den Bereichen Business Intelligence, Data Analytics, Data Engineering und KI-gestützten Lösungen.',
      connectP2: 'Ich bin offen für Positionen in der gesamten Schweiz sowie in internationalen Umfeldern.',
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
      heading: 'Ausgewählte Projekte',
      tagline:
        'Detaillierte Fallstudien zu Enterprise-BI-Semantikmodellen, KI- & RAG-Automatisierung, UN-SDG-Reporting, Python-ETL-Pipelines und SQL-Analysen.',
      statsCases: 'Detaillierte Fallstudien',
      statsCert: 'Microsoft Certified Power BI Data Analyst (PL-300)',
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
        'Business Intelligence & Data Analyst mit Sitz in Genf, Schweiz (Schweizer Arbeitsbewilligung vorhanden) und nachweislicher Erfahrung in internationalen Organisationen, Schweizer Technologieunternehmen und der Gewerbeimmobilienbranche. Microsoft Certified Power BI Data Analyst Associate (PL-300) mit Schwerpunkt auf relationaler ERP-Extraktion, Semantikmodellierung, DAX, Python-ETL-Pipelines und institutionellem KPI-Reporting.',
      profileP2:
        'Verbindet klassische BI- und Data-Governance-Disziplin mit praxisnaher KI-Integration — darunter LLMs, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), REST-APIs, Webhooks und KI-gestützte Entwicklungsworkflows.',
      experienceH: 'Berufserfahrung',
      skillsH: 'Technische Kompetenzen',
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
      line2: 'Farbfelder und Guilloche-Linien inspiriert von Schweizer Banknoten. Gesetzt in Archivo Variable.',
    },
  },
};
