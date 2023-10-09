import React from 'react';

function SlideDot({ index, onClick }) {
  return (
    <button
      className={`slide-dot ${index === 0 ? 'active' : ''}`}
      onClick={() => onClick(0)} // You can replace 0 with the appropriate index
    ></button>
  );
}

export default SlideDt;
