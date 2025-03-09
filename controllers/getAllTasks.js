const mongoose = require("mongoose");

const getAllTasks = async (req, res) => {
  const tasksModel = mongoose.model("tasks");

  const tasksData = await tasksModel.find({});

  res.status(200).json({
    status: "All the data is here!",
    data: tasksData,
  });
};

module.exports = getAllTasks;