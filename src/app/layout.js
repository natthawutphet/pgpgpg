import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Footerbar from "./component/Footerbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PG เว็บตรง มั่นคงอันดับ 1 ในไทย",
  description: "PG เว็บตรง มั่นคงอันดับ 1 ในไทย PG เว็บตรง แหล่งรวมเกมออนไลน์สุดสนุก",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={inter.className}>
        <Head>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "PG เว็บตรง",
              "url": "https://www.thaisocialforme.com/",
              "Image": "https://www.thaisocialforme.com/img/all/about2.png",
              "sameAs": [
                "https://www.thaisocialforme.com/favicon.ico"
              ]
            }
          `}
        </script>

        <meta name="google-site-verification" content="g_4hsj1TVTqA-qt5kENBFgo24afTX6HFTUUoJw-K2v0" />      

<meta name="keywords" content="สล็อตเว็บตรง,เว็บสล็อตเว็บตรง,สล็อตเว็บตรงแตกง่าย,สล็อตเว็บตรงวอเลท,สล็อตเว็บตรงล่าสุด,สล็อต pg,pg สล็อต,เว็บตรงสล็อต,เว็บตรง,สล็อต,สล็อตpg,สล็อตแตกง่าย,เว็บสล็อต,เว็บสล็อตpg,สล็อตpgเว็บตรง,pg,เว็บสล็อตแตกง่าย,สล็อตวอเลท,สล็อตแตกง่ายเว็บตรง,สมัครสล็อตเว็บตรง,สล็อตแตกง่ายวอเลท,สล็อตpgแตกง่าย,สล็อตวอเลทแตกง่าย,สล็อตวอเลทเว็บตรง,สล็อตวอเลท pg,pg สล็อต ล่าสุด,เว็บสล็อตเว็บตรง วอลเล็ต,สล็อตแตกง่ายล่าสุด,สล็อตpgวอเลท,สล็อตpgล่าสุด,pg ทุนน้อย,สล็อตทุนน้อยแตกง่าย "/>
<link rel="canonical" href="https://www.thaisocialforme.com" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="รับทำโฆษณาออนไลน์สายเทา" />
<meta property="og:description" content="รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook" />
<meta property="og:url" content="https://www.thaisocialforme.com/" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="https://www.thaisocialforme.com/favicon.ico" />


<meta property="og:image" content="https://www.thaisocialforme.com/favicon.ico" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.thaisocialforme.com" />

<meta name="twitter:card" content="https://www.thaisocialforme.com/favicon.ico" />
<meta name="twitter:image" content="https://www.thaisocialforme.com/favicon.ico" />
<meta name="twitter:title" content="Tiรับทำโฆษณาออนไลน์สายเทา" />
<meta name="twitter:description" content="รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

<meta name="google-site-verification" content="PbQl1IGdzrIFiFnnE39varHoAFip5AIAk4QLxK-Nyto" />
 <meta property="og:image" content="https://www.service-ads.com/logo.ico"/>

 <link rel="canonical" href='https://www.thaisocialforme.com/' />





        </Head>
        <Nav/>
    


        {children}
        
        <Footer/>
        <Footerbar/>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </body>
    </html>
  );
}
