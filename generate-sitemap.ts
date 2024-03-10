// ต้องการติดตั้ง package นี้ก่อน: npm install sitemap
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

(async () => {
  // กำหนด URLs สำหรับ sitemap ของคุณ
  const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.9 },
    // รายการ URL เพิ่มเติม...
  ];

  // สร้าง sitemap stream
  const sitemapStream = new SitemapStream({ hostname: 'https://www.pgbet-168.com/' });

  // สร้าง promise ที่จะ resolve เมื่อ sitemap stream สิ้นสุด
  const sitemapPromise = streamToPromise(sitemapStream).then((sitemap) =>
    sitemap.toString()
  );

  // เขียนไฟล์ sitemap.xml ในโฟลเดอร์ public
  sitemapStream.pipe(createWriteStream(path.resolve(__dirname, '../public/sitemap.xml')));

  // เพิ่ม URL ลงใน sitemap stream
  urls.forEach((url) => sitemapStream.write(url));

  // สัญญาณจบของ stream
  sitemapStream.end();

  // รอจนกว่า sitemap จะถูกสร้างเสร็จ
  await sitemapPromise;

  console.log('Sitemap generated successfully.');
})();
