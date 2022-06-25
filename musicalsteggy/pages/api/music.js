import { accompaniment } from "../../server/compose"

const lyrics = { text: '', musicXML: '' }

export default function handler(req, res) {
  if (req.method === 'POST') {
    lyrics.text = JSON.parse(req.body).text
    res.status(200).json({ success: lyrics.text })
  } else if (req.method === "GET") {
    lyrics.musicXML = accompaniment(lyrics.text)
    res.status(200).json({ musicXML: lyrics.musicXML })
  }
}
