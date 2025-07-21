import mongoose from "mongoose"
import User from "../model/user.js"
import Post from "../model/post.js"
import {users,posts} from "../data/index.js"

function DbConnection(){
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        // User.insertMany(users)
        // Post.insertMany(posts)
        console.log(' server connected to MongoDB ')}
    )
.catch(()=>{
    console.log('connection Failed MongoDB')
    process.exit(1)
})
}

export default DbConnection