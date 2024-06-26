import React from 'react';
import { useState } from 'react';
import Navigation from './Navigation';

const CreateTask = ({ state }) => {
  const { web3, contract, account } = state;

  const createTask = async (event) => {
    event.preventDefault();

    const { contract, account } = state;
    const Name = document.querySelector("#Nametask").value;
    const taskDate = document.querySelector("#Datetask").value;
    
    try {
      const res = await fetch("http://localhost:4000/api/ethereum/create-task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ taskDate: taskDate })
      });

      const data = await res.json();
      if (data.status === 200) {
        if (contract && contract.methods) {
          await contract.methods
            .createTask(Name, taskDate)
            .send({ from: account });
          alert("Task is added");
        }
      } else {
        alert("Task cannot be added");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navigation />
      <form onSubmit={createTask}>
        <label>
          Name:
          <input id="Nametask" type="text" />
        </label>
        <label>
          Date:
          <input id="Datetask" type="date" />
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CreateTask;
