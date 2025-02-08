const express = require("express");
const hostRouter = express.Router();
//const path = require("path");
//const rootDir = require("./utils/path")
const files = require("./controllers/files");

hostRouter.get("/add-home",(req,res,next)=>{
  res.render('register');
})

hostRouter.post("/add-home",files.addhome)
exports.hostRouter = hostRouter;
