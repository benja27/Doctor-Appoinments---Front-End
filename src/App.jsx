import { useState } from 'react';
import User from './components/authentication/User';
//import PrivateText from './components/authentication/PrivateText';
import { Route, Routes } from 'react-router-dom';
import DoctorsContainer from './components/doctors/DoctorsContainer';
import DoctorForm from './components/doctors/DoctorForm';

import Header from './components/Header';
import ShowDoctor from './components/doctors/ShowDoctor';
import DeleteDoctorContainer from './components/doctors/DeleteDoctorContainer';

import AppointmentsContainer from './components/appointments/AppointmentsContainer';
import AppointmentForm from './components/appointments/AppointmentForm';
import FullAppointmentForm from './components/appointments/FullAppointmentForm';

// import Header from './components/doctors/Header';
import Logout from './components/authentication/Logout';

// import Main_page from './components/main_page'
// import Set_appoiment from './components/set_appoiment'
// import Show from './components/show'


import Main_page from './components/main_page'
import Set_appoiment from './components/set_appoiment'
import Show from './components/show'

// import './App.css'
import './App.css';

function App() {
  // const [currUser, setCurrUser] = useState(null);
  // if(currUser)
  return (
  // <Routes>
  //   <Route path="/" element={<Main_page />} />
  //   <Route path="/show" element={<Show />} />
  //   <Route path="/doctor:id" element={<Main_page />} />
  //   <Route path="/set_appoinment" element={<Set_appoiment  />} />
  // </Routes>
    <>

            {/* <h1>Hello {currUser.status.data.user.name}</h1>
            <Header />
            <Logout setCurrUser={setCurrUser} /> */}

      {/* <Header /> */}

      <Routes>
        {/* <Route path="/" element={<DoctorsContainer />} /> */}
        <Route path="/" element={<Main_page />} />
        <Route path="/add-doctor" element={<DoctorForm />} />
        <Route path="/set_appoinment" element={<Set_appoiment  />} />
        {/* <Route path="/doctors/:doctorId" element={<ShowDoctor />} /> */}
        <Route path="/doctors/:doctorId" element={<Show />} />
        <Route path="/delete-doctor" element={<DeleteDoctorContainer />} />
        <Route path="/appointments" element={<AppointmentsContainer />} />
        <Route path="/add-appointment" element={<FullAppointmentForm />} />
        <Route path="/add-appointment/:doctorId" element={<AppointmentForm />} />
      </Routes>
    </>
  );
  // return(
  //   <User setCurrUser={setCurrUser} />
  // )
}

export default App;
