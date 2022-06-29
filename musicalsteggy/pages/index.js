import React, { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import styles from "../styles/Home.module.css"

import Moon from "../components/moon/Moon"
import Steggy from "../components/steggy/Steggy"
import Hill from "../components/hill/Hill"
import Stars from "../components/stars/Stars"

export default function Home() {
  const [lyrics, setLyrics] = useState("")

  const handleLyricChange = (e) => {
    setLyrics(e.target.value)
  }

  const handleLullaby = async () => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify({
          job: "song",
          text: lyrics,
        }),
      }
      const res = await fetch("/api/music", config)
      const data = await res.json()
    } catch (err) {
      console.warn(err)
    }
  }

  const className = lyrics
    ? `transition ease-in-out duration-300 w-full text-5xl p-3 text-yellow-200 
        rounded-full hover:bg-yellow-100 hover:bg-opacity-70 
        hover:text-indigo-700 hover:shadow-[0_0_70em_1em] hover:shadow-yellow-200/30`
    : `transition ease-in-out duration-300 w-full text-5xl p-3 text-yellow-200 rounded-full`

  return (
    <>
      <Head>
        <title>Musical Steggy</title>
        <meta name="music steganography" content="web app" />
        <link rel="icon" href="/images/Music.svg" />
      </Head>

      <div className='fixed select-none' style={{ width: '100%' }}>
          <img src='/images/stars/Stars1-Blue.svg'></img>
      </div>
      <div className='fixed select-none' style={{ width: '100%' }}>
          <img src='/images/stars/Stars1-Yellow.svg'></img>
      </div>

      <Hill src="/images/hills/Hill1-1.svg" bottom='0' right='0' width='100%' />
      <Hill src="/images/hills/Hill1-2.svg" bottom='0' left='0' width='100%' />
      <Hill src="/images/hills/Hill1-3.svg" bottom='0' right='0' width='100%' />

      <div className={styles.container}>
        <main className={styles.main}>

          <div className={styles.title}>Musical Steggy</div>

          <div className={styles.description}>
            <div>Twinkle twinkle little star</div>
            <div>How I wonder what you are</div>
            <div>. . .</div>
          </div>

          <Moon top="3em" left="10em" height="20vh" />

          <div className="w-2/5">
            <textarea
              id="message"
              rows="2"
              maxLength="96"
              spellCheck="false"
              value={lyrics}
              onChange={handleLyricChange}
              className="block p-5 w-full text-2xl text-white bg-indigo-900 opacity-70 focus:opacity-95 drop-shadow-xl rounded-lg overflow-hidden"
              placeholder="Write your lyrics . . ."
            ></textarea>
          </div>

          <div className={styles.button}>
            <Link href="/sleep">
              <button
                onClick={handleLullaby}
                disabled={!lyrics}
                className={className}
              >
                Sing Steggy a Lullaby
              </button>
            </Link>
          </div>

          <Steggy
            src="/images/steggy/Steggy.svg"
            width="50vh"
            right="5em"
            bottom="1em"
          />

          <Stars pattern={1} />
        </main>
      </div>
    </>
  )
}
