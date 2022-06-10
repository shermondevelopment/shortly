/** db  */
import db from '../config/connect-db.js'

export class Users {
  async findUser(email) {
    let user = await db.query('select * from users where email = $1', [email])
    return user
  }
}
