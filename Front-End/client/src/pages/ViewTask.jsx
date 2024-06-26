import React, { useState } from 'react'
import Navigation from './Navigation';

const ViewTask = () => {
  const[task,setTask]=useState([]);

  const viewTask = async(event) =>{
    try {
      event.preventDefault();
      const taskId = document.querySelector("#taskID").value;
      const res = await fetch(`http://localhost:4000/api/ethereum/view-task/${taskId}`,{
        method:"GET",
        header:{
          "content-type":"application/json"
        }

    })
    const data =await res.json()
    if(data.status===200){
      console.log(data.taskObj)
      setTask(data.taskObj)
    }else{
      throw new Error;
    }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
    <Navigation/>
    <form onSubmit={viewTask}>
      <label>
      ID:
      <input id="taskID"/>
      </label>
      <button type='submit'>View Task</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{task.numId}</td>
          <td>{task.name}</td>
          <td>{task.date}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default ViewTask
