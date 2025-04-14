const express = require("express");
const hostRouter = express.Router();

const files = require("../controller/hostcontroller");

hostRouter.get("/add-page",files.gethome);
hostRouter.post("/add-page",files.addhome);
hostRouter.get("/home-edit",files.list); 
hostRouter.get("/edit-home/:homeId",files.getedithome);
hostRouter.post("/edit-home",files.Postedithome);
hostRouter.post("/delete-home/:homeId",files.deletehome);
module.exports = hostRouter;
  