import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/currentUser/currentUserSlice';

const Login = ({ setShow }) => {
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
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
      <br />
      <div>
        Not registered,
        {' '}
        <a href="#signup" onClick={handleClick}>Signup</a>
        {' '}
        here.
      </div>
    </>
  );
};

export default Login;

const propTypes = {
  setShow: PropTypes.func.isRequired,
};
