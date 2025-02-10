const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/add-page",(req,res,next)=>{
console.log("Now you are on Add Page");
  res.render('addpage');
});

const registerhomes =[];
hostRouter.post("/add-page",(req,res,next)=>{
  console.log("data wil be Collected",req.body);
  registerhomes.push(req.body);
  res.render('HomeList',{registerhomes:registerhomes});
});

hostRouter.get("/list-page",(req,res,next)=>{
  console.log("Now you are on Home List Page");
  res.render('HomeList',{registerhomes:registerhomes});
})
module.exports = hostRouter;
exports.registerhomes = registerhomes;