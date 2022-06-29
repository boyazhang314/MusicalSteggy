import React, { useState } from "react"
import styles from "../styles/Upload.module.css"

import Moon from "../components/moon/Moon"
import Steggy from "../components/steggy/Steggy"
import DragDrop from "../components/dragDrop/DragDrop"
import Hill from "../components/hill/Hill"
import Stars from "../components/stars/Stars"

const fileTypes = ["musicxml", "xml"]

export default function Upload() {
  const [file, setFile] = useState("")
  const [lyrics, setLyrics] = useState("")

  const upload = async (file) => {
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = e.target.result
      setFile(text)
      interpret(text)
    }
    reader.readAsText(file[0])
  }

  const interpret = async (lyrics) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify({
          job: "interpret",
          text: lyrics,
        }),
      }
      const res = await fetch("/api/music", config)
      const data = await res.json()
      setLyrics(data.interpretation.slice(0, -1))
    } catch (err) {
      console.warn(err)
    }
  }

  const message = lyrics ? <div className={styles.bubble}>{lyrics}</div> : ""

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>Steggy&apos;s Interpretation</div>

        <Hill src="/images/hills/Hill3-1.svg" bottom='0' right='0' width='100%' />
        <Hill src="/images/hills/Hill3-2.svg" bottom='0' left='0' width='100%' />
        <Hill src="/images/hills/Hill3-3.svg" bottom='0' right='0' width='100%' />

        <Moon top='5em' left='20em' height='20vh' />

        <DragDrop handleFiles={upload} />

        {message}

        <Steggy
          src="/images/steggy/Steggy2.svg"
          width="50vh"
          bottom="1em"
          right="3em"
        />

        <Stars pattern={3} />
      </div>
    </div>
  )
}
