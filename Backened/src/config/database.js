const mongoose = require("mongoose")
function connection(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("database connected")
    })
}

module.exports = connection