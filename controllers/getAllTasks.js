const mongoose = require("mongoose");

const getAllTasks = async (req,res) =>{
    const tasksModel = mongoose.model("tasks");

    const tasksData= await tasksModel.find({})

    res.status(200).json({
        status: "This is get All Tasks part",
        data: tasksData
    })
    

}

module.exports= getAllTasks;