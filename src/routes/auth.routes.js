import { Router } from 'express'
import { register, login, logout, profile } from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/ValidateToken.js'
import { requestLogger } from '../middlewares/RequestLogger.js'

const router = Router()

router.post('/register', register)
router.post('/login', requestLogger, login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)

export default router