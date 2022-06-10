/** router */
import { Router } from 'express'

/** middleware */
import Authentication from '../middlewares/authentication.js'

/** signup */
import Signup from '../controllers/signup/index.js'

/** signin */
import Signin from '../controllers/signin/index.js'

/** Shorten */
import {
  Shorten,
  UrlList,
  UrlOpen,
  DeleteURl
} from '../controllers/shorten/index.js'

/** users */
import { Users, UsersRanking } from '../controllers/user/index.js'

/** route method */
const router = Router()

router.post('/signup', Signup)
router.post('/signin', Signin)
router.post('/urls/shorten', Authentication, Shorten)
router.get('/urls/:id', UrlList)
router.get('/urls/open/:shortUrl', UrlOpen)
router.delete('/urls/:id', Authentication, DeleteURl)
router.get('/users/:id', Authentication, Users)
router.get('/ranking', UsersRanking)

export default router
