import React, { useState } from 'react'
import Link from 'next/link';
import styles from '../styles/Upload.module.css'

import Moon from '../components/moon/Moon'
import Steggy from '../components/steggy/Steggy';
import DragDrop from '../components/dragDrop/DragDrop'

const fileTypes = ['musicxml', 'xml']

export default function Upload() {
    const [file, setFile] = useState('')
    const [lyrics, setLyrics] = useState('')

    const upload = async (file) => {
        const reader = new FileReader()
        reader.onload = async (e) => { 
            const text = (e.target.result)
            setFile(text)
            interpret(text)
        }
        reader.readAsText(file[0])
    }

    const interpret = async (lyrics) => {
        try {
            const config = {
              method: 'POST',
              body: JSON.stringify({
                job: 'interpret',
                text: lyrics
              })
            }
            const res = await fetch('/api/music', config)
            const data = await res.json()
            setLyrics(data.interpretation.slice(0, -1))
        } catch (err) {
            console.warn(err)
        }
    }

    const message = lyrics ? (
        <div className={styles.bubble}>
            {lyrics}
        </div>
    ) : ('')

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title}>Steggy's Interpretation</div>

                <Moon top='5em' right='20em' height='20vh' />

                <DragDrop handleFiles={upload} />

                {message}

                <Steggy src="/images/Steggy2.svg" width='50vh' bottom='1em' right='3em' />
            </div>
        </div>
    )
}