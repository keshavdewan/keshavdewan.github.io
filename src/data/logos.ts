export interface LogoMeta {
  src: string;
  alt: string;
}

export const TECH_STACK_LOGOS = [
  { name: 'Power BI', src: '/images/tech/powerbi.svg' },
  { name: 'Microsoft Fabric', src: '/images/tech/fabric.svg' },
  { name: 'SQL / PostgreSQL', src: '/images/tech/postgresql.svg' },
  { name: 'Python', src: '/images/tech/python.svg' },
  { name: 'Tableau', src: '/images/tech/tableau.svg' },
  { name: 'AWS Lambda', src: '/images/tech/aws.svg' },
  { name: 'Excel', src: '/images/tech/excel.svg' },
  { name: 'Supabase', src: '/images/tech/supabase.svg' },
  { name: 'LLMs, RAG & MCP', src: '/images/tech/ai.svg' },
  { name: 'Git & CI/CD', src: '/images/tech/git.svg' },
];

export function getTechLogo(label: string): string | null {
  const s = label.toLowerCase();
  if (s.includes('power bi') || s.includes('dax') || s.includes('power query') || s.includes('report builder')) {
    return '/images/tech/powerbi.svg';
  }
  if (s.includes('fabric')) return '/images/tech/fabric.svg';
  if (s.includes('postgres') || s.includes('sql') || s.includes('dbeaver')) return '/images/tech/postgresql.svg';
  if (s.includes('python') || s.includes('pandas') || s.includes('matplotlib') || s.includes('seaborn') || s.includes('plotly')) {
    return '/images/tech/python.svg';
  }
  if (s.includes('tableau')) return '/images/tech/tableau.svg';
  if (s.includes('aws') || s.includes('quicksight') || s.includes('lambda')) return '/images/tech/aws.svg';
  if (s.includes('excel') || s.includes('google sheet')) return '/images/tech/excel.svg';
  if (s.includes('supabase')) return '/images/tech/supabase.svg';
  if (s.includes('git') || s.includes('ci/cd')) return '/images/tech/git.svg';
  if (
    s.includes('llm') ||
    s.includes('rag') ||
    s.includes('mcp') ||
    s.includes('ai') ||
    s.includes('claude') ||
    s.includes('chatgpt') ||
    s.includes('gemini') ||
    s.includes('prompt') ||
    s.includes('webhook') ||
    s.includes('rest api') ||
    s.includes('generative')
  ) {
    return '/images/tech/ai.svg';
  }
  return null;
}

export function getCompanyLogo(companyOrOrg: string): LogoMeta | null {
  const s = companyOrOrg.toLowerCase();
  if (s.includes('mediasoft')) return { src: '/images/companies/mediasoft.png', alt: 'Mediasoft Group logo' };
  if (s.includes('kitro')) return { src: '/images/companies/kitro.png', alt: 'KITRO SA logo' };
  if (s.includes('itu') || s.includes('telecommunication') || s.includes('united nations')) {
    return { src: '/images/companies/itu.svg', alt: 'International Telecommunication Union (ITU) logo' };
  }
  if (s.includes('brookfield')) return { src: '/images/companies/brookfield.png', alt: 'Brookfield Properties logo' };
  if (s.includes('bptp')) return { src: '/images/companies/bptp.png', alt: 'BPTP Limited logo' };
  if (s.includes('propequity')) return { src: '/images/companies/propequity.png', alt: 'PropEquity Analytics logo' };
  if (s.includes('realty')) return { src: '/images/companies/realtybi.svg', alt: 'Realty Business Intelligence logo' };
  return null;
}
