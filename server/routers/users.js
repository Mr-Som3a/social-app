import express from 'express'
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js"
import verifyToken from '../middleware/auth.js'

const router = express.Router()

//  READ 
router.get("/:id", verifyToken,getUser)
router.get("/:id", verifyToken, getUserFriends)


//  UPDATE & DELETE
router.patch("/:id/:friendId",verifyToken, addRemoveFriend)


export default router