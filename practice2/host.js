const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("./utils/path")

hostRouter.get("/add-home",(req,res,next)=>{
  res.sendfile(path.join(rootDir, "views", "register.html"));
})
const registernames = [];
const registerhomes = [];

hostRouter.post("/add-home",(req,res,next)=>{
registernames.push({namee : req.body.namee});
registerhomes.push({housename: req.body.housename});
  res.sendfile(path.join(rootDir, "views", "done.html"));
})
exports.hostRouter = hostRouter;
exports.registernames = registernames;
exports.registerhomes= registerhomes;