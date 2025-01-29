const express = require("express");
const path = require("path");
const app = express();
const rootDir = __dirname;

const userRouter = require("./user");
const hostRouter = require("./host");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
app.use(hostRouter);
app.use(express.static(path.join(rootDir, 'public')));

app.use((req, res, next) => {
  res.status(404).send(`
    <h1> 404 Page not found
    `);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});