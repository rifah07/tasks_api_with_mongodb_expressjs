const mongoose = require("mongoose");

const deleteTask = async (req, res) => {
  const tasksModel = mongoose.model("tasks");
  const task_id = req.params.task_id;

  const getTask = await tasksModel.findOne({
    _id: task_id,
  });

  if (!getTask) throw "Task not found!";

  await tasksModel.deleteOne({
    _id: task_id,
  });

  res.status(200).json({
    status: "Successfulll",
    message: "Task deleted successfully!",
  });
};

module.exports = deleteTask;