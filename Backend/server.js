const task = require("./routes/routes.js")
const express = require("express")
const cors = require("cors")
// const ABI = require("./ABI.json")
// const { Web3 } = require("web3")
const app = express()
app.use(cors())
app.use(express.json());

// const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/nwqaPDL7rptxjKkct5PkMpd4TxQnvOV_")

// const contractAddress = "0xd3e09df7ad691fef37a7d9b004898116abc4d305";

// const contract = new web3.eth.Contract(ABI, contractAddress)

// const dateclashCheck = async(taskDate)=>{
    // const task = await contract.methods.allTask().call();
    // const foundTask = task.find(task=>task.date===taskDate);

    // if(foundTask){
    //     return foundTask.name;
    // }
    // return "NO task Found"
// }


app.use("/api/ethereum",task)
    // const {taskDate} =req.body;
    // const task = await dateclashCheck(taskDate)
    // try {
    //     if(task!="NO task Found"){
    //         res.status(409).json({status:409,message:"Date Clash"})
    //     }else{
    //         res.status(200).json({status:200,message:"task can  be added"})
    //     }
    // } catch (error) {
    //     console.error(error)
    // }
// })



// app.post("/api/ethereum/update",async(req,res)=>{
    // const {taskDate} = req.body;
    // const task = await dateclashCheck(taskDate)
    // try {
    //     if(task!="NO task Found"){
    //         res.status(409).json({status:409,message:"Date Clash"})
    //     }else{
    //         res.status(200).json({status:200,message:"task can  be added"})
    //     }
    // } catch (error) {
    //     console.error(error)
    // }
// })

// const decodedError = web3.eth.abi.decodeParameter('string', errorData.slice(10));
// // console.log(decodedError);
// const viewTask = async() =>{
//     const task = await contract.methods.viewTask(1).call();
//     console.log(task)
// }

// viewTask()

// app.get("/api/ethereum/view-task/:tid", async (req, res) => {
    // try {
    //     const { tid } = req.params;
    //     const task = await contract.methods.viewTask(tid).call();
    //     const { id, name, date } = task;
    //     const numId = Number(id); //because it is in 1n :- big in format so to convert it 
    //     const taskObj = {
    //         numId, name, date
    //     }
    //     res.status(200).json({ status: 200, taskObj, message: "Task Exist" })
    // } catch (error) {
    //     res.status(500).json({ status: 500, message: "Task ID does NOT exist" })
    // }
// })

// app.get("/api/ethereum/view-all", async (req, res) => {
    // try {
    //     const task = await contract.methods.allTask().call();
    //     if (task.length < 0) {
    //         res.status(404).json({ status:404, message: "task does not exist" })
    //     }
    //     else {
    //         const taskList = task.map(({ id, name, date }) => {
    //             const taskId = Number(id);
    //             return { taskId, name, date }
    //         })
    //         res.status(200).json({ status: 200,taskList, message: "Task Exist" })
    //     }
    // } catch (error) {
    //     res.status(500).json({ status: 500, message: "Task ID does NOT exist" })
    // }
// })



app.listen(4000, () => {
    console.log("server")
})