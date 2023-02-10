import React from 'react'
import styles from '../styles/Home.module.css'
import Widget from './widget'
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Plug Next Js Example
        </h1>
        <Widget/>
      </main>
    </div>
  )
}
