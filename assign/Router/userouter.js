const express  = require("express");
const userRouter = express.Router();

const files = require("../controller/storecontroller");

userRouter.get("/",files.home);
userRouter.get("/book-page",files.booky);

module.exports = userRouter;