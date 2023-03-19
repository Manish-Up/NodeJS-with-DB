const dbConnect= require('./dbConnect');

const insert = async()=>{
    let db =await dbConnect();
    const result =await db.insertMany(
        [
            {name:'Shyam',branch:'CS',lang:'CSS',cgpa:'7'},
            {name:'Salim',branch:'ECE',lang:'CSS',cgpa:'7'}
        ]
    )
    const result1 =await db.insertOne(
        {name:'Shyam',branch:'CS',langu:'micro',cgpa:'7'}
           
    )
    if(result.acknowledged ){
        console.log("Many data Inserted")
    }
    if(result1.acknowledged ){
        console.log("One data Inserted")
    }
}
insert();