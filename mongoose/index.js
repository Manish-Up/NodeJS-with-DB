const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ecb");

const studentSchema = new mongoose.Schema({
  Name: String,
  Branch: String,
  Language: String,
  cgpa: Number,
});

//insert data
const saveDB = async () => {
  const studentModel = mongoose.model("students", studentSchema);

  let data = new studentModel({
    Name: "Sanyaj",
    Branch: "It",
    Language: "C++",
    cgpa: 8
  });
  let result = await data.save();
  console.warn(result);
};

//update data
const updateDB =async()=>{    
    const studentModel = mongoose.model("students", studentSchema);
    let data= await studentModel.updateOne(
        {Branch:"It"},
        {
            $set:{Branch:"IT"}
        }
    )
    console.log(data);
}

//delete data
const deleteDB =async()=>{    
    const studentModel = mongoose.model("students", studentSchema);
    let data= await studentModel.deleteOne(
        {Name:"Sanyaj"}
    )
    console.log(data);
}

//find data
const findDB =async()=>{    
    const studentModel = mongoose.model("students", studentSchema);
    let data= await studentModel.find({Name:"Sanyaj"})
    console.log(data);
}

//saveDb();
//updateDB();
//deleteDB();
//findDB();