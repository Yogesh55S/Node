const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/add-page",(req,res,next)=>{
  console.log("HostRouter Successfully Connected:-");
  res.write(`
    <h1>Add Page</h1>
    `)
});
module.exports = hostRouter;