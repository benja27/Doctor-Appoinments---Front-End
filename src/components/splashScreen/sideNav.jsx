import React from 'react';
import PropTypes from 'prop-types';

function SideNav({ isMenuOpen, toggleMenu }) {
  return (
    <main className={`main_toggle d-flex flex-column justify-content-between gap-4 p-0 mb-4 p d-md-flex side_men col-3 col-lg-2 ${isMenuOpen ? 'open' : ''}`}>
      <div onClick={toggleMenu} onKeyPress={toggleMenu} role="button" tabIndex={0} className={`toggle d-flex p-0 justify-content-start ml-6 align-items-center d-md-flex ${isMenuOpen ? 'text-white' : ''}`}>
        <i className={`d-flex fa fa-${isMenuOpen ? 'times' : 'bars'} fa-2x mt-3 mr-3`} />
      </div>

      {isMenuOpen && (
        <div className="mobile-menu with-background">
          <div onClick={toggleMenu} onKeyPress={toggleMenu} role="button" tabIndex={0} className={`toggle d-flex p-0 justify-content-start ml-6 align-items-center d-md-flex ${isMenuOpen ? 'text-white' : ''}`}>
            <i className={`d-flex fa fa-${isMenuOpen ? 'times' : ''} fa-2x mt-3 mr-3`} />
          </div>
          <div className="mobile-menu-content text-center mt-5">
            <div>
              <img src="https://placehold.co/150x50?text=Brand" alt="" />
            </div>

            <div className="mt-2 m-0 side_menu_cont pt-1 d-flex flex-column gap-1 text-center">
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
                <div>
                  <h4 className="h4 fw-bold">My appnmts</h4>
                </div>
              </section>
            </div>

            <div className="social d-flex flex-column mb-2 mt-4 gap-2">
              <div className="d-flex justify-content-center gap-4 mb-3 social_media_cont">
                <a href="https://twitter.com">
                  <i className="fa fa-twitter" />
                </a>
                <a href="https://facebook.com">
                  <i className="fa h5 fa-facebook" />
                </a>
                <a href="mailto:example@example.com">
                  <i className="fa h5 fa-envelope" />
                </a>
                <a href="/">
                  <i className="fa h5 fa-home" />
                </a>
                <a href="https://pinterest.com">
                  <i className="fa h5 fa-pinterest" />
                </a>
              </div>
              <div>
                <h6 className="h6 text-center">
                  @2023 Brand sa de cv
                </h6>
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}

SideNav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default SideNav;