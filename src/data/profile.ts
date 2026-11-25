export const SITE = {
  name: 'Keshav Dewan',
  role: 'Data Analyst | AI & Automation | Power BI & Fabric',
  focus: 'Geneva, Switzerland · Swiss Work Permit Available · PL-300 Certified',
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
  microStrip:
    'power bi pl-300 / microsoft fabric / row-level security (rls) / dax & power query / star schema modeling / python (pandas) / postgresql / rest apis / aws lambda & quicksight / llm & rag pipelines / model context protocol (mcp) / un sdg monitoring / data governance & audits / ',
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
    name: 'BI & Semantic Modeling',
    tools: 'Power BI (PL-300) · Microsoft Fabric · DAX · Power Query',
    detail:
      'Star-schema semantic models, Row-Level Security (RLS), dynamic filtering, Git CI/CD versioning, and executive KPI scorecards.',
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
    items: 'Power BI (PL-300 Certified), Microsoft Fabric, DAX, Power Query, Star Schema Data Modeling, Tableau, Looker Studio, Amazon QuickSight, Advanced Excel',
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

export interface ArticleEntry {
  title: string;
  venue: string;
  date: string;
  summary: string;
  url: string;
  category: 'BI & Dashboards' | 'SQL Case Study';
}

export const ARTICLES: ArticleEntry[] = [
  {
    title: 'Energy Consumption Dashboard — Monitoring Multi-Utility Building Usage',
    venue: 'Medium (@kdrokz)',
    date: 'Feb 2025',
    summary:
      'Designing a four-page Power BI monitoring suite across water (88.49% of total units), electricity, and gas consumption for US cities (2016–2019).',
    url: 'https://medium.com/@kdrokz/energy-consumption-dashboard-c3ebb24d22a8',
    category: 'BI & Dashboards',
  },
  {
    title: 'Customer Satisfaction Report — OmniRetail Loyalty & Support Drivers',
    venue: 'Medium (@kdrokz)',
    date: 'Jul 2025',
    summary:
      'Breaking down customer satisfaction scores, support interactions, and regional loyalty clusters using Power BI and ZoomCharts.',
    url: 'https://medium.com/@kdrokz/customer-satisfaction-report-0842b2d2607a',
    category: 'BI & Dashboards',
  },
  {
    title: "Case Study 1 — Danny's Diner (8 Weeks SQL Challenge)",
    venue: 'Medium (@kdrokz)',
    date: '2024',
    summary:
      'Customer spend, visit frequency, loyalty points, and first-purchase patterns solved with PostgreSQL CTEs and window functions.',
    url: 'https://medium.com/@kdrokz/case-study-1-danys-diner-0f502ca6e2a7',
    category: 'SQL Case Study',
  },
  {
    title: 'Case Study 2 — Pizza Runner (Data Cleaning & Delivery Metrics)',
    venue: 'DevGenius',
    date: '2024',
    summary:
      'Cleaning dirty order logs, standardizing runner durations/distances, and analyzing pizza customization trends in PostgreSQL.',
    url: 'https://blog.devgenius.io/case-study-2-pizza-runner-0af3f3939539',
    category: 'SQL Case Study',
  },
  {
    title: 'Case Study 3 — Foodie-Fi (Subscription Churn & Cohort Growth)',
    venue: 'Medium (@kdrokz)',
    date: '2024',
    summary:
      'Analyzing SaaS-style streaming subscription upgrades, trial-to-paid conversion timing, and churn cohorts with SQL.',
    url: 'https://medium.com/@kdrokz/case-study-3-foodie-fi-a6a12109e895',
    category: 'SQL Case Study',
  },
  {
    title: 'Case Study 4 — Data Bank (Customer Node Allocation & Balances)',
    venue: 'Medium (@kdrokz)',
    date: '2024',
    summary:
      'Tracking rolling monthly customer balances, deposit-to-withdrawal ratios, and data storage allocation across regional nodes.',
    url: 'https://medium.com/@kdrokz/case-study-4-data-bank-%EF%B8%8F-04dcb238666e',
    category: 'SQL Case Study',
  },
  {
    title: 'Case Study 5 — Data Mart (Before/After Packaging Impact)',
    venue: 'DevGenius',
    date: '2024',
    summary:
      'Evaluating the 12-week pre/post sustainability packaging shift across regions, platforms, and customer demographics.',
    url: 'https://blog.devgenius.io/case-study-5-data-mart-224760e2e138',
    category: 'SQL Case Study',
  },
  {
    title: 'Case Study 6 — Clique Bait (Digital Funnel & Abandonment Analysis)',
    venue: 'TowardsDev',
    date: '2024',
    summary:
      'Modeling web session clickstreams to measure view-to-cart, cart-to-purchase, and campaign impression conversion funnels.',
    url: 'https://towardsdev.com/case-study-6-clique-bait-22a9f30a8b59',
    category: 'SQL Case Study',
  },
  {
    title: 'Case Study 7 — Balanced Tree Clothing Co. (Retail Basket & Discounts)',
    venue: 'Medium (@kdrokz)',
    date: '2024',
    summary:
      'Revenue, discount leakage, and market-basket product pair combinations across categories and segments.',
    url: 'https://medium.com/@kdrokz/case-study-7-balanced-tree-clothing-co-3b01ce26c43e',
    category: 'SQL Case Study',
  },
  {
    title: 'Case Study 8 — Fresh Segments (JSON Interest Metrics & Ranking)',
    venue: 'Medium (@kdrokz)',
    date: '2024',
    summary:
      'Ranking customer interest composition scores and rolling 3-month index averages across time-series marketing segments.',
    url: 'https://medium.com/@kdrokz/case-study-8-fresh-segments-67ea141e6fe4',
    category: 'SQL Case Study',
  },
];

export const EDUCATION = [
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

