import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Views/Dashboard/Dashboard';
import Register from './Views/Auth/Register';
import './App.css'
import Login from './Views/Auth/Login';
import LayoutWrapper from './Components/Layout/LayoutWrapper';
import SearchModal from './Components/Modals/SearchModal';
import { useSelector , useDispatch } from 'react-redux'
import { toggleSearch } from './Redux/Reducers/Search';
import AddEmployee from './Views/Auth/AddEmployee';
import EmployeeBoard from './Views/Dashboard/EmployeeBoard';
import Employees from './Views/Dashboard/Employees';
import EmployeeLogin from './Views/Auth/EmployeeLogin';


const App = () => {
  const searchSate = useSelector((state) => state?.search?.isVisible);
  const dispatch = useDispatch();
  return (
    <>
   <Routes >
    <Route path='register' element={<Register />} />
    <Route path='/' element={<Login />} />
    <Route path='/employee-login' element={<EmployeeLogin />} />
    <Route path='addEmployee' element={<AddEmployee />} />
    <Route path='dashboard' element={<LayoutWrapper><Dashboard /></LayoutWrapper>} />
    <Route path='employee-board' element={<LayoutWrapper><EmployeeBoard /></LayoutWrapper>} />
    <Route path='employees' element={<LayoutWrapper><Employees /></LayoutWrapper>} />
   </Routes>
    <SearchModal isOpen={searchSate} onClose={() => dispatch(toggleSearch())} />
   </>
  )
}

export default App