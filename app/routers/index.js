/** router */
import { Router } from 'express'

/** middleware */
import Authentication from '../middlewares/authentication.js'

/** signup */
import Signup from '../controllers/signup/index.js'

/** signin */
import Signin from '../controllers/signin/index.js'

/** Shorten */
import { Shorten, UrlList, UrlOpen } from '../controllers/shorten/index.js'

/** route method */
const router = Router()

router.post('/signup', Signup)
router.post('/signin', Signin)
router.post('/urls/shorten', Authentication, Shorten)
router.get('/urls/:id', UrlList)
router.get('/urls/open/:shortUrl', UrlOpen)

export default router
