import express from 'express'
import verifyToken from '../middleware/auth.js'
import upload from '../middleware/uploadFile.js'
import { getUserPosts, getFeedPosts, likePost, createPost } from '../controllers/posts.js'

const router = express.Router()

// READ
router.get('/',verifyToken,getFeedPosts)
router.get('/:userId/posts',verifyToken,getUserPosts)

// CREATE
router.post('/',verifyToken,upload.fields('photo'),createPost)

//  UPDATE
router.get('/:id/like',verifyToken,likePost)
router.patch('/',verifyToken,upload.single('photo'),likePost)

//  DELETE
// router.delete('/',verifyToken,upload.single('photo'),deletePost)


export default router