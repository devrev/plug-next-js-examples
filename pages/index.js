import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Widget from './widget'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plug-Next-js-example</title>
        <link rel="icon" href="https://app.devrev.ai/static/profile-circle-black.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Plug-Next-js-examples
        </h1>
        <Widget/>
      </main>
    </div>
  )
}
