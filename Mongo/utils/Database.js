const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

// Corrected connection string with URL-encoded password
const mongourl = "mongodb+srv://Yogesh55:Yash@cluster0.qyyx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let _db;
const mongoconnect = (callback) => {
  MongoClient.connect(mongourl)
    .then(client => {
      callback(client);
      _db= client.db('air');
    })
    .catch(err => {
      console.log("Error while connecting to MongoDB:", err);
    });
};
const getDb = ()=>{
//  if(!_db){
 //   throw new Error('Mongo Not Connected');
 // }
  return _db;
}
exports.mongoconnect = mongoconnect;
exports.getDb = getDb;