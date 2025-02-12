// const path = require("path");
// const fs = require("fs");
// const rootDir = require("../utils/path"); 
const registerhomes = [];
module.exports = class Home {
  constructor(housename, price, location, rating, imageUrl) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  save() {
      registerhomes.push(this);
  }

  static fetchAll() {
    return registerhomes;
  }
}