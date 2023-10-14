import { useState, useEffect } from 'react';
import '../../css/carousel.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoctors } from '../../redux/doctors/doctorsSlice';
import Doctors from '../doctors/Doctors';
import doctor_img from '../../../src/assets/pngegg.png'
import Loader from './Loader';


const Carousel = () => {
  function calculateItemsToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 764) {
      return 1;
    }
    return 3;
  }

  const [itemsToShow, setItemsToShow] = useState(calculateItemsToShow());
  const [startIndex, setStartIndex] = useState(0);
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      setItemsToShow(calculateItemsToShow());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchDoctors());
    }
    console.log(doctors);
  }, [dispatch, doctors.length]);

  const totalImages = doctors.length;
  const endIndex = startIndex + itemsToShow - 1;

  const goToPrevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (endIndex < totalImages - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  if (isLoading) {
    return (    
    <Loader />
    )
  }

  return (

    <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1" style={{verflowY:"hidde"}} >


      <div className="text-center d-flex flex-column align-items-center">
        <h1 className="h1 fw-bold ">LATEST DOCTORS</h1>
        <h4 className="h5 text-gray col-9" style={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur m, doloremque blanditiis eaque cumqu</h4>
      </div>

      <div className="carousel">
        <button
          onClick={goToPrevSlide}
          className="arrow left-arrow col-1"
          type="button"
        >
          &#60;
        </button>

        <div className="image-container">

          {doctors.slice(startIndex, endIndex + 1).map((doctor, index) => (

            <div
              style={{ maxWidth: '500px', margin: '0 auto'     }}
              className={`shadow pb-3 col-12 item_slider ${index === 4 && itemsToShow === 3 ? 'center' : ''} `}
              key={index}

            >
              <Link to={`doctors/${doctor.id}`} className="item_index_cont">
                <div className="index_img_circle" />
                <div className="index_img_circle_2" />
                <img
                  className="index_item_img position-absolute"
                  src={`${doctor_img}`}
                  alt=""
                />
              </Link>

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
                {/* <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}>
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
                </h6> */}

                <div className="index_item_social_cont d-flex justify-content-center gap-3 text-center">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-twitter" />
                  <i className="fas fa-home" />
                </div>
              </div>
            </div>

          ))}
        </div>

        <button
          onClick={goToNextSlide}
          className="arrow right-arrow col-1"
          type="button"
        >
          &#62;
        </button>
        {/* {endIndex < totalImages - 1 &&
          <button onClick={goToNextSlide} className="arrow right-arrow">&#62;</button>} */}
      </div>
    </div>
  );
};

export default Carousel;
