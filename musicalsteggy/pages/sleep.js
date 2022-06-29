import React, { useEffect, useState } from "react"
import styles from "../styles/Sleep.module.css"
import Script from "next/script"

import Moon from "../components/moon/Moon"
import Steggy from "../components/steggy/Steggy"
import Hill from "../components/hill/Hill"
import Stars from "../components/stars/Stars"

export default function Sleep() {
  const [musicXML, setMusicXML] = useState(null)
  const [midiFile, setMidiFile] = useState(null)

  const getMusicXML = async () => {
    try {
      const config = {
        method: "GET",
      }
      const res = await fetch("/api/music", config)
      const data = await res.json()

      setMusicXML(data.musicXML)
    } catch (err) {
      console.warn(err)
    }
  }

  useEffect(() => {
    getMusicXML()
  }, [])

  useEffect(() => {
    if (musicXML !== null) {
      midi()
    }
  }, [musicXML])

  const downloadXML = async () => {
    const blob = new Blob([musicXML], {
      type: "text/plain",
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = "TwinkleTwinkleLittleStar.musicxml"
    link.href = url
    link.click()
  }

  const midi = async () => {
    try {
      const config = {
        method: "POST",
        body: musicXML
      }
      const res = await fetch("https://musicxml2midi.herokuapp.com/convert", config)
      const data = await res.blob()
      var objectURL = URL.createObjectURL(data)
      setMidiFile(objectURL)
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div className={styles.container}>
      <Script src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0" />
      <main className={styles.main}>
        <div className={styles.title}>Goodnight!</div>

        <Hill src="/images/hills/Hill2-2.svg" bottom='0' right='0' width='100%' />
        <Hill src="/images/hills/Hill2-1.svg" bottom='0' right='0' width='100%' />

        <Moon right="5em" top="2em" />

        <midi-player
          src={midiFile}
        ></midi-player>

        <div className={styles.button}>
          <button
            onClick={downloadXML}
            className="rounded-lg p-6 text-2xl text-blue-100 bg-violet-700 hover:bg-indigo-900 hover:text-blue-400"
          >
            Download
          </button>
        </div>

        <Steggy src="/images/steggy/Sleepy.svg" width="50vh" bottom="5em" left="5em" />

        <Stars pattern={2} />
      </main>
    </div>
  )
}
