import express, { Application,Request,Response } from "express"
const port = 5678

const app:Application = express()

app.get("/",(req:Request,res:Response)=>{
    console.log("Server is up and running")
})

app.listen(port,()=>{
console.log("Server is listening")
})
