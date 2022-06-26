import React from 'react'
import Link from 'next/link';
import styles from './Steggy.module.css'

export default function Steggy({src, top, right, left, bottom, width}) {
    return (
        <Link href='/upload'>
            <div className={styles.steggy} style={{ top: top, right: right, left: left, bottom: bottom }}>
                <img className={styles.img} src={src} style={{ width: width }}></img>
            </div>
        </Link>
    )
}