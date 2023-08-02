const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://97nitesh85:lBQpQbIWKv8CsCWn@cluster0.soys12h.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("mongodb connect")}).catch(()=>{console.log("not connect mongodb")})

const userschema = new mongoose.Schema({
    name:String,
    city:String
})

const usermodel = new mongoose.model("User",userschema)

const data1 = {
    name:"rampal",
    city:"tonk"
}
const data2 = {
    name:"vishnu",
    city:"dilli"
}
const data3 = {
    name:"hariom",
    city:"rampura"
}

async function insert(){
    await usermodel.insertMany([data1,data2,data3])
    console.log("data inserted");
}

insert()