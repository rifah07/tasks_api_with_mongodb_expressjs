const express = require("express");
require("dotenv").config();
const addTask = require("./controllers/addTask");
const getAllTasks = require("./controllers/getAllTasks");

const mongoose = require("mongoose");

//connection to mongodb

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("MongoDB Connected successfully!");
  })
  .catch(() => {
    console.log("MongoDB could not connected.");
  });

const app = express();

app.use(express.json());

require("./models/tasks.model");

//routes

app.post("/api/tasks", addTask);
app.get("/api/tasks", getAllTasks);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
