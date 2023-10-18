import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../redux/currentUser/currentUserSlice';

const Signup = ({ setShow }) => {
  Signup.propTypes = {
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
        name: data.name,
        email: data.email,
        password: data.password,
      },

    };
    dispatch(signupUser(userInfo)).then(() => window.location.reload());
    e.target.reset();
    navigate('/');
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div className="flex-column  d-flex align-items-center justify-content-center ">

      <div className="px-4 py-4  shadow ">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="d-flex align-items-center gap-3 mb-4">
            <h5 className="m-0">Name:</h5>
            {' '}
            <input type="text" className="form-control" name="name" placeholder="name" />
          </div>

          <div className="mb-4 d-flex align-items-center gap-3">
            <h5 className="m-0">Email:</h5>

            {' '}
            <input className="form-control" type="email" name="email" placeholder="email" />
          </div>

          <div className="mb-4 d-flex align-items-center gap-3">
            <h5 className="m-0">Password:</h5>

            {' '}
            <input className="form-control" type="password" name="password" placeholder="password" />
          </div>

          <div className="text-center">
            <input className="sign-up-btn" type="submit" value="Signup" />
          </div>

        </form>
      </div>

      <div className="mb-3">
        Already registered,
        {' '}
        <a href="#login" onClick={handleClick}>Login</a>
        {' '}
        here.
      </div>

    </div>
  );
};

export default Signup;
