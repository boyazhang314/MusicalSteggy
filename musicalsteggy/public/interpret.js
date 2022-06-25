import * as fs from "fs"
import { HARMONY } from "./notation/twinklestar.js"

const C = ["C", "E", "G", ""]
const F = ["F", "A", "C", ""]
const G = ["G", "B", "D", ""]
const A = ["A", "C", "E", ""]

fs.readFile("./ttls.musicxml", "utf8", (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let patt = /<part id="P2">/
  let match = patt.exec(data)
  let encypted = data.substring(match.index)
  var notes = encypted.match(/<step>.<\/step>|<rest\/>/g)
  let step = /<step>.<\/step>/
  for (let i = 0; i < notes.length; ++i) {
    if (step.exec(notes[i])) {
      notes[i] = notes[i].substring(6, 7)
    } else {
      notes[i] = ""
    }
  }
  console.log(notes)
  console.log(notes.length)

  var binaryString = ""

  for (let i = 0; i < notes.length; ++i) {
    var bar = Math.floor(i / 32)
    var note = i % 8
    var chord
    switch (HARMONY[bar * 8 + note]) {
      case "C":
        chord = C
        break
      case "F":
        chord = F
        break
      case "G":
        chord = G
        break
      case "A":
        chord = A
        break
    }
    var index = chord.indexOf(notes[i])
    if (index === -1) {
      index = 3
    }
    var binary = index.toString(2).padStart(2, "0")
    binaryString += binary
    if (note === 7 || note === 3) {
      binaryString += " "
    }
    //console.log(binary)
  }
  const outputStr = String.fromCharCode(
    ...binaryString.split(' ').map(bin => parseInt(bin, 2))
  )
  console.log(binaryString)
  console.log(outputStr);
})
