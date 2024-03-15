const fs = require('fs');
const globby = require('globby');

async function generateSitemap() {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/api',
      
    // ระบุเพิ่มเติมหากมี
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          const path = page
            .replace('pages', '')
            .replace('.js', '')
            .replace('/index', '');
          const route = path === '/index' ? '' : path;
          return `
            <url>
              <loc>${`https://pgbet-168.com${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
