import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { deleteAppointment } from '../../redux/appointments/appointmentsSlice';

export default function Appointments({
  appointmentId,
  location,
  date,
}) {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
    navi('/');
  };

  return (

    <div className="d-flex mb-3 bg-primar w-100 px-3 py-4 shadow">
      <div key={appointmentId} className="bg-warnin d-flex flex-column gap-3 col-12">

        <div className="d-flex justify-content-around -w-100 bg-succes ">
          <h6>Appointment #:</h6>
          <h6>{appointmentId}</h6>
        </div>

        <div className="d-flex justify-content-around -w-100 bg-succes ">
          <h6>
            Location:
          </h6>
          {location}
        </div>
        <div className="d-flex justify-content-around -w-100 bg-succes ">
          <h6>Date:</h6>
          {date}
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => handleDelete(appointmentId)}
            type="button"
            className="d-flex justify-content-around -w-100 bg-succes btn btn-danger"
          >
            Delete Appointment
          </button>
        </div>

      </div>
    </div>

  );
}

Appointments.propTypes = {
  appointmentId: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
