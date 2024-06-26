const {dateclashCheck} = require("../model/task.js")
const {contract} = require("../contracts/contract.js")

const CreateTask =async(req,res) =>{
    const {taskDate} =req.body;
    const task = await dateclashCheck(taskDate)
    try {
        if(task!="NO task Found"){
            res.status(409).json({status:409,message:"Date Clash"})
        }else{
            res.status(200).json({status:200,message:"task can  be added"})
        }
    } catch (error) {
        console.error(error)
    }
}


 const   Updatetask = async(req,res) =>{
    const {taskDate} = req.body;
    const task = await dateclashCheck(taskDate)
    try {
        if(task!="NO task Found"){
            res.status(409).json({status:409,message:"Date Clash"})
        }else{
            res.status(200).json({status:200,message:"task can  be added"})
        }
    } catch (error) {
        console.error(error)
    }
}
const ViewTask = async(req,res) =>{
    try {
        const { tid } = req.params;
        const task = await contract.methods.viewTask(tid).call();
        const { id, name, date } = task;
        const numId = Number(id); //because it is in 1n :- big in format so to convert it 
        const taskObj = {
            numId, name, date
        }
        res.status(200).json({ status: 200, taskObj, message: "Task Exist" })
    } catch (error) {
        res.status(500).json({ status: 500, message: "Task ID does NOT exist" })
    }
}


const allTask = async(req,res) =>{
    try {
        const task = await contract.methods.allTask().call();
        if (task.length < 0) {
            res.status(404).json({ status:404, message: "task does not exist" })
        }
        else {
            const taskList = task.map(({ id, name, date }) => {
                const taskId = Number(id);
                return { taskId, name, date }
            })
            res.status(200).json({ status: 200,taskList, message: "Task Exist" })
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: "Task ID does NOT exist" })
    }
}


module.exports={
    CreateTask,
    Updatetask,
    ViewTask,
    allTask
}