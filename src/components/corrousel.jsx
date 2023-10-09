import Index_item from "./index_item";
import React, { useState, useEffect } from "react";
import "../css/Carousel.css";

const images = [
  "https://picsum.photos/id/1/300/300",
  "https://picsum.photos/id/2/300/300",
  "https://picsum.photos/id/3/300/300",
  "https://picsum.photos/id/4/300/300",
  "https://picsum.photos/id/5/300/300",
  "https://picsum.photos/id/6/300/300",
  "https://picsum.photos/id/7/300/300",
  "https://picsum.photos/id/8/300/300",
  "https://picsum.photos/id/9/300/300",
  "https://picsum.photos/id/10/300/300",
  "https://picsum.photos/id/11/300/300",
  "https://picsum.photos/id/12/300/300",
  "https://picsum.photos/id/13/300/300",
];

const Carousel = () => {
  const [itemsToShow, setItemsToShow] = useState(calculateItemsToShow());
  const [startIndex, setStartIndex] = useState(0);
  const [current_index, setCurrent_index] = useState(0);

  function calculateItemsToShow() {    
    const screenWidth = window.innerWidth;
    if (screenWidth < 999) {
      return 1;
    } else {
      return 3;
    }    
  }

  useEffect(() => {    
    function handleResize() {
      setItemsToShow(calculateItemsToShow());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="text-center d-flex flex-column align-items-center" >
        <h1 className="h1 fw-bold mt-5" >LATEST MODELS</h1>    
        <h4  className="h5 text-gray col-9" style={{color:"gray"}}  >Lorem ipsum dolor sit, amet consectetur m, doloremque blanditiis eaque cumqu</h4>
      </div>
      <div className="carousel ">
        {
          <button onClick={goToPrevSlide} className="arrow left-arrow col-1">
            &#60;
          </button>
        }      
        <div className="image-container">
          {images.slice(startIndex, endIndex + 1).map((image, index) => (          
            <div
              style={{ }}
              className={` item_slider ${index === 1 ? 'center' : ""} `}
              key={index}
            >
              <a href="#" className="item_index_cont">
                <div className="index_img_circle"></div>              
                <div className="index_img_circle_2"></div>                
                <img
                  className="index_item_img position-absolute"
                  src={`${image}`}
                  alt=""
                />
              </a>

              <div className="mt-3 text-center">
                <h5 className="h2 fw-bold" >VESPA {index}</h5>
                <h4 className="p-0 m-0 py-1 " style={{ color: "gray" }}>.......................</h4>
                <h6 className="h5 fw-bold mb-4" style={{color:"gray"}} >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, quia quae
                </h6>
                <div className="index_item_social_cont d-flex justify-content-center gap-3 text-center">
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fas fa-home"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        {
          <button onClick={goToNextSlide} className="arrow right-arrow col-1">
            &#62;
          </button>
        }
        {/* {endIndex < totalImages - 1 && <button onClick={goToNextSlide} className="arrow right-arrow">&#62;</button>} */}
      </div>
    </div>
  );
};

export default Carousel;
