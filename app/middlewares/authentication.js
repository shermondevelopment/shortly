import jsonwebtoken from 'jsonwebtoken'

const authCheckout = (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(400).send('token is not provided')
    }

    if (token.split(' ')[0] !== 'Bearer') {
      return res.status(400).send('invalid format token')
    }

    jsonwebtoken.verify(token.split(' ')[1], process.env.JWT_TOKEN)

    const decode = jsonwebtoken.decode(token.split(' ')[1])
    res.locals.user = decode
    next()
  } catch (error) {
    console.log(error)
    return res.status(400).send('token is invalid or expired')
  }
}

export default authCheckout
