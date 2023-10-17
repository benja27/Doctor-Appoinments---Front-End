import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAppointments } from '../../redux/appointments/appointmentsSlice';
import Appointments from './Appointments';

import SideMenu from '../SideMenu';
import { logout } from '../../redux/currentUser/currentUserSlice';

export default function DoctorsContainer() {
  
  const dispatch = useDispatch();


  useEffect(() => {
   
      dispatch(fetchAppointments());
 
  }, [dispatch]);

  const { appointments, isLoading, error } = useSelector((state) => state.appointments);
console.log(appointments)
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if(error){
    dispatch(logout())
  }

  return (

    <div className="d-flex vh-100 bg-dar">
      <SideMenu />
      <div className="d-flex flex-column align-items-center justify-content-center w-100">

        <div className="doctors-container bg-dark px-3 py-2 round d-flex mb-4 justify-content-center text-center" style={{color:"gold"}} >
          <h2 className="doctor h1 text-center">Appointments</h2>
        </div>

        <div className="col-10 col-md-8 col-lg-6 col-xl-4 ">
          {appointments.map((appointment) => (
            <Appointments
              key={appointment.id}
              appointmentId={appointment.id}
              location={appointment.location}
              date={appointment.date}
              userId={appointment.user_id}
            />
          ))}
        </div>
      </div>

    </div>

  );
}
