const registerhomes = [];

module.exports = class Home {
  constructor(housename,Price,Location,Rating){
    this.housename = housename;
    this.Price = Price;
    this.Location = Location;
    this.Rating = Rating;
  }
  save(){
    registerhomes.push(this);
  }
  static fetchAll(){
    return registerhomes;
  }
}