// require('dotenv').config();
import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import path from "path"
import {fileURLToPath} from "url"
import DbConnection from "./model/dbConfig.js"

//  CONFIGURATIONS 
dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
app.use(express.json({limit:"2mb",extended:true}))
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(helmet())
app.use(helmet.contentSecurityPolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,'public/assets')))




//  DATABASE CONFIGURATION  
DbConnection()
    

// SERVER CONFIGURARION 
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('server connected on port',PORT)
})
