import "../styles/globals.css";
import type { AppProps } from "next/app";
import tw from "twin.macro";

const Container = tw.div``;
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
