import express from 'express'
import { login, register } from '../controllers/auth.js'
import verifyToken from '../middleware/auth.js'
import upload from '../middleware/uploadFile.js'
const router = express()

router.post('/register',upload.single('photo'),verifyToken,register)
router.post('/login',verifyToken,login)


export default router