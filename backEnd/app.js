const express = require("express");

const app = express();

app.use((req, res) => {
  res.set("hello from backend server");
});

module.exports = app;
