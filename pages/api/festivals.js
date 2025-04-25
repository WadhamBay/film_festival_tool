
import festivals from '../../data/festivals.json'

export default function handler(req, res) {
  res.status(200).json(festivals)
}
