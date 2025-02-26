const addTask = (req, res) => {
  const { task_name, status } = req.body;

  const validStatuses = ["pending", "completed"];

  //validations

  if (!task_name) {
    res.status(400).json({
      status: "Failed!",
      message: "Task name must be provided",
    });
    return;
  }

  if (!status) {
    res.status(400).json({
      status: "Failed!",
      message: "Task status must be provided",
    });
    return;
  }

  if (!validStatuses.includes(status.toLowerCase())) {
    res.status(400).json({
      status: "Failed!",
      message: "Task status must be 'Pending' or 'Completed'",
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
