/** schema validation */
import { SigninValidation } from '../../validation/signup/index.js'

/** utils error */
import shemaIsValid from '../../utils/error.js'

/** userRepositroy */
import { Users } from '../../repository/user.js'

/** bcrypt */
import bcrypt from 'bcrypt'

/** jsonwebtoken */
import jwt from 'jsonwebtoken'

const Signin = async (req, res) => {
  try {
    const { email, password } = req.body

    const schemaIsValid = await shemaIsValid(
      { email, password },
      SigninValidation
    )

    if (schemaIsValid) {
      return res.status(422).json({ error: schemaIsValid })
    }

    const userRepositroy = new Users()

    const userExist = await userRepositroy.findUser(email)

    if (!userExist.rowCount) {
      return res.status(401).json({ error: 'users not registred' })
    }

    if (!(await bcrypt.compare(password, userExist.rows[0]?.password))) {
      return res.status(401).json({ error: 'incorrect password' })
    }

    const token = jwt.sign({ id: userExist.rows[0].id }, process.env.JWT_TOKEN)

    res.status(200).json({ token })
  } catch (error) {
    return res.status(500).json({ error: 'internal server error' })
  }
}

export default Signin
