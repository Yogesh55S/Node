const Home = require("../models/file");

exports.addhome = (req, res, next) => {
  const { houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.save();

  Home.fetchAll((registerhomes) => {
    res.render('HomeList', { registerhomes: registerhomes });
    console.log(registerhomes);
  });
};