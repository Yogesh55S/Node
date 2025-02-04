const path = require("path");
const express = require("express");
const userRouter = express.Router();
//const rootDir = require("./utils/path");
const { registerhomes } = require("./host");
const {registernames} = require("./host");

userRouter.get("/", (req, res, next) => {
  
  //console.log({registerhomes} );
  //console.log({registernames} );
  res.render('file');
});

module.exports = userRouter;