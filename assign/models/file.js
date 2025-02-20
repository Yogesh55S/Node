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
  Home.fetchAll(registerhomes=>{
    registerhomes.push(this);
  const homedata = path.join(rootDir,"Data","Home.json");
  fs.writeFile(homedata,JSON.stringify(registerhomes), error =>{
    console.log("file writing concluded",error);
  });
  });
   }
 
   static fetchAll(callback){
     const homedata = path.join(rootDir,"Data","Home.json");
     const fileContent = fs.readFile(homedata,(err,data)=>{
       callback(!err ? JSON.parse(data):[]);
   });
   } 
}