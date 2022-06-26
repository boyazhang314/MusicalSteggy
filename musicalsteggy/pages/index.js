import React, { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import Image from "next/image"

import Moon from "../components/moon/Moon"
import Steggy from "../components/steggy/Steggy"

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
      console.log(data)
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

      <div>
        <main className={styles.main}>
          <div className={styles.bgWrap}>
            <Image
              alt="background"
              src="/images/background1.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
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
            src="/images/Steggy.svg"
            width="50vh"
            right="5em"
            bottom="1em"
          />
        </main>
      </div>
    </>
  )
}
