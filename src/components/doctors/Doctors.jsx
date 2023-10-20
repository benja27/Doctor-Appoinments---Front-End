import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { showDoctor } from '../../redux/doctors/doctorsSlice';

export default function Doctors({ doctor, index }) {
  const dispatch = useDispatch();

  return (
    <Tilt
      style={{ maxWidth: '500px', margin: '0 auto' }}
      className="shadow pb-3 col-12 item_slider"
      key={index}
      data-tilt
    >
      <Link to={`/doctors/${doctor.id}`} onClick={() => dispatch(showDoctor(doctor.id))}>
        <div className="item_index_cont">
          {doctor.photo
            ? (
              <img
                className="index_item_img position-absolute"
                alt="doctor"
                src={doctor.photo}
              />
            )
            : (
              <img
                className="index_item_img position-absolute"
                alt="doctor"
                src={doctor.photo ? doctor.photo : 'https://i.pinimg.com/564x/39/97/b8/3997b837ba0548ec1a5430ee31fb43aa.jpg'}
              />
            )}
        </div>

        <div className="mt-3 text-center">
          <h5 className="h2 fw-bold">
            {doctor.name}

          </h5>
          <h4 className="p-0 m-0 py-1 " style={{ color: 'gray' }}>.......................</h4>

          <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}>
            {' '}
            Consultation fee:
            {' '}
            {doctor.consultation_fee}
          </h6>
        </div>

      </Link>
      <div className="index_item_social_cont d-flex justify-content-center gap-3 text-center">
        <i className="fab fa-facebook" />
        <i className="fab fa-twitter" />
        <i className="fas fa-home" />
      </div>
    </Tilt>
  );
}

Doctors.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    consultation_fee: PropTypes.string.isRequired,
    prescription_fee: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
