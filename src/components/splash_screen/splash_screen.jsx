import React, { useState } from 'react';
import SideNav from '../side_nav';
import Corrousel from './corrousel_splash';

function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="main-page-layout grid d-flex justify-content-evenly flex-column nav-bg">
      <div className="container fluid row">
        <div className="col-md-3 page_container">
          <SideNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="col-md-9 mt-3">

          <main className="main-body d-flex row text-light justify-content-between bg-black mt-6 h-100">
            <div className="greetings text-center">
              <h1 className="display-3 fw-bold">Your health is our concern!</h1>
              <p className="text-x-large fw-semi-bold">How are you feeling today</p>
            </div>

            <div className="start_cont none justify-content-center align-items-center mt-5">
              <div className="d-none container_starter flex-column align-items-center" />
            </div>

            <div className="login-container d-flex flex-row justify-content-center align-items-center mt-6">
              <button className="btn sign-up-btn mb-3" type="button">
                Signup
              </button>
              <button
                className="btn login-up-btn"
                type="button"
              >
                Login
              </button>
            </div>
          </main>
          <Corrousel />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
