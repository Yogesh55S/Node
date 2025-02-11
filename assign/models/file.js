const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/path"); // Ensure this is correctly imported
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
    Home.fetchAll((registerhomes) => {
      registerhomes.push(this);
      const homedata = path.join(rootDir, "Data", "Home.json");
      fs.writeFile(homedata, JSON.stringify(registerhomes), (error) => {
        if (error) {
          console.log("File writing error:", error);
        } else {
          console.log("File writing concluded successfully");
        }
      });
    });
  }

  static fetchAll(callback) {
    const homedata = path.join(rootDir, "Data", "Home.json");
    const fileContent=fs.readFile(homedata, (err, data) => {
     callback(!err ? JSON.parse(data):[]);
    });
  }
}