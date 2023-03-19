const express = require("express");
const app = express();

const conn = require("./config");
/*
conn.query("select * from student",(err,result)=>{
  console.log("result :",result);
});
*/

//get data from postman
app.use(express.json());

//read data
app.get("/list", (req, resp) => {
  conn.query("select * from student", (err, result) => {
    if (err) {
      resp.send(err);
    } else {
      resp.send(result);
    }
  });
});

//insert data
app.post("/create", (req, resp) => {
  //const data = {sn:30,sname:"manish",avgr:56}
  const data =req.body;
  conn.query("insert into student set ?",data, (error, results,fields) => {
    if (error) throw error ;
    resp.send(results);
  });
});

//update data statically
app.put("/update", (req, resp) => {
  const data =["Mohan",86,8];

  conn.query("update student set sname=?,avgr=? where sn=?",data, (error, results,fields) => {
    if (error) throw error ;
    resp.send(results);
  });
});
//by passing url to update data dimenamically
app.put("/update/:id",(req, resp) => {
  //const data =["Mohan",86,8];
  const data =[req.body.sname,req.body.avgr,req.params.id]
  conn.query("update student set sname=?,avgr=? where sn=?",data, (error, results,fields) => {
    if (error) throw error ;
    resp.send(results);
  });
});

//delete data
app.delete("/delete/:id",(req, resp) => {
  const data =req.params.id;
  conn.query("delete from student where sn=?",data, (error, results,fields) => {
    if (error) throw error ;
    resp.send(results);
  });
});

app.listen(5005);
