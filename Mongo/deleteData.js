const dbConnect= require('./dbConnect');

const delet = async()=>{
    let db =await dbConnect();
   const result =await db.deleteMany(
        {Name:'Mohit'}
    )
    const result1 =await db.deleteOne(
        {langu:'micro'}
    )
    if(result.deletedCount ){
        console.log("Many data Deleted")
    }
    if(result1.deletedCount ){
        console.log("One data Deleted")
    }
    console.log(result1,result);
}
delet();