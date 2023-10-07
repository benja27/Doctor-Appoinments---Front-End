import React from 'react'


function Side_menu() {
  return (
    <article className='d-flex flex-column justify-content-between gap-3 px-3' >
      
      <div className='mt-5' >

        <div className='text-center' >
          <img src="https://placehold.co/100x50?text=Brand" alt="" />
        </div>

        <div className='mt-5 pt-5 d-flex flex-column gap-5 text-center' >
          <section className='side-item'  >
            <h3>
              <a href="">option 1</a>
            </h3>
          </section>
          <section>
            <h3>
              <a href="">option 1</a>
            </h3>
          </section>
          <section>
            <h3>
              <a href="">option 1</a>
            </h3>
          </section>
        </div>

      </div>

      <div className='mb-5'>
        <div className='d-flex gap-2' >
          <i className='fas fa-home' ></i>
          <i className='fas fa-home' ></i>
          <i className='fas fa-home' ></i>
          <i className='fas fa-home' ></i>
          <i className='fas fa-home' ></i>
        </div>
        <h6>
          @2023 Brand sa de cv 
        </h6>
      </div>

    </article>
  )
}

export default Side_menu