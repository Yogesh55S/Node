const express  = require("express");
const userRouter = express.Router();

const files = require("../controller/storecontroller");

userRouter.get("/",files.home);
userRouter.get("/book-page",files.booky);
userRouter.get("/fav-page",files.fav);
userRouter.post("/fav-page",files.addfav);
userRouter.get("/home-list",files.list);
userRouter.get("/HomeList/:homeId",files.getDetails);
userRouter.post("/favourite/delete/:homeId",files.removefav);
module.exports = userRouter; 