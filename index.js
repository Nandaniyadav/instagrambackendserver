const express=require("express")
const authRouter=require("./routes/auth")
const connection=require("./storage/db")
const cors=require("cors")
const app=express()
require("dotenv").config()
app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(cors({
  
}))

app.use("/auth",authRouter)





app.listen(process.env.PORT||8080,async()=>{
    await connection;
    console.log("connected to db")
    console.log(` server is runnig ${process.env.PORT}`)
})
