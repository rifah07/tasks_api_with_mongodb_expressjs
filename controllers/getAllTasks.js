const mongoose = require("mongoose");

const getAllTasks = async (req, res) => {
  const tasksModel = mongoose.model("tasks");

  try {
    const tasksData = await tasksModel.find({});

    res.status(200).json({
      status: "All the data is here!",
      data: tasksData,
    });
  } catch (e) { 
    res.status(400).json({
      status: "Failed!",
      message: e.message,
    });
    return;
  }
};

module.exports = getAllTasks;
