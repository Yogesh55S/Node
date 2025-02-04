const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("./utils/path")

hostRouter.get("/add-home",(req,res,next)=>{
  res.render('register');
})

const registerhomes = [];


hostRouter.post("/add-home",(req,res,next)=>{
console.log("Home Successfully Register ",req.body);
registerhomes.push(req.body);
  res.render('added',{registerhomes : registerhomes});
})

exports.hostRouter = hostRouter;
exports.registerhomes= registerhomes; 