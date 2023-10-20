import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import doc1 from '../../assets/image/doc1.jpeg';
import doc2 from '../../assets/image/doc2.jpg';
import doc3 from '../../assets/image/doc3.jpeg';
import doc4 from '../../assets/image/doc4.jpeg';

function Corrousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="corrousel scroll d-flex w-100 h-100 position-fixed">
      <div className="slide-show-dots ">
        <button
          type="button"
          className={`slide-dot ${index === 0 ? 'active' : ''}`}
          onClick={() => setIndex(0)}
          aria-label="0"
        />
        <button
          type="button"
          className={`slide-dot ${index === 1 ? 'active' : ''}`}
          onClick={() => setIndex(1)}
          aria-label="1"
        />
        <button
          type="button"
          className={`slide-dot ${index === 2 ? 'active' : ''}`}
          onClick={() => setIndex(2)}
          aria-label="2"
        />
        <button
          type="button"
          className={`slide-dot ${index === 3 ? 'active' : ''}`}
          onClick={() => setIndex(3)}
          aria-label="3"
        />
      </div>
      <Carousel
        interval={8000}
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        fade={false}
        className="w-100 h-100"
        style={{ backgroundColor: 'transparent' }}
      >
        <Carousel.Item style={{ backgroundColor: 'transparent' }}>
          <div className="background-image" style={{ backgroundImage: `url(${doc1})` }} />
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: 'transparent' }}>
          <div className="background-image" style={{ backgroundImage: `url(${doc2})` }} />
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: 'transparent' }}>
          <div className="background-image" style={{ backgroundImage: `url(${doc3})` }} />
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: 'transparent' }}>
          <div className="background-image" style={{ backgroundImage: `url(${doc4})` }} />
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Corrousel;
