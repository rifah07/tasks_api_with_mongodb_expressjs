const mongoose=require("mongoose");

const addTask = (req, res) => {
  const { task_name, status } = req.body;

  const validStatuses = ["pending", "completed"];

  //validations

  try {
    if (!task_name) throw "Task name is required";
    if (!status) throw "Task status is required";
    if (!validStatuses.includes(status.toLowerCase()))
      throw "Task status must be 'Pending' or 'Completed'";
  } catch (e) {
    res.status(400).json({
      status: "Failed!",
      message: e,
    });
    return;
  }

  //successful

  res.status(200).json({
    status: "Yeah! Done.",
    message: "A new task added successfully",
  });
};

module.exports = addTask;
