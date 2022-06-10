/** validation */
import { SignupValidation } from '../../validation/signup/index.js'

/** utils error */
import shemaIsValid from '../../utils/error.js'

/** database */
import db from '../../config/connect-db.js'

/** bcrypted */
import bcrypt from 'bcrypt'

/** userRepositroy */
import { Users } from '../../repository/user.js'

const Signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body

    const isValid = await shemaIsValid(
      { name, email, password, confirmPassword },
      SignupValidation
    )

    if (isValid) {
      return res.status(422).json({ error: isValid })
    }

    if (password !== confirmPassword) {
      return res.status(422).json({ error: 'passwords do not match' })
    }

    const userRepositroy = new Users()

    const userExist = await userRepositroy.findUser(email)

    if (userExist.rowCount) {
      return res.status(409).json({ error: 'users already registered' })
    }

    const passwordCrypted = await bcrypt.hash(password, 10)

    await db.query(
      'insert into users (name, email, password) values($1, $2, $3)',
      [name, email, passwordCrypted]
    )

    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'internal server error' })
  }
}

export default Signup
