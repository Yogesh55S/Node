const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("./utils/path");

userRouter.get("/", (req, res, next) => {
  res.sendFile( path.join(rootDir, "views", "file.html"));
});

module.exports = userRouter;