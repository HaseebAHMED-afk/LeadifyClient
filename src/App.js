import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Views/Dashboard';
import Register from './Views/Register';

const App = () => {
  return (
   <Routes>
    <Route path='register' element={<Register />} />
    <Route path='dashboard' element={<Dashboard />} />
   </Routes>
  )
}

export default App