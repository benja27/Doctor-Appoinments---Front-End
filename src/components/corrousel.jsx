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
    // Lógica para determinar la cantidad de elementos a mostrar basados en el ancho de la pantalla
    // Por ejemplo, en pantallas más pequeñas (modo celular), mostrar solo 1 elemento
    // En pantallas más grandes, mostrar 3 o más elementos según tu preferencia
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return 1;
    } else {
      return 3;
    }
    // else {
    //   return 5;
    // }
  }

  useEffect(() => {
    // Actualiza la cantidad de elementos a mostrar cuando cambia el tamaño de la ventana
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
      // alert(startIndex)
    }
  };

  const goToNextSlide = () => {
    if (endIndex < totalImages - 1) {
      setStartIndex(startIndex + 1);
      // alert(endIndex)
    }
  };

  return (
    <div className="carousel ">
      {
        <button onClick={goToPrevSlide} className="arrow left-arrow">
          &#60;
        </button>
      }
      {/* {startIndex > 0 && <button onClick={goToPrevSlide} className="arrow left-arrow">&#60;</button>} */}
      <div className="image-container">
        {images.slice(startIndex, endIndex + 1).map((image, index) => (
          // <img key={index} src={image} alt={`Slide ${startIndex + index}`}
          // className={index === 1 ? 'center' : ''}

          // className={index === Math.floor(itemsToShow / 2) ? 'center' : ''}
          // />

          // <Index_item key={index} className={index === 1 ? 'center' : ""} />
          // <Index_item key={index} className={index === 1 ? 'center' : ""}
          // big={index === 1 ? 'center' : ""}
          // img = {`${images[index]}`}
          // />
          <div
            style={{ width: "300px" }}
            className={`check item_slider ${index === 1 ? 'center' : ""} `}
            key={index}
          >
            <div className="item_index_cont">
              <div className="index_img_circle"></div>
              <img
                className="index_item_img position-absolute"
                src={`${image}`}
                alt=""
              />
            </div>

            <div className="mt-3">
              <h5>VESPA `{index}`</h5>
              <h4 style={{ color: "gray" }}>.......................</h4>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem, quia quae rerum tempore odit laborum{" "}
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
        <button onClick={goToNextSlide} className="arrow right-arrow">
          &#62;
        </button>
      }
      {/* {endIndex < totalImages - 1 && <button onClick={goToNextSlide} className="arrow right-arrow">&#62;</button>} */}
    </div>
  );
};

export default Carousel;
