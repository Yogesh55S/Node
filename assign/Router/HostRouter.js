const express = require("express");
const hostRouter = express.Router();

const files = require("../controller/hostcontroller");

hostRouter.get("/add-page",files.gethome);
hostRouter.post("/add-page",files.addhome);
hostRouter.get("/home-edit",files.list);
hostRouter.get("/edit-home/:homeId",files.getedithome);
module.exports = hostRouter;
  