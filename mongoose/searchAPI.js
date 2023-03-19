const express = require("express");

require("./config");
const Student = require("./student");

const app = express();

//get data from postman 
app.use(express.json());

//search  data
app.get("/search/:key",async (req, resp) => {
    let data =await Student.find(
        {
           "$or" :[
                {"Name":{$regex:req.params.key}},
                {"Branch":{$regex:req.params.key}},
                {"Language":{$regex:req.params.key}}
           ]
        }
    );
    //console.log(data);
    resp.send(data);
});


app.listen(5005);
