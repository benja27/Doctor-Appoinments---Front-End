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

  const { appointments, isLoading, error } = useSelector(
    (state) => state.appointments,
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    dispatch(logout());
  }

  return (
    <div className="d-flex vh-100 ">
      <SideMenu />

      <div className="d-flex flex-column align-items-center justify-content-center w-100 bg_doctor3 ">
        <button
          type="button"
          className="doctors-container text-dark px-2 py-2 round d-flex mb-4 btn btn-success text-white shadow justify-content-center text-center col-10 col-md-8 col-lg-6"
          style={{ backgroundColor: '#0FC00F' }}
        >
          <h2 className="doctor h1 text-center">Appointments</h2>
        </button>

        <div className="col-10 col-md-8 col-lg-6 ">
          {appointments.length === 0 ? (
            <div className="shadow py-5 bg-light round rounded px-4">
              <h1 className="h3 text-center">There are no appointments for this doctor at this moment</h1>
            </div>
          ) : (
            appointments.map((appointment) => (
              <Appointments
                key={appointment.id}
                appointmentId={appointment.id}
                location={appointment.location}
                date={appointment.date}
                userId={appointment.user_id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
