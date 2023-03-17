import type { AppProps } from "next/app";

import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@digistore/scss/lib/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
