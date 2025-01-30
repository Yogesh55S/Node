const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("./utils/path")

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendfile(path.join(rootDir, "views", "register.html"));
})

hostRouter.post("/add-home",(req,res,next)=>{
  console.log(req.body);
  res.sendfile(path.join(rootDir, "views", "done.html"));
})
module.exports = hostRouter;