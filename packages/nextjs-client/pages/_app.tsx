import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-modal/styles.css";
import "react-best-tabs/dist/index.css";
import "@digistore/scss/lib/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextNProgress color="#dc2626" />
      <Component {...pageProps} />
    </>
  );
}
