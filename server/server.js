const express = require("express")
const app = express()
const path = require('path');
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 5000
const frontendUrl = process.env.FRONTEND_URL;
app.use(cors({
    origin: frontendUrl
  }))
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(require("./routes/record"))
const dbo = require("./db/conn")

app.get("/", function(req, res) {
    res.send("App is running")
})

dbo.connectToMongoDB(function (error) {
    if (error) throw error

    app.listen(port, () => {
        console.log("Server is running on port: " + port)
    })
})