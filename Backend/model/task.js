const {contract} = require("../contracts/contract.js")

 const dateclashCheck = async(taskDate)=>{
    const task = await contract.methods.allTask().call();
    const foundTask = task.find(task=>task.date===taskDate);

    if(foundTask){
        return foundTask.name;
    }
    return "NO task Found"
}

module.exports={
    dateclashCheck
}