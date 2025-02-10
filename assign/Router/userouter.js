const path = require("path");
const express  = require("express");
const rootdir = require("../utils/path");
const userRouter = express.Router();

userRouter.get("/",(req,res,next)=>{
  console.log("UserRouter succesfully connected:-");
  res.render('Home');
});
module.exports = userRouter;