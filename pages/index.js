import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Widget from './widget'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plug Next Js Example</title>
        <link rel="shortcut icon" href="../../images/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Plug Next Js Example
        </h1>
        <Widget/>
      </main>
    </div>
  )
}
