
// import '@/styles/globals.css';
import '@/styles/style.scss';
import RootLayout from '@/components/layout';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App({ Component, pageProps }) {
  return <RootLayout><Component {...pageProps} /></RootLayout>
}
