export const SITE = {
  name: 'Keshav Dewan',
  role: 'Data Analyst | AI & Automation | Power BI & Fabric',
  focus: 'Geneva, Switzerland · Swiss Work Permit Available · PL-300 & DP-600 Certified',
  lede:
    'I turn complex operational and enterprise datasets into governed Power BI semantic models, automated Python ETL pipelines, and practical LLM workflows — from UN SDG reporting in Geneva to Microsoft Fabric ERP analytics.',
  email: 'keshavdewan06@gmail.com',
  phone: '+41 76 295 68 35',
  phoneHref: 'tel:+41762956835',
  location: 'Geneva, Switzerland',
  github: 'https://github.com/keshavdewan',
  linkedin: 'https://www.linkedin.com/in/keshavdewan/',
  medium: 'https://medium.com/@kdrokz',
  tableau: 'https://public.tableau.com/app/profile/keshav.dewan3649',
  cvPdf: '/docs/Keshav_Dewan_CV.pdf',
};

export interface RoleEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack?: string;
}

export const EXPERIENCE: RoleEntry[] = [
  {
    title: 'Business Intelligence Analyst Intern',
    company: 'Mediasoft Group',
    location: 'Nyon, Switzerland',
    period: 'Apr 2026 – Sep 2026',
    bullets: [
      'Extracted, transformed, and validated complex relational ERP datasets using SQL and Power Query, establishing strict data integrity, governance, and Row-Level Security (RLS) standards across cross-functional operational reporting workflows.',
      'Partnered with non-technical stakeholders to translate operational inquiries into scalable Microsoft Fabric semantic models and delivered rapid ad-hoc analytical queries and Power BI reports.',
      'Implemented secure Row-Level Security (RLS) and dynamic filtering rules, integrating enterprise practices using Microsoft Fabric, Git version control, and CI/CD workflows.',
      'Authored end-to-end technical documentation for semantic data models and reporting workflows to ensure transparency, maintenance, and standardization.',
    ],
    stack: 'Microsoft Fabric · Power BI · SQL · Power Query · RLS · Git CI/CD',
  },
  {
    title: 'Data Analyst Intern',
    company: 'Kitro SA',
    location: 'Zurich, Switzerland',
    period: 'Apr 2024 – Oct 2024',
    bullets: [
      'Automated end-to-end ETL pipelines for large-scale operational, AWS costing, and food-waste sensor datasets using Python and AWS Lambda, reducing manual processing effort and boosting workflow efficiency by 40%.',
      'Cleaned, manipulated, and standardized raw multi-source data to identify anomalies, trends, and data discrepancies, directly enhancing reporting accuracy and data reliability.',
      'Partnered with cross-functional technical and operational teams to resolve pipeline bottlenecks and built Amazon QuickSight and Power BI dashboards for stakeholder visibility.',
    ],
    stack: 'Python · AWS Lambda · Amazon QuickSight · Power BI · Google Sheets',
  },
  {
    title: 'BI Specialist Intern',
    company: 'ITU (International Telecommunication Union — UN)',
    location: 'Geneva, Switzerland',
    period: 'Mar 2023 – Jul 2023',
    bullets: [
      'Built interactive Power BI dashboards in Geneva monitoring institutional progress across 30+ UN Sustainable Development Goal (SDG) indicators and the Union Strategic Plan 2019–2023.',
      'Analyzed and synthesized diverse datasets utilizing advanced Excel, SQL, and data visualization tools, bridging data between non-technical departments and executive steering committees.',
      'Audited and reconciled progress reporting across 30+ indicators against institutional baselines, ensuring verified and consistent figures for senior leadership review.',
    ],
    stack: 'Power BI · SQL · Advanced Excel · UN SDG Reporting',
  },
  {
    title: 'Manager — Commercial Leasing & Portfolio Analytics',
    company: 'Brookfield Properties',
    location: 'India',
    period: 'Oct 2019 – Oct 2021',
    bullets: [
      'Managed Fortune 500 enterprise client accounts across an ~8M sq ft commercial office portfolio, achieving a 94% lease occupancy rate.',
      'Designed Power BI retention and portfolio dashboards that supported a 92% client retention rate during COVID-19 (up from 86% the prior year).',
      'Led market and audience research, preparing executive briefings that aligned real estate strategies with customer behavior and competitive trends.',
    ],
    stack: 'Power BI · Executive Briefings · Market Research · CRM Analytics',
  },
  {
    title: 'Assistant Manager — Business Analyst',
    company: 'BPTP Ltd',
    location: 'India',
    period: 'Jan 2019 – Oct 2019',
    bullets: [
      'Conducted competitor and audience research to guide business expansion and pricing decisions.',
      'Managed data collection and analysis pipelines for operational performance tracking and client portfolio optimization.',
    ],
  },
  {
    title: 'Associate — Research & Consulting',
    company: 'PropEquity Analytics Ltd',
    location: 'India',
    period: 'Jan 2018 – Jan 2019',
    bullets: [
      'Collected and analyzed sales, rental, and customer datasets using Looker Studio (Google Data Studio), reducing executive decision-making time by 30%.',
      'Built interactive market trend dashboards to inform real estate investment and portfolio allocation decisions.',
    ],
  },
  {
    title: 'Manager — Market Intelligence Analyst',
    company: 'Realty Business Intelligence',
    location: 'India',
    period: '2016 – 2018',
    bullets: [
      'Coordinated business due diligence and compliance audits, mitigating operational risks by 30% while exceeding revenue targets by 22%.',
    ],
  },
];

