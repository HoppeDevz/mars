import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

import SiteIcon from './assets/mars-icon.png';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        
        {/*<script src="https://cdn.tailwindcss.com"></script>*/}
        <link rel="icon" href="/images/nasa-logo-70x60.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
