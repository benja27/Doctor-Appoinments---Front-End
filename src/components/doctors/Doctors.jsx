import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showDoctor } from '../../redux/doctors/doctorsSlice';
import { useEffect } from 'react';


export default function Doctors({doctor}) {
  const dispatch = useDispatch()

 
  return (
    <Link to={`doctors/${doctor.id}`} className="item_index_cont" onClick={()=>dispatch(showDoctor(doctor.id))} >
     
     
     <div
              
              className={` item_slider 'center' } `}
            
            >
              
                <div className="index_img_circle" />
                <div className="index_img_circle_2" />
                <img
                  className="index_item_img position-absolute"
                  src={`${doctor.photo}`}
                  alt=""
                />
              

              <div className="mt-3 text-center">
                <h5 className="h2 fw-bold">
                  {doctor.name}
               
                </h5>
                <h4 className="p-0 m-0 py-1 " style={{ color: 'gray' }}>.......................</h4>

                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}>
                  {' '}
                  consultatio fee:
                  {doctor.consultation_fee }
                </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}>
                  {' '}
                  id:
                  {doctor.id}
                </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}>
                  {' '}
                  name:
                  {doctor.name}
                </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}>
                  {' '}
                  photo:
                  {doctor.photo}
                </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}>
                  {' '}
                  prescription fee:
                  {doctor.prescription_fee}
                </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}>
                  {' '}
                  especialization:
                  {doctor.specialization}
                </h6>

                <div className="index_item_social_cont d-flex justify-content-center gap-3 text-center">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-twitter" />
                  <i className="fas fa-home" />
                </div>
              </div>
              </div>
              
          
     
    </Link>
  );
}

// Doctors.propTypes = {
//   doctorId: PropTypes.number.isRequired,
//   doctorName: PropTypes.string.isRequired,
//   specialization: PropTypes.string.isRequired,
//   consultationFee: PropTypes.string.isRequired,
//   prescriptionFee: PropTypes.string.isRequired,
// };
