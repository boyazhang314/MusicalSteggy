import React, { useState } from "react"
import Link from "next/link"
import styles from "../styles/Sleep.module.css"
import Image from "next/image"

import Moon from "../components/moon/Moon"
import Steggy from "../components/steggy/Steggy"

export default function Sleep() {
  const downloadXML = async () => {
    try {
      const config = {
        method: "GET",
      }
      const res = await fetch("/api/music", config)
      const data = await res.json()

      const blob = new Blob([data.musicXML], {
        type: "text/plain",
      })

      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.download = "TwinkleTwinkleLittleStar.musicxml"
      link.href = url
      link.click()
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          alt="background"
          src="/Background2.svg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <main className={styles.main}>
        <div className={styles.title}>Goodnight!</div>

        <Moon right="5em" top="2em" />

        <div className={styles.button}>
          <button
            onClick={downloadXML}
            className="rounded-lg p-3 text-lg text-blue-100 bg-violet-700 hover:bg-indigo-900 hover:text-blue-400"
          >
            Download
          </button>
        </div>

        <Steggy src="/images/Sleepy.svg" width="50vh" bottom="5em" left="5em" />
      </main>
    </div>
  )
}
