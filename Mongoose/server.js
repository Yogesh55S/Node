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
const { default: mongoose } = require("mongoose");

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
const DBpath = "mongodb+srv://Yogesh55:Yash@cluster0.qyyx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DBpath).then(() => {
  console.log("Connected to MongoDB successfully!");
}).catch(error => {
  console.log("Error connecting to MongoDB:", error);
});
app.listen(PORT, () => {
  console.log(`Your server started at http://localhost:${PORT}`); 
});