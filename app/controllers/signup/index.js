/** validation */
import SignupValidation from '../../validation/signup/index.js'

/** utils error */
import shemaIsValid from '../../utils/error.js'

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

    res.sendStatus(201)
  } catch (error) {
    res.status(500).json({ error: 'internal server error' })
  }
}

export default Signup
