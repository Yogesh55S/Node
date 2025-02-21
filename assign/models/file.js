const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/path"); 
let registerhomes = [];
module.exports = class Home {
  constructor(housename, price, location, rating, imageUrl) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  } 

 save(){
    this.id = Math.random().toString();
  Home.fetchAll(registerhomes=>{
    registerhomes.push(this);
  const homedata = path.join(rootDir,"Data","Home.json");
  fs.writeFile(homedata,JSON.stringify(registerhomes), error =>{
  });
  });
   }
 
   static fetchAll(callback) {
    const homedata = path.join(rootDir, "Data", "Home.json");
    fs.readFile(homedata, "utf-8", (err, data) => {
        if (err) {
            callback([]); 
        } else {
            try {
                callback(JSON.parse(data));
            } catch (parseError) {
                callback([]);
            }
        }
    });
}
}