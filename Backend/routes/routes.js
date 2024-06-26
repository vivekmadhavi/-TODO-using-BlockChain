const express = require('express')

const {CreateTask, Updatetask, ViewTask, allTask} = require("../controller/Controller.js")
const router = express.Router();

router.post("/create-task", CreateTask);
router.post("/update", Updatetask);
router.get("/view-task/:tid", ViewTask);
router.get("/view-all", allTask);


module.exports=router;

