const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const express = require('express')
const app = express()
const MYPORT = process.env.PORT || 3600

app.get("/",(req,res)=>{
    res.status(201).json({
        name:"nitesh kumar prajapat",
        city:"jaipur",
        email:"nitesh@gmail.com"
    })
})

app.get("/user",(req,res)=>{
    res.status(201).json({
        content:"hello world"
    })
})

app.get("/about",(req,res)=>{
    res.status(201).json({
        content:"this is my about page of this website"
    })
})

app.listen(3200,()=>{
    console.log("the server is started ");
})