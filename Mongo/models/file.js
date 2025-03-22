const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/Database");

module.exports = class Home {
  constructor(housename, price, location, rating, imageUrl, _id) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this._id = _id ? new ObjectId(_id) : null; // Convert _id to ObjectId if provided
  }

  // Save or update a house
  save() {
    const Db = getDb();
    if (this._id) {
      // Update existing house
      const updatedHouse = {
        housename: this.housename,
        price: this.price,
        location: this.location,
        rating: this.rating,
        imageUrl: this.imageUrl,
      };
      return Db.collection("house")
        .updateOne({ _id: this._id }, { $set: updatedHouse })
        .then((result) => {
          if (result.matchedCount === 0) {
            console.log("No matching document found. Update failed.");
          } else {
            console.log("House updated successfully:", result);
          }
          return result;
        })
        .catch((err) => {
          console.error("Error updating house:", err);
          throw err;
        });
    } else {
      // Insert new house
      return Db.collection("house")
        .insertOne(this)
        .then((result) => {
          console.log("House inserted successfully:", result);
          return result;
        })
        .catch((err) => {
          console.error("Error inserting house:", err);
          throw err;
        });
    }
  }

  // Fetch all houses
  static fetchAll() {
    const Db = getDb();
    return Db.collection("house")
      .find()
      .toArray()
      .then((houses) => {
        console.log("Fetched houses:", houses);
        return houses;
      })
      .catch((err) => {
        console.error("Error fetching houses:", err);
        throw err;
      });
  }

  // Find a house by ID
  static findById(homeId) {
    const Db = getDb();
    return Db.collection("house")
      .findOne({ _id: new ObjectId(homeId) })
      .then((house) => {
        console.log("Fetched house by ID:", house);
        return house;
      })
      .catch((err) => {
        console.error("Error fetching house by ID:", err);
        throw err;
      });
  }

  // Delete a house by ID
  static deleteById(homeId) {
    const Db = getDb();
    return Db.collection("house")
      .deleteOne({ _id: new ObjectId(homeId) })
      .then((result) => {
        console.log("House deleted successfully:", result);
        return result;
      })
      .catch((err) => {
        console.error("Error deleting house:", err);
        throw err;
      });
  }
};