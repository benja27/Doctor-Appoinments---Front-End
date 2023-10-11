import React, { useState } from 'react';

function Side_menu({ isMenuOpen, toggleMenu }) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <main className={`na d-flex flex-column justify-content-between gap-4 ps-3 mb-4 px-3 col-md-3 col-lg-2 ${isMenuOpen ? 'open' : ''}`}>
      <a onClick={() => { toggleMenu(); toggleContentVisibility(); }} className={`icon bg-black d-md-none  ${isMenuOpen ? 'text-white'  : ''}`}>
        <i className="fa fa-bars fa-2x mt-2"></i>
      </a>
      <div className={`side-menu d-none ${isContentVisible ? 'show' : ''}`} style={{ height: '100vh', overflow: 'hidden' }}>
        {isContentVisible && 
           <div className="row bg-light">
           <div className="text-center">
             <img src="https://placehold.co/150x50?text=Brand" alt="" />
           </div>
           <div className="mt-1 side_menu_cont pt-5 d-flex flex-column gap-4 text-center">
             <section>
               <a href="/">
                 <h4 className="h4 fw-bold">Home</h4>
               </a>
             </section>
             <section>
               <a href="/add-doctor">
                 <h4 className="h4 fw-bold">Add Doctor</h4>
               </a>
             </section>
             <section>
               <a href="/delete-doctor">
                 <h4 className="h4 fw-bold">Delete Doctor</h4>
               </a>
             </section>
             <section>
               <a href="/my-appointments">
                 <h4 className="h4 fw-bold">My Appointments</h4>
               </a>
             </section>
           </div>
            <div className="mb-5">
              <div className="d-flex justify-content-between mb-3 social_media_cont">
                <i className="fab h5 fa-twitter" />
                <i className="fab h5 fa-facebook" />
                <i className="fas h5 fa-envelope" />
                <i className="fas h5 fa-home" />
                <i className="fab h5 fa-pinterest" />
              </div>
              <h6 className="h6 text-center">
                @2023 Brand sa de cv
              </h6>
            </div>
         </div>
        }
      </div>
    </main>
  );
}

export default Side_menu;
