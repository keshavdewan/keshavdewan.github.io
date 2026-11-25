export interface LogoMeta {
  src: string;
  alt: string;
}

export const TECH_STACK_LOGOS = [
  { name: 'Power BI', src: '/images/tech/powerbi.svg' },
  { name: 'Power BI Report Builder', src: '/images/tech/reportbuilder.svg' },
  { name: 'Microsoft Fabric', src: '/images/tech/fabric.svg' },
  { name: 'SQL / PostgreSQL', src: '/images/tech/postgresql.svg' },
  { name: 'DBeaver', src: '/images/tech/dbeaver.svg' },
  { name: 'Python', src: '/images/tech/python.svg' },
  { name: 'Tableau', src: '/images/tech/tableau.svg' },
  { name: 'Excel', src: '/images/tech/excel.svg' },
  { name: 'Supabase', src: '/images/tech/supabase.svg' },
  { name: 'Claude', src: '/images/tech/claude.svg' },
  { name: 'Gemini', src: '/images/tech/gemini.svg' },
  { name: 'Antigravity', src: '/images/tech/antigravity.svg' },
  { name: 'LLMs & MCP', src: '/images/tech/ai.svg' },
  { name: 'Git & CI/CD', src: '/images/tech/git.svg' },
];

export function getTechLogo(label: string): string | null {
  const s = label.toLowerCase();
  if (s.includes('report builder')) return '/images/tech/reportbuilder.svg';
  if (s.includes('power bi') || s.includes('dax') || s.includes('power query')) {
    return '/images/tech/powerbi.svg';
  }
  if (s.includes('fabric')) return '/images/tech/fabric.svg';
  if (s.includes('dbeaver')) return '/images/tech/dbeaver.svg';
  if (s.includes('postgres') || s.includes('sql')) return '/images/tech/postgresql.svg';
  if (s.includes('python') || s.includes('pandas') || s.includes('matplotlib') || s.includes('seaborn') || s.includes('plotly')) {
    return '/images/tech/python.svg';
  }
  if (s.includes('tableau')) return '/images/tech/tableau.svg';
  if (s.includes('excel') || s.includes('google sheet')) return '/images/tech/excel.svg';
  if (s.includes('supabase')) return '/images/tech/supabase.svg';
  if (s.includes('claude')) return '/images/tech/claude.svg';
  if (s.includes('gemini')) return '/images/tech/gemini.svg';
  if (s.includes('antigravity')) return '/images/tech/antigravity.svg';
  if (s.includes('git') || s.includes('ci/cd')) return '/images/tech/git.svg';
  if (
    s.includes('llm') ||
    s.includes('rag') ||
    s.includes('mcp') ||
    s.includes('ai') ||
    s.includes('chatgpt') ||
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
