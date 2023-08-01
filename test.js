const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://97nitesh85:17G0uxWgfeP7Zix0@cluster0.hkdjpts.mongodb.net/?retryWrites=true&w=majority",{
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

const data = {
    name:"nitesh",
    city:"jaipur",
    email:"nitesh@gmailc.om",
    password:"oasfdhhdf"
}

async function insertdata(){
    await usermodel.insertMany([data])
    console.log("insertdata");
}
insertdata()