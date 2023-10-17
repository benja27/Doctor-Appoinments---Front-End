import { useState, useEffect } from 'react';
import '../Carousel.css';
import { useSelector } from 'react-redux';


import Doctors from './doctors/Doctors';



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

  useEffect(() => {
    function handleResize() {
      setItemsToShow(calculateItemsToShow());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
    
  
  
  const { doctors, isLoading } = useSelector((state) => state.doctors);
 

  console.log(doctors);


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
   



  

  

  

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className="d-flex flex-column align-items-center bg-success justify-content-center flex-grow-1 " style={{ verflowY: 'hidde' }}>

      <div className="text-center d-flex flex-column align-items-center">
        <h1 className="h1 fw-bold ">LATEST MODELS</h1>
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

        {doctors.slice(startIndex, endIndex + 1).map((doctor, index) => (
  
           
  <Doctors  key={doctor.id} doctor={doctor} index={index}/>

 

 

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
