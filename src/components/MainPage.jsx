import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Carousel from './Carousel';



function Main_page() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className="main-page-layout c grid d-flex justify-content-evenly flex-column nav-bg">
      
      <div className="row">
        <div className="col-md-3 page_container">
          <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="col-md-9 mt-3">
    
         <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Main_page;
