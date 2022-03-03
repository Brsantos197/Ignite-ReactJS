import { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { SessionProvider as NextAuhtProvider } from "next-auth/react";

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuhtProvider session={pageProps.session} >
      <Header />
      <Component {...pageProps} />
    </NextAuhtProvider>
  )
}

export default MyApp
