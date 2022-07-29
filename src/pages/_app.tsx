import { AppProps } from "../../node_modules/next/app"
import { Header } from "../components/Header/index";
import { SessionProvider } from "next-auth/react"

import '../styles/global.scss';
import { PrismicProvider } from "@prismicio/react";
import { getPrismicClient } from "../services/prismic";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider client={getPrismicClient()}>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </PrismicProvider>
)}

export default MyApp
