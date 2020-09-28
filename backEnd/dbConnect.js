const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://deepak:MsAaIx4ZA9OoXd9v@cluster0.bdbss.mongodb.net/node-angular-dashboard",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to databse");
  })
  .catch((error) => {
    console.log("Err in connecting to db", error);
  });
