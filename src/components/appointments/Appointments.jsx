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
    <div className='d-flex mb-3 bg-primary w-100 px-3 py-4 ' >
      <div key={appointmentId} className='bg-dark col-12' >

        <div className='d-flex justify-content-around -w-100 bg-success ' >
          <h6>Appointment #:</h6>
          <h6>{appointmentId}</h6>                
        </div>

        <div>
          Location:
          {location}
        </div>
        <div>
          Date:
          {date}
        </div>
        <button
          onClick={() => dispatch(deleteAppointment(appointmentId))}
          type="button"
          className='mt-3'
        >
          Delete Appointment
        </button>

      </div>
    </div>
  );
}

Appointments.propTypes = {
  appointmentId: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
