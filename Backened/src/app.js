const express = require("express")
const app = express()
app.use(express.json())
const cors =require("cors")
app.use(cors())
const path=require("path")
app.use(express.static("./Public"))
const notesmodel = require("./model/usermodel")
app.post("/notes" , async (req,res)=>{
    const { name, pin } = req.body
  const notes =  await notesmodel.create({
     name,pin
  })

  res.status(201).json({
    message:"post created",
    notes
  })
})


app.get("/notes",async(req,res)=>{
   const notes =  await notesmodel.find()

   res.status(200).json({
    message:"notes get",
    notes
   })
})

app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const notes = await notesmodel.findByIdAndDelete(id)

    console.log(id)

    res.status(200).json({
        message:"deleted"
    })

})

app.patch("/notes/:id", async(req,res)=>{
      const id = req.params.id
      const {name} = req.body
      const notes = await notesmodel.findByIdAndUpdate(id,{name})

      res.status(200).json({
        message:"notes updated",
      })
})
console.log(__dirname)

app.use("*name",(req,res)=>{
  res.sendFile(path.join(__dirname,"..","/Public/index.html"))
})


module.exports = app
