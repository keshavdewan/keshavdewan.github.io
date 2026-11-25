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
    title: 'Business Intelligence Analyst Intern',
    company: 'Mediasoft Group',
    location: 'Nyon, Switzerland',
    period: 'April 2026 – September 2026',
    summary:
      'Worked on Business Intelligence projects involving ERP data extraction, transformation, validation, semantic modelling and Power BI reporting.',
    bullets: [
      'Extracted, transformed and validated complex relational ERP datasets using SQL and DBeaver.',
      'Developed and maintained Power BI semantic models integrating financial, HR and business datasets.',
      'Used Power Query and DAX to prepare data, develop calculations and support reporting requirements.',
      'Implemented Row-Level Security (RLS) and dynamic filtering to ensure secure access to business information.',
      'Investigated discrepancies between source systems, datasets and reports to improve data quality and reporting accuracy.',
      'Supported Microsoft Fabric development, Git version control and CI/CD workflows.',
      'Developed Power BI Report Builder reports and parameterized reporting outputs.',
      'Collaborated with business and technical stakeholders to understand requirements and validate analytical outputs.',
    ],
    stack: 'SQL, DBeaver, Power BI, DAX, Power Query, Microsoft Fabric, Git, CI/CD, Report Builder',
  },
  {
    title: 'Data Analyst Intern',
    company: 'KITRO SA',
    location: 'Zurich, Switzerland',
    period: 'April 2024 – October 2024',
    summary:
      'Worked with a sustainability-focused technology company developing data processing, automation and reporting solutions.',
    bullets: [
      'Developed Python-based ETL workflows for large multi-source datasets.',
      'Automated data processing workflows, improving efficiency by 40%.',
      'Extracted and transformed datasets using SQL and Python.',
      'Performed data cleansing, validation and reconciliation to improve reporting reliability.',
      'Built reporting solutions using Power BI and Amazon QuickSight.',
      'Developed automated AWS cost-tracking workflows using Python and AWS Lambda.',
      'Worked with technical and business teams to investigate data discrepancies.',
    ],
    stack: 'Python, Pandas, SQL, AWS Lambda, Google Sheets API, Power BI, Amazon QuickSight',
  },
  {
    title: 'BI Specialist Intern',
    company: 'International Telecommunication Union (ITU)',
    organizationNote: 'United Nations',
    location: 'Geneva, Switzerland',
    period: 'March 2023 – July 2023',
    summary:
      'Contributed to institutional performance reporting and monitoring of the ITU Strategic Plan and United Nations Sustainable Development Goals.',
    bullets: [
      'Designed Power BI dashboards tracking more than 30 UN Sustainable Development Goal indicators.',
      'Consolidated multi-departmental information into interactive analytical reports.',
      'Conducted secondary research and collaborated with departments to standardize reporting.',
      'Supported data validation and reconciliation.',
      'Presented analytical insights and reporting outputs to senior stakeholders.',
    ],
    stack: 'Power BI, SQL, Excel, Data Analysis, Data Visualization',
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
      'Conducted market and competitor research to understand market conditions.',
      'Synthesized commercial and portfolio information into executive presentations.',
      'Collaborated with legal, commercial and financial stakeholders.',
    ],
    stack: 'Portfolio Analytics, Market Research, Commercial Reporting, Stakeholder Coordination',
  },
  {
    title: 'Assistant Manager – Business Analyst',
    company: 'BPTP Limited',
    location: 'India',
    period: 'January 2019 – October 2019',
    summary:
      'Supported business expansion and portfolio performance through competitor research, data collection and stakeholder reporting.',
    bullets: [
      'Conducted competitor, market and customer research to support business expansion decisions.',
      'Managed data collection and analysis processes for business performance tracking.',
      'Analysed market and portfolio information.',
      'Presented findings and recommendations to clients and internal stakeholders.',
    ],
    stack: 'Business Analysis, Market Research, Performance Tracking, Client Presentations',
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
    stack: 'Looker Studio, Market Research, Real Estate Analytics',
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
    stack: 'Market Intelligence, Due Diligence, Commercial Analysis',
  },
];

