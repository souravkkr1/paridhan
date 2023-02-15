const express = require("express");
const { connection } = require("./config/db")
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the homepage")
})


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("Server is connected to DB")
    } catch (err) {
        console.log(err)
        console.log("Something went wrong")
    }
    console.log("Server is running")
})