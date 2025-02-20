const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  task_name: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
});

const tasksModel = mongoose.model("tasks", tasksSchema);

module.exports = tasksModel;
