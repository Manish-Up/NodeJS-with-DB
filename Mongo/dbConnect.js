const { MongoClient } = require('mongodb');

//const MongoClient= require('mongodb').MongoClient; another way to use mongodb
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'ecb';

async function dbConnect() {
  // Use connect method to connect to the server
  let result= await client.connect();
  console.log('Connected successfully to server');

  const db = result.db(dbName);

  return db.collection('students');

}
//dbConnect().then((resp)=>{
//    resp.find().toArray().then((data)=>{
//        console.warn(data)
//    })
//})


//dbConnect();

module.exports=dbConnect;