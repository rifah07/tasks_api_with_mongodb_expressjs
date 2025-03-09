const mongoose = require("mongoose");

const getSingleTask = async (req, res) => {
  const tasksModel = mongoose.model("tasks");

  const tasksData = await tasksModel.findOne({
    _id: req.params.task_id,
  });
  if (!tasksData) {
    throw "There is no task like this";
  } else {
    res.status(200).json({
      status: "Data is here!",
      message: tasksData,
    });
  }
};

module.exports = getSingleTask;