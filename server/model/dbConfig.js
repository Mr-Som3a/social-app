import mongoose from "mongoose"


function DbConnection(){
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log(' server connected to MongoDB '))
.catch(()=>{
    console.log('connection Failed MongoDB')
    process.exit(1)
})
}

export default DbConnection