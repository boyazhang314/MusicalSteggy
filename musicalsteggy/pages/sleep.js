import React, { useState } from 'react'
import styles from '../styles/Sleep.module.css'

export default function Sleep() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.title}>Goodnight!</div>
                
                <div className={styles.steggy}>
                    <img className={styles.img} src="/images/Sleepy.svg"></img>
                </div>
            </main>
        </div>
    )
}