import React, { useState } from 'react';
import Corrousel from './sliderSplash';
import Signup from '../authentication/Signup';
import Login from '../authentication/Login';

function SplashScreen() {
  const [show, setShow] = useState(true);

  return (
    <div className="main-page-layout grid d-flex justify-content-evenly flex-column nav-bg">
      <div className="container fluid row">

        <div className="col-md-9 mt-3">

          <main className="main-body d-flex row text-light justify-content-between bg-black mt-6 h-100">
            <div className="greetings text-center">
              <h1 className="display-3 fw-bold">Your health is our concern!</h1>
              <p className="text-x-large fw-semi-bold">How are you feeling today</p>
            </div>

            <div className="login-container d-flex flex-row justify-content-center align-items-center ">
              {
            show
              ? (
                <div>

                  <Login setShow={setShow} className="text-white" />
                </div>
              )
              : (
                <div>

                  <Signup setShow={setShow} className="text-white" />
                </div>
              )
}
            </div>
          </main>
          <Corrousel />
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
