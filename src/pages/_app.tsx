// pages/_app.js หรือ pages/_app.tsx

import 'bootstrap/dist/css/bootstrap.min.css';
// นำเข้า CSS อื่นๆ หรือ component ของคุณตรงนี้

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
