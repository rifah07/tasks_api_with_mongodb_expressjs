const mongoose= require("mongoose");

const editTask = async (req, res) =>{
      const tasksModel = mongoose.model("tasks");

      res.status(200).json({
        status: "This is from Edit TASK PART",
        

      })

}

module.exports= editTask;