const express = require("express");
const hostRouter = express.Router();

const files = require("../controller/files");

hostRouter.get("/add-page",files.gethome);
hostRouter.post("/add-page",files.addhome);
hostRouter.get("/list-page",files.list);
hostRouter.get("/book-page",files.booky);
hostRouter.get("/Fav-Page",files.fav);
module.exports = hostRouter;
 