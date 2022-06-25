import { START, BAR, STOP } from './boilerplate.js'
import { note, back } from './notes.js'

// MusicXML generation for Twinkle Twinkle Little Star in C major
export function TwinkleTwinkleLittleStar(part, octave, voice, staff) {
    return '<part id="P' + part.toString() + '">'
            + '<measure number="1">'
            + START 
            + note('C', octave, voice, 1, staff)
            + note('C', octave, voice, 1, staff)
            + note('G', octave, voice, 1, staff)
            + note('G', octave, voice, 1, staff)
            + back(4)
            + note('C', octave - 1, voice, 1, staff)
            + note('C', octave - 1, voice, 1, staff)
            + note('G', octave - 1, voice, 1, staff)
            + note('G', octave - 1, voice, 1, staff)
            + back(4)
            + note('C', 3, 1, 4, 2)
            + back(4)
            + note('E', 3, 1, 4, 2)
            + back(4)
            + note('G', 3, 1, 4, 2)
            + '</measure>'
            + '<measure number="2">'
            + note('A', octave, voice, 1, staff)
            + note('A', octave, voice, 1, staff)
            + note('G', octave, voice, 2, staff)
            + back(4)
            + note('A', octave - 1, voice, 1, staff)
            + note('A', octave - 1, voice, 1, staff)
            + note('G', octave - 1, voice, 2, staff)
            + back(4)
            + note('F', 3, 1, 2, 2)
            + note('C', 3, 1, 2, 2)
            + back(4)
            + note('A', 3, 1, 2, 2)
            + note('E', 3, 1, 2, 2)
            + back(4)
            + note('C', 3, 1, 2, 2)
            + note('G', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="3">'
            + note('F', octave, voice, 1, staff)
            + note('F', octave, voice, 1, staff)
            + note('E', octave, voice, 1, staff)
            + note('E', octave, voice, 1, staff)
            + back(4)
            + note('F', octave - 1, voice, 1, staff)
            + note('F', octave - 1, voice, 1, staff)
            + note('E', octave - 1, voice, 1, staff)
            + note('E', octave - 1, voice, 1, staff)
            + back(4)
            + note('F', 3, 1, 2, 2)
            + note('A', 3, 1, 2, 2)
            + back(4)
            + note('A', 3, 1, 2, 2)
            + note('C', 3, 1, 2, 2)
            + back(4)
            + note('C', 3, 1, 2, 2)
            + note('E', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="4">'
            + note('D', octave, voice, 1, staff)
            + note('D', octave, voice, 1, staff)
            + note('C', octave, voice, 2, staff)
            + back(4)
            + note('D', octave - 1, voice, 1, staff)
            + note('D', octave - 1, voice, 1, staff)
            + note('C', octave - 1, voice, 2, staff)
            + back(4)
            + note('G', 3, 1, 2, 2)
            + note('C', 3, 1, 2, 2)
            + back(4)
            + note('B', 3, 1, 2, 2)
            + note('E', 3, 1, 2, 2)
            + back(4)
            + note('D', 3, 1, 2, 2)
            + note('G', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="5">'
            + note('G', octave, voice, 1, staff)
            + note('G', octave, voice, 1, staff)
            + note('F', octave, voice, 1, staff)
            + note('F', octave, voice, 1, staff)
            + back(4)
            + note('G', octave - 1, voice, 1, staff)
            + note('G', octave - 1, voice, 1, staff)
            + note('F', octave - 1, voice, 1, staff)
            + note('F', octave - 1, voice, 1, staff)
            + back(4)
            + note('C', 3, 1, 2, 2)
            + note('F', 3, 1, 2, 2)
            + back(4)
            + note('E', 3, 1, 2, 2)
            + note('A', 3, 1, 2, 2)
            + back(4)
            + note('G', 3, 1, 2, 2)
            + note('C', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="6">'
            + note('E', octave, voice, 1, staff)
            + note('E', octave, voice, 1, staff)
            + note('D', octave, voice, 2, staff)
            + back(4)
            + note('E', octave - 1, voice, 1, staff)
            + note('E', octave - 1, voice, 1, staff)
            + note('D', octave - 1, voice, 2, staff)
            + back(4)
            + note('A', 3, 1, 2, 2)
            + note('G', 3, 1, 2, 2)
            + back(4)
            + note('C', 3, 1, 2, 2)
            + note('B', 3, 1, 2, 2)
            + back(4)
            + note('E', 3, 1, 2, 2)
            + note('D', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="7">'
            + note('G', octave, voice, 1, staff)
            + note('G', octave, voice, 1, staff)
            + note('F', octave, voice, 1, staff)
            + note('F', octave, voice, 1, staff)
            + back(4)
            + note('G', octave - 1, voice, 1, staff)
            + note('G', octave - 1, voice, 1, staff)
            + note('F', octave - 1, voice, 1, staff)
            + note('F', octave - 1, voice, 1, staff)
            + back(4)
            + note('C', 3, 1, 2, 2)
            + note('F', 3, 1, 2, 2)
            + back(4)
            + note('E', 3, 1, 2, 2)
            + note('A', 3, 1, 2, 2)
            + back(4)
            + note('G', 3, 1, 2, 2)
            + note('C', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="8">'
            + note('E', octave, voice, 1, staff)
            + note('E', octave, voice, 1, staff)
            + note('D', octave, voice, 2, staff)
            + back(4)
            + note('E', octave - 1, voice, 1, staff)
            + note('E', octave - 1, voice, 1, staff)
            + note('D', octave - 1, voice, 2, staff)
            + back(4)
            + note('A', 3, 1, 2, 2)
            + note('G', 3, 1, 2, 2)
            + back(4)
            + note('C', 3, 1, 2, 2)
            + note('B', 3, 1, 2, 2)
            + back(4)
            + note('E', 3, 1, 2, 2)
            + note('D', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="9">'
            + note('C', octave, voice, 1, staff)
            + note('C', octave, voice, 1, staff)
            + note('G', octave, voice, 1, staff)
            + note('G', octave, voice, 1, staff)
            + back(4)
            + note('C', octave - 1, voice, 1, staff)
            + note('C', octave - 1, voice, 1, staff)
            + note('G', octave - 1, voice, 1, staff)
            + note('G', octave - 1, voice, 1, staff)
            + back(4)
            + note('C', 3, 1, 4, 2)
            + back(4)
            + note('E', 3, 1, 4, 2)
            + back(4)
            + note('G', 3, 1, 4, 2)
            + '</measure>'
            + '<measure number="10">'
            + note('A', octave, voice, 1, staff)
            + note('A', octave, voice, 1, staff)
            + note('G', octave, voice, 2, staff)
            + back(4)
            + note('A', octave - 1, voice, 1, staff)
            + note('A', octave - 1, voice, 1, staff)
            + note('G', octave - 1, voice, 2, staff)
            + back(4)
            + note('F', 3, 1, 2, 2)
            + note('C', 3, 1, 2, 2)
            + back(4)
            + note('A', 3, 1, 2, 2)
            + note('E', 3, 1, 2, 2)
            + back(4)
            + note('C', 3, 1, 2, 2)
            + note('G', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="11">'
            + note('F', octave, voice, 1, staff)
            + note('F', octave, voice, 1, staff)
            + note('E', octave, voice, 1, staff)
            + note('E', octave, voice, 1, staff)
            + back(4)
            + note('F', octave - 1, voice, 1, staff)
            + note('F', octave - 1, voice, 1, staff)
            + note('E', octave - 1, voice, 1, staff)
            + note('E', octave - 1, voice, 1, staff)
            + back(4)
            + note('F', 3, 1, 2, 2)
            + note('A', 3, 1, 2, 2)
            + back(4)
            + note('A', 3, 1, 2, 2)
            + note('C', 3, 1, 2, 2)
            + back(4)
            + note('C', 3, 1, 2, 2)
            + note('E', 3, 1, 2, 2)
            + '</measure>'
            + '<measure number="12">'
            + note('D', octave, voice, 1, staff)
            + note('D', octave, voice, 1, staff)
            + note('C', octave, voice, 2, staff)
            + back(4)
            + note('D', octave - 1, voice, 1, staff)
            + note('D', octave - 1, voice, 1, staff)
            + note('C', octave - 1, voice, 2, staff)
            + back(4)
            + note('G', 3, 1, 2, 2)
            + note('C', 3, 1, 2, 2)
            + back(4)
            + note('B', 3, 1, 2, 2)
            + note('E', 3, 1, 2, 2)
            + back(4)
            + note('D', 3, 1, 2, 2)
            + note('G', 3, 1, 2, 2)
            + BAR
            + '</measure>'
            + '</part>'
}

// accompanying chords
export const HARMONY = [
    'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 
    'F', 'F', 'F', 'F', 'C', 'C', 'C', 'C', 
    'F', 'F', 'F', 'F', 'A', 'A', 'A', 'A', 
    'G', 'G', 'G', 'G', 'C', 'C', 'C', 'C', 

    'C', 'C', 'C', 'C', 'F', 'F', 'F', 'F',
    'A', 'A', 'A', 'A', 'G', 'G', 'G', 'G',
    'C', 'C', 'C', 'C', 'F', 'F', 'F', 'F',
    'A', 'A', 'A', 'A', 'G', 'G', 'G', 'G',
    
    'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 
    'F', 'F', 'F', 'F', 'C', 'C', 'C', 'C', 
    'F', 'F', 'F', 'F', 'A', 'A', 'A', 'A', 
    'G', 'G', 'G', 'G', 'C', 'C', 'C', 'C', 
]