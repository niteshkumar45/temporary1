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

async function fetchdata(){
    console.log("before");
    const data = await usermodel.find()
    console.log("data is ",data);
}

fetchdata()
