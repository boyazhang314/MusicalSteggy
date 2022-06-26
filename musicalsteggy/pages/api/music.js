import { compose } from "../../server/compose"
import { decipher } from "../../server/interpret"

const lyrics = { text: '', musicXML: '', interpretation: '' }

export default function handler(req, res) {
  if (req.method === 'POST') {
    const job = JSON.parse(req.body).job
    if (job === 'song') {
      lyrics.text = JSON.parse(req.body).text
      lyrics.musicXML = compose(lyrics.text)
      res.status(200).json({ success: lyrics.text })
    } else if (job === 'interpret') {
      const text = JSON.parse(req.body).text
      const interpretation = decipher(text)
      res.status(200).json({ interpretation: interpretation })
    }
  } else if (req.method === "GET") {
    res.status(200).json({ musicXML: lyrics.musicXML })
  }
}
