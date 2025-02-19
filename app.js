const express = require("express");

const addTask = require("./controllers/addTask");

const mongoose = require("mongoose");

//connection to mongodb

mongoose.connect();

const app = express();

//routes

app.post("/api/tasks", addTask);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
