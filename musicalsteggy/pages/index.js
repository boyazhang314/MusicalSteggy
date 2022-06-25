import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Musical Steggy</title>
        <meta name="music steganography" content="web app" />
        <link rel="icon" href="/images/Music.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Musical Steggy</div>

        <div className={styles.description}>
          <div>Twinkle twinkle little star</div>
          <div>How I wonder what you are</div>
          <div>. . .</div>
        </div>

        <div className="w-2/5">
          <textarea id="message" rows="2" maxlength="96" spellcheck="false"
                    class="block p-5 w-full text-2xl text-white bg-indigo-900 opacity-70 focus:opacity-95 drop-shadow-xl rounded-lg overflow-hidden" 
                    placeholder="Write your lyrics . . ."></textarea>
        </div>

        <div className={styles.button}>
          <button className="w-full text-4xl text-yellow-200">Sing Steggy a Lullaby</button>
        </div>

        <div className={styles.steggy}>
          <img className={styles.img} src="/images/Steggy.svg"></img>
        </div>
      </main>
    </div>
  )
}
