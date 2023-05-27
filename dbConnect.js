const mongoose=require('mongoose')
const URL ="mongodb+srv://hardik:hardik12@cluster0.fvj1i3w.mongodb.net/R-profiler"
mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
const connection =mongoose.connection
connection.on('connected',()=>{
    console.log("suceesful")
})
connection.on('error' , (error)=>{
    console.log(error)
})