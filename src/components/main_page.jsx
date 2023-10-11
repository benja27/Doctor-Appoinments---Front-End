import React, { useState } from 'react';
import Side_menu from './side_menu'; // Replace with the correct import path
import Corrousel from './corrousel'; // Import the correct component
import data from './doctor'; // Import the data source

function Main_page() {
  const [searchItem, setSearchItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="grid d-flex justify-content-evenly flex-column nav-bg">
      <div className="row">
        <div className="col-md-3">
          <Side_menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="col-md-9 mt-3">
          <nav className="navbar d-flex justify-content-between align-items-center m-0 p-2">
            <section className="search mr-3" style={{ display: 'none' }}>
              <input
                type="text"
                placeholder="Search"
                className="search rounded-pill w-100"
                value={searchItem}
                onChange={handleSearchInputChange}
              />
            </section>
          </nav>
          <main className=" main-body d-flex row text-light justify-contents-between bg-black mt-6 h-100">
            <div className="greetings text-center">
              <h1 className="display-3 fw-bold">Your health is our concern!</h1>
              <p className="text-x-large fw-semi-bold">How are you feeling today</p>
            </div>

            <div className="start_cont none justify-content-center align-items-center mt-5">
              <div className="d-none container_starter flex-column align-items-center">
                <button className="start_container rounded-pill w-75 p-3">Start medication here</button>
              </div>
            </div>

            <div className="login-container d-flex flex-row justify-content-center align-items-center mt-6">
              <button className="btn sign-up-btn mb-3" type="button">
                Signup
              </button>
              <button
                className="btn login-up-btn"
                type="button"
                onClick={() => {
                  console.log('Login button clicked');
                }}
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

export default Main_page;
