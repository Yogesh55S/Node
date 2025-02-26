const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/path"); 
const favdata = path.join(rootDir,"Data","Fav.json");
module.exports = class Fav {

  static AddToFav(homeId,callback){
 Fav.getfav((favourite)=>{
    if(favourite.includes(homeId)){
      callback("home already there");
    }else{
      favourite.push(homeId);
      fs.writeFile(favdata,JSON.stringify(favourite),callback);
    }
  
  });
  }
  static getfav(callback){
 fs.readFile(favdata, "utf-8", (err, data) => {
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