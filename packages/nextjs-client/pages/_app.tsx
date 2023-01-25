import type { AppProps } from "next/app";

import "@digistore/scss/lib/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
