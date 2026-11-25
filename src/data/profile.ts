export const SITE = {
  name: 'Keshav Dewan',
  title: 'Business Intelligence & Data Analyst',
  specialization: 'Power BI · SQL · Python · Microsoft Fabric · AI & Automation',
  location: 'Geneva, Switzerland',
  workPermit: 'Swiss work permit available',
  email: 'keshavdewan06@gmail.com',
  phone: '+41 76 295 68 35',
  phoneHref: 'tel:+41762956835',
  github: 'https://github.com/keshavdewan',
  linkedin: 'https://www.linkedin.com/in/keshavdewan/',
  medium: 'https://medium.com/@kdrokz',
  tableau: 'https://public.tableau.com/app/profile/keshav.dewan3649',
  cvPdf: '/docs/Keshav_Dewan_CV.pdf',
  siteUrl: 'https://keshavdewan.github.io',
};

export interface RoleEntry {
  title: string;
  company: string;
  organizationNote?: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  stack?: string;
}

export const EXPERIENCE: RoleEntry[] = [
  {
    title: 'BI Analyst Intern',
    company: 'Mediasoft Group',
    location: 'Nyon, Switzerland',
    period: 'April 2026 – September 2026',
    summary:
      'Worked on Business Intelligence projects involving ERP data extraction, transformation, validation, semantic modelling and Power BI reporting.',
    bullets: [
      'Extracted, transformed and validated complex relational ERP datasets using SQL and DBeaver to establish strict data integrity and governance.',
      'Developed and maintained Power BI semantic models integrating financial, HR and business datasets using Power Query and DAX.',
      'Implemented Row-Level Security (RLS) and dynamic filtering rules to ensure secure access to business information across roles.',
      'Investigated discrepancies between source ERP systems, datasets and reports to improve data quality and reporting accuracy.',
      'Supported Microsoft Fabric development, Git version control, CI/CD workflows and parameterized Power BI Report Builder outputs.',
      'Authored end-to-end technical documentation for semantic models and reporting workflows alongside business and technical stakeholders.',
    ],
    stack: 'SQL · DBeaver · Power BI · DAX · Power Query · Microsoft Fabric · Git · CI/CD · Report Builder',
  },
  {
    title: 'Data Analyst Intern',
    company: 'KITRO SA',
    location: 'Zurich, Switzerland',
    period: 'April 2024 – October 2024',
    summary:
      'Worked with a sustainability-focused technology company developing Python ETL automation, data validation and reporting solutions.',
    bullets: [
      'Developed Python-based end-to-end ETL workflows for large multi-source operational and food-waste sensor datasets.',
      'Automated repetitive data processing workflows using Python and AWS Lambda, improving workflow efficiency by 40%.',
      'Built automated monthly AWS cost-tracking pipelines using Python, AWS Lambda and the Google Sheets API.',
      'Performed data cleansing, validation and reconciliation across multi-source datasets using SQL and Python to detect anomalies and discrepancies.',
      'Built interactive reporting solutions using Power BI and Amazon QuickSight to summarize usage patterns and performance.',
      'Partnered with cross-functional technical and business teams to resolve pipeline bottlenecks and strengthen dataset reliability.',
    ],
    stack: 'Python · Pandas · SQL · AWS Lambda · Google Sheets API · Power BI · Amazon QuickSight',
  },
  {
    title: 'BI Specialist Intern',
    company: 'International Telecommunication Union (ITU)',
    organizationNote: 'United Nations',
    location: 'Geneva, Switzerland',
    period: 'March 2023 – July 2023',
    summary:
      'Contributed to institutional performance reporting and monitoring of the ITU Strategic Plan (2019–2023) and United Nations Sustainable Development Goals.',
    bullets: [
      'Designed interactive Power BI dashboards tracking more than 30 UN Sustainable Development Goal (SDG) and institutional indicators.',
      'Consolidated multi-departmental datasets using SQL, Power BI and Advanced Excel into executive analytical reports.',
      'Audited and reconciled progress reporting across 30+ indicators against institutional baselines to ensure consistent figures for leadership.',
      'Conducted secondary research and collaborated across non-technical departments to standardize global reporting definitions.',
      'Presented verified analytical insights and reporting outputs to executive steering committees and senior stakeholders.',
    ],
    stack: 'Power BI · SQL · Excel · Data Analysis · Data Visualization',
  },
  {
    title: 'Manager – Commercial Leasing',
    company: 'Brookfield Properties',
    location: 'India',
    period: 'October 2019 – October 2021',
    summary:
      'Worked in commercial real estate, combining market research, portfolio information, commercial analysis and executive reporting.',
    bullets: [
      'Worked with multi-source financial, commercial and portfolio information across an 8M+ sq. ft. commercial real estate portfolio.',
      'Coordinated data reconciliation, requirements gathering and executive reporting with finance and legal teams.',
      'Contributed to portfolio performance monitoring supporting a 97% occupancy rate.',
      'Conducted market and competitor research and synthesized commercial findings into executive presentations.',
    ],
    stack: 'Portfolio Analytics · Market Research · Commercial Reporting · Stakeholder Coordination',
  },
  {
    title: 'Assistant Manager – Business Analyst',
    company: 'BPTP Ltd.',
    location: 'India',
    period: 'January 2019 – October 2019',
    summary:
      'Supported business expansion and portfolio performance through competitor research, data collection and stakeholder reporting.',
    bullets: [
      'Conducted competitor, market and customer research to support business expansion decisions.',
      'Managed data collection and analysis processes for business performance tracking.',
      'Analysed market and portfolio information and presented findings and recommendations to clients and internal stakeholders.',
    ],
    stack: 'Business Analysis · Market Research · Performance Tracking · Client Presentations',
  },
  {
    title: 'Associate – Research & Consulting',
    company: 'PropEquity Analytics Ltd',
    location: 'India',
    period: 'January 2018 – January 2019',
    summary:
      'Analyzed residential and commercial real estate sales and rental datasets to support investment and portfolio decisions.',
    bullets: [
      'Collected and analyzed sales, rental and customer datasets using Looker Studio (Google Data Studio).',
      'Built interactive market trend dashboards to inform real estate investment and portfolio allocation decisions.',
    ],
    stack: 'Looker Studio · Market Research · Real Estate Analytics',
  },
  {
    title: 'Manager – Market Intelligence Analyst',
    company: 'Realty Business Intelligence',
    location: 'India',
    period: '2016 – 2018',
    summary:
      'Conducted due diligence, compliance reviews and commercial market intelligence.',
    bullets: [
      'Coordinated business due diligence, compliance reviews and commercial market analysis.',
      'Delivered client intelligence reports supporting strategic commercial decisions.',
    ],
    stack: 'Market Intelligence · Due Diligence · Commercial Analysis',
  },
];

