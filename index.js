const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const express = require('express')
const app = express()
const ejs = require('ejs')
const MYPORT = process.env.PORT || 3600
const jwt = require('jsonwebtoken')
const cors = require("cors")
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://97nitesh85:17G0uxWgfeP7Zix0@cluster0.hkdjpts.mongodb.net/new",{
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

async function insertdata(){
    await usermodel.insertMany([data,data1,data2])
    console.log("successfull");
}

app.use(cors())
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/getdata",(req,res)=>{
    console.log("req.body is ",req.body);
    res.cookie("cookie name","cookie_description",{maxAge:86000000,httpOnly:true})
    res.json({message:'cookie set successfully'})
})


app.get("/",async(req,res)=>{
    res.cookie("jwttoken","jwttokenvalueinwhichpasswordissaved",{maxAge:8600000000})
    const usres = await usermodel.find()
    res.status(201).json({data:usres})
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

app.get("/ejs",(req,res)=>{
    res.render('index',{data:"this is data send from the backend"})
})

app.listen(3200,()=>{
    console.log("the server is started ");
})