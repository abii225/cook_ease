
const express=require("express");

const orderRouter=express.Router();
const {OrderModel}=require("../models/orders.model");

orderRouter.get("/:id",async(req,res)=>{
    try{
        
        let {id}=req.params;
        let odersById=await OrderModel.find({_id:id});
        res.status(200).send("gets all orders page");
    }catch(err){
        res.send({"msg":"get orders failed"})
    }
})


orderRouter.post("/",(req,res)=>{
    try{
        
        res.status(200).send("adds a new order to database");
    }catch(err){
        res.send({"msg":"post orders failed"})
    }
})


orderRouter.patch("/",(req,res)=>{
    try{
        res.status(200).send("to update the order count on db");
    }catch(err){
        res.send({"msg":"patch orders failed"})
    }
})

orderRouter.delete("/",(req,res)=>{
    try{
        res.status(200).send("deletes the order from orders");
    }catch(err){
        res.send({"msg":"delete orders failed"})
    }
})

module.exports={
    orderRouter
}