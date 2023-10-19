import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import User from './components/authentication/User';

import DoctorForm from './components/doctors/DoctorForm';
import DeleteDoctorContainer from './components/doctors/DeleteDoctorContainer';
import AppointmentsContainer from './components/appointments/AppointmentsContainer';
import SplashScreen from './components/splashScreen/SplashScreen';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import BookForm from './components/appointments/AppointmentForm';
import MainPage from './components/MainPage';
import SetAppoiment from './components/SetAppoiment';
import Show from './components/Show';
import './App.css';
import { authSuccess } from './redux/currentUser/currentUserSlice';
import { fetchDoctors } from './redux/doctors/doctorsSlice';

const App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());

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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<BookForm />} />
          <Route path="/" element={<MainPage user={currentUser} />} />
          <Route path="/add-doctor" element={<DoctorForm />} />
          <Route path="/add-appointment" element={<SetAppoiment />} />
          <Route path="/set_appoinment" element={<BookForm />} />
          <Route path="doctors/:doctorId" element={<Show />} />
          <Route path="/delete-doctor" element={<DeleteDoctorContainer />} />
          <Route path="/appointments" element={<AppointmentsContainer />} />
        </Routes>
      </>
    );
  }
  return (
    <SplashScreen />
  );
}

export default App;
