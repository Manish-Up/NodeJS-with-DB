const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");

const dirpath = path.join(__dirname, "uploads/");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      //cb=callback function
      cb(null, dirpath);
      //console.warn(dirpath)
    },
    filename: function (req, file, cb) {
        console.log(file);
      cb(null, Date.now() + path.extname(file.originalname))
    },
  }),
});

app.post("/upload", upload.single("image"), (req, resp) => {
  //resp.send("file upload");
  resp.json({
        success:1,
        profile_url:`http://127.0.0.1:5000/${dirpath}${req.file.filename}`
    })
});
function errHandler(err,req,reap,next){
    if(err instanceof multer.MulterError){
        reportError.json({
            success:0,
            message:err.message
        })
    }
}
app.use(errHandler);

app.listen(5000,()=>{
    console.warn("server starts")
});
