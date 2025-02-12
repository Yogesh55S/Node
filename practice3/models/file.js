const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
let registerhomes = [];
module.exports = class Home {
  constructor(housename,Price,Location,Rating){
    this.housename = housename;
    this.Price = Price;
    this.Location = Location;
    this.Rating = Rating;
  }
  save(){
    Home.fetchAll((registerhomes) =>{
      registerhomes.push(this);
    const homedata = path.join(rootDir,"Data","Home.json");
    fs.writeFile(homedata,JSON.stringify(registerhomes), error =>{
      console.log("file writing concluded",error);
    });
    })
  }

  static fetchAll(callback){
    const homedata = path.join(rootDir,"Data","Home.json");
    const fileContent = fs.readFile(homedata,(err,data)=>{
      callback(!err ? JSON.parse(data):[]);
    
  });
  }
}