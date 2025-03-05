const mongoose = require("mongoose");

const getSingleTask = async (req, res) => {
  const tasksModel = mongoose.model("tasks");



  try {
    const tasksData = await tasksModel.findOne({
      _id: req.params.task_id,
    });
    if (!tasksData) {
      throw "There is no task like this";
    }
    else {
      res.status(200).json({
        status: "Data is here!",
        message: tasksData,

      });
    }
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
    return;
  }
};

module.exports = getSingleTask;