export const STACK_PILLARS = [
  {
    name: 'BI & Fabric Engineering',
    tools: 'Power BI (PL-300) · Microsoft Fabric (DP-600) · DAX · Power Query',
    detail:
      'Lakehouse & star-schema semantic models, Row-Level Security (RLS), dynamic filtering, Git CI/CD versioning, and executive KPI scorecards.',
  },
  {
    name: 'Data Engineering & SQL',
    tools: 'Python (Pandas) · PostgreSQL · AWS Lambda · QuickSight',
    detail:
      'Automated ETL/ELT pipelines, REST API & webhook ingestion, window-function analytics, and multi-source anomaly detection.',
  },
  {
    name: 'AI & Workflow Automation',
    tools: 'LLMs · RAG Architecture · Model Context Protocol (MCP) · Supabase',
    detail:
      'Prompt engineering, structured extraction & classification, conversational event discovery, and automated reporting triggers.',
  },
  {
    name: 'Governance & Storytelling',
    tools: 'Data Validation · KPI Audits · Tableau · Looker Studio',
    detail:
      'Baseline reconciliation across 30+ UN indicators, stakeholder alignment across non-technical teams, and clear decision narratives.',
  },
];

export const SKILL_GROUPS = [
  {
    name: 'Analytics & BI',
    items: 'Power BI (PL-300 Certified), Microsoft Fabric (DP-600 Certified), DAX, Power Query, Star Schema Data Modeling, Tableau, Looker Studio, Amazon QuickSight, Advanced Excel',
  },
  {
    name: 'Automation & Scripting',
    items: 'Python (Pandas, Matplotlib, Seaborn, Plotly), SQL (PostgreSQL, DBeaver), REST APIs, AWS Lambda, ETL/ELT Pipelines, Process Automation',
  },
  {
    name: 'AI & NLP Integration',
    items: 'Large Language Model (LLM) Integration, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), Prompt Engineering, Text Classification & Extraction, Supabase',
  },
  {
    name: 'Reporting & Data Governance',
    items: 'Row-Level Security (RLS), Data Validation & Auditing, Anomaly Detection, KPI Monitoring, Data Confidentiality, Git Version Control & CI/CD Workflows',
  },
  {
    name: 'Collaboration & Delivery',
    items: 'Ad-hoc Analytical Support, Data Storytelling, Cross-Functional Coordination, Executive Steering Briefings, End-to-End Technical Documentation',
  },
  {
    name: 'Domain Experience',
    items: 'UN & International Organizations (ITU), Enterprise ERP Systems, Sustainability & Food-Tech (Kitro SA), Commercial Real Estate Portfolio Analytics',
  },
];

export const EDUCATION = [
  {
    degree: 'DP-600: Microsoft Certified Fabric Analytics Engineer Associate',
    institution: 'Microsoft Certification',
    detail: 'Certified in designing, implementing, and governing enterprise Microsoft Fabric lakehouses, semantic models, and analytics workflows.',
  },
  {
    degree: 'PL-300: Microsoft Power BI Data Analyst Associate',
    institution: 'Microsoft Certification',
    detail: 'Certified in preparing, modeling, visualizing, analyzing, and governing enterprise Power BI data assets.',
  },
  {
    degree: 'Data Analytics Certification',
    institution: 'CareerFoundry, Germany',
    detail: 'Intensive project-based training in SQL, Python, Advanced Excel, Tableau, and Power BI.',
  },
  {
    degree: 'Masters in Advanced Construction Management',
    institution: 'NICMAR, India',
    detail: '2014–2016 · Quantitative project planning, commercial management, and infrastructure economics.',
  },
  {
    degree: 'Bachelors in Engineering (BTech)',
    institution: 'MDU, India',
    detail: '2008–2012 · Engineering foundations, structured systems thinking, and applied mathematics.',
  },
];
