import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-modal/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-best-tabs/dist/index.css";
import "@digistore/scss/lib/global.css";

import * as React from "react";

import Head from "next/head";
import type { AppProps } from "next/app";

import NextNProgress from "nextjs-progressbar";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import { NextAdapter } from "next-query-params";
import { QueryParamProvider } from "use-query-params";
import { PersistGate } from "redux-persist/integration/react";
import { Spinner } from "@digistore/react-components";
import {
  transitions,
  positions,
  Provider as AlertProvider,
  AlertOptions,
} from "react-alert";

import { wrapper } from "../store";

import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";

function App({ Component, ...rest }: AppProps) {
  const { store, props }: any = wrapper.useWrappedStore(rest);

  const { pageProps } = props;

  const alertOptions: AlertOptions = {
    position: positions.TOP_CENTER,
    timeout: 6000,
    offset: "30px",
    transition: transitions.SCALE,
    containerStyle: { zIndex: 10000 },
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextNProgress color="#dc2626" />
      <QueryParamProvider adapter={NextAdapter}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <ApolloProvider client={client}>
            <Provider store={store}>
              <PersistGate persistor={store.__persistor} loading={<Spinner />}>
                <Component {...pageProps} />
              </PersistGate>
            </Provider>
          </ApolloProvider>
        </AlertProvider>
      </QueryParamProvider>
    </React.Fragment>
  );
}

export default App;
