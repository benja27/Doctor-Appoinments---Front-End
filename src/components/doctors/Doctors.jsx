import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showDoctor } from '../../redux/doctors/doctorsSlice';




export default function Doctors({doctor, index}) {
  const dispatch = useDispatch()

 
  return (
    <div
    style={{ }}
    className={` item_slider ${index === 4 && itemsToShow === 3 ? 'center' : ''} `}
    key={doctor.id}
  >
    <Link to={`doctors/${doctor.id}`}  onClick={()=>dispatch(showDoctor(doctor.id))} >
      <div className="item_index_cont">
     {doctor.photo ?  (<img
                  className="index_item_img position-absolute"
                  src={`${doctor.photo}`}
                  alt="Image of doctor"
                />) : (   
                <div className="index_img_circle" ></div>
                
                )
                } 
      </div>            

              <div className="mt-3 text-center">
                <h5 className="h2 fw-bold">
                  {doctor.name}
                  {index}
               
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
             
              
          
     
    </Link>
  </div>
  );
}

// Doctors.propTypes = {
//   doctorId: PropTypes.number.isRequired,
//   doctorName: PropTypes.string.isRequired,
//   specialization: PropTypes.string.isRequired,
//   consultationFee: PropTypes.string.isRequired,
//   prescriptionFee: PropTypes.string.isRequired,
// };
