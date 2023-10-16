import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import User from './components/authentication/User';

// import DoctorsContainer from './components/doctors/DoctorsContainer';
import DoctorForm from './components/doctors/DoctorForm';
// import Header from './components/Header';
// import ShowDoctor from './components/doctors/ShowDoctor';
import DeleteDoctorContainer from './components/doctors/DeleteDoctorContainer';
import AppointmentsContainer from './components/appointments/AppointmentsContainer';
import AppointmentForm from './components/appointments/AppointmentForm';
import FullAppointmentForm from './components/appointments/FullAppointmentForm';
// import Logout from './components/authentication/Logout';
import MainPageIndex from './components/index_page/main_page';
import SetAppoiment from './components/set_appoiment';
import Show from './components/index_page/show';
import MainPage from './components/splash_screen/splash_screen';

// import AppointmentsContainer from './components/appointments/AppointmentsContainer';
// import AppointmentForm from './components/appointments/AppointmentForm';
// import FullAppointmentForm from './components/appointments/FullAppointmentForm';
// import Main_page from './components/main_page'
// import Set_appoiment from './components/set_appoiment'
// import Show from './components/show'

// import './App.css'

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
        <h1 className="p-0 m-0">
          {/* Hello */}
          {currentUser.name}
        </h1>

        {/* <Header /> */}
        {/* <Logout /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/doctors" element={<MainPageIndex />} />
          <Route path="/add-doctor" element={<DoctorForm />} />
          <Route path="/set_appoinment" element={<SetAppoiment />} />
          {/* <Route path="/doctors/:doctorId" element={<Show />} /> */}
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
