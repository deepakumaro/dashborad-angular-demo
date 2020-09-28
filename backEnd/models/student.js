const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  dis: { type: String, required: true },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
