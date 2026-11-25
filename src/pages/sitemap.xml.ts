import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/profile';

export const GET: APIRoute = async () => {
  const work = await getCollection('work');
  const langs = ['', '/fr', '/de'];
  const staticPaths = ['/', '/work/', '/cv/'];

  const urls: string[] = [];
  for (const prefix of langs) {
    for (const p of staticPaths) {
      urls.push(`${SITE.siteUrl}${prefix}${p}`);
    }
    for (const entry of work) {
      urls.push(`${SITE.siteUrl}${prefix}/work/${entry.slug}/`);
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
