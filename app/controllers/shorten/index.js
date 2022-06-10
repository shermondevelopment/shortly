/**  db */
import db from '../../config/connect-db.js'

/** nanoid */
import { nanoid } from 'nanoid'

const Shorten = async (req, res) => {
  try {
    const { url } = req.body

    const user = res.locals.user

    const regex =
      /^(https|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/

    if (!regex.test(url)) {
      return res.status(422).json({ error: 'url not valid' })
    }

    const shortUrl = nanoid()

    await db.query(
      'insert into shorten (url, shortUrl, visit, user_id) values($1, $2, $3, $4)',
      [url, shortUrl, 0, user.id]
    )

    res.status(201).json({ shortUrl })
  } catch (error) {
    res.status(500).json({ error: 'interval server error' })
  }
}

export default Shorten
