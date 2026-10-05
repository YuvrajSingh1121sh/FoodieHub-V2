import express from "express"
import dotenv from"dotenv"
dotenv.config()
const app = expres()
const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})