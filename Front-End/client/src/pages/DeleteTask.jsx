import React from 'react'
import Navigation from './Navigation'

const DeleteTask = ({state}) => {

  const deletetask = async(event) =>{
    event.preventDefault();

    const {contract , account} = state
    const taskid = document.querySelector("#ID").value
    
    try {
      await contract.methods.deleteTask(taskid).send({from:account})
      alert("task is updated")
    } catch (error) {
      console.log('Error',error)
    }
  }
  return (
    <div>
      <Navigation/>
      <form onSubmit={deletetask}>
        ID.
        <input id='ID'/>
        <button type='submit' >delete</button>
      </form>
    </div>
  )
}

export default DeleteTask
