const app = require("./src/app")
const mongoose =require("mongoose")
require("dotenv").config()
const connection = 
require("./src/config/database")
connection()

app.listen(4000 ,()=>{
    console.log("server is rnning")
})



