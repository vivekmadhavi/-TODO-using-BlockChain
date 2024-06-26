import './App.css'
// import { Browser, Routes, Route } from "react-router-dom";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import CreateTask from './pages/CreateTask';
import ViewTask from './pages/ViewTask';
import ViewAllTask from './pages/ViewAllTask';
import UpdateTask from './pages/UpdateTask';
import DeleteTask from './pages/DeleteTask';
import Wallet from './pages/Wallet';
import { useState } from 'react';


function App() {

  const [state,setState]=useState({web3:null,contract:null,account:null})


  const saveState=({web3,contract,account})=>{
    console.log('Saving state:', { web3, contract, account });
    setState({web3:web3,contract:contract,account:account})
  }
  

  const router = createBrowserRouter([
    {path:'/',element:<Wallet saveState={saveState}/>},
    {path:'/view-all-tasks',element:<ViewAllTask/>},
    {path:'/create-task',element:<CreateTask state={state}/>},
    {path:'/view-task',element:<ViewTask/>},
    {path:'/update-task',element:<UpdateTask state={state}/>},
    {path:'/delete-task',element:<DeleteTask  state={state}/>}
  ])
  console.log('Current state:', state);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
