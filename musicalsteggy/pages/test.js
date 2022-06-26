import React, { useState } from "react"
import Link from "next/link"
import styles from "../styles/Sleep.module.css"
import Script from "next/script"

import Moon from "../components/moon/Moon"
import Steggy from "../components/steggy/Steggy"

export default function Test() {
  return (
    <div>
      <Script src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0" />
      <midi-player
        src="/midi.mid"
        visualizer="#myVisualizer"
      ></midi-player>
    </div>
  )
}
