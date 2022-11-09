// Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const bedController = require("./controllers/beds")

// Pulls environment vars into server js from .env
require('dotenv').config()
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

// MIDDLEWARE
// Body Parser middleware - give access to req.body
app.use(express.urlencoded({extended:true}))

// Use the beds controller for the bed routes
app.use("/bed", bedController)
app.use(methodOverride("_method"))
app.use(express.static("public"));
// Listener

app.listen(PORT, () => console.log(`server is listening to the ocean waves on port: ${PORT}`))