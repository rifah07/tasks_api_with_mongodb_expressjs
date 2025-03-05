const mongoose= require("mongoose");

const deleteTask = async(req,res) =>{

    const tasksModel = mongoose.model("tasks");

    try{
        await tasksModel.findByIdAndDelete({
            _id: teq.params._id
        })

    }catch(e){
        res.status(400).json({
            status: "Failed!",
            message: e.message
        });
        return;
    }


    res.status(200).json({
        status: "This is delete task part"
    })

}

module.exports= deleteTask;