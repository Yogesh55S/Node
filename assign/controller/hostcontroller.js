const Home = require("../models/file");

//--That is for Home page rendering
exports.gethome=(req,res,next)=>{
  console.log("Now you are on Add Page");
    res.render('Host/Edit-Home',{
      editing:false,
    });
  }
 
  exports.getedithome=(req,res,next)=>{
    const homeId = req.params.homeId;
    const editing = req.query.editing === 'true';
    Home.findById(homeId,house=>{
      if(!house){
        console.log("home not found");
       return  res.redirect("Host/Homedit");
      }
      console.log(homeId,editing,house);
      res.render('Host/Edit-Home', {
        house:house,
        editing:editing,});
    })
    }
//---Add-page
exports.addhome = (req,res,next)=>{
  const {housename,price,location,rating,imageUrl} = req.body;
  const home = new Home (housename,price,location,rating,imageUrl);
  home.save();

  const registerhomes = Home.fetchAll((registerhomes)=>{
     res.render('/Host/Homedit',{registerhomes:registerhomes});
    console.log(registerhomes);
  });
  }
  
  exports.Postedithome = (req,res,next)=>{
    const {id,housename,price,location,rating,imageUrl} = req.body;
    const home = new Home (housename,price,location,rating,imageUrl);
    home.id = id;
    home.save();
    res.redirect("Host/Homedit");
    }

exports.list=(req,res,next)=>{
  const registerhomes = Home.fetchAll((registerhomes)=>{
    res.render('Host/Homedit',{registerhomes:registerhomes});
 }); 
}
