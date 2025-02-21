const express  = require("express");
const userRouter = express.Router();

const files = require("../controller/storecontroller");

userRouter.get("/",files.home);
userRouter.get("/book-page",files.booky);
userRouter.get("/fav-page",files.fav);
userRouter.get("/home-list",files.list);
module.exports = userRouter; 