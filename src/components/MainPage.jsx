import React, { useState } from 'react';
import SideMenu from './SideMenu';
import Carousel from './Carousel';



function Main_page({user}) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };



  return (
    <div className="main-page-layout grid d-flex nav-bg">
      
     
        <div className={` page_container ${isMenuOpen ? '' : 'col-md-3' }`}>
          <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} user={user}/>
        </div>
       
    
         <Carousel />
        
  
    </div>
  );
}

export default Main_page;
