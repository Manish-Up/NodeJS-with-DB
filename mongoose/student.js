const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    Name: String,
    Branch: String,
    Language: String,
    cgpa: Number
});

module.exports = mongoose.model("students", studentSchema);