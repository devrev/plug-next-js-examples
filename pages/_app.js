import Head from 'next/head'
import '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>Plug Next Js Example</title>
        <link rel="icon" href='/images/favicon.ico'/>
      </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
