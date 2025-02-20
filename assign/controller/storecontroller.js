const Home = require("../models/file");

exports.home=(req,res,next)=>{
  console.log("Now You are on Home page");
  res.render('Host/Home');
}
//--List -page
exports.list = (req,res,next)=>{
 const registerhomes = Home.fetchAll((registerhomes)=>{
  res.render('Store/HomeList',{registerhomes:registerhomes});
 });
 
}
//--Booking Page--
exports.booky = (req,res,next)=>{
  console.log("Now are on Booking Page");
  res.render('Store/booky'); 
}
exports.fav = (req,res,next)=>{
  console.log("Now are on Fav Page");
  res.render('Store/fav'); 
}