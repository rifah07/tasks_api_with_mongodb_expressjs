const addTask = (req, res) => {
  const { task_name, status } = req.body;

  //validations

  //successful

  res.status(200).json({
    status: "Yeah! Done.",
    message: "A new task added successfully",
  });
};

module.exports = addTask;
