import Logout from "./authentication/Logout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/currentUser/currentUserSlice";
import { useDispatch } from "react-redux";
import "../css/hamburgers.css";

function SideMenu({ toggleMenu, isMenuOpen, user }) {
  const [isvisible, setIsVisible] = useState(true);

  const dispatch = useDispatch();
  const toogleMenu = () => {
    setIsVisible(!isvisible);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <article
      className={`d-flex flex-column vh-100 ${
        isvisible ? "side_menu" : "hidden"
      } ps-3 px-3`}
    >
      <div className="text-end mt-2 me-2">
        <button
          onClick={toogleMenu}
          className={`hamburger hamburger--vortex s-active ${
            isvisible ? "is-active" : ""
          } `}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <div
        className={`vh-100 d-flex ${
          isvisible ? "visible" : "no-visible"
        } flex-column justify-content-between`}
      >
        <div className="mt-5 flex-grow-1 d-flex flex-column ">

          <div className="text-center mb-3 ">
            <img
              className="rounded round"
              style={{ width: "100px" }}
              src="https://i.pinimg.com/564x/39/97/b8/3997b837ba0548ec1a5430ee31fb43aa.jpg"
              alt=""
            />
            {user && (
              <h4 className="h5 text-center fw-bold">Hello! {user.name}</h4>
            )}
          </div>

          <div className=" side_menu_con d-flex flex-column gap-3 text-center h-100 gap-4 justify-content-between pb-3">

            <div className="d-flex flex-column gap-4 " >
              <section>
                <a href="/doctors">
                  <h4 className="h4 fw-bold">Home</h4>
                </a>
              </section>
              <section>
                <Link to="/add-doctor">
                  <h4 className="h4 fw-bold">Add Doctor</h4>
                </Link>
              </section>
              <section>
                <Link to="/delete-doctor">
                  <h4 className="h4 fw-bold">Delete Doctor</h4>
                </Link>
              </section>
              <section>
                <Link to="/appointments">
                  <h4 className="h4 fw-bold">My appointments</h4>
                </Link>
              </section>
              <section>
                <Link to="/add-appointment">
                  <h4 className="h4 fw-bold">Add appointments</h4>
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
                <i className="fab h5 fa-twitter" />
                <i className="fab h5 fa-facebook" />
                <i className="fas h5 fa-envelope" />
                <i className="fas h5 fa-home" />
                <i className="fab h5 fa-pinterest" />
              </div>
              <h6 className="h6 text-center">@2023 Brand sa de cv</h6>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}

export default SideMenu;
