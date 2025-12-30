const express = require('express')
const app = express()


app.get("/",(req,res)=>{
    res.status(201).json({
        message:"HELLO WORLD"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})