import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import path from "path"
import {fileURLToPath} from "url"

import DbConnection from "./config/dbConfig.js"

import authRouter from "./routers/auth.js"
import usersRouter from './routers/users.js'
import postsRouter from './routers/posts.js'


//  CONFIGURATIONS 
dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
app.use(express.json({limit:"2mb",extended:true}))
app.use(express.urlencoded({ extended: true }));
app.use(helmet())
app.use(helmet.contentSecurityPolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,'public/assets')))

//  Routers 
app.use("/auth",authRouter)
app.use('/users',usersRouter)
app.use('/posts',postsRouter)


//  DATABASE CONFIGURATION  
DbConnection()
    

// SERVER CONFIGURARION 
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('server connected on port',PORT)
})
