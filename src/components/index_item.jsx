// import React from 'react'
// import doctor from '../assets/pngegg.png'
import PropTypes from 'prop-types';


function Index_item({big, img}) {
  return (
    <div style={{width:"300px"}} className={`check item_slider ${big}`}   >
      
      <div className='item_index_cont' >
        <div className='index_img_circle' ></div>
        <img className='index_item_img position-absolute' src={`${img}`} alt="" />
      </div>

    <div className='mt-3' >
      <h5>VESPA C20</h5>
      <h4 style={{color: 'gray' }}  >.......................</h4>
      <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, quia quae rerum tempore odit laborum </h6>
      <div className='index_item_social_cont d-flex justify-content-center gap-3 text-center' >
        <i className='fab fa-facebook' ></i>
        <i className='fab fa-twitter' ></i>
        <i className='fas fa-home' ></i>
      </div>
    </div>

    </div>
  )
}

Index_item.propTypes = {
  big: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Index_item