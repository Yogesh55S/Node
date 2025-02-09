 const Home = require("../models/file")
 
  exports.addhome = (req,res,next)=>{
  //console.log("Home Successfully Register ",req.body);

  const {housename,Price,Location,Rating} = req.body
  const home = new Home (housename,Price,Location,Rating);
  home.save();

  const registerhomes =Home.fetchAll((registerhomes)=>{
     res.render('added',{registerhomes : registerhomes});
  });
  console.log(registerhomes);
   
  };
  //exports.registerhomes = registerhomes;  