require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreativeIndex: true
}).then(() => {
    console.log("DB CONNECTED")
}).catch(
    console.log("DB GETS DISCONNECTED")
)

const port = 8000;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})