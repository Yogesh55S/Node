const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  housename: {type: String,required: true,},
  price: {type: Number,required: true,},
  location: {type: String,required: true,},
  rating: {type: Number,required: true,},
  imageUrl: {type: String,required: true,},
});
module.exports = mongoose.model("Home", homeSchema);
/*
     save()
     fetchAll
     findById
     deleteById
*/
