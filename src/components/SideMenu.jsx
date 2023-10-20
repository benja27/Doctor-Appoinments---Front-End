import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logout from './authentication/Logout';
import '../css/hamburgers.css';

function SideMenu({ user }) {
  const [isvisible, setIsVisible] = useState(false);

  const toogleMenu = () => {
    setIsVisible(!isvisible);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (window.innerWidth > 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleVisibilityChange);
    handleVisibilityChange();

    return () => {
      window.removeEventListener('resize', handleVisibilityChange);
    };
  }, []);

  return (
    <article
      className={`d-flex  flex-column vh-100 ${
        isvisible ? 'side_menu shadow shadow-5' : 'hidden'
      } ps-3 px-3`}
      style={isvisible ? { borderRight: '1px solid black' } : {}}
    >
      <div className="text-end mt-2 me-2">
        <button
          onClick={toogleMenu}
          className={`hamburger hamburger--vortex s-active ${
            isvisible ? 'is-active' : ''
          } `}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      <div
        className={`vh-100 d-flex ${
          isvisible ? 'visible' : 'no-visible'
        } flex-column justify-content-between`}
      >
        <div className="mt-5 flex-grow-1 d-flex flex-column ">

          <div className="text-center mb-3 fst-italic">
            {user && (
              <h3 className="text-center fw-bold">
                Hello,
                {' '}
                {user.name}
                !
              </h3>
            )}
            <img
              className="rounded round"
              style={{ width: '100px' }}
              src="https://i.pinimg.com/564x/39/97/b8/3997b837ba0548ec1a5430ee31fb43aa.jpg"
              alt=""
            />
          </div>

          <div className=" side_menu_con d-flex flex-column gap-3 text-center h-100 gap-4 justify-content-between pb-3">

            <div className="d-flex flex-column gap-4 ">
              <section>
                <a href="/">
                  <h5 className="h5 fw-bold">Home</h5>
                </a>
              </section>
              <section>
                <Link to="/add-doctor">
                  <h5 className="h5 fw-bold">Add Doctor</h5>
                </Link>
              </section>
              <section>
                <Link to="/delete-doctor">
                  <h5 className="h5 fw-bold">Delete Doctor</h5>
                </Link>
              </section>
              <section>
                <Link to="/appointments">
                  <h5 className="h5 fw-bold">My appointments</h5>
                </Link>
              </section>
              <section>
                <Link to="/add-appointment">
                  <h5 className="h5 fw-bold">Add appointments</h5>
                </Link>
              </section>
              <section>
                <div className="h5">
                  <Logout />
                </div>
              </section>
            </div>

            <div className="">
              <div className="d-flex justify-content-between mb-3 social_media_cont">
                <a href="https://twitter.com">
                  <i className="fab h5 fa-twitter" />
                </a>

                <a href="https://facebook.com">
                  <i className="fab h5 fa-facebook" />
                </a>

                <a href="mailto:youremail@example.com">
                  <i className="fas h5 fa-envelope" />
                </a>

                <a href="/">
                  <i className="fas h5 fa-home" />
                </a>

                <a href="https://pinterest.com">
                  <i className="fab h5 fa-pinterest" />
                </a>

              </div>
              <h6 className="h6 text-center">@2023 Brand sa de cv</h6>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}

SideMenu.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default SideMenu;
