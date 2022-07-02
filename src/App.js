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


const App = () => {
  const searchSate = useSelector((state) => state?.search?.isVisible);
  console.log(searchSate);
  const dispatch = useDispatch();
  return (
    <>
   <Routes >
    <Route path='register' element={<Register />} />
    <Route path='login' element={<Login />} />
    <Route path='dashboard' element={<LayoutWrapper><Dashboard /></LayoutWrapper>} />
   </Routes>
    <SearchModal isOpen={searchSate} onClose={() => dispatch(toggleSearch())} />
   </>
  )
}

export default App