const mysql = require("mysql");

const studentSchema = new mongoose.Schema({
    Name: String,
    Branch: String,
    Language: String,
    cgpa: Number
});

module.exports = mongoose.model("students", studentSchema);