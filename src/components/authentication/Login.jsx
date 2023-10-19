import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/currentUser/currentUserSlice';

const Login = ({ setShow }) => {
  Login.propTypes = {
    setShow: PropTypes.func.isRequired,
  };

  const formRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(loginUser(userInfo)).then(() => window.location.reload());
    e.target.reset();
    navigate('/');
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column ">

      <form className=" p-5   shadow " ref={formRef} onSubmit={handleSubmit}>
        <div className="d-flex gap-4 align-items-center mb-4">
          {' '}
          <input className="form-control" type="email" name="email" placeholder="email" />
        </div>

        <div className="d-flex gap-4 align-items-center mb-4">
          {' '}
          <input className="form-control" type="password" name="password" placeholder="password" />
        </div>

        <div className="text-center">
          <input type="submit" className="sign-up-btn" value="Login" />
        </div>
      </form>

      <div className="mb-4">
        Not registered,
        {' '}
        {/* <a href="/signup" onClick={handleClick}>Signup</a> */}
        <a href="#signup" onClick={handleClick}>Signup</a>
        {' '}
        here.
      </div>

    </div>
  );
};

export default Login;
