require("dotenv").config()
const app = require("./src/app")
const mongoose =require("mongoose")

const connection = 
require("./src/config/database")
connection()

app.listen(4000 ,()=>{
    console.log("server is rnning")
})



