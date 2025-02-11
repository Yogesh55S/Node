const path = require("path");
const express  = require("express");
//const rootdir = require("../utils/path");
const userRouter = express.Router();

userRouter.get("/",(req,res,next)=>{
  console.log("Now You are on Home page");
  res.render('Home');
});
module.exports = userRouter;