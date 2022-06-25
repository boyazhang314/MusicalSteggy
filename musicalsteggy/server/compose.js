import { HEAD, TAIL, START, BAR, STOP } from './notation/boilerplate.js'
import { note, rest, back } from './notation/notes.js'
import { TwinkleTwinkleLittleStar, HARMONY } from './notation/twinklestar.js'

import * as fs from 'fs'

const C = ['C', 'E', 'G', '']
const F = ['F', 'A', 'C', '']
const G = ['G', 'B', 'D', '']
const A = ['A', 'C', 'E', '']

// generate tone
function tone(index, octave, voice, staff, binary) {
    let tones = ''
    let pitch = '';
    for (let k = 0; k < 8; k++) {
        switch(HARMONY[index + k]) {
            case 'C':
                pitch = C[Math.floor(Math.random() * 4)];
                break;
            case 'F':
                pitch = F[Math.floor(Math.random() * 4)];
                break;
            case 'G':
                pitch = G[Math.floor(Math.random() * 4)];
                break;
            case 'A':
                pitch = A[Math.floor(Math.random() * 4)];
                break;
        }
        tones += note(pitch, octave, voice, 0.5, staff)
    }

    return tones
}

// generate accompaniment
export function accompaniment(lyrics) {
    let acc = '';
    const binary = lyrics ? textToBin(lyrics) : ''
    let poi = 0

    for (let i = 0; i < HARMONY.length; i += 8) {
        // first note of the bar
        let memo = '<measure number="' + (i / 8 + 1).toString() + '">'

        // first measure
        if (i === 0) memo += START

        // note value
        for (let j = 0; j < 4; j++) {
            let substr = binary.substring(poi, poi + 8)
            if (poi + 8 >= binary.length) {
                substr = ''
                if (poi + 8 === binary.length) {
                    memo += STOP
                }
            }
            memo += tone(i, 5 - j, j + 1, j < 2 ? 1 : 2, substr)
            if (j != 3) memo += back(4)
            poi += 8
        }

        // last measure
        if (i === HARMONY.length - 1) {
            memo += BAR
        }

        // last note of the bar
        memo += '</measure>'

        acc += memo;
    }

    return acc;
}

// convert text to binary string
export function textToBin(text) {
    let bin = '';
    bin = text.toString().split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, "0");
    }).join('');
    return bin;
}

const sheet = HEAD 
            + TwinkleTwinkleLittleStar(1, 5, 1, 1)
            + '<part id="P2">'
            + accompaniment('hello')
            + '</part>'
            + TAIL

fs.writeFile('./ttls.musicxml', sheet, err => {
    if (err) console.warn(err)
})