const express = require("express");

const addTask = require("./controllers/addTask");

const app = express();

app.post("/api/tasks", addTask);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
