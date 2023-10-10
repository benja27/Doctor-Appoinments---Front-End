import React, { useState } from 'react';
import SideMenu from './side_menu';
import Corrousel from './corrousel';
import data from './doctor';

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

  const transit = filteredData.map((doc, index) => (
    <div className='doc' key={index}>
      <span className=''>{doc.name}</span>
      <span className=''>{doc.specialization}</span>
    </div>
  ));

  return (
    <div className='d-flex flex-column nav-bg'>
      {isMenuOpen && (
        <div className='d-flex p-0 m-0 flex-grow-1 bg-light'>
          <a className="icon bg-black gap-6" onClick={toggleMenu}>
            <i className="fa fa-times fa-2x"></i>
          </a>
          <SideMenu isMenuOpen={isMenuOpen} />
        </div>
      )}
      <nav className='d-flex justify-content-between align-items-center mr-3 p-2 m-0 w-auto'>
        <a className="icon bg-black gap-6" onClick={toggleMenu}>
          <i className={`fa ${isMenuOpen ? 'fa-times fa-2x' : 'fa-bars fa-2x'}`}></i>
        </a>
        <section className='search mr-3 d-none d-md-block'>
          <input
            type='text'
            placeholder='Search'
            className='search rounded-pill none'
            value={searchItem}
            onChange={handleSearchInputChange}
          />
        </section>
      </nav>

      <main className='d-flex row text-light justify-content-evenly'>
        <div className='greetings d-flex flex-column justify-content-center align-items-center mt-5'>
          <h1 className='display-3 fw-bold text-center'>Your health is our concern!</h1>
          <p className='tetx-x-large fw-semi-bold text-center'>How are you feeling today</p>
        </div>
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <div className='d-flex col justify-content-evenly align-items-center'>
            <button className='rounded-pill w-75 p-3'>Start medication here</button>
          </div>
        </div>
        <div className='d-flex row login-container align-items-center justify-content-evenly'>
          <button className='btn sign-up-btn' type='button'>Signup</button>
          <button className='btn login-up-btn' type='button' onClick={() => {
              console.log('Login button clicked');
              // Add your login logic here if needed
            }}>Login</button>
        </div>
      </main>
      <Corrousel />
    </div>
  );
}

export default Main_page;
