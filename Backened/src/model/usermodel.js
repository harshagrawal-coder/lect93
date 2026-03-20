const  mongoose = require("mongoose")
const ddchema = new mongoose.Schema({
    name:String,
    pin:Number
}) 

const notesmodel = mongoose.model("dd",ddchema)

module.exports = notesmodel