export interface StackColumn {
  name: string;
  tools: string;
  detail: string;
}

export const STACK_COLUMNS: StackColumn[] = [
  {
    name: 'BI & Fabric Engineering',
    tools: 'Power BI (PL-300) · Microsoft Fabric (DP-600) · DAX · Power Query',
    detail:
      'Lakehouse and star-schema semantic models, Row-Level Security (RLS), dynamic filtering, Git CI/CD versioning, and executive KPI scorecards.',
  },
  {
    name: 'Data Engineering & SQL',
    tools: 'Python (Pandas) · PostgreSQL · AWS Lambda · QuickSight',
    detail:
      'Automated ETL/ELT pipelines, REST API and webhook ingestion, window-function analytics, and multi-source anomaly detection.',
  },
  {
    name: 'AI & Workflow Automation',
    tools: 'LLMs · RAG Architecture · Model Context Protocol (MCP) · Supabase · Render',
    detail:
      'AI-assisted SQL and coding workflows (Claude, Gemini, Antigravity), prompt engineering, structured extraction, conversational event discovery, and API/webhook automation.',
  },
  {
    name: 'Governance & Storytelling',
    tools: 'Data Validation · KPI Audits · Tableau · Looker Studio',
    detail:
      'Baseline reconciliation across 30+ UN indicators, stakeholder alignment across non-technical teams, and clear decision narratives.',
  },
];

export const BRAND_PILLARS = [
  {
    title: 'Business Intelligence',
    description: 'Building Power BI dashboards, semantic models, reporting solutions and governed data pipelines.',
  },
  {
    title: 'AI Integration',
    description: 'Working with LLMs, RAG, MCP, REST APIs and AI-assisted development tools in practical workflows.',
  },
  {
    title: 'Business Understanding',
    description: 'Combining technical analytics with engineering, research, consulting and commercial real estate experience.',
  },
];

export const EDUCATION = [
  {
    degree: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    institution: 'Microsoft Certification',
    detail: 'Certified in preparing, modelling, visualizing, analyzing and governing enterprise Power BI data assets.',
  },
  {
    degree: 'Data Analyst Certification',
    institution: 'CareerFoundry, Germany',
    detail: 'Intensive project-based training in SQL, Python, Advanced Excel, Tableau and Power BI.',
  },
  {
    degree: "Master's in Advanced Construction Management",
    institution: 'NICMAR, India',
    detail: '2014–2016 · Quantitative project planning, commercial management and infrastructure economics.',
  },
  {
    degree: "Bachelor's in Engineering",
    institution: 'MDU, India',
    detail: '2008–2012 · Engineering foundations, structured systems thinking and applied mathematics.',
  },
];

export const TARGET_ROLES = [
  'Business Intelligence Analyst',
  'Data Analyst',
  'Power BI Developer',
  'BI Specialist',
  'Data Analytics Consultant',
  'Data Engineering Analyst',
  'AI-Enabled Data Analyst',
  'Reporting & Automation Analyst',
];

export const SKILL_GROUPS = [
  {
    name: 'BI & Visualization',
    items: 'Power BI (PL-300), Microsoft Fabric, DAX, Power Query, Report Builder, Tableau, Amazon QuickSight, Looker Studio',
  },
  {
    name: 'Programming & Databases',
    items: 'Python, Pandas, SQL, PostgreSQL, DBeaver, Supabase',
  },
  {
    name: 'Data Engineering & Governance',
    items: 'ETL/ELT Pipelines, Star Schema Modelling, AWS Lambda, Row-Level Security (RLS), Data Validation & Audits',
  },
  {
    name: 'AI & Intelligent Automation',
    items: 'LLMs, RAG Architecture, Model Context Protocol (MCP), Prompt Engineering, REST APIs & Webhooks, AI-Assisted Development (Claude, ChatGPT, Gemini)',
  },
  {
    name: 'Development & Collaboration',
    items: 'Render, Git, CI/CD Workflows, VS Code, Antigravity, Technical Documentation, Stakeholder Alignment',
  },
];
