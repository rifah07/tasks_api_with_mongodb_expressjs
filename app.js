const express = require("express");
require("dotenv").config();
const addTask = require("./controllers/addTask");
const getAllTasks = require("./controllers/getAllTasks");
const getSingleTask = require("./controllers/getSingleTask");
const editTask = require("./controllers/editTask");
const deleteTask = require("./controllers/deleteTask");
const taskFilter = require("./controllers/taskFilter");


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
app.get("/api/tasks/:task_id", getSingleTask);
app.patch("/api/tasks/", editTask);
app.delete("/api/tasks/:task_id", deleteTask);

//open AI Suggestion
app.get("/api/tasks/openai/getImportantTasks", taskFilter);

app.listen(8000, () => {
  console.log("Server started successfully!");
});