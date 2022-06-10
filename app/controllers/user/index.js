/**  db */
import db from '../../config/connect-db.js'

const Users = async (req, res) => {
  try {
    const { id } = req.params

    const user = await db.query('select id, name from users where id = $1', [
      id
    ])

    const countTotal = await db.query(
      'select sum(visit) as visitCount from shorten where user_id = $1',
      [id]
    )

    const shortenAll = await db.query(
      'select *, visit as visitCount from shorten where user_id = $1',
      [id]
    )
    res.status(200).json({
      ...user.rows[0],
      visitCount: countTotal.rows[0].visitcount,
      shortenedUrls: shortenAll.rows
    })

    if (!user.rowCount) {
      return res.sendStatus(404)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'internal server error' })
  }
}

export default Users
