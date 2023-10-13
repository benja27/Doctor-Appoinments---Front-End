import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAppointments } from '../../redux/appointments/appointmentsSlice';
import Appointments from './Appointments';
import Side_menu from '../side_menu';

export default function DoctorsContainer() {
  const { appointments, isLoading, error } = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    if (appointments.length === 0) {
      dispatch(fetchAppointments());
    }
  }, [dispatch, appointments.length]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  return (
    <div className='d-flex vh-100 bg-dar' >
      <Side_menu />
      <div className='d-flex flex-column align-items-center justify-content-center w-100' >

        <ul className="doctors-container text-center">
          <h2 className="doctor h1">Doctor</h2>
        </ul>

        <div className='col-10 col-md-8 col-lg-6 col-xl-4 ' >
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
