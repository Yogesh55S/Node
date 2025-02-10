const express = require("express");

const hostRouter = express.Router();
const files = require("../controller/files");

hostRouter.get("/add-page",(req,res,next)=>{
console.log("Now you are on Add Page");
  res.render('addpage');
});

hostRouter.post("/add-page",(req,res,next)=>{
  res.render('HomeList',files.addhome);
});

hostRouter.get("/list-page",(req,res,next)=>{
  console.log("Now you are on Home List Page");
  res.render('HomeList',files.addhome);
});

hostRouter.get("/book-page",(req,res,next)=>{
  console.log("This is My Booking Page");
});
module.exports = hostRouter;
