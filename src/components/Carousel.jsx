import { useState, useEffect } from 'react';
import '../Carousel.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './index_page/Loader';

import Doctors from './doctors/Doctors';
import { logout } from '../redux/currentUser/currentUserSlice';

const Carousel = () => {
  const dispatch = useDispatch();
  function calculateItemsToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 999) {
      return 1;
    }
    return 3;
  }
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
  const [itemsToShow, setItemsToShow] = useState(calculateItemsToShow());
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    function handleResize() {
      setItemsToShow(calculateItemsToShow());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalDoctors = doctors.length;
  const endIndex = startIndex + itemsToShow - 1;

  const goToPrevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (endIndex < totalDoctors - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  if (error) {
    dispatch(logout());
  }

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <div
      className="d-flex flex-column justify-content-center flex-grow-1 vh-100"
      style={{ verflowY: 'hidde' }}
    >
      <div className="text-center d-flex flex-column align-items-center mb-5">
        <h1 className="h1 fw-bold ">LATEST DOCTORS</h1>
        <h4 className="h5 text-gray col-9" style={{ color: 'gray' }}>
          “In our job, you will never go home at the end of the day
          thinking that you haven’t done something valuable and important.”

          ― Suneel Dhand
        </h4>
      </div>

      <div className="carousel">
        <button
          onClick={goToPrevSlide}
          className="arrow left-arrow col-1"
          type="button"
        >
          &#60;
        </button>

        <div className="image-container ">
          {doctors.slice(startIndex, endIndex + 1).map((doctor, index) => (
            <Doctors key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>

        <button
          onClick={goToNextSlide}
          className="arrow right-arrow col-1"
          type="button"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
