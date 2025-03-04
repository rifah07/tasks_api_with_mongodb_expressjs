const mongoose = require("mongoose");

const editTask = async (req, res) => {
  const tasksModel = mongoose.model("tasks");
  const { task_id, task_name, status } = req.body;


  try {
    if (!task_id) throw "Task ID is required";
  }
  catch (e) {
    res.status(400).json({
      status: "Failed!",
      message: "Task Id is required",
    });
    return;
  }

  try {
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
  } catch (e) {
    res.status(400).json({
      status: "failed!",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Task updated Successfully!",
  });
};

module.exports = editTask;