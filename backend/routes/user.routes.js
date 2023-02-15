const express = require("express")

const userRouter = express.Router();

userRouter.post("/signin")
userRouter.post("/signup")
userRouter.get("/allUsers")
userRouter.get("/profile")
userRouter.post("/delete/:id")
userRouter.post("/edit/:id")

module.exports = {
    userRouter
}