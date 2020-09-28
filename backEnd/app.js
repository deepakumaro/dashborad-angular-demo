const express = require("express");
const bodyParser = require("body-parser");
require("./dbConnect");

const app = express();
const Student = require("./models/student");
const student = require("./models/student");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.post("/api/student", (req, res) => {
  const student = new Student({
    name: req.body.name,
    dis: req.body.dis,
  });
  student.save().then((studentCreated) => {
    console.log(studentCreated);
    res
      .status(201)
      .json({ msg: "Post Save Successfully", _id: studentCreated._id });
  });
});

app.delete("/api/student/:_id", (req, res) => {
  console.log(req.params._id);
  student.deleteOne({ _id: req.params._id }).then((result) => {
    console.log(result);
    res.status(200).json({ msg: "Record deleted" });
  });
});

app.use("/api/studentList", (req, res) => {
  student.find({}).then((studentList) => {
    console.log(studentList);
    res.status(200).json({
      msg: "List Fetch Successfully",
      list: studentList,
    });
  });
});



module.exports = app;
