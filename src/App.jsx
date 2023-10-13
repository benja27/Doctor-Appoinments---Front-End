import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import User from './components/authentication/User';

import DoctorForm from './components/doctors/DoctorForm';

import DeleteDoctorContainer from './components/doctors/DeleteDoctorContainer';

import AppointmentsContainer from './components/appointments/AppointmentsContainer';
import AppointmentForm from './components/appointments/AppointmentForm';
import FullAppointmentForm from './components/appointments/FullAppointmentForm';

import Logout from './components/authentication/Logout';

import MainPage from './components/MainPage';
import SetAppoiment from './components/SetAppoiment';
import Show from './components/Show';

import './App.css';
import { authSuccess } from './redux/currentUser/currentUserSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (token && user) {
      dispatch(authSuccess({ token, user }));
    }
  },
  [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      dispatch(authSuccess({ token, user }));
    }
  },
  [dispatch]);

  const { isAuth, currentUser } = useSelector((state) => state.currentUser);

  if (isAuth) {
    return (
      <>
        <h1>
          Hello
          {currentUser.name}
        </h1>

        <Logout />
        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/add-doctor" element={<DoctorForm />} />
          <Route path="/set_appoinment" element={<SetAppoiment />} />

          <Route path="/doctors/:doctorId" element={<Show />} />
          <Route path="/delete-doctor" element={<DeleteDoctorContainer />} />
          <Route path="/appointments" element={<AppointmentsContainer />} />
          <Route path="/add-appointment" element={<FullAppointmentForm />} />
          <Route path="/add-appointment/:doctorId" element={<AppointmentForm />} />

        </Routes>
      </>
    );
  }
  return (
    <User />
  );
}

export default App;
