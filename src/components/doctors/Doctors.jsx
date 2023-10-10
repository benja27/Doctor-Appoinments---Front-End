import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Doctors({
  doctorId,
  doctorName,
  specialization,
  consultationFee,
  prescriptionFee,
}) {

  return (
    <>
      <Link to={`/doctors/${doctorId}`}>
        <ul id={doctorId}>
          <li>Name: {doctorName}</li>
          <li>Specialization: {specialization}</li>
          <li>Consultation Fee: {consultationFee}</li>
          <li>Prescription Fee: {prescriptionFee}</li>
        </ul>
      </Link>
    </>
  );
}

Doctors.propTypes = {
  doctorId: PropTypes.number.isRequired,
  doctorName: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  consultationFee: PropTypes.string.isRequired,
  prescriptionFee: PropTypes.string.isRequired,
};
