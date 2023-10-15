import Logout from "../authentication/Logout";
import { useState } from "react"; 


function Side_menu() {
  const [isvisible, setIsVisible] = useState(false);

  const toogleMenu = () => {
    setIsVisible(!isvisible);
    alert("hola");
  }


  return (
    <article className="d-flex flex-column justify-content-between gap-4 ps-3 mb- px-3 d-none d-md-flex side_menu col-3 col-lg-2">

        <div className="text-end mt-3 me-2" >          
          <i onClick={toogleMenu} className="h3 fas fa-close" ></i>
        </div>

        <div className="mt-2 ">


        <div className="text-center">
          <img className="rounded round" style={{width:"100px"}} src="https://i.pinimg.com/564x/39/97/b8/3997b837ba0548ec1a5430ee31fb43aa.jpg" alt="" />
        </div>

        <div className="mt-5 side_menu_cont pt-5 d-flex flex-column gap-4 text-center" style={{}}>

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
            <a href="/appointments">
              <h4 className="h4 fw-bold">My appnmts</h4>
            </a>
          </section>
          <section>
            <a href="/add-appointment">
              <h4 className="h4 fw-bold">Add appnmts</h4>
            </a>
          </section>


          <section>
            <a href="/add-appointment">
              <h4 className="h4 fw-bold bg-transparent"> <Logout></Logout> </h4>
            </a>
          </section>

        </div>

      </div>

      <div className="mb-">
        <div className="d-flex justify-content-between mb-3 social_media_cont">
          <i className="fab h5 fa-twitter" />
          <i className="fab h5 fa-facebook" />
          <i className="fas h5 fa-envelope" />
          <i className="fas h5 fa-home" />
          <i className="fab h5 fa-pinterest" />
        </div>
        <h6 className="h6 text-center">
          @2023 Brand sa de cv
        </h6>
      </div>

    </article>
  );
}

export default Side_menu;
