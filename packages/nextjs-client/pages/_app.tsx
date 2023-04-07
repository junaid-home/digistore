import * as React from "react";

import Head from "next/head";
import type { AppProps } from "next/app";

import { NextAdapter } from "next-query-params";
import { QueryParamProvider } from "use-query-params";
import NextNProgress from "nextjs-progressbar";

import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-modal/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-best-tabs/dist/index.css";
import "@digistore/scss/lib/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextNProgress color="#dc2626" />
      <QueryParamProvider adapter={NextAdapter}>
        <Component {...pageProps} />
      </QueryParamProvider>
    </React.Fragment>
  );
}
