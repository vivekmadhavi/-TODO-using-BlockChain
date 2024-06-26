import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <header>
      <div>TODO 3.0</div>
      <nav className='navbar'>
        <ul>
        <li><Link to="/view-all-tasks">view all Tasks</Link></li>
        <li><Link to="/create-task">create-task</Link></li>
        <li><Link to="/view-task">view task</Link></li>
        <li><Link to="/update-task">update task</Link></li>
        <li><Link to="/delete-task">Delete task</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
