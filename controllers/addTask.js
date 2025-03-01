const mongoose = require("mongoose");

const addTask = async (req, res) => {
  const tasksModel = mongoose.model("tasks");

  const { task_name, status } = req.body;

  const validStatuses = ["pending", "completed"];

  //validations

  try {
   // if (!task_name) throw "Task name is required";
    if (!status) throw "Task status is required";
    if (!validStatuses.includes(status.toLowerCase()))
      throw "Task status must be 'Pending' or 'Completed'";
  } catch (e) {
    res.status(400).json({
      status: "Failed!",
      message: e.message,
    });
    return;
  }

  //successful

  try {
    const createTask = await tasksModel.create({
      task_name: task_name,
      status: status,
    });
    console.log(createTask);
  } catch (e) {
    res.status(400).json({
      status: "Failed!",
      message: "New task couldn't be added. Something went wrong.",
    });
    return;
  }

  res.status(200).json({
    status: "Yeah! Done.",
    message: "A new task added successfully",
  });
};

module.exports = addTask;