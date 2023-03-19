const dbConnect= require('./dbConnect');

const update = async()=>{
    let db =await dbConnect();
   const result =await db.updateMany(
    {Branch:'ECE'},{
        $set:{cgpa:8,backlog:0}
    }
    )
    const result1 =await db.updateOne(
        {name:'Shyam'},{
            $set:{branch:'ECE',language:'HTML',cgpa:9}
        }
    )
    if(result.modifiedCount ){
        console.log("Many data Inserted")
    }
    if(result1.modifiedCount ){
        console.log("One data Inserted")
    }
    console.log(result1,result);
}
update();