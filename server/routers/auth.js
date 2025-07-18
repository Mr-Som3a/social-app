import express from 'express'
import upload from '../multer/multerConfig'
import { login, register } from '../controllers/auth'
import verifyToken from '../middleware/auth'
const router = express()

router.post('auth/register',upload.single('picture'),verifyToken,register)
router.post('auth/login',verifyToken,login)


export default router