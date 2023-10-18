import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideMenu from './SideMenu';
import Carousel from './Carousel';

function MainPage({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // console.log(isMenuOpen);
  };

  return (
    <div className="main-page-layout grid d-flex nav-bg ">
      <div className={` page_container ${isMenuOpen ? '' : 'co-md-3'}`}>
        <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} user={user} />
      </div>
      <Carousel />
    </div>
  );
}

MainPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainPage;
