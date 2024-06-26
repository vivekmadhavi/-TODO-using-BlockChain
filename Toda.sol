// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0<0.9.0;


contract Toda{
    struct Task{
        uint  id;
        string name;
        string date;
    }
    address owner;
    Task task;
    mapping(uint=>Task)  tasks; //list of all task
    uint taskId = 1; //taskID

    modifier checkId(uint id){
        require(id!=0 && id<taskId,"invalid id");
        _;
    }
    modifier checkOwner(){
        require(owner==msg.sender,"invalid Owner");
        _;
    }

    constructor(){
        owner = msg.sender;
    }

    function createTask(string calldata _taskname,string calldata _date)  public {
        tasks[taskId] = Task(taskId,_taskname,_date);
        taskId++;
    }
    function updateTask(uint _taskId,string calldata _taskname,string calldata _date)  public{
        tasks[_taskId] = Task(_taskId,_taskname,_date);
    }
    function allTask() public view returns(Task[] memory){
        Task[] memory taskList = new Task[](taskId-1);
        for(uint i=0;i<taskId-1;i++){
            taskList[i]=tasks[i+1];
        }
        return taskList;
    }

    function viewTask(uint _taskId) checkId(_taskId) public view returns(Task memory){
        return tasks[_taskId];
    }

    function deleteTask(uint _taskId) checkId(_taskId) public {
        delete tasks[_taskId];
    }
}


// 0xC3350c1c6eB51A10C2ADD266bfb08AAc28920442
// 0xc3350c1c6eb51a10c2add266bfb08aac28920442