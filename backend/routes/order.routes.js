const express = require("express");
const orderRouter = express.Router();
const { OrderModel } = require("../models/order.model");

orderRouter.post("/", async (req, res) => {
    const user = req.body.userID;
    const { products, shippingAddress, status, orderDate } = req.body;
    try {
        const orders = new OrderModel({ products, shippingAddress, status, orderDate });
        await orders.save();
        res.send("Orders Placed successfully")
    } catch (err) {
        console.log(err);
        res.send({ "msg": "Something went wrong" })
    }
})

cartRouter.get("/items", async (req, res) => {
    const user = req.body.userID;
    const orderId= req.body;
    console.log("ls:", user)
    try {
        let data = await OrderModel.find({ user,  }).populate("product")
        console.log(data)
        res.json({ data });
    } catch (err) {
        console.log(err);
        res.send({ "msg": "Something went wrong" })
    }
})
