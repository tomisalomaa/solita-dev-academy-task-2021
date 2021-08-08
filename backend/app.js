// Backend set up with help from:
// https://codesource.io/mevn-stack-tutorial-building-a-crud-app-using-mongo-express-vue3-and-nodejs/
// https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const uri = "mongodb+srv://DBlukija:pT3cqeZ5SGXFEiq@solitadevakatemiataskba.n60pu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express()
app.use(bodyParser.json())
app.get("/", (request,response)=>{
    response.send("my home page dey show sha")
})
app.listen(3000, ()=>{
    console.log("listening port: 3000")
})
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err))