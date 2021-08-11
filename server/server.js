require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("upload"))

mongoose
    .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
    })
    .then(() => console.log("Database connection established"))
    .catch(e => console.log("Error while connecting to database:", e))

app.use("/api", require("./routes/routes"))

app.listen(port, () => console.log(`Server running at ${port}`))