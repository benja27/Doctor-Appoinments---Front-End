import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../redux/currentUser/currentUserSlice';
import { Link } from 'react-router-dom';

const Login = ({ setShow }) => {
  // Login.propTypes = {
  //   setShow: PropTypes.func.isRequired,
  // };

  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
      },

    };
    dispatch(loginUser(userInfo)).then(() => {
      window.location.reload();
    });
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className='d-flex align-items-center justify-content-center vh-100  flex-column ' >

      <form className='col-10 col-md-8 col-lg-6 p-5 border border-3 shadow mb-4' ref={formRef} onSubmit={handleSubmit}>
        <div className='d-flex gap-4 align-items-center mb-4' >
          <h5 className='m-0' >Email:</h5>          
          {' '}
          <input className='form-control' type="email" name="email" placeholder="email" />
        </div>
        
        <div className='d-flex gap-4 align-items-center mb-4' >
          Password:
          {' '}
          <input className='form-control' type="password" name="password" placeholder="password" />
        </div>
        
        <div className='text-center' >
          <input type="submit" className='btn btn-primary' value="Login" />
        </div>
      </form>
      
      <div className='mb-4' >
        Not registered,
        {' '}
        {/* <a href="/signup" onClick={handleClick}>Signup</a> */}
        <Link className='' to={"/signup"} >Signup</Link>
        {' '}
        here.
      </div>

      <div>
        <button type="button" className="btn btn-success">
          <Link className='text-white' to={"/"} >Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
