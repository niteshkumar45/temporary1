// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, './.env') })
// const express = require('express')
// const app = express()
// const MYPORT = process.env.PORT || 3600
// const cors = require("cors")
// const mongoose = require('mongoose')
// const options = {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }
// const mongodb = require('mongodb')
// // 97nitesh85 AkBObPN8FnW4MPEl 
// mongoose.connect("mongodb+srv://97nitesh85:AkBObPN8FnW4MPEl@cluster0.9q695fl.mongodb.net/test",options).then(()=>{console.log("mongodb connect")}).catch(()=>{console.log("not connect mongodb")})

// const userschema = new mongoose.Schema({
//     name:String,
//     city:String
// })

// const usermodel = new mongoose.model("User",userschema)
// app.use(cors())

// app.get("/",(req,res)=>{
//     res.status(201).json({message:"homepage"})
// })

// app.get("/user",async (req,res)=>{
//     const user = await usermodel.find()
//     res.status(201).json({user:user})
// })

// app.listen(3200,()=>{
//     console.log("the server is started ");
// })

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const express = require('express')
const app = express()
const MYPORT = process.env.PORT || 3600
const cors = require("cors")
const mongoose = require('mongoose')
const serverless = require('serverless-http'); // Import serverless-http

const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}
const mongodb = require('mongodb')
// 97nitesh85 AkBObPN8FnW4MPEl 
mongoose.connect("mongodb+srv://97nitesh85:AkBObPN8FnW4MPEl@cluster0.9q695fl.mongodb.net/test",options).then(()=>{console.log("mongodb connect")}).catch(()=>{console.log("not connect mongodb")})

const userschema = new mongoose.Schema({
    name:String,
    city:String
})

const usermodel = new mongoose.model("User",userschema)
app.use(cors())

app.get("/",(req,res)=>{
    res.status(201).json({message:"homepage"})
})

app.get("/user",async (req,res)=>{
    const user = await usermodel.find()
    res.status(201).json({user:user})
})

// Wrap your express app with serverless-http
module.exports = app;
module.exports.handler = serverless(app);