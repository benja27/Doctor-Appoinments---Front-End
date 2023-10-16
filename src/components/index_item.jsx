// import React from 'react'
// import doctor from '../assets/pngegg.png'
import PropTypes from 'prop-types';

function IndexItem({ big, img }) {
  return (
    <div style={{ width: '300px' }} className={`check item_slider ${big}`}>

      <div className="item_index_cont">
        <div className="index_img_circle" />
        <img className="index_item_img position-absolute" src={`${img}`} alt="" />
      </div>

      <div className="mt-3">
        <h5>VESPA C20</h5>
        <h4 style={{ color: 'gray' }}>.......................</h4>
        <h6>Lorem ipsum, dolor sit amet consectetur adipisi </h6>
        <div className="index_item_social_cont d-flex justify-content-center gap-3 text-center">
          <i className="fab fa-facebook" />
          <i className="fab fa-twitter" />
          <i className="fas fa-home" />
        </div>
      </div>

    </div>
  );
}

Index_item.propTypes = {
  big: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default IndexItem;
