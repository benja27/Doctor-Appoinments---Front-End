import React from 'react'


function Side_menu() {
  return (
    <article className='d-flex flex-column justify-content-between gap-4 ps-3 mb-4 px-3 d-none d-md-flex side_menu col-3 col-lg-2' >
      
      <div className='mt-5 ' >

        <div className='text-center' >
          <img src="https://placehold.co/150x50?text=Brand" alt="" />
        </div>

        <div className='mt-5 side_menu_cont pt-5 d-flex flex-column gap-4 text-center' style={{}} >

          <section>
            <a href="/set_appoinment">
              <h4 className='h4 fw-bold' >OPTION</h4> 
            </a>            
          </section>
          <section>
            <a href="/show">
              <h4 className='h4 fw-bold' >OPTION</h4> 
            </a>            
          </section>
          <section>
            <a href="/">
              <h4 className='h4 fw-bold' >OPTION</h4> 
            </a>            
          </section>
          <section>
            <a href="">
              <h4 className='h4 fw-bold' >OPTION</h4> 
            </a>            
          </section>
          




        </div>

      </div>

      <div className='mb-5'>
        <div className='d-flex justify-content-between mb-3 social_media_cont' >
          <i className='fab h5 fa-twitter' ></i>
          <i className='fab h5 fa-facebook' ></i>
          <i className='fas h5 fa-envelope' ></i>
          <i className='fas h5 fa-home' ></i>
          <i className='fab h5 fa-pinterest' ></i>
        </div>
        <h6 className='h6 text-center' >
          @2023 Brand sa de cv 
        </h6>
      </div>

    </article>
  )
}

export default Side_menu