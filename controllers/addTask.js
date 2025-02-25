const addTask = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "It is add a Task route",
  });
};

module.exports = addTask;
