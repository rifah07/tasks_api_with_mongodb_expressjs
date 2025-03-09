const mongoose = require("mongoose");

const editTask = async (req, res) => {
  const tasksModel = mongoose.model("tasks");
  const { task_id, task_name, status } = req.body;

  if (!task_id) throw "Task ID is required";

  await tasksModel.updateOne(
    {
      _id: task_id,
    },
    {
      task_name: task_name,
      status: status,
    },
    {
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "Success",
    message: "Task updated Successfully!",
  });
};

module.exports = editTask;