const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("./utils/path");
const { registerhomes } = require("./host");
const {registernames} = require("./host");

userRouter.get("/", (req, res, next) => {
  console.log({registernames} );
  console.log({registerhomes} );
  res.sendFile( path.join(rootDir, "views", "file.html"));
});

module.exports = userRouter;