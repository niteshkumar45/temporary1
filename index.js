const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const express = require('express')
const app = express()
const ejs = require('ejs')
const MYPORT = process.env.PORT || 3600
const jwt = require('jsonwebtoken')
const cors = require("cors")
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://97nitesh85:lBQpQbIWKv8CsCWn@cluster0.soys12h.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("mongodb connect")}).catch(()=>{console.log("not connect mongodb")})

const userschema = new mongoose.Schema({
    name:String,
    city:String,
    email:String,
    password:String
})

const usermodel = new mongoose.model("User",userschema)

app.use(cors())
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",async(req,res)=>{
    // const usres = await usermodel.find()
    // console.log("usres is ",usres);
    res.status(201).json({data:"kl;sdkfk;s"})
})

app.listen(3200,()=>{
    console.log("the server is started ");
})