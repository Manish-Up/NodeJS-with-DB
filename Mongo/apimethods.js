const express = require("express");
const dbConnect = require("./dbConnect");
const mongoDB = require("mongodb");
const app = express();

//get data from postman 
app.use(express.json());

//read data
app.get("/", async (req, resp) => {
    let data = await dbConnect();
    data= await data.find().toArray();
    //console.log(data);
    resp.send(data);
});

//insert data
app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result= await data.insertOne(req.body);
    //console.log(req.body);
    if(result.acknowledged ){
        console.log("One data Inserted")
    }
    resp.send(req.body);
});

//update data
app.put("/", async (req, resp) => {
    let data = await dbConnect();
    let result= await data.updateOne(
        {Name:req.body.Name},
        {  $set:req.body  }
    );
    //console.log(req.body);
    
    resp.send(req.body);
});
//by passing url to update
app.put("/:Name", async (req, resp) => {
    let data = await dbConnect();
    let result= await data.updateOne(
        {Name:req.params.Name},
        {  $set:req.body  }
    );
    //console.log(req.body);
    
    resp.send(req.body);
});

//delete data
app.delete("/:id", async (req, resp) => {
    let data = await dbConnect();
    let result= await data.deleteOne(
        {_id:new mongoDB.ObjectId(req.params.id)}
    );

    //console.log(req.body);
    
    resp.send(result);
});

app.listen(5001);
