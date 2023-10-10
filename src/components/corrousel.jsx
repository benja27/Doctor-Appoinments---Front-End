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
      <Carousel
        interval={8000}
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        fade={false}
        className="w-100 h-100"
        style={{ backgroundColor: 'transparent' }} // Set the background to transparent
      >
        <Carousel.Item style={{ backgroundColor: 'transparent' }}> {/* Set the background to transparent */}
          <div className="background-image" style={{ backgroundImage: `url(${nurse})` }}>
            {/* No need for the img tag */}
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: 'transparent' }}> {/* Set the background to transparent */}
          <div className="background-image" style={{ backgroundImage: `url(${nurse})` }}>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: 'transparent' }}> {/* Set the background to transparent */}
          <div className="background-image" style={{ backgroundImage: `url(${nurse})` }}>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: 'transparent' }}> {/* Set the background to transparent */}
          <div className="background-image" style={{ backgroundImage: `url(${nurse})` }}>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="slide-show-dots">
        <button
          className={`slide-dot ${index === 0 ? 'active' : ''}`}
          onClick={() => setIndex(0)}
        ></button>
        <button
          className={`slide-dot ${index === 1 ? 'active' : ''}`}
          onClick={() => setIndex(1)}
        ></button>
        <button
          className={`slide-dot ${index === 2 ? 'active' : ''}`}
          onClick={() => setIndex(2)}
        ></button>
        <button
          className={`slide-dot ${index === 3 ? 'active' : ''}`}
          onClick={() => setIndex(3)}
        ></button>
      </div>
    </div>
  );
}

export default Corrousel;
