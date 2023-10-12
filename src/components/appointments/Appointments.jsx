import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAppointment } from '../../redux/appointments/appointmentsSlice';

export default function Appointments({
  appointmentId,
  location,
  date,
}) {
  const dispatch = useDispatch();

  return (
    <>
      <ul key={appointmentId}>
        <li>
          Appointment #:
          {appointmentId}
        </li>
        <li>
          Location:
          {location}
        </li>
        <li>
          Date:
          {date}
        </li>
        <button
          onClick={() => dispatch(deleteAppointment(appointmentId))}
          type="button"
        >
          Delete Appointment
        </button>
      </ul>
    </>
  );
}

Appointments.propTypes = {
  appointmentId: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
