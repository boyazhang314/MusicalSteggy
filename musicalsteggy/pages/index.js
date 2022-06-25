import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Musical Steggy</title>
        <meta name="music steganography" content="web app" />
        <link rel="icon" href="/images/music-note.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Steggy's Lullaby</div>
        <div className={styles.steggy}>
          <img className={styles.img} src="/images/Steggy.svg"></img>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.flaticon.com/free-icons/music" title="music icons">Music icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  )
}
