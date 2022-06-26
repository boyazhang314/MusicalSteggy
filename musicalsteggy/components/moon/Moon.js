import React from 'react'
import Link from 'next/link';
import styles from './Moon.module.css'

export default function Moon({top, right, left, bottom, height}) {
    return (
        <Link href="/">
            <div className={styles.moon} style={{ top: top, right: right, left: left, bottom: bottom, height: height}}></div>
        </Link>
    )
}