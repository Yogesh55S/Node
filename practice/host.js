const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req,res,next)=>{
  res.send(`
    <h1>Welcome to house Registration</h1>
    <form action="/host/add-home" method="post">
    <input type="text" name="name" placeholder="Enter your name"> <br>
    <input type="text" name="house-name" placeholder="Enter your house-name"> <br>
    <input type="submit" value="Submit">
  </form>
    `);
})
hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);
  res.send(`
    <h1>Home registrer succesfully</h1>
    <a href="/" >go-to home</a>
    `);
})
module.exports = hostRouter;