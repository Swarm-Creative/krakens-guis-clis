import "../styles/globals.css";
import "@fontsource/roboto-condensed";
import "@fontsource/roboto-condensed/700.css";
import "@fontsource/encode-sans";
import "@fontsource/encode-sans/700.css";
import "@fontsource/bebas-neue";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
