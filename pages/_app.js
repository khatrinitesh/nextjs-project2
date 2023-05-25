
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
// import '@/styles/globals.css';
import '@/styles/style.scss';
import RootLayout from '@/components/layout';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
    <RootLayout><Component {...pageProps} /></RootLayout>
    </>
  )
}
