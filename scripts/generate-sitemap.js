// scripts/generate-sitemap.js
import fs from 'fs';

// Using dynamic import for globby
const globby = (await import('globby')).default;

async function generateSitemap() {
  const pages = await globby([
    'pages/**/*.jsx',
    'pages/**/*.js',
    '!pages/_*.js', // Exclude Next.js specific files
    '!pages/api', // Exclude API routes
    // Add more patterns as needed
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const path = page
        .replace('pages', '')
        .replace('.js', '')
        .replace('.jsx', '');
      const route = path === '/index' ? '' : path;
      return `<url><loc>${`https://www.pgbet-168.com${route}`}</loc></url>`;
    })
    .join('\n')}
</urlset>
`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
