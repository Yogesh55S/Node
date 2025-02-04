 
  exports.files = (req,res,next)=>{
  console.log("Home Successfully Register ",req.body);

  const {housename,Price,Location,Rating} = req.body
  const home = new files = (housename,Price,Location,Rating);
  home.save();

  const registerhomes = this.files.fetchAll();
  console.log(registerhomes);
    res.render('added',{registerhomes : registerhomes});
  };
  exports.registerhomes= registerhomes;  