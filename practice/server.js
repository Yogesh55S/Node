const express = require("express");
const app = express();

const userRouter = require("./user");
const hostRouter = require("./host");


app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  res.status(404).send(`
    <h1> 404 Page not found
    `);
});
PORT = 3001;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});