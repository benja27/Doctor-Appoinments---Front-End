import React from 'react'

function Index_item() {
  return (
    <div style={{width:"200px"}} >
      
      <div>
        <img className='index_item_img' src="https://previews.123rf.com/images/pandavector/pandavector1705/pandavector170502139/77686847-doctor-profesiones-%C3%BAnico-icono-en-estilo-de-dibujos-animados-s%C3%ADmbolo-de-vectores-stock-photography.jpg" alt="" />
      </div>

      <h5>VESPA C20</h5>
      <h4 style={{color: 'gray' }}  >.......................</h4>
      <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, quia quae rerum tempore odit laborum </h6>
      <div className='index_item_social_cont d-flex justify-content-center gap-3 text-center' >
        <i className='fab fa-facebook' ></i>
        <i className='fab fa-twitter' ></i>
        <i className='fas fa-home' ></i>
      </div>


    </div>
  )
}

export default Index_item