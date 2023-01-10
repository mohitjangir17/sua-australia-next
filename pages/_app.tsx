import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import { pageview } from "../gtag";
export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      pageview(url, document.title);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
