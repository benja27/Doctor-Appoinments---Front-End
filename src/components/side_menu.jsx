import React from 'react';

function SideMenu({ isMenuOpen }) {
  return (
    <div className={`nav col p-0 vh-100 ${isMenuOpen ? 'open' : ''}`}>
      <nav className='d-flex align-items-start mt-6 p-3'>
        <div className={`topnav d-flex flex-column mt-9 ${isMenuOpen ? 'show' : ''}`}>
          {isMenuOpen && (
            <ul className='list-unstyled w-auto mt-3 gap-6 m-0 p-0'>
              <li className="side-item">
                <a href="">
                  <h4>Model</h4>
                </a>
              </li>
              <li className="side-item">
                <a href="">
                  <h4>Specialisation</h4>
                </a>
              </li>
              <li className="side-item">
                <a href="">
                  <h4>Model</h4>
                </a>
              </li>
            </ul>
          )}
          {isMenuOpen && (
            <div className='justify-content-center align-items-start m-0 w-100 fixed-bottom '>
              <ul className='list-unstyled d-flex gap-2 m-0 p-0'>
                <li className='p-1'>
                  <i className='fa fa-twitter'></i>
                </li>
                <li className='p-1'>
                  <i className='fa fa-facebook'></i>
                </li>
                <li className='p-1'>
                  <i className='fa fa-linkedin'></i>
                </li>
                <li className='p-1'>
                  <i className='fa fa-pinterest-square'></i>
                </li>
              </ul>
              <p className='m-0 mt-2'>We care, but God Heals</p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default SideMenu;
