const Home =require("../models/file");

//--That is for Home page rendering
exports.gethome=(req,res,next)=>{
  console.log("Now you are on Add Page");
    res.render('addpage');
  }
//---Add-page
exports.addhome = (req,res,next)=>{
  // console.log(req.body);
  // registerhomes.push(req.body);
  // res.render('Homelist',{registerhomes:registerhomes});
  const {housename,price,location,rating,imageUrl} = req.body;
  const home = new Home (housename,price,location,rating,imageUrl);
  home.save();

  const registerhomes = Home.fetchAll((registerhomes)=>{
     res.render('Homelist',{registerhomes:registerhomes});
    console.log(registerhomes);
  });
   
  }
//--List -page
exports.list = (req,res,next)=>{
 const registerhomes = Home.fetchAll((registerhomes)=>{
  res.render('HomeList',{registerhomes:registerhomes});
 });
 
}
//--Booking Page--
exports.booky = (req,res,next)=>{
  console.log("This is My Booking Page");
}