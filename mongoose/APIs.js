const express = require("express");

require("./config");
const Student = require("./student");

const app = express();

//get data from postman 
app.use(express.json());

//read data
app.get("/list",async (req, resp) => {
    let data =await Student.find();
    //console.log(data);
    resp.send(data);
});

//insert data
app.post("/create", async (req, resp) => {
    let data=new Student(req.body);
    let result =await data.save();
    //console.log(req.body);
    if(result.acknowledged ){
        console.log("One data Inserted")
    }
    resp.send(req.body);
});

//update data
app.put("/update", async (req, resp) => {
    let data=new Student(req.body);
    let result =await data.updateOne(
        req.body.Name,
        {  $set:req.body  }
    );
    //console.log(req.body);
    
    resp.send(req.body);
});
//by passing url to update
app.put("/update/:_id", async (req, resp) => {
    let data=await Student.updateOne(
        req.params,
        {  $set:req.body  }
    );
    //console.log(req.body);
    
    resp.send(req.body);
});

//delete data
app.delete("/delete/:_id", async (req, resp) => {
    let data =await Student.deleteOne(req.params);

    //console.log(req.body);
    
    resp.send(data);
});

app.listen(5005);
