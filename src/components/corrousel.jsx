import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import react from '../assets/react.svg';
import nurse from '../assets/image/nurese.avif'; // Import your images

function Corrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='corrousel scroll d-flex w-100 h-100 position-fixed'>
      <div className="background-images">
        <Carousel
          interval={8000}
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          fade={false}
          className="w-100 h-100"
        >
          <Carousel.Item>
            <div className="background-image" style={{ backgroundImage: `url(${nurse})` }}>
              {/* No need for the img tag */}
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="background-image" style={{ backgroundImage: `url(${nurse})` }}>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="background-image" style={{ backgroundImage: `url(${nurse})` }}>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="background-image" style={{ backgroundImage: `url(${nurse})` }}>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      
    </div>
  );
}

export default Corrousel;
