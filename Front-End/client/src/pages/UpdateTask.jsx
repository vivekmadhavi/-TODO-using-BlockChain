import React from 'react'
import Navigation from './Navigation'

const UpdateTask = ({state}) => {

  const updateTask = async(event) =>{
    event.preventDefault();

    const {contract , account} = state
    const taskid = document.querySelector("#ID").value
    const taskname = document.querySelector("#Name").value
    const taskDate = document.querySelector("#Date").value
    
    try {
      const res = await fetch("http://localhost:4000/api/ethereum/update",{
        method:"POST",
        headers:{
          "Contain-Type":"application/json"
        },
        body: JSON.stringify({ taskDate: taskDate})
      })
      const data = await res.json()  
      console.log(data)
      if(data.status===200){
          await contract.methods.updateTask(taskid,taskname,taskDate).send({from:account})
          alert("task is updated")
      }else{
        alert("task can not be updated")
      }
    } catch (error) {
      
    }
  }

  return (
    <div>
      <Navigation/>
      <form onSubmit={updateTask}>
        ID.
        <input id='ID'/>
        Name.
        <input id='Name'/>
        DATE.
        <input id='Date'/>
        <button type='submit' >Update</button>
      </form>
    </div>
  )
}

export default UpdateTask
