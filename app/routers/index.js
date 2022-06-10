/** router */
import { Router } from 'express'

/** signup */
import Signup from '../controllers/signup/index.js'

/** signin */
import Signin from '../controllers/signin/index.js'

/** route method */
const router = Router()

router.post('/signup', Signup)
router.post('/signin', Signin)

export default router
