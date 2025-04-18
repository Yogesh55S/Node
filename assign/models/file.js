const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/path"); 
const homedata = path.join(rootDir,"Data","Home.json");
let registerhomes = [];
module.exports = class Home {
  constructor(housename, price, location, rating, imageUrl) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  } 

 save() {
  Home.fetchAll(registerhomes => {
    if (this.id) {
      // Update existing house
      const existingIndex = registerhomes.findIndex(house => house.id === this.id);
      if (existingIndex >= 0) {
        registerhomes[existingIndex] = this;
      }
    } else {
      // Add new house
      this.id = Math.random().toString();
      registerhomes.push(this);
    }
    fs.writeFile(homedata, JSON.stringify(registerhomes), error => {
      if (error) {
        console.error("Error saving data:", error);
      }
    });
  });
}
 
   static fetchAll(callback) {
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
static  findById(homeId,callback){
this.fetchAll(Home =>{
  const homefound = Home.find(house => house.id == homeId);
callback(homefound);
})
}
static  deleteById(homeId,callback){
  this.fetchAll(Home =>{
    Home = Home.filter(house => house.id !== homeId);
    fs.writeFile(homedata, JSON.stringify(Home), callback);
  })
  }
}
