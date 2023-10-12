import { useEffect, useState } from 'react';
import User from './components/authentication/User';

import { Route, Routes } from 'react-router-dom';
import DoctorsContainer from './components/doctors/DoctorsContainer';
import DoctorForm from './components/doctors/DoctorForm';
import ShowDoctor from './components/doctors/ShowDoctor';
import DeleteDoctorContainer from './components/doctors/DeleteDoctorContainer';
import Header from './components/doctors/Header';
import Logout from './components/authentication/Logout';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { authSuccess } from './redux/currentUser/currentUserSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"))
  
  if(token && user){
    dispatch(authSuccess({token, user}))
  }
  }
  ,[dispatch])

  const {isAuth, currentUser} = useSelector(state => state.currentUser)
  if(isAuth)
  return (
    <>
            <h1>Hello {currentUser.name}</h1>
           
            <Header />
            <Logout  />
      <Routes>
        <Route path="/" element={<DoctorsContainer />} />
        <Route path="/add-doctor" element={<DoctorForm />} />
        <Route path="/doctors/:doctorId" element={<ShowDoctor />} />
        <Route path="/delete-doctor" element={<DeleteDoctorContainer />} />
      </Routes>
    </>
  );
  return(
    <User />
  )
}

export default App;
