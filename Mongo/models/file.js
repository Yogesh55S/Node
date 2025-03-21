
const {getDb} = require("../utils/Database");
module.exports = class Home {
  constructor(housename, price, location, rating, imageUrl) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  } 

 save() {
  const Db = getDb();
  return Db.collection("house").insertOne(this).then((result) =>{
    console.log(result);
  })
}
 
   static fetchAll(callback) {
    
}
static  findById(homeId,callback){

}
static  deleteById(homeId,callback){
 
}
}
