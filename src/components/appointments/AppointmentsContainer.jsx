import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAppointments } from '../../redux/appointments/appointmentsSlice';
import Appointments from './Appointments';

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
    <>
      <ul className="doctors-container">
        <li className="doctor">Doctor</li>
      </ul>
      <div>
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
    </>
  );
}
