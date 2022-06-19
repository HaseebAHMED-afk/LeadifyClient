import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Views/Dashboard/Dashboard';
import Register from './Views/Auth/Register';
import './App.css'
import Login from './Views/Auth/Login';

const App = () => {
  return (
   <Routes>
    <Route path='register' element={<Register />} />
    <Route path='login' element={<Login />} />
    <Route path='dashboard' element={<Dashboard />} />
   </Routes>
  )
}

export default App