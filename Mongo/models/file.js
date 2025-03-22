
const { ObjectId } = require("mongodb");
const {getDb} = require("../utils/Database");
module.exports = class Home {
  constructor(housename, price, location, rating, imageUrl,_id) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this._id = _id;
  } 

 save() {
  const Db = getDb();
  if(this._id){
    const Upadethouse = {
      housename:this.housename,
      price:this.price,
      location:this.location,
      rating:this.rating,
      imageUrl:this.imageUrl,
    };
    return Db.collection("house").updateOne({_id:new ObjectId(String(this._id))},{$set: Upadethouse});
  }else{
     return Db.collection("house").insertOne(this).then((result) =>{
    console.log(result);
  })
  }
}
 
   static fetchAll(callback) {
    const Db = getDb();
    return Db.collection("house").find().toArray().then((house)=>{
      console.log(house);
      return house;
    })
}
static  findById(homeId){
  const Db = getDb();
  return Db.collection("house").find({_id:new ObjectId(String(homeId))}).next();
}
static  deleteById(homeId){
  const Db = getDb();
  return Db.collection("house").deleteOne({_id:new ObjectId(String(homeId))});
}
}
