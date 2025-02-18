const addTask = (req, res) => {
  res.status(200).json({
    status: "It is add a Task route",
  });
};

module.exports = addTask;
