import { textToBin } from "../../server/compose"

const lyrics = { text: '' }

export default function handler(req, res) {
  if (req.method === 'POST') {
    lyrics.text = JSON.parse(req.body).text
    res.status(200).json({ success: lyrics.text })
  } else if (req.method === "GET") {
    const binary = textToBin(lyrics.text)

    res.status(200).json({ binary: binary })
  }
}
