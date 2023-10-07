import React from 'react';

function SideMenu({ isMenuOpen }) { 
  return (
    <nav className='row p-3 m-0 w-auto'>
     
      <div className={`topnav d-flex flex h-100 w-100 flex-col p-0 justify-content-center flex-column gap-3 px-0 m-0 ${isMenuOpen ? 'show' : ''}`}>
        {isMenuOpen && (
          <ul className='h-full m-0 p-0'>
            <li className="side-item">
              <h3>
                <a href="">Model</a>
              </h3>
            </li>
            <li className="side-item">
              <h3>
                <a href="">Specialization</a>
              </h3>
            </li>
            <li className="side-item">
              <h3>
                <a href="">Option 3</a>
              </h3>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default SideMenu;