export interface ExpertiseCategory {
  title: string;
  items: string[];
  accent?: boolean;
}

export const AREAS_OF_EXPERTISE: ExpertiseCategory[] = [
  {
    title: 'Business Intelligence & Reporting',
    items: ['Power BI', 'DAX', 'Power Query', 'Paginated Reports', 'KPI Development', 'Executive Dashboards'],
  },
  {
    title: 'Data Analytics & Visualization',
    items: ['SQL', 'Python', 'Tableau', 'Amazon QuickSight', 'Data Exploration', 'Statistical and Descriptive Analysis'],
  },
  {
    title: 'Data Engineering & Modelling',
    items: ['ETL/ELT Pipelines', 'PostgreSQL', 'Python & Pandas', 'Microsoft Fabric', 'Star Schema', 'Relational Data Modelling'],
  },
  {
    title: 'Data Governance & Quality',
    items: ['Data Validation', 'Data Reconciliation', 'Data Quality Assurance', 'Row-Level Security', 'Data Documentation', 'Business Glossaries'],
  },
  {
    title: 'AI & Intelligent Automation',
    items: ['Generative AI', 'LLM Integration', 'ChatGPT, Claude and Gemini', 'Prompt Engineering', 'RAG', 'Model Context Protocol', 'REST APIs & Webhooks', 'AI-Assisted Development'],
    accent: true,
  },
];

export interface WorkflowItem {
  title: string;
  description: string;
  proofLabel: string;
  proofUrl: string;
}

export const AI_WORKFLOW: WorkflowItem[] = [
  {
    title: 'AI-Assisted Development',
    description:
      'Using AI coding assistants (Claude, ChatGPT, Gemini) to accelerate SQL/DAX prototyping, debugging, refactoring and technical documentation workflows.',
    proofLabel: 'Applied in Enterprise BI & Semantic Model Optimization',
    proofUrl: '/work/mediasoft-fabric-bi/',
  },
  {
    title: 'LLM Integration',
    description:
      'Connecting language models with Python applications, external REST APIs and structured databases to turn unstructured queries into grounded responses.',
    proofLabel: 'Applied in Hey! Geneva Event Discovery Chatbot',
    proofUrl: '/work/hey-geneva-chatbot/',
  },
  {
    title: 'AI & Data Retrieval',
    description:
      'Using Retrieval-Augmented Generation (RAG) and Model Context Protocol (MCP) to query Supabase tables and BI metadata before generating outputs.',
    proofLabel: 'Applied in Hey! Geneva & Claude/MCP BI workflows',
    proofUrl: '/work/hey-geneva-chatbot/',
  },
  {
    title: 'Workflow Automation',
    description:
      'Combining Python, webhooks, REST APIs and serverless scheduling to automate repetitive data cleaning, ingestion and reporting pipelines.',
    proofLabel: 'Applied in KITRO AWS Costing & Hey! Geneva',
    proofUrl: '/work/kitro-etl-automation/',
  },
];

export interface TechGroup {
  name: string;
  tools: string[];
}

export const TECHNICAL_EXPERTISE: TechGroup[] = [
  {
    name: 'BI & Visualization',
    tools: ['Power BI', 'DAX', 'Power Query', 'Report Builder', 'Tableau', 'Amazon QuickSight'],
  },
  {
    name: 'Programming & Databases',
    tools: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'DBeaver'],
  },
  {
    name: 'Data Engineering',
    tools: ['Microsoft Fabric', 'AWS Lambda', 'ETL/ELT', 'Data Pipelines', 'Data Modelling'],
  },
  {
    name: 'AI & Emerging Technologies',
    tools: ['LLMs', 'RAG', 'MCP', 'Prompt Engineering', 'REST APIs', 'Webhooks', 'AI-Assisted Coding'],
  },
  {
    name: 'Development & Collaboration',
    tools: ['Git', 'CI/CD', 'VS Code', 'Technical Documentation'],
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
  'AI & Data Automation Specialist',
];

export const SKILL_GROUPS = TECHNICAL_EXPERTISE.map((g) => ({
  name: g.name,
  items: g.tools.join(', '),
}));
