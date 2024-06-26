import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const ViewAllTask = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/ethereum/view-all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await res.json();
        if (data.status === 200) {
          console.log(data.taskList);
          setTaskList(data.taskList);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="view-all-task-container">
      <Navigation />
      <center>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((item) => (
              <tr key={item.taskId}>
                <td>{item.taskId}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </center>
    </div>
  );
};

export default ViewAllTask;
