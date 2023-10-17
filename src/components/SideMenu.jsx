
import Logout from "./authentication/Logout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/currentUser/currentUserSlice";
import { useDispatch } from "react-redux";

function SideMenu({toggleMenu, isMenuOpen, user}) {
  const [isvisible, setIsVisible] = useState(true);

  const dispatch = useDispatch()
  const toogleMenu = () => {
    setIsVisible(!isvisible);  
    toggleMenu();  
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
    });
  }, []);

 

  return (
    <article className={`d-flex flex-column justify-content-betwee vh-100 ${isvisible ? "side_menu" : "hidden"} ps-3 col-md-3 px-3`}  >
      <div className="text-end mt-2 me-2">
        <i onClick={toogleMenu} className={`h3 fas ${isvisible ? "fa-close" : "fa-bars"}`}></i>
      </div>

      <div className={`vh-100 ${isvisible ? "d-flex" : "d-none" } flex-column justify-content-around`}  >

        <div className="">
          <div className="text-center">
            <img
              className="rounded round"
              style={{ width: "100px" }}
              src="https://i.pinimg.com/564x/39/97/b8/3997b837ba0548ec1a5430ee31fb43aa.jpg"
              alt=""
            />
          </div>
         

          <div
            className=" side_menu_cont d-flex flex-column gap-3 "
            style={{}}
          >{user &&    <span className="h5 text-center">Hello {user.name}</span>}
          
            <section>
              <a href="/">
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
              <div className="h5">
              <Logout />
              </div>
            </section>

          </div>
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
    </article>
  );
}

export default SideMenu;
