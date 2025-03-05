const mongoose= require("mongoose");

const deleteTask = async(req,res) =>{

    const tasksModel = mongoose.model("tasks");
    const task_id= req.params.task_id;

    try{
        await tasksModel.deleteOne({
            _id: task_id
        })

    }catch(e){
        res.status(400).json({
            status: "Failed!",
            message: e.message
        });
        return;
    }


    res.status(200).json({
        status: "Successfulll",
        message: "Task deleted successfully!",
    })

}

module.exports= deleteTask;