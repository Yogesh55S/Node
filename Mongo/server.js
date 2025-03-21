const express = require("express");
const path = require("path");
const app = express();

//--View engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//----Routing 
const userRouter = require("./Router/userouter");
const hostRouter = require("./Router/HostRouter");
const rootDir = require("./utils/path");
const {mongoconnect} = require("./utils/Database");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
app.use(hostRouter);
app.use(express.static(path.join(rootDir, 'public')));

//--- 404 page
app.use((req, res, next) => {
  res.status(404).render('Store/not');
});

//----Server
const PORT = 3001;
mongoconnect(client => {
  if (client) {
    console.log("Connected to MongoDB successfully!");
    app.listen(PORT, () => {
      console.log(`Your server started at http://localhost:${PORT}`);
    });
  } else {
    console.error("Failed to connect to MongoDB. Server not started.");
  }
});