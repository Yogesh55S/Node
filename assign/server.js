const express = require("express");
const path = require("path");
const app = express();

//--View engine
app.set('view engine', 'ejs');
app.set( 'views', 'views');
//----Routng 
const userRouter = require("./Router/userouter");
const hostRouter = require("./Router/HostRouter");
const rootDir = require("./utils/path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( userRouter);
app.use( hostRouter);
app.use(express.static(path.join(rootDir, 'public')));
//----Server
const PORT = 3001;
app.listen(PORT,()=>{
  console.log(`You server start at http://Localhost:${PORT}`);
});