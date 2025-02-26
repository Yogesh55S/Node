const Home = require("../models/file");
const favmodel = require("../models/favmodel");
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
  favmodel.getfav((favourite)=>{
    Home.fetchAll((registerhomes)=>{
     const favHomes= registerhomes.filter(house => favourite.includes(house.id));
      res.render('Store/fav',{favHomes:favHomes});
  });
});
}

exports.addfav=(req,res,next)=>{
  favmodel.AddToFav(req.body.id, error =>{
    if(error){
      console.log("error comes:- ",error);
    } 
     res.redirect("/fav-page");
  })


}
exports.getDetails = (req,res,next)=>{
 const homeId = req.params.homeId;
 console.log("Home Id is -> ",homeId);
 Home.findById(homeId, house=>{
  if(!house){
    console.log("Home Not found");
  }else{
     console.log("Home Details",house);
     res.render("Store/HomeDetails",{
  house:house,
  });
 
 }});
 }