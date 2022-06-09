/** router */
import { Router } from 'express'

/** signup */
import Signup from '../controllers/signup/index.js'

/** route method */
const router = Router()

router.post('/signup', Signup)

export default router
