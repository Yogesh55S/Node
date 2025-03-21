const Home = require("../models/file");
const favmodel = require("../models/favmodel");
exports.home=(req,res,next)=>{
  console.log("Now You are on Home page");
  res.render('Host/Home');
}
//--List -page
exports.list = (req,res,next)=>{
 Home.fetchAll().then(registerhomes=>{
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
    Home.fetchAll().then(registerhomes=>{
     const favHomes= registerhomes.filter(house => favourite.includes(house._id));
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
exports.removefav=(req,res,next)=>{
  const homeId = req.params.homeId;
  favmodel.deleteById(homeId,error=>{
    if(error){
      console.log("error are there",error);
    }
    res.redirect("/fav-page");
  })
}
exports.getDetails = (req,res,next)=>{
 const homeId = req.params.homeId;
 console.log("Home Id is -> ",homeId);
 Home.findById(homeId).then( house=>{
  if(!house){
    console.log("Home Not found");
  }else{
     console.log("Home Details",house);
     res.render("Store/HomeDetails",{
  house:house,
  });
 
 }});
 }