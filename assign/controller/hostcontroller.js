const Home = require("../models/file");

//--That is for Home page rendering
exports.gethome=(req,res,next)=>{
  console.log("Now you are on Add Page");
    res.render('Host/addpage');
  }
//---Add-page
exports.addhome = (req,res,next)=>{
  const {housename,price,location,rating,imageUrl} = req.body;
  const home = new Home (housename,price,location,rating,imageUrl);
  home.save();

  const registerhomes = Home.fetchAll((registerhomes)=>{
     res.render('Host/Homedit',{registerhomes:registerhomes});
    console.log(registerhomes);
  });
  }
exports.list=(req,res,next)=>{
  const registerhomes = Home.fetchAll((registerhomes)=>{
    res.render('Host/Homedit',{registerhomes:registerhomes});
 });
}
