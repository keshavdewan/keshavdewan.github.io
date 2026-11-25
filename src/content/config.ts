import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descriptor: z.string(),
    tagline: z.string(),
    organization: z.string(),
    year: z.string(),
    category: z.enum(['AI & Automation', 'BI & Governance', 'Data Engineering', 'SQL & Analytics']),
    status: z.string(),
    color: z.enum(['purple', 'blue', 'green', 'brown']).default('purple'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    builtWith: z.array(z.string()),
    capabilities: z.array(z.string()),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).default([]),
    image: z.string().optional(),
    imageCaption: z.string().optional(),
  }),
});

export const collections = { work };

