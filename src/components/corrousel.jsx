import { useState, useEffect } from 'react';
import '../css/Carousel.css';
import { fetchDoctors } from '../redux/doctors/doctorsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Doctors from './doctors/Doctors';


const images = [
  'https://picsum.photos/id/1/300/300',
  'https://picsum.photos/id/2/300/300',
  'https://picsum.photos/id/3/300/300',
  'https://picsum.photos/id/4/300/300',
  'https://picsum.photos/id/5/300/300',
  'https://picsum.photos/id/6/300/300',
  'https://picsum.photos/id/7/300/300',
  'https://picsum.photos/id/8/300/300',
  'https://picsum.photos/id/9/300/300',
  'https://picsum.photos/id/10/300/300',
  'https://picsum.photos/id/11/300/300',
  'https://picsum.photos/id/12/300/300',
  'https://picsum.photos/id/13/300/300',
];

const Carousel = () => {
  function calculateItemsToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 999) {
      return 1;
    }
    return 3;
  }

  const [itemsToShow, setItemsToShow] = useState(calculateItemsToShow());
  const [startIndex, setStartIndex] = useState(0);
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();



  //  const [current_index, setCurrent_index] = useState(0);

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
    console.log(doctors)
   }, [dispatch, doctors.length]); 



  const totalImages = images.length;
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

  return (
    <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
      <div className="text-center d-flex flex-column align-items-center">
        <h1 className="h1 fw-bold mt-5">LATEST MODELS</h1>
        <h4 className="h5 text-gray col-9" style={{ color: 'gray' }}>Lorem ipsum dolor sit, amet consectetur m, doloremque blanditiis eaque cumqu</h4>
      </div>
      <div className="carousel ">
        <button
          onClick={goToPrevSlide}
          className="arrow left-arrow col-1"
          type="button"
        >
          &#60;
        </button>
        <div className="image-container">

          {/* {images.slice(startIndex, endIndex + 1).map((image, index) => ( */}
          {doctors.slice(startIndex, endIndex + 1).map((doctor, index) => (
            
            <div
              style={{ }}
              className={` item_slider ${index === 1 ? 'center' : ''} `}
              key={index}
            >
              <a href={`doctors/`+doctor.id} className="item_index_cont">
                <div className="index_img_circle" />
                <div className="index_img_circle_2" />
                <img
                  className="index_item_img position-absolute"
                  src={`${doctor.photo}`}
                  alt=""
                />
              </a>

              <div className="mt-3 text-center">
                <h5 className="h2 fw-bold">
                  {doctor.name}
                  {index}
                </h5>
                <h4 className="p-0 m-0 py-1 " style={{ color: 'gray' }}>.......................</h4>

                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}> consultatio fee: {doctor.consultation_fee } </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}> id: {doctor.id} </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}> name: {doctor.name} </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}> photo: {doctor.photo} </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}> prescription fee: {doctor.prescription_fee} </h6>
                <h6 className="h5 fw-bold mb-4" style={{ color: 'gray' }}> especialization: {doctor.specialization} </h6>



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
