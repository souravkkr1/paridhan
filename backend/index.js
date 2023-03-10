const express = require("express");
const { connection } = require("./config/db")
const { productRouter } = require("./routes/product.routes")
const cors = require("cors");
const { userRouter } = require("./routes/user.routes");
const { cartRouter } = require("./routes/cart.routes");
require("dotenv").config();
const app = express();
const { adminValidate, requireSignIn } = require("./middlewares/validator")

app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    res.send("Welcome to the homepage")
})

app.use("/cart", requireSignIn, cartRouter)

app.use("/user", userRouter)

// app.use(adminValidate)
app.use("/products", productRouter)


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