import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { signupUser } from '../../redux/currentUser/currentUserSlice';

const Signup = ({ setShow }) => {
  Signup.propTypes = {
    setShow: PropTypes.func.isRequired,
  };
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
      },

    };
    dispatch(signupUser(userInfo)).then(() => {
      window.location.reload();
    });
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        Name:
        {' '}
        <input type="text" name="name" placeholder="name" />
        <br />
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Signup" />
      </form>
      <br />
      <div>
        Already registered,
        {' '}
        <a href="#login" onClick={handleClick}>Login</a>
        {' '}
        here.
      </div>
    </>
  );
};

export default Signup;
