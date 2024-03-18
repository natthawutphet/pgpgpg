import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Nav from "./componentxx/Nav";
import Footer from "./componentxx/Footer";
import Footerbar from "./componentxx/Footerbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: "PG เว็บตรง เว็บใหญ่ปลอดภัย มั่นคงอันดับ 1 ในไทย",
  description: "PG เว็บตรง คาสิโนออนไลน์ฟรี  เพลิดเพลินไปกับเกมสดและออนไลน์!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


    
        <Head>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "PG เว็บตรง",
              "url": "https://www.pgbet-168.com/",
              "Image": "https://www.pgbet-168.com/img/all/about2.png",
              "sameAs": [
                "https://www.pgbet-168.com/favicon.ico"
              ]
            }
          `}
        </script>

        <meta name="google-site-verification" content="g_4hsj1TVTqA-qt5kENBFgo24afTX6HFTUUoJw-K2v0" />      

<meta name="keywords" content="สล็อตเว็บตรง,เว็บสล็อตเว็บตรง,สล็อตเว็บตรงแตกง่าย,สล็อตเว็บตรงวอเลท,สล็อตเว็บตรงล่าสุด,สล็อต pg,pg สล็อต,เว็บตรงสล็อต,เว็บตรง,สล็อต,สล็อตpg,สล็อตแตกง่าย,เว็บสล็อต,เว็บสล็อตpg,สล็อตpgเว็บตรง,pg,เว็บสล็อตแตกง่าย,สล็อตวอเลท,สล็อตแตกง่ายเว็บตรง,สมัครสล็อตเว็บตรง,สล็อตแตกง่ายวอเลท,สล็อตpgแตกง่าย,สล็อตวอเลทแตกง่าย,สล็อตวอเลทเว็บตรง,สล็อตวอเลท pg,pg สล็อต ล่าสุด,เว็บสล็อตเว็บตรง วอลเล็ต,สล็อตแตกง่ายล่าสุด,สล็อตpgวอเลท,สล็อตpgล่าสุด,pg ทุนน้อย,สล็อตทุนน้อยแตกง่าย "/>
<link rel="canonical" href="https://www.pgbet-168.com" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="รับทำโฆษณาออนไลน์สายเทา" />
<meta property="og:description" content="รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook" />
<meta property="og:url" content="https://www.pgbet-168.com/" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="https://www.pgbet-168.com/favicon.ico" />


<meta property="og:image" content="https://www.pgbet-168.com/favicon.ico" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.pgbet-168.com" />

<meta name="twitter:card" content="https://www.pgbet-168.com/favicon.ico" />
<meta name="twitter:image" content="https://www.pgbet-168.com/favicon.ico" />
<meta name="twitter:title" content="Tiรับทำโฆษณาออนไลน์สายเทา" />
<meta name="twitter:description" content="รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

<meta name="google-site-verification" content="PbQl1IGdzrIFiFnnE39varHoAFip5AIAk4QLxK-Nyto" />
 <meta property="og:image" content="https://www.pgbet-168.com/logo.png"/>

 <link rel="canonical" href='https://www.pgbet-168.com/' />


 
        <script dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-N27Q7BXD');`
        }}></script>
    
    <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Z2HSP77556"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-Z2HSP77556');
              `,
            }}
          />
                 <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        </Head>

        <body className={inter.className}>

   
        <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N27Q7BXD" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>
 
        <Nav/>
    


        {children}
        
        <Footer/>
        <Footerbar/>
      
      
        
     

        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
     
      
    </html>
  );
}
